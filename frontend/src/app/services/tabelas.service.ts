import { Injectable } from '@angular/core';
import { TabelaTributaria, NCMRegistro, CSTMapeamento, cClassTribRegistro, TipoTabela } from '../models/tabela.model';

@Injectable({
  providedIn: 'root'
})
export class TabelasService {

  private tabelaNCMCBS: NCMRegistro[] = [
    {
      ncm: '2203.00.00',
      descricao: 'Cervejas de malte',
      cstAntigo: '01',
      novoCBS: 'Tributado',
      novoIBS: 'Tributado',
      cClassTrib: '001',
      aliquotaAntigaPIS: 2.32,
      aliquotaAntigaCOFINS: 10.68,
      aliquotaCBS: 12,
      aliquotaIBS: 15,
      observacoes: 'Regime monofásico extinto'
    },
    {
      ncm: '2106.90.10',
      descricao: 'Preparações compostas (bebidas)',
      cstAntigo: '01',
      novoCBS: 'Tributado',
      novoIBS: 'Tributado',
      cClassTrib: '001',
      aliquotaAntigaPIS: 1.65,
      aliquotaAntigaCOFINS: 7.6,
      aliquotaCBS: 12,
      aliquotaIBS: 15,
      observacoes: 'Alíquota padrão'
    },
    {
      ncm: '0401.10.10',
      descricao: 'Leite UHT integral',
      cstAntigo: '06',
      novoCBS: 'Alíquota zero',
      novoIBS: 'Alíquota zero',
      cClassTrib: '010',
      aliquotaAntigaPIS: 0,
      aliquotaAntigaCOFINS: 0,
      aliquotaCBS: 0,
      aliquotaIBS: 0,
      observacoes: 'Cesta básica - isento'
    },
    {
      ncm: '1006.30.21',
      descricao: 'Arroz beneficiado',
      cstAntigo: '06',
      novoCBS: 'Alíquota zero',
      novoIBS: 'Alíquota zero',
      cClassTrib: '010',
      aliquotaAntigaPIS: 0,
      aliquotaAntigaCOFINS: 0,
      aliquotaCBS: 0,
      aliquotaIBS: 0,
      observacoes: 'Cesta básica - isento'
    },
    {
      ncm: '1101.00.10',
      descricao: 'Farinha de trigo',
      cstAntigo: '06',
      novoCBS: 'Alíquota zero',
      novoIBS: 'Alíquota zero',
      cClassTrib: '010',
      aliquotaAntigaPIS: 0,
      aliquotaAntigaCOFINS: 0,
      aliquotaCBS: 0,
      aliquotaIBS: 0,
      observacoes: 'Cesta básica - isento'
    },
    {
      ncm: '1507.90.11',
      descricao: 'Óleo de soja refinado',
      cstAntigo: '06',
      novoCBS: 'Alíquota zero',
      novoIBS: 'Alíquota zero',
      cClassTrib: '010',
      aliquotaAntigaPIS: 0,
      aliquotaAntigaCOFINS: 0,
      aliquotaCBS: 0,
      aliquotaIBS: 0,
      observacoes: 'Cesta básica - isento'
    },
    {
      ncm: '0207.14.00',
      descricao: 'Pedaços de frango congelados',
      cstAntigo: '06',
      novoCBS: 'Alíquota zero',
      novoIBS: 'Alíquota zero',
      cClassTrib: '010',
      aliquotaAntigaPIS: 0,
      aliquotaAntigaCOFINS: 0,
      aliquotaCBS: 0,
      aliquotaIBS: 0,
      observacoes: 'Cesta básica - isento'
    },
    {
      ncm: '3004.90.99',
      descricao: 'Medicamentos diversos',
      cstAntigo: '02',
      novoCBS: 'Reduzido 60%',
      novoIBS: 'Reduzido 60%',
      cClassTrib: '002',
      aliquotaAntigaPIS: 0,
      aliquotaAntigaCOFINS: 0,
      aliquotaCBS: 4.8,
      aliquotaIBS: 6,
      observacoes: 'Saúde - redução 60%'
    },
    {
      ncm: '8517.12.00',
      descricao: 'Telefones celulares',
      cstAntigo: '01',
      novoCBS: 'Tributado',
      novoIBS: 'Tributado',
      cClassTrib: '001',
      aliquotaAntigaPIS: 1.65,
      aliquotaAntigaCOFINS: 7.6,
      aliquotaCBS: 12,
      aliquotaIBS: 15,
      observacoes: 'Alíquota padrão'
    },
    {
      ncm: '8471.30.19',
      descricao: 'Notebooks e laptops',
      cstAntigo: '01',
      novoCBS: 'Tributado',
      novoIBS: 'Tributado',
      cClassTrib: '001',
      aliquotaAntigaPIS: 1.65,
      aliquotaAntigaCOFINS: 7.6,
      aliquotaCBS: 12,
      aliquotaIBS: 15,
      observacoes: 'Alíquota padrão'
    },
    {
      ncm: '2710.19.21',
      descricao: 'Diesel S10',
      cstAntigo: '01',
      novoCBS: 'Monofásico CBS',
      novoIBS: 'Tributado',
      cClassTrib: '041',
      aliquotaAntigaPIS: 1.42,
      aliquotaAntigaCOFINS: 6.55,
      aliquotaCBS: 8,
      aliquotaIBS: 15,
      observacoes: 'Combustível - regime especial'
    },
    {
      ncm: '2710.12.59',
      descricao: 'Gasolina automotiva',
      cstAntigo: '01',
      novoCBS: 'Monofásico CBS',
      novoIBS: 'Tributado',
      cClassTrib: '041',
      aliquotaAntigaPIS: 2.56,
      aliquotaAntigaCOFINS: 11.82,
      aliquotaCBS: 10,
      aliquotaIBS: 15,
      observacoes: 'Combustível - regime especial'
    },
    {
      ncm: '8703.23.10',
      descricao: 'Automóveis 1500 a 3000cc',
      cstAntigo: '01',
      novoCBS: 'Tributado',
      novoIBS: 'Tributado',
      cClassTrib: '001',
      aliquotaAntigaPIS: 1.65,
      aliquotaAntigaCOFINS: 7.6,
      aliquotaCBS: 12,
      aliquotaIBS: 15,
      observacoes: 'Alíquota padrão + IPI'
    },
    {
      ncm: '4901.99.00',
      descricao: 'Livros impressos',
      cstAntigo: '03',
      novoCBS: 'Isento',
      novoIBS: 'Isento',
      cClassTrib: '020',
      aliquotaAntigaPIS: 0,
      aliquotaAntigaCOFINS: 0,
      aliquotaCBS: 0,
      aliquotaIBS: 0,
      observacoes: 'Imunidade cultural'
    },
    {
      ncm: '4902.90.00',
      descricao: 'Jornais e periódicos',
      cstAntigo: '03',
      novoCBS: 'Isento',
      novoIBS: 'Isento',
      cClassTrib: '020',
      aliquotaAntigaPIS: 0,
      aliquotaAntigaCOFINS: 0,
      aliquotaCBS: 0,
      aliquotaIBS: 0,
      observacoes: 'Imunidade cultural'
    }
  ];

