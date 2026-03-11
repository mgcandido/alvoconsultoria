import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TabelasService } from '../../services/tabelas.service';
import { TabelaTributaria, TipoTabela, TIPOS_TABELA } from '../../models/tabela.model';

@Component({
  selector: 'app-tabela-detalhe',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    @if (tabela) {
      <div class="tabela-page">
        <!-- Breadcrumb -->
        <nav class="breadcrumb">
          <a routerLink="/">Início</a>
          <i class="ph ph-caret-right"></i>
          <a routerLink="/tabelas">Tabelas</a>
          <i class="ph ph-caret-right"></i>
          <span>{{ tabela.titulo }}</span>
        </nav>

        <!-- Header -->
        <header class="page-header">
          <h1>{{ tabela.titulo }}</h1>
          <p>{{ tabela.descricao }}</p>
          <div class="page-header__meta">
            <span>
              <i class="ph ph-calendar"></i>
              Atualizado em {{ tabela.ultimaAtualizacao | date:'dd/MM/yyyy' }}
            </span>
            <span>
              <i class="ph ph-rows"></i>
              {{ dadosFiltrados.length }} registros
            </span>
          </div>
        </header>

        <!-- Search -->
        <div class="search-section">
          <div class="search-box">
            <i class="ph ph-magnifying-glass"></i>
            <input 
              type="text" 
              placeholder="Buscar na tabela..." 
              [(ngModel)]="termoBusca"
              (input)="filtrarDados()">
          </div>
        </div>

        <!-- Table -->
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                @for (col of tabela.colunas; track col.campo) {
                  <th [style.width]="col.largura">{{ col.titulo }}</th>
                }
              </tr>
            </thead>
            <tbody>
              @for (registro of dadosFiltrados; track $index) {
                <tr>
                  @for (col of tabela.colunas; track col.campo) {
                    <td [class]="'cell-' + col.tipo">
                      @switch (col.tipo) {
                        @case ('codigo') {
                          <code>{{ registro[col.campo] }}</code>
                        }
                        @case ('percentual') {
                          {{ registro[col.campo] }}%
                        }
                        @case ('badge') {
                          <span class="table-badge" [class]="getBadgeClass(registro[col.campo])">
                            {{ registro[col.campo] }}
                          </span>
                        }
                        @default {
                          {{ registro[col.campo] }}
                        }
                      }
                    </td>
                  }
                </tr>
              } @empty {
                <tr>
                  <td [attr.colspan]="tabela.colunas.length" class="empty-row">
                    Nenhum registro encontrado
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <!-- Footer -->
        <footer class="table-footer">
          <a routerLink="/tabelas" class="btn btn--outline">
            <i class="ph ph-arrow-left"></i>
            Voltar às tabelas
          </a>
        </footer>
      </div>
    } @else {
      <div class="not-found">
        <i class="ph ph-warning"></i>
        <h2>Tabela não encontrada</h2>
        <p>A tabela solicitada não foi encontrada.</p>
        <a routerLink="/tabelas" class="btn btn--primary">Ver todas as tabelas</a>
      </div>
    }
  `,
  styles: [`
    .tabela-page {
      max-width: 1400px;
      margin: 0 auto;
    }

    .breadcrumb {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      margin-bottom: var(--space-xl);
      font-size: 0.875rem;

      a {
        color: var(--text-muted);

        &:hover {
          color: var(--color-primary-light);
        }
      }

      i {
        color: var(--text-muted);
        font-size: 0.75rem;
      }

      span {
        color: var(--text-secondary);
      }
    }

    .page-header {
      margin-bottom: var(--space-xl);

      h1 {
        margin-bottom: var(--space-sm);
      }

      p {
        font-size: 1.125rem;
        margin-bottom: var(--space-md);
      }
    }

    .page-header__meta {
      display: flex;
      gap: var(--space-lg);

      span {
        display: flex;
        align-items: center;
        gap: var(--space-xs);
        font-size: 0.875rem;
        color: var(--text-muted);
      }
    }

    .search-section {
      margin-bottom: var(--space-lg);
    }

    .search-box {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      padding: var(--space-md) var(--space-lg);
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      max-width: 400px;

      i {
        font-size: 1.25rem;
        color: var(--text-muted);
      }

      input {
        flex: 1;
        background: transparent;
        border: none;
        font-size: 1rem;
        color: var(--text-primary);

        &::placeholder {
          color: var(--text-muted);
        }

        &:focus {
          outline: none;
        }
      }
    }

    .table-wrapper {
      overflow-x: auto;
      border-radius: var(--radius-lg);
      border: 1px solid var(--border-color);
      margin-bottom: var(--space-xl);
    }

    table {
      width: 100%;
      border-collapse: collapse;

      th, td {
        padding: var(--space-md) var(--space-lg);
        text-align: left;
        border-bottom: 1px solid var(--border-color);
        white-space: nowrap;
      }

      th {
        background: var(--bg-tertiary);
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--text-primary);
        position: sticky;
        top: 0;
      }

      tr:hover {
        background: var(--bg-card-hover);
      }

      tr:last-child td {
        border-bottom: none;
      }
    }

    .cell-codigo code {
      background: var(--bg-tertiary);
      padding: 2px 8px;
      border-radius: var(--radius-sm);
      font-size: 0.8125rem;
      color: var(--text-accent);
    }

    .cell-percentual {
      font-family: var(--font-mono);
      color: var(--color-primary-light);
    }

    .table-badge {
      display: inline-block;
      padding: 2px 10px;
      font-size: 0.75rem;
      font-weight: 600;
      border-radius: var(--radius-full);

      &.badge-tributado {
        background: rgba(239, 68, 68, 0.15);
        color: #f87171;
      }

      &.badge-isento {
        background: rgba(34, 197, 94, 0.15);
        color: #4ade80;
      }

      &.badge-zero {
        background: rgba(59, 130, 246, 0.15);
        color: #60a5fa;
      }

      &.badge-reduzido {
        background: rgba(251, 191, 36, 0.15);
        color: #fbbf24;
      }

      &.badge-st {
        background: rgba(139, 92, 246, 0.15);
        color: #a78bfa;
      }

      &.badge-default {
        background: var(--bg-tertiary);
        color: var(--text-secondary);
      }
    }

    .empty-row {
      text-align: center;
      padding: var(--space-2xl) !important;
      color: var(--text-muted);
    }

    .table-footer {
      display: flex;
      justify-content: flex-start;
    }

    .not-found {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: var(--space-3xl);
      text-align: center;

      i {
        font-size: 4rem;
        color: var(--warning);
        margin-bottom: var(--space-lg);
      }

      h2 {
        margin-bottom: var(--space-sm);
      }

      p {
        margin-bottom: var(--space-xl);
      }
    }
  `]
})
export class TabelaDetalheComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private tabelasService = inject(TabelasService);

  tabela: TabelaTributaria | null = null;
  dadosFiltrados: any[] = [];
  termoBusca = '';

  ngOnInit(): void {
    const tipo = this.route.snapshot.paramMap.get('tipo') as TipoTabela;
    if (tipo) {
      this.tabela = this.tabelasService.getTabela(tipo);
      if (this.tabela) {
        this.dadosFiltrados = [...this.tabela.dados];
      }
    }
  }

  filtrarDados(): void {
    if (!this.tabela) return;

    if (!this.termoBusca.trim()) {
      this.dadosFiltrados = [...this.tabela.dados];
      return;
    }

    const termo = this.termoBusca.toLowerCase();
    this.dadosFiltrados = this.tabela.dados.filter(registro =>
      Object.values(registro).some(valor =>
        String(valor).toLowerCase().includes(termo)
      )
    );
  }

  getBadgeClass(valor: any): string {
    const str = String(valor).toLowerCase();
    if (str.includes('tributad')) return 'badge-tributado';
    if (str.includes('isent')) return 'badge-isento';
    if (str.includes('zero')) return 'badge-zero';
    if (str.includes('reduzid')) return 'badge-reduzido';
    if (str.includes('st') || str.includes('substituição')) return 'badge-st';
    return 'badge-default';
  }
}
