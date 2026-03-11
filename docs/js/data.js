// ============================================
// DADOS DA APLICAÇÃO - REFORMA TRIBUTÁRIA 2026
// ============================================

// Categorias de Artigos
const CATEGORIAS = [
  { id: 'federal', nome: 'Federal', descricao: 'CBS, substituição do PIS/COFINS e impactos federais', icone: 'ph-bank', cor: '#3b82f6' },
  { id: 'estadual', nome: 'Estadual', descricao: 'IBS, transição do ICMS e impactos estaduais', icone: 'ph-map-pin', cor: '#8b5cf6' },
  { id: 'municipal', nome: 'Municipal', descricao: 'IBS, transição do ISS e impactos municipais', icone: 'ph-buildings', cor: '#ec4899' },
  { id: 'integrado', nome: 'Integrado', descricao: 'Visão completa CBS + IBS e análises consolidadas', icone: 'ph-intersect-three', cor: '#059669' }
];

// Artigos
const ARTIGOS = [
  {
    id: '1',
    slug: 'substituicao-pis-cofins-cbs',
    titulo: 'Substituição do PIS/COFINS pela CBS',
    subtitulo: 'Guia Completo da Transição Federal',
    resumo: 'Entenda como a CBS substitui o PIS e a COFINS, com tabelas práticas de enquadramento por NCM, mapeamento de CSTs e impactos operacionais para empresas.',
    categoria: 'federal',
    tags: ['CBS', 'PIS', 'COFINS', 'Transição', 'NCM', 'CST'],
    autor: 'Consultoria Tributária',
    dataPublicacao: '2026-01-15',
    tempoLeitura: 15,
    destaque: true
  },
  {
    id: '2',
    slug: 'ibs-unificacao-icms-iss',
    titulo: 'IBS: Unificação do ICMS e ISS',
    subtitulo: 'Como o IBS Integra Tributos Estaduais e Municipais',
    resumo: 'Análise completa da unificação do ICMS (estadual) e ISS (municipal) no IBS, incluindo regras de rateio, alíquotas e impactos por setor.',
    categoria: 'integrado',
    tags: ['IBS', 'ICMS', 'ISS', 'Estadual', 'Municipal', 'Unificação'],
    autor: 'Consultoria Tributária',
    dataPublicacao: '2026-01-12',
    tempoLeitura: 18,
    destaque: true
  },
  {
    id: '3',
    slug: 'cclasstrib-classificacao-tributaria',
    titulo: 'cClassTrib: Nova Classificação Tributária',
    subtitulo: 'Entendendo a Classificação Tributária Unificada',
    resumo: 'Guia completo sobre a cClassTrib, a nova classificação tributária que substitui os CSTs antigos na sistemática CBS/IBS.',
    categoria: 'federal',
    tags: ['cClassTrib', 'CST', 'Classificação', 'CBS', 'IBS'],
    autor: 'Consultoria Tributária',
    dataPublicacao: '2026-01-10',
    tempoLeitura: 12,
    destaque: false
  },
  {
    id: '4',
    slug: 'impactos-setor-servicos',
    titulo: 'Impactos da Reforma no Setor de Serviços',
    subtitulo: 'ISS → IBS: O Que Muda para Prestadores de Serviços',
    resumo: 'Análise dos impactos da transição do ISS para o IBS no setor de serviços, com exemplos por CNAE e orientações práticas.',
    categoria: 'municipal',
    tags: ['ISS', 'IBS', 'Serviços', 'CNAE', 'Municipal'],
    autor: 'Consultoria Tributária',
    dataPublicacao: '2026-01-08',
    tempoLeitura: 14,
    destaque: false
  },
  {
    id: '5',
    slug: 'operacoes-interestaduais-ibs',
    titulo: 'Operações Interestaduais no IBS',
    subtitulo: 'Novo Tratamento das Operações entre Estados',
    resumo: 'Como funcionam as operações interestaduais no novo modelo IBS, fim da guerra fiscal e alíquotas uniformes.',
    categoria: 'estadual',
    tags: ['IBS', 'ICMS', 'Interestadual', 'Alíquotas', 'Estadual'],
    autor: 'Consultoria Tributária',
    dataPublicacao: '2026-01-05',
    tempoLeitura: 16,
    destaque: false
  }
];

