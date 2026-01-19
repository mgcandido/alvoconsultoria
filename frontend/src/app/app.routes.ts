import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Início | Reforma Tributária 2026'
  },
  {
    path: 'artigos',
    loadComponent: () => import('./pages/artigos/artigos.component').then(m => m.ArtigosComponent),
    title: 'Artigos Técnicos | Reforma Tributária 2026'
  },
  {
    path: 'artigos/:slug',
    loadComponent: () => import('./pages/artigo-detalhe/artigo-detalhe.component').then(m => m.ArtigoDetalheComponent),
    title: 'Artigo | Reforma Tributária 2026'
  },
  {
    path: 'tabelas',
    loadComponent: () => import('./pages/tabelas/tabelas.component').then(m => m.TabelasComponent),
    title: 'Tabelas Práticas | Reforma Tributária 2026'
  },
  {
    path: 'tabelas/:tipo',
    loadComponent: () => import('./pages/tabela-detalhe/tabela-detalhe.component').then(m => m.TabelaDetalheComponent),
    title: 'Tabela | Reforma Tributária 2026'
  },
  {
    path: 'glossario',
    loadComponent: () => import('./pages/glossario/glossario.component').then(m => m.GlossarioComponent),
    title: 'Glossário | Reforma Tributária 2026'
  },
  {
    path: 'cronograma',
    loadComponent: () => import('./pages/cronograma/cronograma.component').then(m => m.CronogramaComponent),
    title: 'Cronograma da Transição | Reforma Tributária 2026'
  },
  {
    path: 'calculadora',
    loadComponent: () => import('./pages/calculadora/calculadora.component').then(m => m.CalculadoraComponent),
    title: 'Calculadora Tributária | Reforma Tributária 2026'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
