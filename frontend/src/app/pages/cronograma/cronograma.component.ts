import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaseTimeline {
  ano: number;
  icms: number;
  ibs: number;
  descricao: string;
  marcos: string[];
}

@Component({
  selector: 'app-cronograma',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cronograma-page">
      <!-- Header -->
      <header class="page-header">
        <h1>Cronograma da Transição</h1>
        <p>
          Acompanhe as fases de implementação da CBS e do IBS até a extinção 
          completa do PIS/COFINS e ICMS/ISS em 2032.
        </p>
      </header>

      <!-- Timeline CBS -->
      <section class="timeline-section">
        <h2 class="section-title">
          <span class="badge badge--cbs">CBS</span>
          Transição PIS/COFINS → CBS
        </h2>
        
        <div class="timeline">
          @for (fase of fasesCBS; track fase.ano) {
            <div class="timeline-item" [class.active]="fase.ano === 2026">
              <div class="timeline-item__year">{{ fase.ano }}</div>
              <div class="timeline-item__content">
                <div class="timeline-item__header">
                  <span class="timeline-item__label">PIS/COFINS</span>
                  <div class="progress-bar">
                    <div class="progress-bar__fill progress-bar__fill--old" [style.width]="fase.pisCofins + '%'">
                      {{ fase.pisCofins }}%
                    </div>
                  </div>
                </div>
                <div class="timeline-item__header">
                  <span class="timeline-item__label">CBS</span>
                  <div class="progress-bar">
                    <div class="progress-bar__fill progress-bar__fill--new" [style.width]="fase.cbs + '%'">
                      {{ fase.cbs }}%
                    </div>
                  </div>
                </div>
                <p class="timeline-item__desc">{{ fase.descricao }}</p>
                @if (fase.marcos.length > 0) {
                  <ul class="timeline-item__marcos">
                    @for (marco of fase.marcos; track marco) {
                      <li><i class="ph ph-check-circle"></i> {{ marco }}</li>
                    }
                  </ul>
                }
              </div>
            </div>
          }
        </div>
      </section>

      <!-- Timeline IBS -->
      <section class="timeline-section">
        <h2 class="section-title">
          <span class="badge badge--ibs">IBS</span>
          Transição ICMS/ISS → IBS
        </h2>
        
        <div class="timeline">
          @for (fase of fasesIBS; track fase.ano) {
            <div class="timeline-item" [class.active]="fase.ano === 2026">
              <div class="timeline-item__year">{{ fase.ano }}</div>
              <div class="timeline-item__content">
                <div class="timeline-item__header">
                  <span class="timeline-item__label">ICMS/ISS</span>
                  <div class="progress-bar">
                    <div class="progress-bar__fill progress-bar__fill--old" [style.width]="fase.icms + '%'">
                      {{ fase.icms }}%
                    </div>
                  </div>
                </div>
                <div class="timeline-item__header">
                  <span class="timeline-item__label">IBS</span>
                  <div class="progress-bar">
                    <div class="progress-bar__fill progress-bar__fill--new" [style.width]="fase.ibs + '%'">
                      {{ fase.ibs }}%
                    </div>
                  </div>
                </div>
                <p class="timeline-item__desc">{{ fase.descricao }}</p>
                @if (fase.marcos.length > 0) {
                  <ul class="timeline-item__marcos">
                    @for (marco of fase.marcos; track marco) {
                      <li><i class="ph ph-check-circle"></i> {{ marco }}</li>
                    }
                  </ul>
                }
              </div>
            </div>
          }
        </div>
      </section>

      <!-- Resumo -->
      <section class="summary-section">
        <h2 class="section-title">
          <i class="ph ph-info"></i>
          Resumo da Transição
        </h2>
        
        <div class="summary-grid">
          <div class="summary-card">
            <div class="summary-card__icon summary-card__icon--federal">
              <i class="ph ph-bank"></i>
            </div>
            <h3>Tributos Federais</h3>
            <p>PIS + COFINS serão substituídos pela CBS com alíquota única de <strong>12%</strong></p>
            <span class="summary-card__timeline">2026 → 2027</span>
          </div>

          <div class="summary-card">
            <div class="summary-card__icon summary-card__icon--estadual">
              <i class="ph ph-map-pin"></i>
            </div>
            <h3>Tributos Estaduais</h3>
            <p>ICMS será integrado ao IBS com alíquota estadual de <strong>12%</strong></p>
            <span class="summary-card__timeline">2027 → 2032</span>
          </div>

          <div class="summary-card">
            <div class="summary-card__icon summary-card__icon--municipal">
              <i class="ph ph-buildings"></i>
            </div>
            <h3>Tributos Municipais</h3>
            <p>ISS será integrado ao IBS com alíquota municipal de <strong>3%</strong></p>
            <span class="summary-card__timeline">2027 → 2032</span>
          </div>

          <div class="summary-card">
            <div class="summary-card__icon summary-card__icon--total">
              <i class="ph ph-equals"></i>
            </div>
            <h3>Carga Total</h3>
            <p>CBS (12%) + IBS (15%) = <strong>27%</strong> de alíquota combinada</p>
            <span class="summary-card__timeline">A partir de 2032</span>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .cronograma-page {
      max-width: 1000px;
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

    .section-title {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      font-size: 1.25rem;
      margin-bottom: var(--space-xl);

      i {
        color: var(--color-primary-light);
      }
    }

    .timeline-section {
      margin-bottom: var(--space-3xl);
    }

    .timeline {
      position: relative;
      padding-left: var(--space-xl);

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--border-color);
      }
    }

    .timeline-item {
      position: relative;
      padding-bottom: var(--space-xl);

      &::before {
        content: '';
        position: absolute;
        left: calc(-1 * var(--space-xl) - 5px);
        top: 6px;
        width: 12px;
        height: 12px;
        background: var(--bg-tertiary);
        border: 2px solid var(--border-color);
        border-radius: 50%;
      }

      &.active::before {
        background: var(--color-primary);
        border-color: var(--color-primary);
        box-shadow: 0 0 0 4px rgba(5, 150, 105, 0.2);
      }

      &:last-child {
        padding-bottom: 0;
      }
    }

    .timeline-item__year {
      font-family: var(--font-display);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-primary-light);
      margin-bottom: var(--space-md);
    }

    .timeline-item__content {
      padding: var(--space-lg);
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
    }

    .timeline-item__header {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      margin-bottom: var(--space-sm);
    }

    .timeline-item__label {
      width: 80px;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-muted);
      flex-shrink: 0;
    }

    .progress-bar {
      flex: 1;
      height: 24px;
      background: var(--bg-tertiary);
      border-radius: var(--radius-sm);
      overflow: hidden;
    }

    .progress-bar__fill {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 700;
      color: white;
      transition: width 0.5s ease;

      &--old {
        background: linear-gradient(90deg, #ef4444, #dc2626);
      }

      &--new {
        background: linear-gradient(90deg, var(--color-primary), var(--color-primary-dark));
      }
    }

    .timeline-item__desc {
      margin: var(--space-md) 0;
      font-size: 0.9375rem;
      color: var(--text-secondary);
    }

    .timeline-item__marcos {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);

      li {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        font-size: 0.875rem;
        color: var(--text-secondary);

        i {
          color: var(--success);
        }
      }
    }

    .summary-section {
      margin-top: var(--space-2xl);
    }

    .summary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: var(--space-lg);
    }

    .summary-card {
      padding: var(--space-xl);
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      text-align: center;

      h3 {
        font-size: 1rem;
        color: var(--text-primary);
        margin-bottom: var(--space-sm);
      }

      p {
        font-size: 0.875rem;
        color: var(--text-secondary);
        margin-bottom: var(--space-md);

        strong {
          color: var(--color-primary-light);
        }
      }
    }

    .summary-card__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      margin: 0 auto var(--space-md);
      border-radius: var(--radius-md);

      i {
        font-size: 1.75rem;
        color: white;
      }

      &--federal { background: linear-gradient(135deg, #3b82f6, #1d4ed8); }
      &--estadual { background: linear-gradient(135deg, #8b5cf6, #6d28d9); }
      &--municipal { background: linear-gradient(135deg, #ec4899, #db2777); }
      &--total { background: linear-gradient(135deg, #059669, #047857); }
    }

    .summary-card__timeline {
      display: inline-block;
      padding: var(--space-xs) var(--space-md);
      background: var(--bg-tertiary);
      border-radius: var(--radius-full);
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-muted);
    }
  `]
})
export class CronogramaComponent {
  fasesCBS = [
    {
      ano: 2026,
      pisCofins: 100,
      cbs: 0,
      descricao: 'Período de preparação e teste da CBS',
      marcos: ['Publicação de regulamentações', 'Adequação de sistemas', 'Homologação']
    },
    {
      ano: 2027,
      pisCofins: 0,
      cbs: 100,
      descricao: 'Extinção do PIS/COFINS, vigência plena da CBS',
      marcos: ['CBS em vigor com 12%', 'PIS/COFINS extintos', 'EFD-CBS obrigatória']
    }
  ];

  fasesIBS = [
    {
      ano: 2026,
      icms: 100,
      ibs: 0,
      descricao: 'Período de preparação para o IBS',
      marcos: ['Criação do Comitê Gestor', 'Definição de alíquotas', 'Sistemas em desenvolvimento']
    },
    {
      ano: 2027,
      icms: 90,
      ibs: 10,
      descricao: 'Início da transição gradual ICMS/ISS → IBS',
      marcos: ['IBS começa a vigorar', 'Coexistência de tributos']
    },
    {
      ano: 2028,
      icms: 80,
      ibs: 20,
      descricao: 'Continuidade da transição gradual',
      marcos: ['20% de IBS', '80% de ICMS/ISS']
    },
    {
      ano: 2029,
      icms: 60,
      ibs: 40,
      descricao: 'Aceleração da transição',
      marcos: ['40% de IBS', '60% de ICMS/ISS']
    },
    {
      ano: 2030,
      icms: 40,
      ibs: 60,
      descricao: 'IBS passa a ser majoritário',
      marcos: ['60% de IBS', '40% de ICMS/ISS']
    },
    {
      ano: 2031,
      icms: 20,
      ibs: 80,
      descricao: 'Fase final de transição',
      marcos: ['80% de IBS', '20% de ICMS/ISS']
    },
    {
      ano: 2032,
      icms: 0,
      ibs: 100,
      descricao: 'Extinção do ICMS/ISS, vigência plena do IBS',
      marcos: ['IBS em 100%', 'ICMS/ISS extintos', 'Sistema unificado']
    }
  ];
}