// Tabela NCM x CBS/IBS
const TABELA_NCM = [
  { ncm: '2203.00.00', descricao: 'Cervejas de malte', cstAntigo: '01', novoCBS: 'Tributado', novoIBS: 'Tributado', cClassTrib: '001', aliquotaCBS: 12, aliquotaIBS: 15, observacoes: 'Regime monofásico extinto' },
  { ncm: '2106.90.10', descricao: 'Preparações compostas (bebidas)', cstAntigo: '01', novoCBS: 'Tributado', novoIBS: 'Tributado', cClassTrib: '001', aliquotaCBS: 12, aliquotaIBS: 15, observacoes: 'Alíquota padrão' },
  { ncm: '0401.10.10', descricao: 'Leite UHT integral', cstAntigo: '06', novoCBS: 'Alíquota zero', novoIBS: 'Alíquota zero', cClassTrib: '010', aliquotaCBS: 0, aliquotaIBS: 0, observacoes: 'Cesta básica - isento' },
  { ncm: '1006.30.21', descricao: 'Arroz beneficiado', cstAntigo: '06', novoCBS: 'Alíquota zero', novoIBS: 'Alíquota zero', cClassTrib: '010', aliquotaCBS: 0, aliquotaIBS: 0, observacoes: 'Cesta básica - isento' },
  { ncm: '1101.00.10', descricao: 'Farinha de trigo', cstAntigo: '06', novoCBS: 'Alíquota zero', novoIBS: 'Alíquota zero', cClassTrib: '010', aliquotaCBS: 0, aliquotaIBS: 0, observacoes: 'Cesta básica - isento' },
  { ncm: '1507.90.11', descricao: 'Óleo de soja refinado', cstAntigo: '06', novoCBS: 'Alíquota zero', novoIBS: 'Alíquota zero', cClassTrib: '010', aliquotaCBS: 0, aliquotaIBS: 0, observacoes: 'Cesta básica - isento' },
  { ncm: '0207.14.00', descricao: 'Pedaços de frango congelados', cstAntigo: '06', novoCBS: 'Alíquota zero', novoIBS: 'Alíquota zero', cClassTrib: '010', aliquotaCBS: 0, aliquotaIBS: 0, observacoes: 'Cesta básica - isento' },
  { ncm: '3004.90.99', descricao: 'Medicamentos diversos', cstAntigo: '02', novoCBS: 'Reduzido 60%', novoIBS: 'Reduzido 60%', cClassTrib: '002', aliquotaCBS: 4.8, aliquotaIBS: 6, observacoes: 'Saúde - redução 60%' },
  { ncm: '8517.12.00', descricao: 'Telefones celulares', cstAntigo: '01', novoCBS: 'Tributado', novoIBS: 'Tributado', cClassTrib: '001', aliquotaCBS: 12, aliquotaIBS: 15, observacoes: 'Alíquota padrão' },
  { ncm: '8471.30.19', descricao: 'Notebooks e laptops', cstAntigo: '01', novoCBS: 'Tributado', novoIBS: 'Tributado', cClassTrib: '001', aliquotaCBS: 12, aliquotaIBS: 15, observacoes: 'Alíquota padrão' },
  { ncm: '2710.19.21', descricao: 'Diesel S10', cstAntigo: '01', novoCBS: 'Monofásico CBS', novoIBS: 'Tributado', cClassTrib: '041', aliquotaCBS: 8, aliquotaIBS: 15, observacoes: 'Combustível - regime especial' },
  { ncm: '2710.12.59', descricao: 'Gasolina automotiva', cstAntigo: '01', novoCBS: 'Monofásico CBS', novoIBS: 'Tributado', cClassTrib: '041', aliquotaCBS: 10, aliquotaIBS: 15, observacoes: 'Combustível - regime especial' },
  { ncm: '8703.23.10', descricao: 'Automóveis 1500 a 3000cc', cstAntigo: '01', novoCBS: 'Tributado', novoIBS: 'Tributado', cClassTrib: '001', aliquotaCBS: 12, aliquotaIBS: 15, observacoes: 'Alíquota padrão + IPI' },
  { ncm: '4901.99.00', descricao: 'Livros impressos', cstAntigo: '03', novoCBS: 'Isento', novoIBS: 'Isento', cClassTrib: '020', aliquotaCBS: 0, aliquotaIBS: 0, observacoes: 'Imunidade cultural' },
  { ncm: '4902.90.00', descricao: 'Jornais e periódicos', cstAntigo: '03', novoCBS: 'Isento', novoIBS: 'Isento', cClassTrib: '020', aliquotaCBS: 0, aliquotaIBS: 0, observacoes: 'Imunidade cultural' }
];

