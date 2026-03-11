export interface Artigo {
  id: string;
  slug: string;
  titulo: string;
  subtitulo?: string;
  resumo: string;
  conteudo: string;
  categoria: CategoriaArtigo;
  tags: string[];
  autor: string;
  dataPublicacao: Date;
  dataAtualizacao?: Date;
  tempoLeitura: number; // minutos
  destaque?: boolean;
}

export type CategoriaArtigo = 'federal' | 'estadual' | 'municipal' | 'integrado';

export interface CategoriaInfo {
  id: CategoriaArtigo;
  nome: string;
  descricao: string;
  icone: string;
  cor: string;
}

export const CATEGORIAS: CategoriaInfo[] = [
  {
    id: 'federal',
    nome: 'Federal',
    descricao: 'CBS, substituição do PIS/COFINS e impactos federais',
    icone: 'ph-bank',
    cor: '#3b82f6'
  },
  {
    id: 'estadual',
    nome: 'Estadual',
    descricao: 'IBS, transição do ICMS e impactos estaduais',
    icone: 'ph-map-pin',
    cor: '#8b5cf6'
  },
  {
    id: 'municipal',
    nome: 'Municipal',
    descricao: 'IBS, transição do ISS e impactos municipais',
    icone: 'ph-buildings',
    cor: '#ec4899'
  },
  {
    id: 'integrado',
    nome: 'Integrado',
    descricao: 'Visão completa CBS + IBS e análises consolidadas',
    icone: 'ph-intersect-three',
    cor: '#059669'
  }
];
