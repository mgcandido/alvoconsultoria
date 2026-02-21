import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GlossarioService } from '../../services/glossario.service';
import { TermoGlossario, CategoriaGlossario, CATEGORIAS_GLOSSARIO } from '../../models/glossario.model';

@Component({
  selector: 'app-glossario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="glossario-page">
      <!-- Header -->
      <header class="page-header">
        <h1>Glossário</h1>
        <p>
          Terminologia técnica da Reforma Tributária 2026. Definições de CBS, IBS, 
          NCM, cClassTrib e outros termos essenciais.
        </p>
      </header>

      <!-- Search & Filters -->
      <div class="filters">
        <div class="search-box">
          <i class="ph ph-magnifying-glass"></i>
          <input 
            type="text" 
            placeholder="Buscar termo..." 
            [(ngModel)]="termoBusca"
            (input)="filtrar()">
        </div>

        <div class="filter-tabs">
          <button 
            class="filter-tab" 
            [class.active]="!categoriaAtiva"
            (click)="filtrarPorCategoria(null)">
            Todos
          </button>
          @for (cat of categorias; track cat.id) {
            <button 
              class="filter-tab" 
              [class.active]="categoriaAtiva === cat.id"
              (click)="filtrarPorCategoria(cat.id)">
              <i [class]="'ph ' + cat.icone"></i>
              {{ cat.nome }}
            </button>
          }
        </div>
      </div>

      <!-- Alphabet -->
      <div class="alphabet">
        @for (letra of alfabeto; track letra) {
          <button 
            class="alphabet__letter"
            [class.active]="letraAtiva === letra"
            [class.disabled]="!temTermoComLetra(letra)"
            (click)="filtrarPorLetra(letra)">
            {{ letra }}
          </button>
        }
      </div>

      <!-- Results -->
      <div class="results-info">
        <span>{{ termosFiltrados.length }} termo(s)</span>
        @if (letraAtiva) {
          <button class="clear-filter" (click)="limparFiltroLetra()">
            <i class="ph ph-x"></i>
            Limpar filtro de letra
          </button>
        }
      </div>

      <!-- Terms Grid -->
      <div class="terms-grid">
        @for (termo of termosFiltrados; track termo.id; let i = $index) {
          <div 
            class="term-card animate-fade-in" 
            [style.animation-delay]="(i * 0.05) + 's'"
            [class.expanded]="termoExpandido === termo.id"
            (click)="toggleTermo(termo.id)">
            <div class="term-card__header">
              <div class="term-card__title-row">
                <h3 class="term-card__title">{{ termo.termo }}</h3>
                @if (termo.sigla) {
                  <span class="term-card__sigla">{{ termo.sigla }}</span>
                }
              </div>
              <i class="ph" [class]="termoExpandido === termo.id ? 'ph-caret-up' : 'ph-caret-down'"></i>
            </div>

            <p class="term-card__preview" [class.hidden]="termoExpandido === termo.id">
              {{ termo.definicao | slice:0:150 }}{{ termo.definicao.length > 150 ? '...' : '' }}
            </p>

            @if (termoExpandido === termo.id) {
              <div class="term-card__content">
                <p class="term-card__definition">{{ termo.definicao }}</p>

                @if (termo.exemploUso) {
                  <div class="term-card__example">
                    <h4><i class="ph ph-lightbulb"></i> Exemplo de uso:</h4>
                    <p>{{ termo.exemploUso }}</p>
                  </div>
                }

                @if (termo.fundamentoLegal) {
                  <div class="term-card__legal">
                    <h4><i class="ph ph-scales"></i> Fundamento Legal:</h4>
                    <p>{{ termo.fundamentoLegal }}</p>
                  </div>
                }

                @if (termo.termoRelacionados && termo.termoRelacionados.length > 0) {
                  <div class="term-card__related">
                    <h4><i class="ph ph-link"></i> Termos Relacionados:</h4>
                    <div class="term-card__tags">
                      @for (rel of termo.termoRelacionados; track rel) {
                        <span class="term-tag" (click)="buscarTermo(rel); $event.stopPropagation()">
                          {{ rel }}
                        </span>
                      }
                    </div>
                  </div>
                }
              </div>
            }
          </div>
        } @empty {
          <div class="empty-state">
            <i class="ph ph-book-open"></i>
            <h3>Nenhum termo encontrado</h3>
            <p>Tente ajustar os filtros ou termo de busca.</p>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .glossario-page {
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

    .filters {
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
      margin-bottom: var(--space-lg);

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

    .filter-tabs {
      display: flex;
      gap: var(--space-sm);
      flex-wrap: wrap;
    }

    .filter-tab {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      padding: var(--space-sm) var(--space-md);
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      font-size: 0.8125rem;
      font-weight: 500;
      color: var(--text-secondary);
      cursor: pointer;
      transition: all var(--transition-fast);

      i {
        font-size: 1rem;
      }

      &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
      }

      &.active {
        background: var(--color-primary);
        border-color: var(--color-primary);
        color: white;
      }
    }

    .alphabet {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xs);
      margin-bottom: var(--space-lg);
      padding: var(--space-md);
      background: var(--bg-card);
      border-radius: var(--radius-lg);
    }

    .alphabet__letter {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-sm);
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--text-secondary);
      cursor: pointer;
      transition: all var(--transition-fast);

      &:hover:not(.disabled) {
        background: var(--bg-tertiary);
        color: var(--text-primary);
      }

      &.active {
        background: var(--color-primary);
        border-color: var(--color-primary);
        color: white;
      }

      &.disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }
    }

    .results-info {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      margin-bottom: var(--space-lg);
      font-size: 0.875rem;
      color: var(--text-muted);
    }

    .clear-filter {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
      padding: var(--space-xs) var(--space-sm);
      background: var(--bg-tertiary);
      border: none;
      border-radius: var(--radius-sm);
      font-size: 0.75rem;
      color: var(--text-secondary);
      cursor: pointer;

      &:hover {
        background: var(--color-primary);
        color: white;
      }
    }

    .terms-grid {
      display: grid;
      gap: var(--space-md);
    }

    .term-card {
      padding: var(--space-lg);
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      cursor: pointer;
      transition: all var(--transition-base);

      &:hover {
        border-color: var(--color-primary);
      }

      &.expanded {
        border-color: var(--color-primary);
        box-shadow: var(--shadow-glow);
      }
    }

    .term-card__header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: var(--space-md);

      > i {
        color: var(--text-muted);
        font-size: 1.25rem;
        flex-shrink: 0;
      }
    }

    .term-card__title-row {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      flex-wrap: wrap;
    }

    .term-card__title {
      font-size: 1.125rem;
      color: var(--text-primary);
      margin: 0;
    }

    .term-card__sigla {
      padding: 2px 10px;
      background: var(--color-primary);
      border-radius: var(--radius-full);
      font-size: 0.75rem;
      font-weight: 700;
      color: white;
    }

    .term-card__preview {
      margin-top: var(--space-md);
      font-size: 0.9375rem;
      color: var(--text-secondary);
      line-height: 1.6;

      &.hidden {
        display: none;
      }
    }

    .term-card__content {
      margin-top: var(--space-md);
      padding-top: var(--space-md);
      border-top: 1px solid var(--border-color);
    }

    .term-card__definition {
      font-size: 1rem;
      color: var(--text-secondary);
      line-height: 1.7;
      margin-bottom: var(--space-lg);
    }

    .term-card__example,
    .term-card__legal,
    .term-card__related {
      margin-bottom: var(--space-md);
      padding: var(--space-md);
      background: var(--bg-tertiary);
      border-radius: var(--radius-md);

      h4 {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        font-size: 0.8125rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: var(--space-sm);

        i {
          color: var(--color-primary-light);
        }
      }

      p {
        font-size: 0.875rem;
        color: var(--text-secondary);
        margin: 0;
      }
    }

    .term-card__tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xs);
    }

    .term-tag {
      padding: 4px 12px;
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-full);
      font-size: 0.75rem;
      color: var(--color-primary-light);
      cursor: pointer;
      transition: all var(--transition-fast);

      &:hover {
        background: var(--color-primary);
        border-color: var(--color-primary);
        color: white;
      }
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: var(--space-3xl);
      text-align: center;

      i {
        font-size: 4rem;
        color: var(--text-muted);
        margin-bottom: var(--space-lg);
      }

      h3 {
        color: var(--text-primary);
        margin-bottom: var(--space-sm);
      }

      p {
        color: var(--text-muted);
      }
    }
  `]
})
export class GlossarioComponent {
  private glossarioService = inject(GlossarioService);

  categorias = CATEGORIAS_GLOSSARIO;
  alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  termos: TermoGlossario[] = this.glossarioService.getTermos();
  termosFiltrados: TermoGlossario[] = [...this.termos];
  
  categoriaAtiva: CategoriaGlossario | null = null;
  letraAtiva: string | null = null;
  termoBusca = '';
  termoExpandido: string | null = null;

  filtrarPorCategoria(categoria: CategoriaGlossario | null): void {
    this.categoriaAtiva = categoria;
    this.filtrar();
  }

  filtrarPorLetra(letra: string): void {
    this.letraAtiva = this.letraAtiva === letra ? null : letra;
    this.filtrar();
  }

  limparFiltroLetra(): void {
    this.letraAtiva = null;
    this.filtrar();
  }

  filtrar(): void {
    let resultado = [...this.termos];

    if (this.categoriaAtiva) {
      resultado = resultado.filter(t => t.categoria === this.categoriaAtiva);
    }

    if (this.letraAtiva) {
      resultado = resultado.filter(t => 
        t.termo.toUpperCase().startsWith(this.letraAtiva!)
      );
    }

    if (this.termoBusca.trim()) {
      const termo = this.termoBusca.toLowerCase();
      resultado = resultado.filter(t =>
        t.termo.toLowerCase().includes(termo) ||
        (t.sigla && t.sigla.toLowerCase().includes(termo)) ||
        t.definicao.toLowerCase().includes(termo)
      );
    }

    this.termosFiltrados = resultado;
  }

  temTermoComLetra(letra: string): boolean {
    let termos = this.termos;
    if (this.categoriaAtiva) {
      termos = termos.filter(t => t.categoria === this.categoriaAtiva);
    }
    return termos.some(t => t.termo.toUpperCase().startsWith(letra));
  }

  toggleTermo(id: string): void {
    this.termoExpandido = this.termoExpandido === id ? null : id;
  }

  buscarTermo(sigla: string): void {
    this.termoBusca = sigla;
    this.categoriaAtiva = null;
    this.letraAtiva = null;
    this.filtrar();
  }
}
