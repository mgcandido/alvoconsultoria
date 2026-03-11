import { Injectable } from '@angular/core';
import { Artigo, CategoriaArtigo } from '../models/artigo.model';

@Injectable({
  providedIn: 'root'
})
export class ArtigosService {
  private artigos: Artigo[] = [
    {
      id: '1',
      slug: 'substituicao-pis-cofins-cbs',
      titulo: 'Substituição do PIS/COFINS pela CBS',
      subtitulo: 'Guia Completo da Transição Federal',
      resumo: 'Entenda como a CBS substitui o PIS e a COFINS, com tabelas práticas de enquadramento por NCM, mapeamento de CSTs e impactos operacionais para empresas.',
      conteudo: this.getConteudoArtigoCBS(),
      categoria: 'federal',
      tags: ['CBS', 'PIS', 'COFINS', 'Transição', 'NCM', 'CST'],
      autor: 'Consultoria Tributária',
      dataPublicacao: new Date('2026-01-15'),
      tempoLeitura: 15,
      destaque: true
    },
    {
      id: '2',
      slug: 'ibs-unificacao-icms-iss',
      titulo: 'IBS: Unificação do ICMS e ISS',
      subtitulo: 'Como o IBS Integra Tributos Estaduais e Municipais',
      resumo: 'Análise completa da unificação do ICMS (estadual) e ISS (municipal) no IBS, incluindo regras de rateio, alíquotas e impactos por setor.',
      conteudo: this.getConteudoArtigoIBS(),
      categoria: 'integrado',
      tags: ['IBS', 'ICMS', 'ISS', 'Estadual', 'Municipal', 'Unificação'],
      autor: 'Consultoria Tributária',
      dataPublicacao: new Date('2026-01-12'),
      tempoLeitura: 18,
      destaque: true
    },
    {
      id: '3',
      slug: 'cClassTrib-classificacao-tributaria',
      titulo: 'cClassTrib: Nova Classificação Tributária',
      subtitulo: 'Entendendo a Classificação Tributária Unificada',
      resumo: 'Guia completo sobre a cClassTrib, a nova classificação tributária que substitui os CSTs antigos na sistemática CBS/IBS.',
      conteudo: this.getConteudoArtigocClassTrib(),
      categoria: 'federal',
      tags: ['cClassTrib', 'CST', 'Classificação', 'CBS', 'IBS'],
      autor: 'Consultoria Tributária',
      dataPublicacao: new Date('2026-01-10'),
      tempoLeitura: 12,
      destaque: false
    },
    {
      id: '4',
      slug: 'impactos-setor-servicos',
      titulo: 'Impactos da Reforma no Setor de Serviços',
      subtitulo: 'ISS → IBS: O Que Muda para Prestadores de Serviços',
      resumo: 'Análise dos impactos da transição do ISS para o IBS no setor de serviços, com exemplos por CNAE e orientações práticas.',
      conteudo: this.getConteudoArtigoServicos(),
      categoria: 'municipal',
      tags: ['ISS', 'IBS', 'Serviços', 'CNAE', 'Municipal'],
      autor: 'Consultoria Tributária',
      dataPublicacao: new Date('2026-01-08'),
      tempoLeitura: 14,
      destaque: false
    },
    {
      id: '5',
      slug: 'operacoes-interestaduais-ibs',
      titulo: 'Operações Interestaduais no IBS',
      subtitulo: 'Novo Tratamento das Operações entre Estados',
      resumo: 'Como funcionam as operações interestaduais no novo modelo IBS, fim da guerra fiscal e alíquotas uniformes.',
      conteudo: this.getConteudoArtigoInterestadual(),
      categoria: 'estadual',
      tags: ['IBS', 'ICMS', 'Interestadual', 'Alíquotas', 'Estadual'],
      autor: 'Consultoria Tributária',
      dataPublicacao: new Date('2026-01-05'),
      tempoLeitura: 16,
      destaque: false
    }
  ];

  getArtigos(): Artigo[] {
    return this.artigos;
  }

  getArtigosDestaque(): Artigo[] {
    return this.artigos.filter(a => a.destaque);
  }

  getArtigoPorSlug(slug: string): Artigo | undefined {
    return this.artigos.find(a => a.slug === slug);
  }

  getArtigosPorCategoria(categoria: CategoriaArtigo): Artigo[] {
    return this.artigos.filter(a => a.categoria === categoria);
  }

