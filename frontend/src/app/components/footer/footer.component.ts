import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="footer">
      <div class="footer__container">
        <!-- Main Footer -->
        <div class="footer__main">
          <!-- Brand -->
          <div class="footer__brand">
            <div class="footer__logo">
              <i class="ph-fill ph-scales"></i>
              <span>Reforma Tributária 2026</span>
            </div>
            <p class="footer__description">
              Portal especializado em conteúdo técnico sobre a Reforma Tributária 
              Brasileira. Artigos, tabelas práticas e ferramentas para profissionais 
              da área fiscal e contábil.
            </p>
          </div>

          <!-- Quick Links -->
          <div class="footer__links">
            <h4>Conteúdo</h4>
            <ul>
              <li><a routerLink="/artigos">Artigos Técnicos</a></li>
              <li><a routerLink="/tabelas">Tabelas Práticas</a></li>
              <li><a routerLink="/glossario">Glossário</a></li>
              <li><a routerLink="/cronograma">Cronograma</a></li>
            </ul>
          </div>

          <!-- Tributos -->
          <div class="footer__links">
            <h4>Tributos</h4>
            <ul>
              <li><a routerLink="/artigos">CBS - Federal</a></li>
              <li><a routerLink="/artigos">IBS - Estadual</a></li>
              <li><a routerLink="/artigos">IBS - Municipal</a></li>
              <li><a routerLink="/tabelas">cClassTrib</a></li>
            </ul>
          </div>

          <!-- Ferramentas -->
          <div class="footer__links">
            <h4>Ferramentas</h4>
            <ul>
              <li><a routerLink="/calculadora">Calculadora</a></li>
              <li><a routerLink="/tabelas/transicao-pis-cofins">Transição PIS/COFINS</a></li>
              <li><a routerLink="/tabelas/ncm-cbs">NCM × CBS</a></li>
              <li><a routerLink="/tabelas/ncm-ibs">NCM × IBS</a></li>
            </ul>
          </div>
        </div>

        <!-- Bottom Footer -->
        <div class="footer__bottom">
          <p class="footer__copyright">
            © 2026 Consultoria Tributária. Todos os direitos reservados.
          </p>
          <p class="footer__disclaimer">
            <i class="ph ph-warning"></i>
            Conteúdo para fins educacionais. Consulte sempre um profissional especializado.
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--bg-secondary);
      border-top: 1px solid var(--border-color);
      margin-top: auto;

      @media (min-width: 1024px) {
        margin-left: var(--sidebar-width);
      }
    }

    .footer__container {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: var(--space-3xl) var(--space-lg) var(--space-xl);
    }

    .footer__main {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-2xl);
      margin-bottom: var(--space-2xl);

      @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1024px) {
        grid-template-columns: 2fr 1fr 1fr 1fr;
      }
    }

    .footer__brand {
      max-width: 320px;
    }

    .footer__logo {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      margin-bottom: var(--space-md);

      i {
        font-size: 2rem;
        color: var(--color-primary-light);
      }

      span {
        font-family: var(--font-display);
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--text-primary);
      }
    }

    .footer__description {
      font-size: 0.875rem;
      color: var(--text-muted);
      line-height: 1.7;
      margin: 0;
    }

    .footer__links {
      h4 {
        font-size: 0.875rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--text-primary);
        margin-bottom: var(--space-md);
      }

      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
      }

      a {
        font-size: 0.875rem;
        color: var(--text-secondary);
        text-decoration: none;
        transition: color var(--transition-fast);

        &:hover {
          color: var(--color-primary-light);
        }
      }
    }

    .footer__bottom {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
      padding-top: var(--space-xl);
      border-top: 1px solid var(--border-color);
      text-align: center;

      @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
      }
    }

    .footer__copyright {
      font-size: 0.8125rem;
      color: var(--text-muted);
      margin: 0;
    }

    .footer__disclaimer {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-sm);
      font-size: 0.75rem;
      color: var(--text-muted);
      margin: 0;

      i {
        color: var(--warning);
      }

      @media (min-width: 768px) {
        justify-content: flex-end;
      }
    }
  `]
})
export class FooterComponent {}
