import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ArtigosService } from '../../services/artigos.service';
import { Artigo, CategoriaArtigo, CATEGORIAS } from '../../models/artigo.model';

@Component({
  selector: 'app-artigos',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="artigos-page">
      <!-- Header -->
      <header class="page-header">
        <h1>Artigos Técnicos</h1>
        <p>Conteúdo especializado sobre a Reforma Tributária 2026 para profissionais da área fiscal e contábil.</p>
      </header>

      <!-- Filters -->
      <div class="filters">
        <div class="search-box">
          <i class="ph ph-magnifying-glass"></i>
          <input 
            type="text" 
            placeholder="Buscar artigos..." 
            [(ngModel)]="termoBusca"
            (input)="filtrarArtigos()">
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
              [style.--accent]="cat.cor"
              (click)="filtrarPorCategoria(cat.id)">
              <i [class]="'ph ' + cat.icone"></i>
              {{ cat.nome }}
            </button>
          }
        </div>
      </div>

      <!-- Results -->
      <div class="results-info">
        <span>{{ artigosFiltrados.length }} artigo(s) encontrado(s)</span>
      </div>

      <!-- Articles Grid -->
      <div class="articles-grid">
        @for (artigo of artigosFiltrados; track artigo.id; let i = $index) {
          <article class="article-card animate-fade-in" [style.animation-delay]="(i * 0.1) + 's'">
            <div class="article-card__header">
              <span class="badge badge--{{ artigo.categoria }}">
                {{ getCategoriaLabel(artigo.categoria) }}
              </span>
              <div class="article-card__meta">
                <span class="article-card__time">
                  <i class="ph ph-clock"></i>
                  {{ artigo.tempoLeitura }} min
                </span>
                <span class="article-card__date">
                  <i class="ph ph-calendar"></i>
                  {{ artigo.dataPublicacao | date:'dd/MM/yyyy' }}
                </span>
              </div>
            </div>
            
            <h2 class="article-card__title">{{ artigo.titulo }}</h2>
            @if (artigo.subtitulo) {
              <p class="article-card__subtitle">{{ artigo.subtitulo }}</p>
            }
            <p class="article-card__excerpt">{{ artigo.resumo }}</p>
            
            <div class="article-card__footer">
              <div class="article-card__tags">
                @for (tag of artigo.tags.slice(0, 4); track tag) {
                  <span class="article-card__tag">{{ tag }}</span>
                }
              </div>
              <a [routerLink]="['/artigos', artigo.slug]" class="article-card__link">
                Ler artigo completo
                <i class="ph ph-arrow-right"></i>
              </a>
            </div>
          </article>
        } @empty {
          <div class="empty-state">
            <i class="ph ph-article"></i>
            <h3>Nenhum artigo encontrado</h3>
            <p>Tente ajustar os filtros ou termo de busca.</p>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .artigos-page {
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
        max-width: 600px;
      }
    }

    .filters {
      margin-bottom: var(--space-xl);
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
      font-size: 0.875rem;
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
        background: var(--accent, var(--color-primary));
        border-color: var(--accent, var(--color-primary));
        color: white;
      }
    }

    .results-info {
      margin-bottom: var(--space-lg);
      font-size: 0.875rem;
      color: var(--text-muted);
    }

    .articles-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: var(--space-lg);
    }

    .article-card {
      display: flex;
      flex-direction: column;
      padding: var(--space-xl);
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      transition: all var(--transition-base);

      &:hover {
        border-color: var(--color-primary);
        box-shadow: var(--shadow-glow);
        transform: translateY(-2px);
      }
    }

    .article-card__header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: var(--space-md);
      gap: var(--space-md);
    }

    .article-card__meta {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: var(--space-xs);
    }

    .article-card__time,
    .article-card__date {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
      font-size: 0.75rem;
      color: var(--text-muted);
    }

    .article-card__title {
      font-size: 1.25rem;
      color: var(--text-primary);
      margin-bottom: var(--space-xs);
      line-height: 1.3;
    }

    .article-card__subtitle {
      font-size: 0.9375rem;
      color: var(--color-primary-light);
      margin-bottom: var(--space-md);
    }

    .article-card__excerpt {
      font-size: 0.875rem;
      color: var(--text-secondary);
      line-height: 1.6;
      flex: 1;
    }

    .article-card__footer {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
      margin-top: var(--space-lg);
      padding-top: var(--space-md);
      border-top: 1px solid var(--border-color);
    }

    .article-card__tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xs);
    }

    .article-card__tag {
      padding: 4px 10px;
      font-size: 0.75rem;
      background: var(--bg-tertiary);
      border-radius: var(--radius-sm);
      color: var(--text-muted);
    }

    .article-card__link {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: var(--space-sm);
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--color-primary-light);

      &:hover i {
        transform: translateX(4px);
      }

      i {
        transition: transform var(--transition-fast);
      }
    }

    .empty-state {
      grid-column: 1 / -1;
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
export class ArtigosComponent implements OnInit {
  private artigosService = inject(ArtigosService);
  private route = inject(ActivatedRoute);

  categorias = CATEGORIAS;
  artigos: Artigo[] = [];
  artigosFiltrados: Artigo[] = [];
  categoriaAtiva: CategoriaArtigo | null = null;
  termoBusca = '';

  ngOnInit(): void {
    this.artigos = this.artigosService.getArtigos();
    this.artigosFiltrados = [...this.artigos];

    // Check for query params
    this.route.queryParams.subscribe(params => {
      if (params['categoria']) {
        this.filtrarPorCategoria(params['categoria'] as CategoriaArtigo);
      }
    });
  }

  filtrarPorCategoria(categoria: CategoriaArtigo | null): void {
    this.categoriaAtiva = categoria;
    this.filtrarArtigos();
  }

  filtrarArtigos(): void {
    let resultado = [...this.artigos];

    if (this.categoriaAtiva) {
      resultado = resultado.filter(a => a.categoria === this.categoriaAtiva);
    }

    if (this.termoBusca.trim()) {
      const termo = this.termoBusca.toLowerCase();
      resultado = resultado.filter(a =>
        a.titulo.toLowerCase().includes(termo) ||
        a.resumo.toLowerCase().includes(termo) ||
        a.tags.some(t => t.toLowerCase().includes(termo))
      );
    }

    this.artigosFiltrados = resultado;
  }

  getCategoriaLabel(categoria: string): string {
    return this.categorias.find(c => c.id === categoria)?.nome ?? categoria;
  }
}
