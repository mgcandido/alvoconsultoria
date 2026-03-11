import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="calculadora-page">
      <!-- Header -->
      <header class="page-header">
        <h1>Calculadora Tributária</h1>
        <p>
          Compare a carga tributária antes e depois da Reforma Tributária 2026. 
          Insira os valores e veja o impacto em tempo real.
        </p>
      </header>

      <div class="calc-layout">
        <!-- Input Section -->
        <section class="calc-input">
          <h2 class="calc-section-title">
            <i class="ph ph-pencil-simple"></i>
            Dados da Operação
          </h2>

          <div class="form-group">
            <label>Valor da Operação (R$)</label>
            <input 
              type="number" 
              [(ngModel)]="valorOperacao"
              (ngModelChange)="calcular()"
              placeholder="Ex: 1000">
          </div>

          <div class="form-group">
            <label>Tipo de Operação</label>
            <select [(ngModel)]="tipoOperacao" (ngModelChange)="calcular()">
              <option value="mercadoria">Venda de Mercadoria</option>
              <option value="servico">Prestação de Serviço</option>
            </select>
          </div>

          <div class="form-group">
            <label>Regime Atual (PIS/COFINS)</label>
            <select [(ngModel)]="regimeAtual" (ngModelChange)="calcular()">
              <option value="cumulativo">Cumulativo</option>
              <option value="nao-cumulativo">Não-Cumulativo</option>
            </select>
          </div>

          @if (tipoOperacao === 'mercadoria') {
            <div class="form-group">
              <label>Alíquota ICMS (%)</label>
              <input 
                type="number" 
                [(ngModel)]="aliquotaICMS"
                (ngModelChange)="calcular()"
                placeholder="Ex: 18">
            </div>
          }

          @if (tipoOperacao === 'servico') {
            <div class="form-group">
              <label>Alíquota ISS (%)</label>
              <input 
                type="number" 
                [(ngModel)]="aliquotaISS"
                (ngModelChange)="calcular()"
                placeholder="Ex: 5">
            </div>
          }

          <div class="form-group">
            <label>Classificação Tributária (CBS/IBS)</label>
            <select [(ngModel)]="classificacaoNova" (ngModelChange)="calcular()">
              <option value="tributado">Tributado Integral (27%)</option>
              <option value="reduzido60">Reduzido 60% (10,8%)</option>
              <option value="reduzido30">Reduzido 30% (18,9%)</option>
              <option value="zero">Alíquota Zero (0%)</option>
              <option value="isento">Isento (0%)</option>
            </select>
          </div>

          @if (classificacaoNova === 'tributado' || classificacaoNova === 'reduzido60' || classificacaoNova === 'reduzido30') {
            <div class="form-group">
              <label>Créditos de Entrada (R$)</label>
              <input 
                type="number" 
                [(ngModel)]="creditosEntrada"
                (ngModelChange)="calcular()"
                placeholder="Ex: 200">
              <small>Valor dos créditos CBS+IBS de aquisições</small>
            </div>
          }
        </section>

        <!-- Results Section -->
        <section class="calc-results">
          <h2 class="calc-section-title">
            <i class="ph ph-chart-bar"></i>
            Comparativo de Carga Tributária
          </h2>

          <!-- Antes -->
          <div class="result-card result-card--before">
            <h3>
              <i class="ph ph-clock-counter-clockwise"></i>
              ANTES da Reforma
            </h3>
            <div class="result-card__items">
              <div class="result-item">
                <span>PIS ({{ aliquotaPIS }}%)</span>
                <span>R$ {{ valorPIS.toFixed(2) }}</span>
              </div>
              <div class="result-item">
                <span>COFINS ({{ aliquotaCOFINS }}%)</span>
                <span>R$ {{ valorCOFINS.toFixed(2) }}</span>
              </div>
              @if (tipoOperacao === 'mercadoria') {
                <div class="result-item">
                  <span>ICMS ({{ aliquotaICMS }}%)</span>
                  <span>R$ {{ valorICMS.toFixed(2) }}</span>
                </div>
              }
              @if (tipoOperacao === 'servico') {
                <div class="result-item">
                  <span>ISS ({{ aliquotaISS }}%)</span>
                  <span>R$ {{ valorISS.toFixed(2) }}</span>
                </div>
              }
            </div>
            <div class="result-card__total">
              <span>Total Tributos</span>
              <span class="total-value">R$ {{ totalAntes.toFixed(2) }}</span>
            </div>
            <div class="result-card__percent">
              Carga: {{ ((totalAntes / valorOperacao) * 100).toFixed(2) }}%
            </div>
          </div>

          <!-- Depois -->
          <div class="result-card result-card--after">
            <h3>
              <i class="ph ph-rocket"></i>
              DEPOIS da Reforma
            </h3>
            <div class="result-card__items">
              <div class="result-item">
                <span>CBS ({{ aliquotaCBSEfetiva.toFixed(2) }}%)</span>
                <span>R$ {{ valorCBS.toFixed(2) }}</span>
              </div>
              <div class="result-item">
                <span>IBS ({{ aliquotaIBSEfetiva.toFixed(2) }}%)</span>
                <span>R$ {{ valorIBS.toFixed(2) }}</span>
              </div>
              @if (creditosEntrada > 0) {
                <div class="result-item result-item--credit">
                  <span>Créditos (-)</span>
                  <span>R$ {{ creditosEntrada.toFixed(2) }}</span>
                </div>
              }
            </div>
            <div class="result-card__total">
              <span>Total Tributos</span>
              <span class="total-value">R$ {{ totalDepois.toFixed(2) }}</span>
            </div>
            <div class="result-card__percent">
              Carga: {{ ((totalDepois / valorOperacao) * 100).toFixed(2) }}%
            </div>
          </div>

          <!-- Comparativo -->
          <div class="comparison-card" [class.positive]="diferenca < 0" [class.negative]="diferenca > 0">
            <div class="comparison-card__header">
              <i class="ph" [class]="diferenca <= 0 ? 'ph-trend-down' : 'ph-trend-up'"></i>
              <span>{{ diferenca <= 0 ? 'Economia' : 'Aumento' }}</span>
            </div>
            <div class="comparison-card__value">
              R$ {{ Math.abs(diferenca).toFixed(2) }}
            </div>
            <div class="comparison-card__percent">
              {{ ((Math.abs(diferenca) / totalAntes) * 100).toFixed(1) }}% {{ diferenca <= 0 ? 'menor' : 'maior' }}
            </div>
          </div>
        </section>
      </div>

      <!-- Disclaimer -->
      <div class="disclaimer">
        <i class="ph ph-warning"></i>
        <p>
          <strong>Atenção:</strong> Esta calculadora apresenta uma simulação simplificada. 
          Os valores reais podem variar conforme o setor, regime tributário específico, 
          benefícios fiscais e outros fatores. Consulte sempre um profissional especializado.
        </p>
      </div>
    </div>
  `,
  styles: [`
    .calculadora-page {
      max-width: 1200px;
      margin: 0 auto;
    }

    .page-header {
      margin-bottom: var(--space-2xl);

      h1 {
        margin-bottom: var(--space-sm);
      }

      p {
        font-size: 1.125rem;
        max-width: 700px;
      }
    }

    .calc-layout {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-xl);

      @media (min-width: 900px) {
        grid-template-columns: 1fr 1.2fr;
      }
    }

    .calc-section-title {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      font-size: 1.125rem;
      margin-bottom: var(--space-lg);

      i {
        color: var(--color-primary-light);
      }
    }

    .calc-input {
      padding: var(--space-xl);
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      height: fit-content;
    }

    .form-group {
      margin-bottom: var(--space-lg);

      label {
        display: block;
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: var(--space-sm);
      }

      input, select {
        width: 100%;
        padding: var(--space-md);
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-md);
        font-size: 1rem;
        color: var(--text-primary);
        transition: border-color var(--transition-fast);

        &:focus {
          outline: none;
          border-color: var(--color-primary);
        }
      }

      small {
        display: block;
        margin-top: var(--space-xs);
        font-size: 0.75rem;
        color: var(--text-muted);
      }
    }

    .calc-results {
      display: flex;
      flex-direction: column;
      gap: var(--space-lg);
    }

    .result-card {
      padding: var(--space-xl);
      border-radius: var(--radius-lg);
      border: 1px solid var(--border-color);

      h3 {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        font-size: 1rem;
        margin-bottom: var(--space-lg);

        i {
          font-size: 1.25rem;
        }
      }

      &--before {
        background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05));
        border-color: rgba(239, 68, 68, 0.2);

        h3 i {
          color: #f87171;
        }
      }

      &--after {
        background: linear-gradient(135deg, rgba(5, 150, 105, 0.1), rgba(5, 150, 105, 0.05));
        border-color: rgba(5, 150, 105, 0.2);

        h3 i {
          color: var(--color-primary-light);
        }
      }
    }

    .result-card__items {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
      margin-bottom: var(--space-md);
    }

    .result-item {
      display: flex;
      justify-content: space-between;
      font-size: 0.9375rem;
      color: var(--text-secondary);

      &--credit {
        color: var(--success);
      }
    }

    .result-card__total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: var(--space-md);
      border-top: 1px solid var(--border-color);

      span:first-child {
        font-weight: 600;
        color: var(--text-primary);
      }

      .total-value {
        font-family: var(--font-display);
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-primary);
      }
    }

    .result-card__percent {
      margin-top: var(--space-sm);
      text-align: right;
      font-size: 0.875rem;
      color: var(--text-muted);
    }

    .comparison-card {
      padding: var(--space-xl);
      border-radius: var(--radius-lg);
      text-align: center;

      &.positive {
        background: linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(34, 197, 94, 0.05));
        border: 1px solid rgba(34, 197, 94, 0.3);

        .comparison-card__header {
          color: #4ade80;
        }

        .comparison-card__value {
          color: #22c55e;
        }
      }

      &.negative {
        background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(239, 68, 68, 0.05));
        border: 1px solid rgba(239, 68, 68, 0.3);

        .comparison-card__header {
          color: #f87171;
        }

        .comparison-card__value {
          color: #ef4444;
        }
      }
    }

    .comparison-card__header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-sm);
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: var(--space-sm);

      i {
        font-size: 1.5rem;
      }
    }

    .comparison-card__value {
      font-family: var(--font-display);
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: var(--space-xs);
    }

    .comparison-card__percent {
      font-size: 0.875rem;
      color: var(--text-muted);
    }

    .disclaimer {
      display: flex;
      gap: var(--space-md);
      margin-top: var(--space-2xl);
      padding: var(--space-lg);
      background: rgba(251, 191, 36, 0.1);
      border: 1px solid rgba(251, 191, 36, 0.2);
      border-radius: var(--radius-lg);

      i {
        font-size: 1.5rem;
        color: var(--warning);
        flex-shrink: 0;
      }

      p {
        font-size: 0.875rem;
        color: var(--text-secondary);
        margin: 0;

        strong {
          color: var(--text-primary);
        }
      }
    }
  `]
})
export class CalculadoraComponent {
  // Inputs
  valorOperacao = 1000;
  tipoOperacao: 'mercadoria' | 'servico' = 'mercadoria';
  regimeAtual: 'cumulativo' | 'nao-cumulativo' = 'nao-cumulativo';
  aliquotaICMS = 18;
  aliquotaISS = 5;
  classificacaoNova: 'tributado' | 'reduzido60' | 'reduzido30' | 'zero' | 'isento' = 'tributado';
  creditosEntrada = 0;

  // Calculated values
  aliquotaPIS = 1.65;
  aliquotaCOFINS = 7.6;
  valorPIS = 0;
  valorCOFINS = 0;
  valorICMS = 0;
  valorISS = 0;
  totalAntes = 0;

  aliquotaCBSEfetiva = 12;
  aliquotaIBSEfetiva = 15;
  valorCBS = 0;
  valorIBS = 0;
  totalDepois = 0;

  diferenca = 0;

  Math = Math;

  constructor() {
    this.calcular();
  }

  calcular(): void {
    // Alíquotas PIS/COFINS conforme regime
    if (this.regimeAtual === 'cumulativo') {
      this.aliquotaPIS = 0.65;
      this.aliquotaCOFINS = 3;
    } else {
      this.aliquotaPIS = 1.65;
      this.aliquotaCOFINS = 7.6;
    }

    // Cálculo ANTES
    this.valorPIS = this.valorOperacao * (this.aliquotaPIS / 100);
    this.valorCOFINS = this.valorOperacao * (this.aliquotaCOFINS / 100);
    this.valorICMS = this.tipoOperacao === 'mercadoria' ? this.valorOperacao * (this.aliquotaICMS / 100) : 0;
    this.valorISS = this.tipoOperacao === 'servico' ? this.valorOperacao * (this.aliquotaISS / 100) : 0;
    this.totalAntes = this.valorPIS + this.valorCOFINS + this.valorICMS + this.valorISS;

    // Alíquotas CBS/IBS conforme classificação
    let fatorReducao = 1;
    switch (this.classificacaoNova) {
      case 'reduzido60':
        fatorReducao = 0.4;
        break;
      case 'reduzido30':
        fatorReducao = 0.7;
        break;
      case 'zero':
      case 'isento':
        fatorReducao = 0;
        break;
      default:
        fatorReducao = 1;
    }

    this.aliquotaCBSEfetiva = 12 * fatorReducao;
    this.aliquotaIBSEfetiva = 15 * fatorReducao;

    // Cálculo DEPOIS
    this.valorCBS = this.valorOperacao * (this.aliquotaCBSEfetiva / 100);
    this.valorIBS = this.valorOperacao * (this.aliquotaIBSEfetiva / 100);
    this.totalDepois = Math.max(0, this.valorCBS + this.valorIBS - this.creditosEntrada);

    // Diferença
    this.diferenca = this.totalDepois - this.totalAntes;
  }
}
