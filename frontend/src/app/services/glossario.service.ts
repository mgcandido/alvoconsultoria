import { Injectable } from '@angular/core';
import { TermoGlossario, CategoriaGlossario } from '../models/glossario.model';

@Injectable({
  providedIn: 'root'
})
export class GlossarioService {
  private termos: TermoGlossario[] = [
    // Tributos Federais
    {
      id: 'cbs',
      termo: 'Contribuição sobre Bens e Serviços',
      sigla: 'CBS',
      definicao: 'Novo tributo federal que substitui o PIS e a COFINS. Incide sobre o consumo de bens e serviços com características de IVA (Imposto sobre Valor Agregado), permitindo amplo direito ao crédito e com alíquota única de 12%.',
      categoria: 'tributos-federais',
      termoRelacionados: ['PIS', 'COFINS', 'IVA'],
      exemploUso: 'A CBS incidirá sobre a venda de mercadorias com alíquota de 12%, substituindo o PIS (1,65%) e a COFINS (7,6%).',
      fundamentoLegal: 'Lei Complementar XXX/2025'
    },
    {
      id: 'pis',
      termo: 'Programa de Integração Social',
      sigla: 'PIS',
      definicao: 'Contribuição social federal incidente sobre a receita bruta das empresas, destinada ao financiamento do seguro-desemprego e abono salarial. Será extinto e substituído pela CBS.',
      categoria: 'tributos-federais',
      termoRelacionados: ['CBS', 'COFINS'],
      exemploUso: 'O PIS era cobrado com alíquota de 1,65% no regime não-cumulativo.',
      fundamentoLegal: 'Lei Complementar 7/1970 (extinta)'
    },
    {
      id: 'cofins',
      termo: 'Contribuição para o Financiamento da Seguridade Social',
      sigla: 'COFINS',
      definicao: 'Contribuição social federal incidente sobre o faturamento das empresas, destinada ao financiamento da seguridade social. Será extinta e substituída pela CBS.',
      categoria: 'tributos-federais',
      termoRelacionados: ['CBS', 'PIS'],
      exemploUso: 'A COFINS era cobrada com alíquota de 7,6% no regime não-cumulativo.',
      fundamentoLegal: 'Lei Complementar 70/1991 (extinta)'
    },

    // Tributos Estaduais
    {
      id: 'ibs',
      termo: 'Imposto sobre Bens e Serviços',
      sigla: 'IBS',
      definicao: 'Novo imposto de competência compartilhada entre Estados e Municípios que unifica o ICMS e o ISS. Possui gestão centralizada pelo Comitê Gestor do IBS e alíquota padrão de 15% (12% estadual + 3% municipal).',
      categoria: 'tributos-estaduais',
      termoRelacionados: ['ICMS', 'ISS', 'CG-IBS'],
      exemploUso: 'O IBS será cobrado no destino, com alíquota única de 15%, eliminando a guerra fiscal.',
      fundamentoLegal: 'Lei Complementar XXX/2025'
    },
    {
      id: 'icms',
      termo: 'Imposto sobre Circulação de Mercadorias e Serviços',
      sigla: 'ICMS',
      definicao: 'Imposto estadual incidente sobre operações relativas à circulação de mercadorias e serviços de transporte interestadual e intermunicipal. Será extinto gradualmente e integrado ao IBS.',
      categoria: 'tributos-estaduais',
      termoRelacionados: ['IBS', 'ST'],
      exemploUso: 'O ICMS possuía alíquotas que variavam de 7% a 25% dependendo do estado e produto.',
      fundamentoLegal: 'Lei Complementar 87/1996 (em extinção)'
    },

    // Tributos Municipais
    {
      id: 'iss',
      termo: 'Imposto Sobre Serviços',
      sigla: 'ISS',
      definicao: 'Imposto municipal incidente sobre a prestação de serviços. Será extinto gradualmente e integrado ao IBS, com alíquota unificada nacional.',
      categoria: 'tributos-municipais',
      termoRelacionados: ['IBS', 'CNAE'],
      exemploUso: 'O ISS possuía alíquotas entre 2% e 5% definidas por cada município.',
      fundamentoLegal: 'Lei Complementar 116/2003 (em extinção)'
    },

    // Classificações
    {
      id: 'ncm',
      termo: 'Nomenclatura Comum do Mercosul',
      sigla: 'NCM',
      definicao: 'Sistema de codificação de mercadorias utilizado no Brasil e nos países do Mercosul para classificação de produtos para fins tributários e de comércio exterior. Formato de 8 dígitos.',
      categoria: 'classificacoes',
      termoRelacionados: ['cClassTrib', 'TIPI'],
      exemploUso: 'O NCM 2203.00.00 classifica cervejas de malte para fins tributários.'
    },
    {
      id: 'cst',
      termo: 'Código de Situação Tributária',
      sigla: 'CST',
      definicao: 'Código que identifica a situação tributária de uma operação nos sistemas antigos (PIS/COFINS/ICMS). Será substituído pela cClassTrib no novo sistema.',
      categoria: 'classificacoes',
      termoRelacionados: ['cClassTrib', 'CFOP'],
      exemploUso: 'O CST 01 indicava operação tributável no PIS/COFINS.'
    },
    {
      id: 'cclasstrib',
      termo: 'Classificação Tributária',
      sigla: 'cClassTrib',
      definicao: 'Nova classificação tributária unificada que substitui os CSTs antigos na sistemática CBS/IBS. Código de 3 dígitos que identifica o tratamento tributário completo.',
      categoria: 'classificacoes',
      termoRelacionados: ['CST', 'NCM'],
      exemploUso: 'A cClassTrib 001 indica operação tributada integralmente na CBS/IBS.'
    },
    {
      id: 'cnae',
      termo: 'Classificação Nacional de Atividades Econômicas',
      sigla: 'CNAE',
      definicao: 'Código que identifica a atividade econômica principal da empresa ou serviço prestado. Utilizado para classificação de serviços no IBS.',
      categoria: 'classificacoes',
      termoRelacionados: ['ISS', 'IBS'],
      exemploUso: 'O CNAE 6201-5 classifica empresas de desenvolvimento de software.'
    },

    // Operacional
    {
      id: 'st',
      termo: 'Substituição Tributária',
      sigla: 'ST',
      definicao: 'Regime onde o imposto é cobrado na origem da cadeia produtiva, não no consumo final. Continua existindo no novo modelo com adaptações específicas por setor.',
      categoria: 'operacional',
      termoRelacionados: ['ICMS', 'IBS'],
      exemploUso: 'A ST de combustíveis concentra a cobrança do IBS na refinaria.'
    },
    {
      id: 'credito-presumido',
      termo: 'Crédito Presumido',
      definicao: 'Crédito tributário concedido sem necessidade de comprovação documental específica, geralmente para setores com dificuldade de documentar aquisições (agricultura, por exemplo).',
      categoria: 'operacional',
      termoRelacionados: ['IBS', 'CBS'],
      exemploUso: 'Produtores rurais podem utilizar crédito presumido de CBS/IBS sobre insumos.'
    },
    {
      id: 'base-calculo',
      termo: 'Base de Cálculo',
      definicao: 'Valor sobre o qual incide o tributo. Na CBS/IBS, a base de cálculo é unificada, eliminando as diferenças entre bases do PIS/COFINS e ICMS.',
      categoria: 'operacional',
      exemploUso: 'A base de cálculo do IBS é o valor da operação, sem inclusão do imposto "por dentro".'
    },
    {
      id: 'aliquota',
      termo: 'Alíquota',
      definicao: 'Percentual aplicado sobre a base de cálculo para determinar o valor do tributo. No novo sistema: CBS 12%, IBS 15% (padrão).',
      categoria: 'operacional',
      exemploUso: 'A alíquota combinada CBS+IBS é de 27% para operações tributadas integralmente.'
    },

    // Transição
    {
      id: 'cg-ibs',
      termo: 'Comitê Gestor do IBS',
      sigla: 'CG-IBS',
      definicao: 'Órgão responsável pela gestão centralizada do IBS, incluindo regulamentação, arrecadação, distribuição e fiscalização. Composto por representantes de estados e municípios.',
      categoria: 'transicao',
      termoRelacionados: ['IBS'],
      exemploUso: 'O CG-IBS publica resoluções com as regras operacionais do novo imposto.',
      fundamentoLegal: 'Lei Complementar XXX/2025'
    },
    {
      id: 'periodo-transicao',
      termo: 'Período de Transição',
      definicao: 'Prazo de 7 anos (2026-2032) para adequação gradual ao novo sistema tributário. Durante este período, convivem os tributos antigos (em extinção) e os novos (CBS/IBS).',
      categoria: 'transicao',
      termoRelacionados: ['CBS', 'IBS'],
      exemploUso: 'Em 2028, as empresas pagarão 80% de ICMS e 20% de IBS.'
    },
    {
      id: 'split-payment',
      termo: 'Split Payment',
      definicao: 'Sistema de pagamento dividido onde o imposto é automaticamente segregado no momento da transação financeira, reduzindo a sonegação e o custo de compliance.',
      categoria: 'transicao',
      termoRelacionados: ['CBS', 'IBS'],
      exemploUso: 'Com o split payment, o banco separa automaticamente o CBS/IBS no momento do pagamento.'
    },
    {
      id: 'principio-destino',
      termo: 'Princípio do Destino',
      definicao: 'Regra onde o imposto é cobrado integralmente no local de consumo (destino), não na origem. Adotado pelo IBS para eliminar a guerra fiscal.',
      categoria: 'transicao',
      termoRelacionados: ['IBS', 'ICMS'],
      exemploUso: 'Com o princípio do destino, não importa onde o produto é fabricado, o IBS vai para onde é consumido.'
    }
  ];

  getTermos(): TermoGlossario[] {
    return this.termos;
  }

  getTermoPorId(id: string): TermoGlossario | undefined {
    return this.termos.find(t => t.id === id);
  }

  getTermosPorCategoria(categoria: CategoriaGlossario): TermoGlossario[] {
    return this.termos.filter(t => t.categoria === categoria);
  }

  buscarTermos(termo: string): TermoGlossario[] {
    const termoLower = termo.toLowerCase();
    return this.termos.filter(t =>
      t.termo.toLowerCase().includes(termoLower) ||
      (t.sigla && t.sigla.toLowerCase().includes(termoLower)) ||
      t.definicao.toLowerCase().includes(termoLower)
    );
  }

  getTermosRelacionados(id: string): TermoGlossario[] {
    const termo = this.getTermoPorId(id);
    if (!termo || !termo.termoRelacionados) return [];

    return termo.termoRelacionados
      .map(sigla => this.termos.find(t => t.sigla === sigla || t.id === sigla.toLowerCase()))
      .filter((t): t is TermoGlossario => t !== undefined);
  }
}
