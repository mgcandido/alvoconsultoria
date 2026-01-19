import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArtigosService } from '../../services/artigos.service';
import { CATEGORIAS } from '../../models/artigo.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home">
      <!-- Hero Section -->
      <section class="hero animate-fade-in">
        <div class="hero__badge">
          <i class="ph ph-sparkle"></i>
          Atualizado Janeiro 2026
        </div>
        
        <h1 class="hero__title">
          Reforma Tributária
          <span class="text-gradient">2026</span>
        </h1>
        
        <p class="hero__subtitle">
          Guia completo sobre a substituição do PIS/COFINS pela CBS e a unificação 
          do ICMS/ISS no IBS. Artigos técnicos, tabelas práticas e ferramentas para 
          profissionais da área tributária.
        </p>
        
        <div class="hero__actions">
          <a routerLink="/artigos" class="btn btn--primary">
            <i class="ph ph-article"></i>
            Ver Artigos
          </a>
          <a routerLink="/tabelas" class="btn btn--outline">
            <i class="ph ph-table"></i>
            Tabelas Práticas
          </a>
        </div>

        <div class="hero__stats">
          <div class="hero__stat">
            <span class="hero__stat-value">CBS</span>
            <span class="hero__stat-label">12% Federal</span>
          </div>
          <div class="hero__stat">
            <span class="hero__stat-value">IBS</span>
            <span class="hero__stat-label">15% Est/Mun</span>
          </div>
          <div class="hero__stat">
            <span class="hero__stat-value">27%</span>
            <span class="hero__stat-label">Alíquota Total</span>
          </div>
        </div>
      </section>

      <!-- Categories Section -->
      <section class="categories">
        <h2 class="section-title">
          <i class="ph ph-squares-four"></i>
          Conteúdo por Categoria
        </h2>
        
        <div class="categories__grid">
          @for (cat of categorias; track cat.id) {
            <a [routerLink]="['/artigos']" [queryParams]="{categoria: cat.id}" class="category-card animate-fade-in" [style.--accent]="cat.cor">
              <div class="category-card__icon">
                <i [class]="'ph ' + cat.icone"></i>
              </div>
              <h3 class="category-card__title">{{ cat.nome }}</h3>
              <p class="category-card__desc">{{ cat.descricao }}</p>
              <span class="category-card__link">
                Ver artigos <i class="ph ph-arrow-right"></i>
              </span>
            </a>
          }
        </div>
      </section>

      <!-- Featured Articles -->
      <section class="featured">
        <div class="featured__header">
          <h2 class="section-title">
            <i class="ph ph-star"></i>
            Artigos em Destaque
          </h2>
          <a routerLink="/artigos" class="featured__link">
            Ver todos <i class="ph ph-arrow-right"></i>
          </a>
        </div>
        
        <div class="featured__grid">
          @for (artigo of artigosDestaque; track artigo.id) {
            <article class="article-card animate-fade-in">
              <div class="article-card__header">
                <span class="badge badge--{{ artigo.categoria }}">
                  {{ getCategoriaLabel(artigo.categoria) }}
                </span>
                <span class="article-card__time">
                  <i class="ph ph-clock"></i>
                  {{ artigo.tempoLeitura }} min
                </span>
              </div>
              
              <h3 class="article-card__title">{{ artigo.titulo }}</h3>
              <p class="article-card__subtitle">{{ artigo.subtitulo }}</p>
              <p class="article-card__excerpt">{{ artigo.resumo }}</p>
              
              <div class="article-card__footer">
                <div class="article-card__tags">
                  @for (tag of artigo.tags.slice(0, 3); track tag) {
                    <span class="article-card__tag">{{ tag }}</span>
                  }
                </div>
                <a [routerLink]="['/artigos', artigo.slug]" class="article-card__link">
                  Ler artigo <i class="ph ph-arrow-right"></i>
                </a>
              </div>
            </article>
          }
        </div>
      </section>

      <!-- Quick Tools -->
      <section class="tools">
        <h2 class="section-title">
          <i class="ph ph-wrench"></i>
          Ferramentas Rápidas
        </h2>
        
        <div class="tools__grid">
          <a routerLink="/calculadora" class="tool-card">
            <div class="tool-card__icon tool-card__icon--calc">
              <i class="ph ph-calculator"></i>
            </div>
            <div class="tool-card__content">
              <h3>Calculadora Tributária</h3>
              <p>Compare a carga tributária antes e depois da reforma</p>
            </div>
            <i class="ph ph-arrow-right tool-card__arrow"></i>
          </a>
          
          <a routerLink="/tabelas/cClassTrib" class="tool-card">
            <div class="tool-card__icon tool-card__icon--table">
              <i class="ph ph-list-numbers"></i>
            </div>
            <div class="tool-card__content">
              <h3>Tabela cClassTrib</h3>
              <p>Classificações tributárias do novo sistema</p>
            </div>
            <i class="ph ph-arrow-right tool-card__arrow"></i>
          </a>
          
          <a routerLink="/cronograma" class="tool-card">
            <div class="tool-card__icon tool-card__icon--timeline">
              <i class="ph ph-calendar"></i>
            </div>
            <div class="tool-card__content">
              <h3>Cronograma de Transição</h3>
              <p>Fases da implementação CBS/IBS até 2032</p>
            </div>
            <i class="ph ph-arrow-right tool-card__arrow"></i>
          </a>
          
          <a routerLink="/glossario" class="tool-card">
            <div class="tool-card__icon tool-card__icon--glossary">
              <i class="ph ph-book-open"></i>
            </div>
            <div class="tool-card__content">
              <h3>Glossário Completo</h3>
              <p>Terminologia técnica da Reforma Tributária</p>
            </div>
            <i class="ph ph-arrow-right tool-card__arrow"></i>
          </a>
        </div>
      </section>

      <!-- Info Banner -->
      <section class="info-banner animate-fade-in">
        <div class="info-banner__icon">
          <i class="ph-fill ph-info"></i>
        </div>
        <div class="info-banner__content">
          <h3>Conteúdo para Profissionais</h3>
          <p>
            Este portal foi desenvolvido para contadores, fiscais, consultores tributários 
            e analistas de sistemas fiscais. O conteúdo serve tanto para estudo teórico 
            quanto para aplicação imediata no dia a dia.
          </p>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home {
      max-width: 1200px;
      margin: 0 auto;
    }

    // Hero
    .hero {
      text-align: center;
      padding: var(--space-3xl) 0;
      margin-bottom: var(--space-3xl);
    }

    .hero__badge {
      display: inline-flex;
      align-items: center;
      gap: var(--space-sm);
      padding: var(--space-sm) var(--space-lg);
      background: rgba(5, 150, 105, 0.1);
      border: 1px solid rgba(5, 150, 105, 0.3);
      border-radius: var(--radius-full);
      color: var(--text-accent);
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: var(--space-xl);
    }

    .hero__title {
      font-size: clamp(2.5rem, 6vw, 4rem);
      font-weight: 700;
      line-height: 1.1;
      margin-bottom: var(--space-lg);
    }

    .hero__subtitle {
      max-width: 700px;
      margin: 0 auto var(--space-xl);
      font-size: 1.125rem;
      line-height: 1.7;
    }

    .hero__actions {
      display: flex;
      justify-content: center;
      gap: var(--space-md);
      flex-wrap: wrap;
      margin-bottom: var(--space-2xl);
    }

    .hero__stats {
      display: flex;
      justify-content: center;
      gap: var(--space-2xl);
      flex-wrap: wrap;
    }

    .hero__stat {
      text-align: center;
    }

    .hero__stat-value {
      display: block;
      font-family: var(--font-display);
      font-size: 2rem;
      font-weight: 700;
      color: var(--color-primary-light);
    }

    .hero__stat-label {
      font-size: 0.875rem;
      color: var(--text-muted);
    }

    // Section Title
    .section-title {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      font-size: 1.5rem;
      margin-bottom: var(--space-xl);

      i {
        color: var(--color-primary-light);
      }
    }

    // Categories
    .categories {
      margin-bottom: var(--space-3xl);
    }

    .categories__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--space-lg);
    }

    .category-card {
      display: flex;
      flex-direction: column;
      padding: var(--space-xl);
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      text-decoration: none;
      transition: all var(--transition-base);

      &:hover {
        transform: translateY(-4px);
        border-color: var(--accent, var(--color-primary));
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);

        .category-card__icon {
          background: var(--accent, var(--color-primary));
          color: white;
        }

        .category-card__link {
          color: var(--accent, var(--color-primary-light));
        }
      }
    }

    .category-card__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      background: var(--bg-tertiary);
      border-radius: var(--radius-md);
      color: var(--accent, var(--text-primary));
      margin-bottom: var(--space-md);
      transition: all var(--transition-fast);

      i {
        font-size: 1.5rem;
      }
    }

    .category-card__title {
      font-size: 1.125rem;
      color: var(--text-primary);
      margin-bottom: var(--space-sm);
    }

    .category-card__desc {
      font-size: 0.875rem;
      color: var(--text-muted);
      flex: 1;
      margin: 0;
    }

    .category-card__link {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      margin-top: var(--space-lg);
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--text-secondary);
      transition: color var(--transition-fast);

      i {
        transition: transform var(--transition-fast);
      }
    }

    .category-card:hover .category-card__link i {
      transform: translateX(4px);
    }

    // Featured
    .featured {
      margin-bottom: var(--space-3xl);
    }

    .featured__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--space-xl);
    }

    .featured__link {
      display: flex;
      align-items: center;
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

    .featured__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: var(--space-lg);
    }

    // Article Card
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
      }
    }

    .article-card__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--space-md);
    }

    .article-card__time {
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
    }

    .article-card__subtitle {
      font-size: 0.875rem;
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
      justify-content: space-between;
      align-items: center;
      margin-top: var(--space-lg);
      padding-top: var(--space-md);
      border-top: 1px solid var(--border-color);
    }

    .article-card__tags {
      display: flex;
      gap: var(--space-xs);
    }

    .article-card__tag {
      padding: 2px 8px;
      font-size: 0.6875rem;
      background: var(--bg-tertiary);
      border-radius: var(--radius-sm);
      color: var(--text-muted);
    }

    .article-card__link {
      display: flex;
      align-items: center;
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

    // Tools
    .tools {
      margin-bottom: var(--space-3xl);
    }

    .tools__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--space-md);
    }

    .tool-card {
      display: flex;
      align-items: center;
      gap: var(--space-lg);
      padding: var(--space-lg);
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      text-decoration: none;
      transition: all var(--transition-base);

      &:hover {
        background: var(--bg-card-hover);
        border-color: var(--color-primary);

        .tool-card__arrow {
          transform: translateX(4px);
          color: var(--color-primary-light);
        }
      }
    }

    .tool-card__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: var(--radius-md);
      flex-shrink: 0;

      i {
        font-size: 1.5rem;
        color: white;
      }

      &--calc { background: linear-gradient(135deg, #3b82f6, #1d4ed8); }
      &--table { background: linear-gradient(135deg, #8b5cf6, #6d28d9); }
      &--timeline { background: linear-gradient(135deg, #059669, #047857); }
      &--glossary { background: linear-gradient(135deg, #f59e0b, #d97706); }
    }

    .tool-card__content {
      flex: 1;

      h3 {
        font-size: 1rem;
        color: var(--text-primary);
        margin-bottom: var(--space-xs);
      }

      p {
        font-size: 0.8125rem;
        color: var(--text-muted);
        margin: 0;
      }
    }

    .tool-card__arrow {
      font-size: 1.25rem;
      color: var(--text-muted);
      transition: all var(--transition-fast);
    }

    // Info Banner
    .info-banner {
      display: flex;
      gap: var(--space-lg);
      padding: var(--space-xl);
      background: linear-gradient(135deg, rgba(5, 150, 105, 0.1), rgba(217, 119, 6, 0.05));
      border: 1px solid rgba(5, 150, 105, 0.2);
      border-radius: var(--radius-lg);
    }

    .info-banner__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      background: var(--color-primary);
      border-radius: var(--radius-md);
      flex-shrink: 0;

      i {
        font-size: 1.5rem;
        color: white;
      }
    }

    .info-banner__content {
      h3 {
        font-size: 1.125rem;
        color: var(--text-primary);
        margin-bottom: var(--space-sm);
      }

      p {
        font-size: 0.9375rem;
        color: var(--text-secondary);
        line-height: 1.6;
        margin: 0;
      }
    }
  `]
})
export class HomeComponent {
  private artigosService = inject(ArtigosService);

  categorias = CATEGORIAS;
  artigosDestaque = this.artigosService.getArtigosDestaque();

  getCategoriaLabel(categoria: string): string {
    return this.categorias.find(c => c.id === categoria)?.nome ?? categoria;
  }
}