// Tabela CST Mapeamento
const TABELA_CST = [
  { cstAntigo: '01', descricaoAntiga: 'Operação Tributável', novoCBS: 'Tributado', novoIBS: 'Tributado', observacoes: 'Mapeamento direto' },
  { cstAntigo: '02', descricaoAntiga: 'Alíquota Zero', novoCBS: 'Alíquota Zero', novoIBS: 'Alíquota Zero', observacoes: 'Verificar lista atualizada' },
  { cstAntigo: '03', descricaoAntiga: 'Isento', novoCBS: 'Isento', novoIBS: 'Isento', observacoes: 'Imunidades mantidas' },
  { cstAntigo: '04', descricaoAntiga: 'Não Incidência', novoCBS: 'Não Tributado', novoIBS: 'Não Tributado', observacoes: 'Verificar nova lista' },
  { cstAntigo: '05', descricaoAntiga: 'Substituição Tributária', novoCBS: 'ST CBS', novoIBS: 'ST IBS', observacoes: 'Regras específicas setoriais' },
  { cstAntigo: '06', descricaoAntiga: 'Alíquota Zero (TIPI)', novoCBS: 'Alíquota Zero', novoIBS: 'Alíquota Zero', observacoes: 'TIPI integrada' },
  { cstAntigo: '07', descricaoAntiga: 'Isento (TIPI)', novoCBS: 'Isento', novoIBS: 'Isento', observacoes: 'TIPI integrada' },
  { cstAntigo: '08', descricaoAntiga: 'Sem Incidência (TIPI)', novoCBS: 'Não Tributado', novoIBS: 'Não Tributado', observacoes: 'TIPI integrada' },
  { cstAntigo: '09', descricaoAntiga: 'Outras Operações', novoCBS: 'Análise', novoIBS: 'Análise', observacoes: 'Caso a caso' }
];

// Tabela cClassTrib
const TABELA_CCLASSTRIB = [
  { codigo: '001', descricao: 'Tributado Integral', aplicacao: 'Operações tributadas com alíquota cheia', aliquotaPadrao: 100, reducao: 0, fundamentoLegal: 'Art. XX da LC XXX/2025' },
  { codigo: '002', descricao: 'Tributado Reduzido 60%', aplicacao: 'Saúde, educação, transporte coletivo', aliquotaPadrao: 40, reducao: 60, fundamentoLegal: 'Art. XX, §1º da LC XXX/2025' },
  { codigo: '003', descricao: 'Tributado Reduzido 30%', aplicacao: 'Alimentos não essenciais', aliquotaPadrao: 70, reducao: 30, fundamentoLegal: 'Art. XX, §2º da LC XXX/2025' },
  { codigo: '010', descricao: 'Alíquota Zero', aplicacao: 'Cesta básica, medicamentos essenciais', aliquotaPadrao: 0, reducao: 100, fundamentoLegal: 'Art. XX, §3º da LC XXX/2025' },
  { codigo: '020', descricao: 'Isento', aplicacao: 'Exportação, imunidades constitucionais', aliquotaPadrao: 0, reducao: 100, fundamentoLegal: 'Art. 150 CF + LC XXX/2025' },
  { codigo: '030', descricao: 'Não Tributado', aplicacao: 'Operações fora do campo de incidência', aliquotaPadrao: 0, reducao: 100, fundamentoLegal: 'Art. XX da LC XXX/2025' },
  { codigo: '040', descricao: 'Substituição Tributária', aplicacao: 'Regimes especiais de ST', aliquotaPadrao: 100, reducao: 0, fundamentoLegal: 'Art. XX da LC XXX/2025' },
  { codigo: '041', descricao: 'Monofásico', aplicacao: 'Combustíveis, cigarros', aliquotaPadrao: 100, reducao: 0, fundamentoLegal: 'Art. XX da LC XXX/2025' },
  { codigo: '050', descricao: 'Diferimento', aplicacao: 'Operações com pagamento diferido', aliquotaPadrao: 0, reducao: 100, fundamentoLegal: 'Art. XX da LC XXX/2025' },
  { codigo: '060', descricao: 'Suspensão', aplicacao: 'Regimes aduaneiros especiais', aliquotaPadrao: 0, reducao: 100, fundamentoLegal: 'Art. XX da LC XXX/2025' }
];

