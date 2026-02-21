export interface FaseTransicao {
  id: string;
  nome: string;
  descricao: string;
  dataInicio: Date;
  dataFim: Date;
  status: StatusFase;
  marcos: MarcoTransicao[];
  tributoAfetado: 'cbs' | 'ibs' | 'ambos';
}

export type StatusFase = 'concluida' | 'em_andamento' | 'futura';

export interface MarcoTransicao {
  id: string;
  titulo: string;
  descricao: string;
  data: Date;
  tipo: TipoMarco;
  obrigatorio: boolean;
}

export type TipoMarco = 
  | 'legislacao'      // Publicação de lei/decreto
  | 'sistema'         // Adequação de sistemas
  | 'obrigacao'       // Nova obrigação acessória
  | 'aliquota'        // Mudança de alíquota
  | 'extincao'        // Extinção de tributo antigo
  | 'vigencia';       // Início de vigência

export interface EventoCronograma {
  data: Date;
  titulo: string;
  descricao: string;
  categoria: 'federal' | 'estadual' | 'municipal' | 'geral';
  importancia: 'alta' | 'media' | 'baixa';
}