  buscarArtigos(termo: string): Artigo[] {
    const termoLower = termo.toLowerCase();
    return this.artigos.filter(a =>
      a.titulo.toLowerCase().includes(termoLower) ||
      a.resumo.toLowerCase().includes(termoLower) ||
      a.tags.some(t => t.toLowerCase().includes(termoLower))
    );
  }

  private getConteudoArtigoCBS(): string {
    return `
## 1. Introdução

A **Contribuição sobre Bens e Serviços (CBS)** representa uma das maiores mudanças no sistema tributário federal brasileiro. Instituída pela Reforma Tributária de 2026, a CBS substitui integralmente o **PIS (Programa de Integração Social)** e a **COFINS (Contribuição para o Financiamento da Seguridade Social)**.

Este artigo apresenta um guia completo para a transição, com tabelas práticas de enquadramento por NCM, mapeamento de CSTs antigos para o novo sistema e orientações operacionais para empresas.

## 2. Contexto Legal e Conceitual

### 2.1. Base Legal
- **Lei Complementar nº XXX/2025** - Institui a CBS
- **Decreto nº XXXX/2026** - Regulamenta a CBS
- **IN RFB nº XXXX/2026** - Procedimentos operacionais

### 2.2. O Que é a CBS?
A CBS é uma contribuição federal incidente sobre o consumo de bens e serviços, com características de IVA (Imposto sobre Valor Agregado):

| Característica | PIS/COFINS (Antigo) | CBS (Novo) |
|----------------|---------------------|------------|
| Base de cálculo | Receita bruta (cumulativo) ou Valor agregado (não-cumulativo) | Valor agregado unificado |
| Alíquota PIS | 0,65% (cumulativo) / 1,65% (não-cumulativo) | N/A |
| Alíquota COFINS | 3% (cumulativo) / 7,6% (não-cumulativo) | N/A |
| Alíquota CBS | N/A | 12% (alíquota padrão) |
| Créditos | Regime específico por insumo | Amplo direito ao crédito |

## 3. Tabela de Transição: CST Antigo → CBS

| CST Antigo | Descrição Antiga | Enquadramento CBS | Observações |
|------------|------------------|-------------------|-------------|
| 01 | Operação Tributável | Tributado CBS | Alíquota 12% |
| 02 | Operação Tributável Alíquota Zero | Alíquota Zero CBS | Mantém tratamento |
| 03 | Operação Isenta | Isento CBS | Mapeamento direto |
| 04 | Operação sem Incidência | Não tributado CBS | Verificar nova lista |
| 05 | Operação com Substituição Tributária | ST CBS | Regras específicas |
| 06 | Operação Tributável Alíquota Zero (TIPI) | Alíquota Zero CBS | TIPI integrada |
| 07 | Operação Isenta (TIPI) | Isento CBS | TIPI integrada |
| 08 | Operação sem Incidência (TIPI) | Não tributado CBS | Verificar NCM |
| 09 | Outras Operações | Análise específica | Consultar legislação |

## 4. Exemplos Práticos por NCM

### 4.1. Exemplo 1: Cervejas - NCM 2203.00.00

| Campo | Valor Antigo | Valor Novo (CBS) |
|-------|--------------|------------------|
| NCM | 2203.00.00 | 2203.00.00 |
| Descrição | Cervejas de malte | Cervejas de malte |
| CST PIS | 01 | N/A |
| CST COFINS | 01 | N/A |
| cClassTrib | N/A | 001 (Tributado integral) |
| Alíquota PIS | 2,32% (monofásico) | N/A |
| Alíquota COFINS | 10,68% (monofásico) | N/A |
| Alíquota CBS | N/A | 12% |

**Cálculo Comparativo:**
\`\`\`
Valor do produto: R$ 100,00

ANTES (PIS/COFINS Monofásico):
PIS: R$ 100,00 × 2,32% = R$ 2,32
COFINS: R$ 100,00 × 10,68% = R$ 10,68
Total: R$ 13,00

DEPOIS (CBS):
CBS: R$ 100,00 × 12% = R$ 12,00
Total: R$ 12,00

Variação: -7,7% de carga tributária
\`\`\`

### 4.2. Exemplo 2: Software - NCM 8523.80.00

| Campo | Valor Antigo | Valor Novo (CBS) |
|-------|--------------|------------------|
| NCM | 8523.80.00 | 8523.80.00 |
| Descrição | Software em mídia | Software em mídia |
| CST PIS | 01 | N/A |
| CST COFINS | 01 | N/A |
| cClassTrib | N/A | 002 (Tributado reduzido) |
| Alíquota PIS | 1,65% | N/A |
| Alíquota COFINS | 7,6% | N/A |
| Alíquota CBS | N/A | 8% (redução 33%) |

## 5. Impactos Práticos para Empresas

### 5.1. Impactos Operacionais
- **Simplificação de cálculo**: Alíquota única substitui sistema complexo
- **Unificação de obrigações**: EFD-CBS substitui EFD-Contribuições
- **Novos campos em NF-e**: Campo cClassTrib obrigatório

### 5.2. Impactos Financeiros
- **Fluxo de caixa**: Créditos mais amplos podem melhorar capital de giro
- **Carga tributária**: Variação por setor (ver tabelas específicas)
- **Compliance**: Investimento inicial em adequação de sistemas

### 5.3. Adequação de Sistemas
1. Atualizar cadastro de produtos com cClassTrib
2. Adequar rotinas de cálculo de impostos
3. Atualizar layout de NF-e para versão 5.0
4. Implementar novo EFD-CBS

## 6. Orientações Operacionais

### 6.1. Checklist de Adequação
- [ ] Mapear todos os NCMs utilizados
- [ ] Identificar cClassTrib correspondente
- [ ] Atualizar sistemas ERP/fiscal
- [ ] Treinar equipe fiscal
- [ ] Validar cálculos em homologação
- [ ] Monitorar publicações da RFB

### 6.2. Pontos de Atenção
- **Período de transição**: Convivência de regimes até 31/12/2026
- **Créditos acumulados**: Regras de aproveitamento de créditos antigos
- **Operações especiais**: Exportação, ZFM, incentivos fiscais

## 7. Conclusão

A substituição do PIS/COFINS pela CBS representa uma simplificação significativa do sistema tributário federal. Empresas devem iniciar imediatamente o mapeamento de seus produtos e serviços para o novo enquadramento, garantindo adequação dos sistemas e capacitação das equipes.

**Recomendações finais:**
1. Iniciar mapeamento NCM → cClassTrib em janeiro/2026
2. Contratar ou treinar especialistas em CBS
3. Participar de homologações da RFB
4. Acompanhar publicações do Comitê Gestor
    `;
  }

