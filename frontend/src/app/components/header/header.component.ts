import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="header__container">
        <!-- Logo -->
        <a routerLink="/" class="header__logo">
          <div class="header__logo-icon">
            <i class="ph-fill ph-scales"></i>
          </div>
          <div class="header__logo-text">
            <span class="header__logo-title">Reforma Tributária</span>
            <span class="header__logo-subtitle">2026</span>
          </div>
        </a>

        <!-- Navigation Desktop -->
        <nav class="header__nav">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="header__nav-link">
            <i class="ph ph-house"></i>
            Início
          </a>
          <a routerLink="/artigos" routerLinkActive="active" class="header__nav-link">
            <i class="ph ph-article"></i>
            Artigos
          </a>
          <a routerLink="/tabelas" routerLinkActive="active" class="header__nav-link">
            <i class="ph ph-table"></i>
            Tabelas
          </a>
          <a routerLink="/glossario" routerLinkActive="active" class="header__nav-link">
            <i class="ph ph-book-open"></i>
            Glossário
          </a>
          <a routerLink="/cronograma" routerLinkActive="active" class="header__nav-link">
            <i class="ph ph-calendar"></i>
            Cronograma
          </a>
          <a routerLink="/calculadora" routerLinkActive="active" class="header__nav-link header__nav-link--cta">
            <i class="ph ph-calculator"></i>
            Calculadora
          </a>
        </nav>

        <!-- Mobile Menu Toggle -->
        <button class="header__menu-btn" (click)="menuToggle.emit()">
          <i class="ph ph-list"></i>
        </button>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: var(--header-height);
      background: rgba(15, 23, 42, 0.95);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border-color);
      z-index: 100;
    }

    .header__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      max-width: var(--container-max);
      margin: 0 auto;
      padding: 0 var(--space-lg);
    }

    .header__logo {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      text-decoration: none;
      transition: transform var(--transition-fast);

      &:hover {
        transform: scale(1.02);
      }
    }

    .header__logo-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
      border-radius: var(--radius-md);
      box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);

      i {
        font-size: 1.5rem;
        color: white;
      }
    }

    .header__logo-text {
      display: flex;
      flex-direction: column;
      line-height: 1.2;
    }

    .header__logo-title {
      font-family: var(--font-display);
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .header__logo-subtitle {
      font-size: 0.875rem;
      font-weight: 700;
      color: var(--color-primary-light);
      letter-spacing: 0.1em;
    }

    .header__nav {
      display: none;
      align-items: center;
      gap: var(--space-xs);

      @media (min-width: 1024px) {
        display: flex;
      }
    }

    .header__nav-link {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      padding: var(--space-sm) var(--space-md);
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--text-secondary);
      text-decoration: none;
      border-radius: var(--radius-md);
      transition: all var(--transition-fast);

      i {
        font-size: 1.125rem;
      }

      &:hover {
        color: var(--text-primary);
        background: var(--bg-tertiary);
      }

      &.active {
        color: var(--color-primary-light);
        background: rgba(5, 150, 105, 0.1);
      }

      &--cta {
        background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
        color: white !important;
        margin-left: var(--space-sm);

        &:hover {
          background: linear-gradient(135deg, var(--color-primary-light), var(--color-primary));
          transform: translateY(-1px);
        }
      }
    }

    .header__menu-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      background: var(--bg-tertiary);
      border: none;
      border-radius: var(--radius-md);
      color: var(--text-primary);
      cursor: pointer;
      transition: all var(--transition-fast);

      @media (min-width: 1024px) {
        display: none;
      }

      i {
        font-size: 1.5rem;
      }

      &:hover {
        background: var(--color-primary);
      }
    }
  `]
})
export class HeaderComponent {
  @Output() menuToggle = new EventEmitter<void>();
}
