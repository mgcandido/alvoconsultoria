import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ArtigosService } from '../../services/artigos.service';
import { Artigo, CATEGORIAS } from '../../models/artigo.model';

@Component({
  selector: 'app-artigo-detalhe',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @if (artigo) {
      <article class="artigo-page">
        <!-- Breadcrumb -->
        <nav class="breadcrumb">
          <a routerLink="/">Início</a>
          <i class="ph ph-caret-right"></i>
          <a routerLink="/artigos">Artigos</a>
          <i class="ph ph-caret-right"></i>
          <span>{{ artigo.titulo }}</span>
        </nav>

        <!-- Header -->
        <header class="artigo-header">
          <div class="artigo-header__meta">
            <span class="badge badge--{{ artigo.categoria }}">
              {{ getCategoriaLabel(artigo.categoria) }}
            </span>
            <span class="artigo-header__time">
              <i class="ph ph-clock"></i>
              {{ artigo.tempoLeitura }} min de leitura
            </span>
            <span class="artigo-header__date">
              <i class="ph ph-calendar"></i>
              {{ artigo.dataPublicacao | date:'dd/MM/yyyy' }}
            </span>
          </div>

          <h1 class="artigo-header__title">{{ artigo.titulo }}</h1>
          
          @if (artigo.subtitulo) {
            <p class="artigo-header__subtitle">{{ artigo.subtitulo }}</p>
          }

          <div class="artigo-header__tags">
            @for (tag of artigo.tags; track tag) {
              <span class="tag">{{ tag }}</span>
            }
          </div>
        </header>

        <!-- Content -->
        <div class="artigo-content" [innerHTML]="conteudoFormatado"></div>

        <!-- Footer -->
        <footer class="artigo-footer">
          <div class="artigo-footer__author">
            <div class="artigo-footer__avatar">
              <i class="ph ph-user"></i>
            </div>
            <div>
              <span class="artigo-footer__label">Autor</span>
              <span class="artigo-footer__name">{{ artigo.autor }}</span>
            </div>
          </div>

          <div class="artigo-footer__actions">
            <a routerLink="/artigos" class="btn btn--outline">
              <i class="ph ph-arrow-left"></i>
              Voltar aos artigos
            </a>
          </div>
        </footer>
      </article>
    } @else {
      <div class="not-found">
        <i class="ph ph-warning"></i>
        <h2>Artigo não encontrado</h2>
        <p>O artigo solicitado não foi encontrado.</p>
        <a routerLink="/artigos" class="btn btn--primary">Ver todos os artigos</a>
      </div>
    }
  `,
  styles: [`
    .artigo-page {
      max-width: 900px;
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

    .artigo-header {
      margin-bottom: var(--space-2xl);
      padding-bottom: var(--space-xl);
      border-bottom: 1px solid var(--border-color);
    }

    .artigo-header__meta {
      display: flex;
      align-items: center;
      gap: var(--space-lg);
      margin-bottom: var(--space-lg);
      flex-wrap: wrap;
    }

    .artigo-header__time,
    .artigo-header__date {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
      font-size: 0.875rem;
      color: var(--text-muted);
    }

    .artigo-header__title {
      font-size: clamp(1.75rem, 4vw, 2.5rem);
      line-height: 1.2;
      margin-bottom: var(--space-md);
    }

    .artigo-header__subtitle {
      font-size: 1.25rem;
      color: var(--color-primary-light);
      margin-bottom: var(--space-lg);
    }

    .artigo-header__tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-sm);
    }

    .tag {
      padding: var(--space-xs) var(--space-md);
      background: var(--bg-tertiary);
      border-radius: var(--radius-full);
      font-size: 0.8125rem;
      color: var(--text-secondary);
    }

    .artigo-content {
      font-size: 1.0625rem;
      line-height: 1.8;
      color: var(--text-secondary);

      :deep(h2) {
        font-size: 1.5rem;
        color: var(--text-primary);
        margin-top: var(--space-2xl);
        margin-bottom: var(--space-md);
        padding-bottom: var(--space-sm);
        border-bottom: 1px solid var(--border-color);
      }

      :deep(h3) {
        font-size: 1.25rem;
        color: var(--text-primary);
        margin-top: var(--space-xl);
        margin-bottom: var(--space-md);
      }

      :deep(h4) {
        font-size: 1.125rem;
        color: var(--text-primary);
        margin-top: var(--space-lg);
        margin-bottom: var(--space-sm);
      }

      :deep(p) {
        margin-bottom: var(--space-md);
      }

      :deep(ul), :deep(ol) {
        margin-bottom: var(--space-md);
        padding-left: var(--space-xl);
      }

      :deep(li) {
        margin-bottom: var(--space-sm);
      }

      :deep(table) {
        width: 100%;
        margin: var(--space-lg) 0;
        border-collapse: collapse;
        font-size: 0.9375rem;

        th, td {
          padding: var(--space-md);
          text-align: left;
          border: 1px solid var(--border-color);
        }

        th {
          background: var(--bg-tertiary);
          font-weight: 600;
          color: var(--text-primary);
        }

        tr:hover {
          background: var(--bg-card-hover);
        }
      }

      :deep(pre) {
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-md);
        padding: var(--space-lg);
        margin: var(--space-lg) 0;
        overflow-x: auto;
        font-size: 0.875rem;
      }

      :deep(code) {
        font-family: var(--font-mono);
      }

      :deep(strong) {
        color: var(--text-primary);
        font-weight: 600;
      }

      :deep(blockquote) {
        margin: var(--space-lg) 0;
        padding: var(--space-md) var(--space-lg);
        border-left: 4px solid var(--color-primary);
        background: rgba(5, 150, 105, 0.1);
        border-radius: 0 var(--radius-md) var(--radius-md) 0;

        p {
          margin: 0;
          color: var(--text-primary);
        }
      }
    }

    .artigo-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: var(--space-2xl);
      padding-top: var(--space-xl);
      border-top: 1px solid var(--border-color);
      flex-wrap: wrap;
      gap: var(--space-lg);
    }

    .artigo-footer__author {
      display: flex;
      align-items: center;
      gap: var(--space-md);
    }

    .artigo-footer__avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      background: var(--bg-tertiary);
      border-radius: var(--radius-full);

      i {
        font-size: 1.5rem;
        color: var(--text-muted);
      }
    }

    .artigo-footer__label {
      display: block;
      font-size: 0.75rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .artigo-footer__name {
      display: block;
      font-weight: 600;
      color: var(--text-primary);
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
export class ArtigoDetalheComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private artigosService = inject(ArtigosService);

  artigo: Artigo | undefined;
  conteudoFormatado = '';

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.artigo = this.artigosService.getArtigoPorSlug(slug);
      if (this.artigo) {
        this.conteudoFormatado = this.formatarConteudo(this.artigo.conteudo);
      }
    }
  }

  getCategoriaLabel(categoria: string): string {
    return CATEGORIAS.find(c => c.id === categoria)?.nome ?? categoria;
  }

  private formatarConteudo(conteudo: string): string {
    // Simple markdown-like formatting
    return conteudo
      // Headers
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
      // Bold
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Code blocks
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      // Inline code
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      // Tables (simple)
      .replace(/\|(.+)\|/g, (match) => {
        const cells = match.split('|').filter(c => c.trim());
        if (cells.every(c => c.trim().match(/^-+$/))) {
          return ''; // Header separator
        }
        const isHeader = !this.lastLineWasHeader;
        this.lastLineWasHeader = isHeader;
        const tag = isHeader ? 'th' : 'td';
        const row = cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('');
        return `<tr>${row}</tr>`;
      })
      // Wrap tables
      .replace(/(<tr>[\s\S]*?<\/tr>)+/g, '<table>$&</table>')
      // Paragraphs
      .replace(/\n\n/g, '</p><p>')
      .replace(/^(?!<)/, '<p>')
      .replace(/(?!>)$/, '</p>');
  }

  private lastLineWasHeader = false;
}