  private getConteudoArtigoIBS(): string {
    return `
## 1. Introdução

O **Imposto sobre Bens e Serviços (IBS)** é o novo tributo que unifica o **ICMS** (estadual) e o **ISS** (municipal) em um único imposto de competência compartilhada entre Estados e Municípios.

Esta unificação representa uma das maiores mudanças do sistema tributário brasileiro, eliminando a complexidade de 27 legislações estaduais de ICMS e milhares de legislações municipais de ISS.

## 2. Estrutura do IBS

### 2.1. Competência Compartilhada

| Aspecto | ICMS (Antigo) | ISS (Antigo) | IBS (Novo) |
|---------|---------------|--------------|------------|
| Competência | Estadual | Municipal | Compartilhada |
| Legislação | 27 diferentes | ~5.570 diferentes | Uma única |
| Alíquota | Variável (7% a 25%) | 2% a 5% | Padrão + Adicional |
| Gestão | SEFAZ estadual | Prefeitura | Comitê Gestor IBS |

### 2.2. Comitê Gestor do IBS
O **CG-IBS** é responsável por:
- Definir regulamentação nacional
- Gerir arrecadação e distribuição
- Fiscalizar contribuintes
- Julgar contencioso administrativo

## 3. Alíquotas do IBS

### 3.1. Composição da Alíquota

| Componente | Percentual | Destino |
|------------|------------|---------|
| Alíquota estadual | 12% | Estado de destino |
| Alíquota municipal | 3% | Município de destino |
| **Total IBS** | **15%** | **Rateio automático** |

### 3.2. Alíquotas Reduzidas

| Categoria | Redução | Alíquota Efetiva |
|-----------|---------|------------------|
| Saúde | 60% | 6% |
| Educação | 60% | 6% |
| Transporte coletivo | 60% | 6% |
| Alimentos cesta básica | 100% | 0% |
| Medicamentos essenciais | 100% | 0% |

## 4. Transição ICMS → IBS

### 4.1. Cronograma

| Ano | ICMS | IBS | Observação |
|-----|------|-----|------------|
| 2026 | 100% | 0% | Preparação |
| 2027 | 90% | 10% | Início transição |
| 2028 | 80% | 20% | Fase 2 |
| 2029 | 60% | 40% | Fase 3 |
| 2030 | 40% | 60% | Fase 4 |
| 2031 | 20% | 80% | Fase 5 |
| 2032 | 0% | 100% | Extinção ICMS |

### 4.2. Exemplo de Cálculo na Transição (2028)

\`\`\`
Valor da operação: R$ 1.000,00
Alíquota ICMS SP: 18%
Alíquota IBS: 15%

ICMS (80%): R$ 1.000 × 18% × 80% = R$ 144,00
IBS (20%): R$ 1.000 × 15% × 20% = R$ 30,00

Total tributo: R$ 174,00
\`\`\`

## 5. Fim da Guerra Fiscal

### 5.1. O Que Muda

| Aspecto | Antes | Depois |
|---------|-------|--------|
| Incentivos fiscais | Concedidos por estados | Extintos gradualmente |
| Créditos presumidos | Variavam por estado | Uniformizados |
| Alíquotas interestaduais | 7% ou 12% | Não existe (destino) |
| Benefícios setoriais | Por legislação estadual | Apenas por lei federal |

### 5.2. Princípio do Destino
O IBS é cobrado integralmente no **destino**, eliminando:
- Guerra fiscal entre estados
- Planejamento tributário por localização
- Complexidade de cálculo interestadual

## 6. Conclusão

O IBS simplifica drasticamente o sistema tributário subnacional brasileiro. Empresas devem se preparar para:
1. Migração gradual de sistemas
2. Reavaliação de estratégias de localização
3. Aproveitamento de créditos unificados
4. Capacitação em nova legislação
    `;
  }

