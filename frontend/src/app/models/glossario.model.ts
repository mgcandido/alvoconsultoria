export interface TermoGlossario {
  id: string;
  termo: string;
  sigla?: string;
  definicao: string;
  categoria: CategoriaGlossario;
  termoRelacionados?: string[];
  exemploUso?: string;
  fundamentoLegal?: string;
}

export type CategoriaGlossario = 
  | 'tributos-federais'
  | 'tributos-estaduais'
  | 'tributos-municipais'
  | 'classificacoes'
  | 'operacional'
  | 'transicao';

export interface CategoriaGlossarioInfo {
  id: CategoriaGlossario;
  nome: string;
  icone: string;
}

export const CATEGORIAS_GLOSSARIO: CategoriaGlossarioInfo[] = [
  { id: 'tributos-federais', nome: 'Tributos Federais', icone: 'ph-bank' },
  { id: 'tributos-estaduais', nome: 'Tributos Estaduais', icone: 'ph-map-pin' },
  { id: 'tributos-municipais', nome: 'Tributos Municipais', icone: 'ph-buildings' },
  { id: 'classificacoes', nome: 'Classificações', icone: 'ph-tag' },
  { id: 'operacional', nome: 'Termos Operacionais', icone: 'ph-gear' },
  { id: 'transicao', nome: 'Termos de Transição', icone: 'ph-arrows-left-right' }
];