// Glossário
const GLOSSARIO = [
  { id: 'cbs', termo: 'Contribuição sobre Bens e Serviços', sigla: 'CBS', categoria: 'tributos-federais', definicao: 'Novo tributo federal que substitui o PIS e a COFINS. Incide sobre o consumo de bens e serviços com características de IVA, permitindo amplo direito ao crédito e com alíquota única de 12%.', exemploUso: 'A CBS incidirá sobre a venda de mercadorias com alíquota de 12%, substituindo o PIS (1,65%) e a COFINS (7,6%).', fundamentoLegal: 'Lei Complementar XXX/2025', relacionados: ['PIS', 'COFINS', 'IVA'] },
  { id: 'ibs', termo: 'Imposto sobre Bens e Serviços', sigla: 'IBS', categoria: 'tributos-estaduais', definicao: 'Novo imposto de competência compartilhada entre Estados e Municípios que unifica o ICMS e o ISS. Possui gestão centralizada pelo Comitê Gestor do IBS e alíquota padrão de 15% (12% estadual + 3% municipal).', exemploUso: 'O IBS será cobrado no destino, com alíquota única de 15%, eliminando a guerra fiscal.', fundamentoLegal: 'Lei Complementar XXX/2025', relacionados: ['ICMS', 'ISS', 'CG-IBS'] },
  { id: 'pis', termo: 'Programa de Integração Social', sigla: 'PIS', categoria: 'tributos-federais', definicao: 'Contribuição social federal incidente sobre a receita bruta das empresas, destinada ao financiamento do seguro-desemprego e abono salarial. Será extinto e substituído pela CBS.', exemploUso: 'O PIS era cobrado com alíquota de 1,65% no regime não-cumulativo.', fundamentoLegal: 'Lei Complementar 7/1970 (extinta)', relacionados: ['CBS', 'COFINS'] },
  { id: 'cofins', termo: 'Contribuição para o Financiamento da Seguridade Social', sigla: 'COFINS', categoria: 'tributos-federais', definicao: 'Contribuição social federal incidente sobre o faturamento das empresas, destinada ao financiamento da seguridade social. Será extinta e substituída pela CBS.', exemploUso: 'A COFINS era cobrada com alíquota de 7,6% no regime não-cumulativo.', fundamentoLegal: 'Lei Complementar 70/1991 (extinta)', relacionados: ['CBS', 'PIS'] },
  { id: 'icms', termo: 'Imposto sobre Circulação de Mercadorias e Serviços', sigla: 'ICMS', categoria: 'tributos-estaduais', definicao: 'Imposto estadual incidente sobre operações relativas à circulação de mercadorias e serviços de transporte interestadual e intermunicipal. Será extinto gradualmente e integrado ao IBS.', exemploUso: 'O ICMS possuía alíquotas que variavam de 7% a 25% dependendo do estado e produto.', fundamentoLegal: 'Lei Complementar 87/1996 (em extinção)', relacionados: ['IBS', 'ST'] },
  { id: 'iss', termo: 'Imposto Sobre Serviços', sigla: 'ISS', categoria: 'tributos-municipais', definicao: 'Imposto municipal incidente sobre a prestação de serviços. Será extinto gradualmente e integrado ao IBS, com alíquota unificada nacional.', exemploUso: 'O ISS possuía alíquotas entre 2% e 5% definidas por cada município.', fundamentoLegal: 'Lei Complementar 116/2003 (em extinção)', relacionados: ['IBS', 'CNAE'] },
  { id: 'ncm', termo: 'Nomenclatura Comum do Mercosul', sigla: 'NCM', categoria: 'classificacoes', definicao: 'Sistema de codificação de mercadorias utilizado no Brasil e nos países do Mercosul para classificação de produtos para fins tributários e de comércio exterior. Formato de 8 dígitos.', exemploUso: 'O NCM 2203.00.00 classifica cervejas de malte para fins tributários.', relacionados: ['cClassTrib', 'TIPI'] },
  { id: 'cst', termo: 'Código de Situação Tributária', sigla: 'CST', categoria: 'classificacoes', definicao: 'Código que identifica a situação tributária de uma operação nos sistemas antigos (PIS/COFINS/ICMS). Será substituído pela cClassTrib no novo sistema.', exemploUso: 'O CST 01 indicava operação tributável no PIS/COFINS.', relacionados: ['cClassTrib', 'CFOP'] },
  { id: 'cclasstrib', termo: 'Classificação Tributária', sigla: 'cClassTrib', categoria: 'classificacoes', definicao: 'Nova classificação tributária unificada que substitui os CSTs antigos na sistemática CBS/IBS. Código de 3 dígitos que identifica o tratamento tributário completo.', exemploUso: 'A cClassTrib 001 indica operação tributada integralmente na CBS/IBS.', relacionados: ['CST', 'NCM'] },
  { id: 'cnae', termo: 'Classificação Nacional de Atividades Econômicas', sigla: 'CNAE', categoria: 'classificacoes', definicao: 'Código que identifica a atividade econômica principal da empresa ou serviço prestado. Utilizado para classificação de serviços no IBS.', exemploUso: 'O CNAE 6201-5 classifica empresas de desenvolvimento de software.', relacionados: ['ISS', 'IBS'] },
  { id: 'st', termo: 'Substituição Tributária', sigla: 'ST', categoria: 'operacional', definicao: 'Regime onde o imposto é cobrado na origem da cadeia produtiva, não no consumo final. Continua existindo no novo modelo com adaptações específicas por setor.', exemploUso: 'A ST de combustíveis concentra a cobrança do IBS na refinaria.', relacionados: ['ICMS', 'IBS'] },
  { id: 'cg-ibs', termo: 'Comitê Gestor do IBS', sigla: 'CG-IBS', categoria: 'transicao', definicao: 'Órgão responsável pela gestão centralizada do IBS, incluindo regulamentação, arrecadação, distribuição e fiscalização. Composto por representantes de estados e municípios.', exemploUso: 'O CG-IBS publica resoluções com as regras operacionais do novo imposto.', fundamentoLegal: 'Lei Complementar XXX/2025', relacionados: ['IBS'] },
  { id: 'periodo-transicao', termo: 'Período de Transição', categoria: 'transicao', definicao: 'Prazo de 7 anos (2026-2032) para adequação gradual ao novo sistema tributário. Durante este período, convivem os tributos antigos (em extinção) e os novos (CBS/IBS).', exemploUso: 'Em 2028, as empresas pagarão 80% de ICMS e 20% de IBS.', relacionados: ['CBS', 'IBS'] },
  { id: 'split-payment', termo: 'Split Payment', categoria: 'transicao', definicao: 'Sistema de pagamento dividido onde o imposto é automaticamente segregado no momento da transação financeira, reduzindo a sonegação e o custo de compliance.', exemploUso: 'Com o split payment, o banco separa automaticamente o CBS/IBS no momento do pagamento.', relacionados: ['CBS', 'IBS'] },
  { id: 'principio-destino', termo: 'Princípio do Destino', categoria: 'transicao', definicao: 'Regra onde o imposto é cobrado integralmente no local de consumo (destino), não na origem. Adotado pelo IBS para eliminar a guerra fiscal.', exemploUso: 'Com o princípio do destino, não importa onde o produto é fabricado, o IBS vai para onde é consumido.', relacionados: ['IBS', 'ICMS'] }
];