  private getConteudoArtigocClassTrib(): string {
    return `
## 1. Introdução

A **cClassTrib (Classificação Tributária)** é o novo código unificado que substitui os CSTs (Códigos de Situação Tributária) do PIS, COFINS e ICMS na nova sistemática CBS/IBS.

## 2. Estrutura da cClassTrib

### 2.1. Formato do Código

O código cClassTrib possui 3 dígitos numéricos:

\`\`\`
XXX
│││
││└── Situação específica (0-9)
│└─── Regime de tributação (0-9)
└──── Tipo de operação (0-9)
\`\`\`

### 2.2. Tabela Principal de cClassTrib

| Código | Descrição | Aplicação | Alíquota |
|--------|-----------|-----------|----------|
| 001 | Tributado integral | Operações normais | 100% |
| 002 | Tributado reduzido 60% | Saúde, educação | 40% |
| 003 | Tributado reduzido 30% | Alimentos | 70% |
| 010 | Alíquota zero | Lista específica | 0% |
| 020 | Isento | Exportação, imunidade | 0% |
| 030 | Não tributado | Fora do campo | N/A |
| 040 | Substituição tributária | Regime ST | Variável |
| 050 | Diferimento | Operações diferidas | 0% (momento) |

## 3. Mapeamento CST → cClassTrib

### 3.1. CST PIS/COFINS → cClassTrib

| CST Antigo | Descrição | cClassTrib | Nova Descrição |
|------------|-----------|------------|----------------|
| 01 | Tributável | 001 | Tributado integral |
| 02 | Alíquota zero | 010 | Alíquota zero |
| 03 | Isento | 020 | Isento |
| 04 | Não tributado | 030 | Não tributado |
| 05 | Substituição | 040 | ST |
| 06 | Alíquota zero TIPI | 010 | Alíquota zero |
| 07 | Isento TIPI | 020 | Isento |
| 08 | Sem incidência TIPI | 030 | Não tributado |

### 3.2. CST ICMS → cClassTrib

| CST ICMS | Descrição | cClassTrib | Observação |
|----------|-----------|------------|------------|
| 00 | Tributada integralmente | 001 | Mapeamento direto |
| 10 | Tributada com ST | 040 | Regime ST |
| 20 | Redução base cálculo | 002/003 | Conforme % |
| 30 | Isenta/não tributada ST | 040 | ST |
| 40 | Isenta | 020 | Isento |
| 41 | Não tributada | 030 | Não tributado |
| 50 | Suspensão | 050 | Diferimento |
| 51 | Diferimento | 050 | Diferimento |
| 60 | ICMS cobrado ST | 040 | ST |
| 70 | Redução + ST | 040 | ST |
| 90 | Outras | 001 | Análise caso |

## 4. Aplicação em Documentos Fiscais

### 4.1. Campos na NF-e

\`\`\`xml
<det nItem="1">
  <prod>
    <cProd>PROD001</cProd>
    <NCM>22030000</NCM>
    <cClassTrib>001</cClassTrib>
  </prod>
  <imposto>
    <CBS>
      <CST>01</CST>
      <vBC>100.00</vBC>
      <pCBS>12.00</pCBS>
      <vCBS>12.00</vCBS>
    </CBS>
    <IBS>
      <CST>01</CST>
      <vBC>100.00</vBC>
      <pIBS>15.00</pIBS>
      <vIBS>15.00</vIBS>
    </IBS>
  </imposto>
</det>
\`\`\`

## 5. Conclusão

A cClassTrib simplifica significativamente a classificação tributária. Recomenda-se:
1. Mapear todos os produtos/serviços para a nova classificação
2. Atualizar cadastros nos sistemas ERP
3. Validar com a equipe fiscal
4. Acompanhar atualizações da tabela oficial
    `;
  }