  private tabelaCSTMapeamento: CSTMapeamento[] = [
    { cstAntigo: '01', descricaoAntiga: 'Operação Tributável', novoCBS: 'Tributado', descricaoCBS: 'Tributação normal CBS', novoIBS: 'Tributado', descricaoIBS: 'Tributação normal IBS', observacoes: 'Mapeamento direto' },
    { cstAntigo: '02', descricaoAntiga: 'Alíquota Zero', novoCBS: 'Alíquota Zero', descricaoCBS: 'Mantém tratamento', novoIBS: 'Alíquota Zero', descricaoIBS: 'Mantém tratamento', observacoes: 'Verificar lista atualizada' },
    { cstAntigo: '03', descricaoAntiga: 'Isento', novoCBS: 'Isento', descricaoCBS: 'Isenção CBS', novoIBS: 'Isento', descricaoIBS: 'Isenção IBS', observacoes: 'Imunidades mantidas' },
    { cstAntigo: '04', descricaoAntiga: 'Não Incidência', novoCBS: 'Não Tributado', descricaoCBS: 'Fora do campo', novoIBS: 'Não Tributado', descricaoIBS: 'Fora do campo', observacoes: 'Verificar nova lista' },
    { cstAntigo: '05', descricaoAntiga: 'Substituição Tributária', novoCBS: 'ST CBS', descricaoCBS: 'Regime ST CBS', novoIBS: 'ST IBS', descricaoIBS: 'Regime ST IBS', observacoes: 'Regras específicas setoriais' },
    { cstAntigo: '06', descricaoAntiga: 'Alíquota Zero (TIPI)', novoCBS: 'Alíquota Zero', descricaoCBS: 'TIPI integrada', novoIBS: 'Alíquota Zero', descricaoIBS: 'TIPI integrada', observacoes: 'Verificar NCM específico' },
    { cstAntigo: '07', descricaoAntiga: 'Isento (TIPI)', novoCBS: 'Isento', descricaoCBS: 'TIPI integrada', novoIBS: 'Isento', descricaoIBS: 'TIPI integrada', observacoes: 'Verificar NCM específico' },
    { cstAntigo: '08', descricaoAntiga: 'Sem Incidência (TIPI)', novoCBS: 'Não Tributado', descricaoCBS: 'TIPI integrada', novoIBS: 'Não Tributado', descricaoIBS: 'TIPI integrada', observacoes: 'Verificar NCM específico' },
    { cstAntigo: '09', descricaoAntiga: 'Outras Operações', novoCBS: 'Análise', descricaoCBS: 'Caso a caso', novoIBS: 'Análise', descricaoIBS: 'Caso a caso', observacoes: 'Consultar legislação' }
  ];

