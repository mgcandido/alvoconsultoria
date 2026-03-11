import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TIPOS_TABELA } from '../../models/tabela.model';

@Component({
  selector: 'app-tabelas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="tabelas-page">
      <!-- Header -->
      <header class="page-header">
        <h1>Tabelas Práticas</h1>
        <p>
          Tabelas de referência para consulta rápida sobre NCMs, CSTs, cClassTrib 
          e alíquotas da Reforma Tributária 2026.
        </p>
      </header>

      <!-- Grid -->
      <div class="tabelas-grid">
        @for (tipo of tiposTabela; track tipo.id; let i = $index) {
          <a 
            [routerLink]="['/tabelas', tipo.id]" 
            class="tabela-card animate-fade-in"
            [style.animation-delay]="(i * 0.1) + 's'">
            <div class="tabela-card__icon">
              <i [class]="'ph ' + tipo.icone"></i>
            </div>
            <div class="tabela-card__content">
              <h2 class="tabela-card__title">{{ tipo.nome }}</h2>
              <p class="tabela-card__desc">{{ tipo.descricao }}</p>
            </div>
            <div class="tabela-card__arrow">
              <i class="ph ph-arrow-right"></i>
            </div>
          </a>
        }
      </div>

      <!-- Info -->
      <div class="info-section">
        <div class="info-card">
          <i class="ph-fill ph-info"></i>
          <div>
            <h3>Sobre as Tabelas</h3>
            <p>
              As tabelas são atualizadas conforme publicações oficiais da Receita Federal 
              e do Comitê Gestor do IBS. Última atualização: Janeiro de 2026.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .tabelas-page {
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

    .tabelas-grid {
      display: grid;
      gap: var(--space-md);
      margin-bottom: var(--space-2xl);
    }

    .tabela-card {
      display: flex;
      align-items: center;
      gap: var(--space-lg);
      padding: var(--space-xl);
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      text-decoration: none;
      transition: all var(--transition-base);

      &:hover {
        background: var(--bg-card-hover);
        border-color: var(--color-primary);
        transform: translateX(8px);

        .tabela-card__icon {
          background: var(--color-primary);
          color: white;
        }

        .tabela-card__arrow {
          color: var(--color-primary-light);
          transform: translateX(4px);
        }
      }
    }

    .tabela-card__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      background: var(--bg-tertiary);
      border-radius: var(--radius-md);
      flex-shrink: 0;
      transition: all var(--transition-fast);

      i {
        font-size: 1.75rem;
        color: var(--color-primary-light);
      }
    }

    .tabela-card__content {
      flex: 1;
    }

    .tabela-card__title {
      font-size: 1.125rem;
      color: var(--text-primary);
      margin-bottom: var(--space-xs);
    }

    .tabela-card__desc {
      font-size: 0.875rem;
      color: var(--text-muted);
      margin: 0;
    }

    .tabela-card__arrow {
      font-size: 1.5rem;
      color: var(--text-muted);
      transition: all var(--transition-fast);
    }

    .info-section {
      margin-top: var(--space-xl);
    }

    .info-card {
      display: flex;
      gap: var(--space-lg);
      padding: var(--space-xl);
      background: rgba(5, 150, 105, 0.1);
      border: 1px solid rgba(5, 150, 105, 0.2);
      border-radius: var(--radius-lg);

      > i {
        font-size: 2rem;
        color: var(--color-primary-light);
        flex-shrink: 0;
      }

      h3 {
        font-size: 1rem;
        color: var(--text-primary);
        margin-bottom: var(--space-sm);
      }

      p {
        font-size: 0.9375rem;
        color: var(--text-secondary);
        margin: 0;
      }
    }
  `]
})
export class TabelasComponent {
  tiposTabela = TIPOS_TABELA;
}