  private getConteudoArtigoServicos(): string {
    return `
## 1. Introdução

O setor de serviços sofre impactos significativos com a transição do **ISS** para o **IBS**. Este artigo analisa as mudanças específicas para prestadores de serviços.

## 2. Principais Mudanças

### 2.1. Comparativo ISS × IBS

| Aspecto | ISS (Antigo) | IBS (Novo) |
|---------|--------------|------------|
| Alíquota | 2% a 5% | 15% (com créditos) |
| Legislação | Municipal | Nacional |
| Local | Estabelecimento (regra) | Destino |
| Créditos | Não há | Amplo direito |
| Cumulatividade | Cumulativo | Não-cumulativo |

### 2.2. Impacto por Setor

| CNAE | Setor | ISS Atual | IBS | Variação Estimada |
|------|-------|-----------|-----|-------------------|
| 6201-5 | Desenvolvimento software | 2-5% | 15% | +200% a +650% |
| 6311-9 | Tratamento de dados | 2-5% | 15% | +200% a +650% |
| 6920-6 | Contabilidade | 2-5% | 15% | +200% a +650% |
| 6911-7 | Advocacia | 2-5% | 15% | +200% a +650% |

**Nota importante:** A variação bruta é alta, mas deve-se considerar o amplo direito a créditos no IBS.

## 3. Exemplo Prático: Empresa de TI

### Cenário
- Empresa de desenvolvimento de software
- Faturamento: R$ 100.000/mês
- Custos operacionais: R$ 40.000/mês

### Cálculo Comparativo

\`\`\`
ANTES (ISS):
Faturamento: R$ 100.000
ISS 5%: R$ 5.000
Carga efetiva: 5%

DEPOIS (IBS):
Faturamento: R$ 100.000
IBS bruto 15%: R$ 15.000
Créditos (custos × 15%): R$ 6.000
IBS líquido: R$ 9.000
Carga efetiva: 9%
\`\`\`

## 4. Conclusão

O setor de serviços precisa se adaptar ao novo modelo, aproveitando ao máximo os créditos disponíveis para mitigar o aumento nominal de alíquota.
    `;
  }

  private getConteudoArtigoInterestadual(): string {
    return `
## 1. Introdução

As operações interestaduais sofrem mudança radical com o IBS. O princípio do **destino** elimina a complexidade das alíquotas interestaduais do ICMS.

## 2. Comparativo: ICMS × IBS

### 2.1. Alíquotas Interestaduais ICMS (Extintas)

| Origem/Destino | Sul/Sudeste | Demais |
|----------------|-------------|--------|
| Sul/Sudeste | 12% | 7% |
| Demais | 12% | 12% |

### 2.2. IBS: Princípio do Destino

| Operação | Alíquota Origem | Alíquota Destino | Total |
|----------|-----------------|------------------|-------|
| Interestadual | 0% | 15% | 15% |
| Intraestadual | 0% | 15% | 15% |
| Importação | 0% | 15% | 15% |

**Resultado:** Tratamento uniforme para todas as operações.

## 3. Exemplo Prático

### Operação: Venda de SP para BA

\`\`\`
ANTES (ICMS):
Valor: R$ 10.000
ICMS origem SP: 7% = R$ 700
ICMS destino BA (DIFAL): ~10% = R$ 1.000
Complexidade: Alta (cálculo diferencial)

DEPOIS (IBS):
Valor: R$ 10.000
IBS destino BA: 15% = R$ 1.500
Complexidade: Baixa (alíquota única)
\`\`\`

## 4. Conclusão

O fim das alíquotas interestaduais simplifica enormemente as operações entre estados, beneficiando especialmente empresas com operações em múltiplos estados.
    `;
  }
}