  private tabelacClassTrib: cClassTribRegistro[] = [
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

  getTabela(tipo: TipoTabela): TabelaTributaria {
    switch (tipo) {
      case 'ncm-cbs':
      case 'ncm-ibs':
        return {
          id: tipo,
          tipo: tipo,
          titulo: tipo === 'ncm-cbs' ? 'NCM × CBS' : 'NCM × IBS',
          descricao: `Enquadramento de NCMs no ${tipo === 'ncm-cbs' ? 'CBS' : 'IBS'} com alíquotas`,
          colunas: [
            { campo: 'ncm', titulo: 'NCM', tipo: 'codigo' },
            { campo: 'descricao', titulo: 'Descrição', tipo: 'texto' },
            { campo: 'cstAntigo', titulo: 'CST Antigo', tipo: 'codigo' },
            { campo: tipo === 'ncm-cbs' ? 'novoCBS' : 'novoIBS', titulo: tipo === 'ncm-cbs' ? 'Enquadramento CBS' : 'Enquadramento IBS', tipo: 'badge' },
            { campo: 'cClassTrib', titulo: 'cClassTrib', tipo: 'codigo' },
            { campo: tipo === 'ncm-cbs' ? 'aliquotaCBS' : 'aliquotaIBS', titulo: 'Alíquota %', tipo: 'percentual' },
            { campo: 'observacoes', titulo: 'Observações', tipo: 'texto' }
          ],
          dados: this.tabelaNCMCBS,
          ultimaAtualizacao: new Date('2026-01-15')
        };

      case 'cst-mapeamento':
      case 'transicao-pis-cofins':
        return {
          id: 'cst-mapeamento',
          tipo: 'cst-mapeamento',
          titulo: 'Mapeamento CST Antigo → Novo',
          descricao: 'Tabela de correspondência entre CSTs do PIS/COFINS e nova classificação CBS/IBS',
          colunas: [
            { campo: 'cstAntigo', titulo: 'CST Antigo', tipo: 'codigo' },
            { campo: 'descricaoAntiga', titulo: 'Descrição Antiga', tipo: 'texto' },
            { campo: 'novoCBS', titulo: 'Enquadramento CBS', tipo: 'badge' },
            { campo: 'novoIBS', titulo: 'Enquadramento IBS', tipo: 'badge' },
            { campo: 'observacoes', titulo: 'Observações', tipo: 'texto' }
          ],
          dados: this.tabelaCSTMapeamento,
          ultimaAtualizacao: new Date('2026-01-15')
        };

      case 'cClassTrib':
        return {
          id: 'cClassTrib',
          tipo: 'cClassTrib',
          titulo: 'Tabela cClassTrib - Classificação Tributária',
          descricao: 'Tabela completa de classificações tributárias unificadas do novo sistema',
          colunas: [
            { campo: 'codigo', titulo: 'Código', tipo: 'codigo' },
            { campo: 'descricao', titulo: 'Descrição', tipo: 'texto' },
            { campo: 'aplicacao', titulo: 'Aplicação', tipo: 'texto' },
            { campo: 'aliquotaPadrao', titulo: 'Alíquota Base %', tipo: 'percentual' },
            { campo: 'reducao', titulo: 'Redução %', tipo: 'percentual' },
            { campo: 'fundamentoLegal', titulo: 'Fundamento Legal', tipo: 'texto' }
          ],
          dados: this.tabelacClassTrib,
          ultimaAtualizacao: new Date('2026-01-15')
        };

      case 'aliquotas':
        return {
          id: 'aliquotas',
          tipo: 'aliquotas',
          titulo: 'Alíquotas Comparativas: Antes × Depois',
          descricao: 'Comparação das alíquotas do modelo antigo (PIS/COFINS/ICMS/ISS) com o novo (CBS/IBS)',
          colunas: [
            { campo: 'ncm', titulo: 'NCM', tipo: 'codigo' },
            { campo: 'descricao', titulo: 'Produto', tipo: 'texto' },
            { campo: 'aliquotaAntigaPIS', titulo: 'PIS %', tipo: 'percentual' },
            { campo: 'aliquotaAntigaCOFINS', titulo: 'COFINS %', tipo: 'percentual' },
            { campo: 'aliquotaCBS', titulo: 'CBS %', tipo: 'percentual' },
            { campo: 'aliquotaIBS', titulo: 'IBS %', tipo: 'percentual' }
          ],
          dados: this.tabelaNCMCBS,
          ultimaAtualizacao: new Date('2026-01-15')
        };

      default:
        return this.getTabela('ncm-cbs');
    }
  }

  getTiposDisponiveis(): TipoTabela[] {
    return ['transicao-pis-cofins', 'ncm-cbs', 'ncm-ibs', 'cst-mapeamento', 'aliquotas', 'cClassTrib'];
  }

  buscarNCM(termo: string): NCMRegistro[] {
    const termoLower = termo.toLowerCase();
    return this.tabelaNCMCBS.filter(r =>
      r.ncm.includes(termo) ||
      r.descricao.toLowerCase().includes(termoLower)
    );
  }
}