// Categorias do Glossário
const CATEGORIAS_GLOSSARIO = [
  { id: 'tributos-federais', nome: 'Tributos Federais', icone: 'ph-bank' },
  { id: 'tributos-estaduais', nome: 'Tributos Estaduais', icone: 'ph-map-pin' },
  { id: 'tributos-municipais', nome: 'Tributos Municipais', icone: 'ph-buildings' },
  { id: 'classificacoes', nome: 'Classificações', icone: 'ph-tag' },
  { id: 'operacional', nome: 'Termos Operacionais', icone: 'ph-gear' },
  { id: 'transicao', nome: 'Termos de Transição', icone: 'ph-arrows-left-right' }
];

// Tipos de Tabelas
const TIPOS_TABELA = [
  { id: 'transicao-pis-cofins', nome: 'Transição PIS/COFINS → CBS', icone: 'ph-arrows-left-right', descricao: 'Mapeamento completo da transição de PIS/COFINS para CBS' },
  { id: 'ncm-cbs', nome: 'NCM × CBS', icone: 'ph-barcode', descricao: 'Enquadramento de NCMs na CBS com alíquotas' },
  { id: 'ncm-ibs', nome: 'NCM × IBS', icone: 'ph-tag', descricao: 'Enquadramento de NCMs no IBS com alíquotas' },
  { id: 'cst-mapeamento', nome: 'CST Antigo → Novo', icone: 'ph-swap', descricao: 'Mapeamento de CSTs antigos para nova sistemática' },
  { id: 'aliquotas', nome: 'Alíquotas Comparativas', icone: 'ph-percent', descricao: 'Comparação de alíquotas: antes × depois da reforma' },
  { id: 'cclasstrib', nome: 'cClassTrib', icone: 'ph-list-numbers', descricao: 'Tabela completa de classificações tributárias' }
];

