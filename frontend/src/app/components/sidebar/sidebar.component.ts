import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
  exact?: boolean;
  badge?: string;
}

interface MenuSection {
  titulo: string;
  itens: MenuItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <!-- Overlay Mobile -->
    <div 
      class="sidebar-overlay" 
      [class.active]="isOpen" 
      (click)="close.emit()">
    </div>

    <aside class="sidebar" [class.open]="isOpen">
      <!-- Header Mobile -->
      <div class="sidebar__header">
        <span class="sidebar__title">Menu</span>
        <button class="sidebar__close" (click)="close.emit()">
          <i class="ph ph-x"></i>
        </button>
      </div>

      <!-- Navigation -->
      <nav class="sidebar__nav">
        @for (section of menuSections; track section.titulo) {
          <div class="sidebar__section">
            <h3 class="sidebar__section-title">{{ section.titulo }}</h3>
            <ul class="sidebar__list">
              @for (item of section.itens; track item.route) {
                <li>
                  <a 
                    [routerLink]="item.route" 
                    routerLinkActive="active"
                    [routerLinkActiveOptions]="{exact: item.exact ?? false}"
                    class="sidebar__link"
                    (click)="close.emit()">
                    <i class="ph" [class]="item.icon"></i>
                    <span>{{ item.label }}</span>
                    @if (item.badge) {
                      <span class="sidebar__badge">{{ item.badge }}</span>
                    }
                  </a>
                </li>
              }
            </ul>
          </div>
        }
      </nav>

      <!-- Footer Info -->
      <div class="sidebar__footer">
        <div class="sidebar__info-card">
          <i class="ph-fill ph-info"></i>
          <div>
            <strong>Última atualização</strong>
            <span>Janeiro 2026</span>
          </div>
        </div>
      </div>
    </aside>
  `,
  styles: [`
    .sidebar-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(4px);
      z-index: 150;
      opacity: 0;
      transition: opacity var(--transition-base);

      &.active {
        display: block;
        opacity: 1;
      }

      @media (min-width: 1024px) {
        display: none !important;
      }
    }

    .sidebar {
      position: fixed;
      top: var(--header-height);
      left: 0;
      width: var(--sidebar-width);
      height: calc(100vh - var(--header-height));
      background: var(--bg-secondary);
      border-right: 1px solid var(--border-color);
      overflow-y: auto;
      z-index: 160;
      transform: translateX(-100%);
      transition: transform var(--transition-base);

      @media (min-width: 1024px) {
        transform: translateX(0);
      }

      &.open {
        transform: translateX(0);
      }
    }

    .sidebar__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-lg);
      border-bottom: 1px solid var(--border-color);

      @media (min-width: 1024px) {
        display: none;
      }
    }

    .sidebar__title {
      font-family: var(--font-display);
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .sidebar__close {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      background: var(--bg-tertiary);
      border: none;
      border-radius: var(--radius-md);
      color: var(--text-primary);
      cursor: pointer;
      transition: all var(--transition-fast);

      i {
        font-size: 1.25rem;
      }

      &:hover {
        background: var(--color-primary);
      }
    }

    .sidebar__nav {
      padding: var(--space-lg);
    }

    .sidebar__section {
      margin-bottom: var(--space-xl);

      &:last-child {
        margin-bottom: 0;
      }
    }

    .sidebar__section-title {
      font-size: 0.6875rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--text-muted);
      margin-bottom: var(--space-md);
      padding-left: var(--space-sm);
    }

    .sidebar__list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .sidebar__link {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      padding: var(--space-sm) var(--space-md);
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--text-secondary);
      text-decoration: none;
      border-radius: var(--radius-md);
      transition: all var(--transition-fast);

      i {
        font-size: 1.25rem;
        width: 24px;
        text-align: center;
      }

      &:hover {
        color: var(--text-primary);
        background: var(--bg-tertiary);
        transform: translateX(4px);
      }

      &.active {
        color: var(--color-primary-light);
        background: rgba(5, 150, 105, 0.1);
        border-left: 3px solid var(--color-primary);
        padding-left: calc(var(--space-md) - 3px);

        i {
          color: var(--color-primary-light);
        }
      }
    }

    .sidebar__badge {
      margin-left: auto;
      padding: 2px 8px;
      font-size: 0.6875rem;
      font-weight: 700;
      background: var(--color-primary);
      color: white;
      border-radius: var(--radius-full);
    }

    .sidebar__footer {
      padding: var(--space-lg);
      border-top: 1px solid var(--border-color);
    }

    .sidebar__info-card {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      padding: var(--space-md);
      background: var(--bg-tertiary);
      border-radius: var(--radius-md);

      i {
        font-size: 1.5rem;
        color: var(--color-primary-light);
      }

      strong {
        display: block;
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--text-primary);
      }

      span {
        font-size: 0.75rem;
        color: var(--text-muted);
      }
    }
  `]
})
export class SidebarComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  menuSections: MenuSection[] = [
    {
      titulo: 'Navegação',
      itens: [
        { label: 'Início', icon: 'ph-house', route: '/', exact: true },
        { label: 'Artigos Técnicos', icon: 'ph-article', route: '/artigos' },
        { label: 'Tabelas Práticas', icon: 'ph-table', route: '/tabelas' },
        { label: 'Glossário', icon: 'ph-book-open', route: '/glossario' }
      ]
    },
    {
      titulo: 'Ferramentas',
      itens: [
        { label: 'Cronograma', icon: 'ph-calendar', route: '/cronograma' },
        { label: 'Calculadora', icon: 'ph-calculator', route: '/calculadora', badge: 'Novo' }
      ]
    },
    {
      titulo: 'Tributos',
      itens: [
        { label: 'CBS Federal', icon: 'ph-bank', route: '/artigos', badge: 'CBS' },
        { label: 'IBS Estadual', icon: 'ph-map-pin', route: '/artigos', badge: 'IBS' },
        { label: 'IBS Municipal', icon: 'ph-buildings', route: '/artigos', badge: 'IBS' }
      ]
    }
  ];
}
