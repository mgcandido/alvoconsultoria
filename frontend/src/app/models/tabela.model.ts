export interface TabelaTributaria {
  id: string;
  tipo: TipoTabela;
  titulo: string;
  descricao: string;
  colunas: ColunaTabela[];
  dados: RegistroTabela[];
  ultimaAtualizacao: Date;
  observacoes?: string;
}

export type TipoTabela = 
  | 'transicao-pis-cofins'
  | 'ncm-cbs'
  | 'ncm-ibs'
  | 'cst-mapeamento'
  | 'aliquotas'
  | 'cClassTrib';

export interface ColunaTabela {
  campo: string;
  titulo: string;
  tipo: 'texto' | 'codigo' | 'numero' | 'percentual' | 'badge';
  largura?: string;
}

export interface RegistroTabela {
  [key: string]: string | number | boolean;
}

export interface NCMRegistro extends RegistroTabela {
  ncm: string;
  descricao: string;
  cstAntigo: string;
  novoCBS: string;
  novoIBS: string;
  cClassTrib: string;
  aliquotaAntigaPIS: number;
  aliquotaAntigaCOFINS: number;
  aliquotaCBS: number;
  aliquotaIBS: number;
  observacoes: string;
}

export interface CSTMapeamento extends RegistroTabela {
  cstAntigo: string;
  descricaoAntiga: string;
  novoCBS: string;
  descricaoCBS: string;
  novoIBS: string;
  descricaoIBS: string;
  observacoes: string;
}

export interface cClassTribRegistro extends RegistroTabela {
  codigo: string;
  descricao: string;
  aplicacao: string;
  aliquotaPadrao: number;
  reducao: number;
  fundamentoLegal: string;
}

export const TIPOS_TABELA: { id: TipoTabela; nome: string; icone: string; descricao: string }[] = [
  {
    id: 'transicao-pis-cofins',
    nome: 'Transição PIS/COFINS → CBS',
    icone: 'ph-arrows-left-right',
    descricao: 'Mapeamento completo da transição de PIS/COFINS para CBS'
  },
  {
    id: 'ncm-cbs',
    nome: 'NCM × CBS',
    icone: 'ph-barcode',
    descricao: 'Enquadramento de NCMs na CBS com alíquotas'
  },
  {
    id: 'ncm-ibs',
    nome: 'NCM × IBS',
    icone: 'ph-tag',
    descricao: 'Enquadramento de NCMs no IBS com alíquotas'
  },
  {
    id: 'cst-mapeamento',
    nome: 'CST Antigo → Novo',
    icone: 'ph-swap',
    descricao: 'Mapeamento de CSTs antigos para nova sistemática'
  },
  {
    id: 'aliquotas',
    nome: 'Alíquotas Comparativas',
    icone: 'ph-percent',
    descricao: 'Comparação de alíquotas: antes × depois da reforma'
  },
  {
    id: 'cClassTrib',
    nome: 'cClassTrib',
    icone: 'ph-list-numbers',
    descricao: 'Tabela completa de classificações tributárias'
  }
];