// Cronograma CBS
const FASES_CBS = [
  { ano: 2026, pisCofins: 100, cbs: 0, descricao: 'Período de preparação e teste da CBS', marcos: ['Publicação de regulamentações', 'Adequação de sistemas', 'Homologação'] },
  { ano: 2027, pisCofins: 0, cbs: 100, descricao: 'Extinção do PIS/COFINS, vigência plena da CBS', marcos: ['CBS em vigor com 12%', 'PIS/COFINS extintos', 'EFD-CBS obrigatória'] }
];

// Cronograma IBS
const FASES_IBS = [
  { ano: 2026, icms: 100, ibs: 0, descricao: 'Período de preparação para o IBS', marcos: ['Criação do Comitê Gestor', 'Definição de alíquotas', 'Sistemas em desenvolvimento'] },
  { ano: 2027, icms: 90, ibs: 10, descricao: 'Início da transição gradual ICMS/ISS → IBS', marcos: ['IBS começa a vigorar', 'Coexistência de tributos'] },
  { ano: 2028, icms: 80, ibs: 20, descricao: 'Continuidade da transição gradual', marcos: ['20% de IBS', '80% de ICMS/ISS'] },
  { ano: 2029, icms: 60, ibs: 40, descricao: 'Aceleração da transição', marcos: ['40% de IBS', '60% de ICMS/ISS'] },
  { ano: 2030, icms: 40, ibs: 60, descricao: 'IBS passa a ser majoritário', marcos: ['60% de IBS', '40% de ICMS/ISS'] },
  { ano: 2031, icms: 20, ibs: 80, descricao: 'Fase final de transição', marcos: ['80% de IBS', '20% de ICMS/ISS'] },
  { ano: 2032, icms: 0, ibs: 100, descricao: 'Extinção do ICMS/ISS, vigência plena do IBS', marcos: ['IBS em 100%', 'ICMS/ISS extintos', 'Sistema unificado'] }
];
