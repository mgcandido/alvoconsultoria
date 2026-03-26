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
    destaque: true,
    conteudo: `
      <h2>1. Introdução</h2>
      <p>A Reforma Tributária de 2026 promove uma das maiores mudanças na tributação federal das últimas décadas: a extinção do PIS (Programa de Integração Social) e da COFINS (Contribuição para o Financiamento da Seguridade Social), substituídos pela <strong>CBS — Contribuição sobre Bens e Serviços</strong>.</p>
      <p>A transição é estrutural e afeta diretamente as obrigações acessórias, os cálculos de crédito, os enquadramentos de NCM e os sistemas fiscais de todas as empresas sujeitas ao regime não cumulativo.</p>

      <h2>2. Contexto Legal e Conceitual</h2>
      <p>A CBS foi instituída pela <strong>Lei Complementar nº XXX/2025</strong>, em conformidade com a Emenda Constitucional nº 132/2023. Segue o modelo de IVA (Imposto sobre Valor Agregado), com as seguintes características:</p>
      <ul>
        <li><strong>Alíquota única federal:</strong> 12% sobre o valor da operação</li>
        <li><strong>Não cumulatividade plena:</strong> crédito irrestrito sobre todas as entradas tributadas</li>
        <li><strong>Base ampla:</strong> incide sobre bens e serviços, eliminando distinções do modelo antigo</li>
        <li><strong>Destino:</strong> receita vai para a União Federal</li>
      </ul>

      <h2>3. Como Era Antes (PIS/COFINS)</h2>
      <p>O modelo anterior era marcado pela complexidade e pela coexistência de dois regimes:</p>

      <div class="article-callout article-callout--warning">
        <i class="ph ph-warning"></i>
        <div>
          <strong>Regime Cumulativo (Lucro Presumido / Simples)</strong>
          <p>PIS: 0,65% | COFINS: 3,00% — sem aproveitamento de créditos</p>
        </div>
      </div>
      <div class="article-callout article-callout--info">
        <i class="ph ph-info"></i>
        <div>
          <strong>Regime Não Cumulativo (Lucro Real)</strong>
          <p>PIS: 1,65% | COFINS: 7,60% — com aproveitamento de créditos sobre entradas</p>
        </div>
      </div>

      <h2>4. Como Fica com a CBS</h2>
      <p>A CBS unifica os dois tributos em um único com alíquota de <strong>12%</strong>, regime não cumulativo para todos, e crédito amplo. A tabela abaixo compara os cenários:</p>

      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Aspecto</th>
              <th>PIS/COFINS Antigo</th>
              <th>CBS Novo</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Alíquota total</td><td>1,65% + 7,60% = 9,25% (não cum.)</td><td>12%</td></tr>
            <tr><td>Regimes</td><td>Cumulativo e Não Cumulativo</td><td>Único (não cumulativo)</td></tr>
            <tr><td>Crédito</td><td>Restrito (lista de insumos)</td><td>Amplo (todas as entradas tributadas)</td></tr>
            <tr><td>Obrigação acessória</td><td>EFD-Contribuições</td><td>EFD-CBS</td></tr>
            <tr><td>Vigência</td><td>Extinção em 01/01/2027</td><td>A partir de 01/01/2027</td></tr>
            <tr><td>Simples Nacional</td><td>Incluído na alíquota unificada</td><td>Regime diferenciado mantido</td></tr>
          </tbody>
        </table>
      </div>

      <h2>5. Mapeamento de CSTs Antigos para CBS/IBS</h2>
      <p>Cada CST do PIS/COFINS tem um equivalente no novo sistema CBS/IBS. O campo <strong>cClassTrib</strong> (6 dígitos, conforme IT 2025.002) substitui definitivamente o CST. Os 3 primeiros dígitos correspondem ao novo CST IBS/CBS; os 3 últimos ao sub-código específico vinculado à LC 214/2025:</p>

      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>CST Antigo</th>
              <th>Descrição</th>
              <th>CST Novo</th>
              <th>cClassTrib</th>
              <th>Fundamento Legal</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>01</code></td><td>Operação Tributável — Alíquota Normal</td><td><code>000</code></td><td><code>000001</code></td><td>Art. 4º, LC 214/2025</td></tr>
            <tr><td><code>02</code></td><td>Operação Tributável — Alíquota Diferenciada</td><td><code>200</code></td><td><code>200034</code> / <code>200029</code> / ...</td><td>Art. 135/130, LC 214/2025</td></tr>
            <tr><td><code>03</code></td><td>Alíquota Zero</td><td><code>200</code></td><td><code>200003</code> / <code>200009</code></td><td>Arts. 125/146, LC 214/2025</td></tr>
            <tr><td><code>04</code></td><td>Substituição Tributária — Monofásica</td><td><code>620</code></td><td><code>620001</code></td><td>Art. 172, LC 214/2025</td></tr>
            <tr><td><code>06</code></td><td>Alíquota Zero (TIPI)</td><td><code>200</code></td><td><code>200003</code> / <code>200009</code></td><td>Verificar Anexo I ou XIV</td></tr>
            <tr><td><code>07</code></td><td>Isento</td><td><code>400</code></td><td><code>400001</code></td><td>Art. 157, LC 214/2025</td></tr>
            <tr><td><code>08</code></td><td>Sem Incidência / Não Tributado</td><td><code>410</code></td><td><code>410008</code> / <code>410999</code></td><td>Art. 9º / 4º, LC 214/2025</td></tr>
            <tr><td><code>09</code></td><td>Outras Operações</td><td>—</td><td>—</td><td>Análise caso a caso</td></tr>
          </tbody>
        </table>
      </div>

      <h2>6. Impactos Práticos para Empresas</h2>

      <h3>6.1 Operacionais</h3>
      <ul>
        <li>Revisão de todos os cadastros de NCM e enquadramentos tributários</li>
        <li>Atualização dos sistemas ERP para emissão com CBS e cClassTrib</li>
        <li>Substituição da EFD-Contribuições pela EFD-CBS</li>
        <li>Treinamento das equipes fiscal e contábil</li>
      </ul>

      <h3>6.2 Financeiros</h3>
      <ul>
        <li>Empresas do Lucro Real: variação de carga tributária de acordo com o setor</li>
        <li>Empresas do Lucro Presumido: aumento de carga (passam de 3,65% para 12%, porém com créditos)</li>
        <li>Créditos de entradas: ampliação significativa do direito a crédito</li>
      </ul>

      <h2>7. Exemplo Prático</h2>
      <p>Indústria de Alimentos — Produto: Biscoito Salgado (NCM 1905.31.00)</p>

      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>Item</th><th>Modelo Antigo</th><th>Modelo CBS</th></tr>
          </thead>
          <tbody>
            <tr><td>Valor da venda</td><td>R$ 10.000,00</td><td>R$ 10.000,00</td></tr>
            <tr><td>PIS/CBS</td><td>R$ 165,00 (1,65%)</td><td>R$ 1.200,00 (12%)</td></tr>
            <tr><td>COFINS</td><td>R$ 760,00 (7,60%)</td><td>— (extinta)</td></tr>
            <tr><td>Crédito de entradas</td><td>R$ 400,00</td><td>R$ 960,00 (ampliado)</td></tr>
            <tr><td><strong>Tributo líquido</strong></td><td><strong>R$ 525,00</strong></td><td><strong>R$ 240,00</strong></td></tr>
          </tbody>
        </table>
      </div>
      <p>Neste exemplo, a ampliação do crédito de entradas compensou o aumento de alíquota, resultando em redução da carga efetiva.</p>

      <h2>8. Orientações Operacionais</h2>
      <div class="article-callout article-callout--success">
        <i class="ph ph-check-circle"></i>
        <div>
          <strong>Checklist de Adequação</strong>
          <ul>
            <li>Mapear todos os produtos/serviços com seu CST atual e novo cClassTrib</li>
            <li>Atualizar cadastros de fornecedores e clientes no ERP</li>
            <li>Validar a EFD-CBS junto ao contador responsável</li>
            <li>Calcular impacto financeiro da transição com base no perfil de créditos</li>
            <li>Monitorar publicações do Comitê Gestor e Receita Federal</li>
          </ul>
        </div>
      </div>

      <h2>9. Conclusão</h2>
      <p>A CBS representa uma simplificação estrutural do sistema tributário federal, mas exige um processo cuidadoso de adequação. Empresas que se prepararem com antecedência — especialmente no mapeamento de NCMs, cClassTrib e ajustes no ERP — terão vantagem competitiva e menor risco de autuação durante a transição.</p>
    `
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
    destaque: true,
    conteudo: `
      <h2>1. Introdução</h2>
      <p>O <strong>IBS — Imposto sobre Bens e Serviços</strong> representa a unificação do ICMS (tributo estadual) e do ISS (tributo municipal) em um único imposto de competência compartilhada, com gestão centralizada pelo <strong>Comitê Gestor do IBS (CG-IBS)</strong>.</p>
      <p>Esta unificação é a mudança mais estrutural para estados e municípios, pondo fim à guerra fiscal e harmonizando a tributação do consumo em todo o território nacional.</p>

      <h2>2. Base Legal</h2>
      <p>O IBS está previsto na <strong>Emenda Constitucional nº 132/2023</strong> e regulamentado pela <strong>Lei Complementar nº XXX/2025</strong>. Sua vigência inicia em 2027, com transição gradual até 2032.</p>

      <h2>3. Estrutura do IBS</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>Componente</th><th>Ente</th><th>Alíquota Padrão</th></tr>
          </thead>
          <tbody>
            <tr><td>IBS Estadual</td><td>Estados</td><td>12%</td></tr>
            <tr><td>IBS Municipal</td><td>Municípios</td><td>3%</td></tr>
            <tr><td><strong>IBS Total</strong></td><td>CG-IBS (rateio)</td><td><strong>15%</strong></td></tr>
          </tbody>
        </table>
      </div>

      <h2>4. Como Era Antes</h2>
      <h3>4.1 ICMS (Estadual)</h3>
      <ul>
        <li>Competência: cada estado legislava individualmente</li>
        <li>Alíquotas: 7% a 25%, variando por estado e produto</li>
        <li>Operações interestaduais: regras complexas de partilha e DIFAL</li>
        <li>Guerra fiscal: benefícios fiscais regionais geravam distorções</li>
      </ul>
      <h3>4.2 ISS (Municipal)</h3>
      <ul>
        <li>Competência: cada município definia alíquotas entre 2% e 5%</li>
        <li>5.570 municípios com legislações distintas</li>
        <li>Conflitos de competência na definição do local do serviço</li>
      </ul>

      <h2>5. Como Fica com o IBS</h2>
      <div class="article-callout article-callout--info">
        <i class="ph ph-info"></i>
        <div>
          <strong>Princípio do Destino</strong>
          <p>O IBS é cobrado no local de consumo do bem ou serviço, não na origem. Isso elimina a guerra fiscal e uniformiza a tributação nacional.</p>
        </div>
      </div>
      <ul>
        <li><strong>Alíquota uniforme:</strong> 15% em todo o território nacional</li>
        <li><strong>Não cumulatividade plena:</strong> crédito irrestrito sobre todas as entradas</li>
        <li><strong>Gestão centralizada:</strong> o CG-IBS arrecada e distribui proporcionalmente</li>
        <li><strong>Fim do DIFAL:</strong> operações interestaduais simplificadas</li>
      </ul>

      <h2>6. Transição Gradual (2027–2032)</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>Ano</th><th>ICMS/ISS</th><th>IBS</th><th>Observação</th></tr>
          </thead>
          <tbody>
            <tr><td>2027</td><td>90%</td><td>10%</td><td>Início da transição</td></tr>
            <tr><td>2028</td><td>80%</td><td>20%</td><td>Coexistência de regimes</td></tr>
            <tr><td>2029</td><td>60%</td><td>40%</td><td>IBS se torna relevante</td></tr>
            <tr><td>2030</td><td>40%</td><td>60%</td><td>IBS passa a ser majoritário</td></tr>
            <tr><td>2031</td><td>20%</td><td>80%</td><td>Fase final de transição</td></tr>
            <tr><td>2032</td><td>0%</td><td>100%</td><td>Extinção do ICMS/ISS</td></tr>
          </tbody>
        </table>
      </div>

      <h2>7. Impactos por Setor</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>Setor</th><th>Carga Anterior</th><th>Carga IBS</th><th>Impacto</th></tr>
          </thead>
          <tbody>
            <tr><td>Indústria (SP)</td><td>12% ICMS</td><td>15% IBS</td><td>↑ Leve aumento</td></tr>
            <tr><td>Comércio Varejo</td><td>18% ICMS</td><td>15% IBS</td><td>↓ Redução</td></tr>
            <tr><td>Serviços de TI</td><td>5% ISS</td><td>15% IBS</td><td>↑ Aumento (com crédito)</td></tr>
            <tr><td>Transportadora</td><td>12% ICMS interestadual</td><td>15% IBS destino</td><td>Simplificação</td></tr>
            <tr><td>Saúde/Educação</td><td>Variado</td><td>Redução 60% IBS</td><td>↓ Redução</td></tr>
          </tbody>
        </table>
      </div>

      <h2>8. Exemplo Prático — Serviço de Consultoria</h2>
      <p>Empresa de São Paulo prestando serviço para cliente no Rio de Janeiro:</p>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>Aspecto</th><th>Modelo ISS Antigo</th><th>Modelo IBS Novo</th></tr>
          </thead>
          <tbody>
            <tr><td>Valor do serviço</td><td>R$ 50.000,00</td><td>R$ 50.000,00</td></tr>
            <tr><td>Tributo</td><td>ISS 5% para SP</td><td>IBS 15% para RJ (destino)</td></tr>
            <tr><td>Valor do tributo</td><td>R$ 2.500,00</td><td>R$ 7.500,00 - créditos</td></tr>
            <tr><td>Crédito de entradas</td><td>Não havia</td><td>Dedutível das entradas</td></tr>
            <tr><td>Competência</td><td>Município SP</td><td>Município RJ</td></tr>
          </tbody>
        </table>
      </div>

      <h2>9. Orientações Operacionais</h2>
      <div class="article-callout article-callout--success">
        <i class="ph ph-check-circle"></i>
        <div>
          <strong>Pontos de Atenção</strong>
          <ul>
            <li>Revisar contratos com cláusula de reajuste tributário para 2027–2032</li>
            <li>Atualizar o ERP para emissão de NF-e/NFS-e com IBS</li>
            <li>Identificar o local de destino de cada operação</li>
            <li>Aproveitar créditos de IBS sobre todas as entradas tributadas</li>
            <li>Monitorar alíquotas específicas definidas pelo CG-IBS por setor</li>
          </ul>
        </div>
      </div>

      <h2>10. Conclusão</h2>
      <p>O IBS representa uma simplificação histórica do sistema tributário subnacional. A transição de 6 anos (2027–2032) oferece tempo para adequação, mas exige planejamento imediato — especialmente para setores como serviços, que terão aumento significativo de alíquota nominal, ainda que compensado pela não cumulatividade plena.</p>
    `
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
    destaque: false,
    conteudo: `
      <h2>1. O Que é a cClassTrib?</h2>
      <p>A <strong>cClassTrib (Classificação Tributária)</strong> é o novo código de <strong>6 dígitos</strong> que substitui o antigo CST (Código de Situação Tributária) na identificação do tratamento tributário de operações com CBS e IBS, conforme definido no <strong>Informe Técnico RT 2025.002 v1.40</strong> e na <strong>LC 214/2025</strong>.</p>
      <p>Diferente do sistema antigo — que possuía CSTs separados para PIS, COFINS e ICMS —, a cClassTrib é <strong>unificada</strong>: um único código identifica o enquadramento fiscal tanto para CBS quanto para IBS, vinculando diretamente ao dispositivo legal da LC 214/2025.</p>

      <h2>2. Estrutura do Código</h2>
      <div class="article-callout article-callout--info">
        <i class="ph ph-info"></i>
        <div>
          <strong>Formato: AAABBB (6 dígitos numéricos)</strong>
          <ul>
            <li><strong>AAA</strong> = CST IBS/CBS (Código de Situação Tributária) — ex: 000, 200, 400, 410, 510, 550, 620</li>
            <li><strong>BBB</strong> = Sub-código específico vinculado ao dispositivo da LC 214/2025 — ex: 001, 003, 008, 009</li>
          </ul>
        </div>
      </div>

      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>CST (AAA)</th><th>Situação Tributária</th><th>Exemplos de cClassTrib</th></tr>
          </thead>
          <tbody>
            <tr><td><code>000</code></td><td>Tributação integral (alíquotas plenas)</td><td><code>000001</code>, <code>000002</code></td></tr>
            <tr><td><code>200</code></td><td>Alíquota reduzida / zero (cesta básica, saúde, educação...)</td><td><code>200003</code>, <code>200009</code>, <code>200028</code>, <code>200034</code>...</td></tr>
            <tr><td><code>400</code></td><td>Isenção legal</td><td><code>400001</code></td></tr>
            <tr><td><code>410</code></td><td>Imunidade e não incidência</td><td><code>410004</code>, <code>410008</code>, <code>410999</code></td></tr>
            <tr><td><code>510</code></td><td>Diferimento</td><td><code>510001</code></td></tr>
            <tr><td><code>515</code></td><td>Diferimento com redução de alíquota</td><td><code>515001</code></td></tr>
            <tr><td><code>550</code></td><td>Suspensão (regimes aduaneiros/REIDI)</td><td><code>550001</code>, <code>550016</code></td></tr>
            <tr><td><code>620</code></td><td>Tributação monofásica (combustíveis)</td><td><code>620001</code>, <code>620002</code></td></tr>
          </tbody>
        </table>
      </div>

      <h2>3. Principais cClassTrib e suas Aplicações</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>cClassTrib</th>
              <th>Nome</th>
              <th>Aplicação Prática</th>
              <th>Redução CBS/IBS</th>
              <th>Fundamento Legal</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>000001</code></td><td>Tributado Integralmente</td><td>Produtos gerais, eletrônicos, veículos, bebidas</td><td>0%</td><td>Art. 4º, LC 214/2025</td></tr>
            <tr><td><code>200003</code></td><td>Cesta Básica Nacional</td><td>Arroz, feijão, leite, óleos, carnes, farinha</td><td>100% (alíq. zero)</td><td>Art. 125, LC 214/2025</td></tr>
            <tr><td><code>200004</code></td><td>Dispositivos Médicos</td><td>Aparelhos médico-cirúrgicos (Anexo XII)</td><td>60%</td><td>Art. 144, LC 214/2025</td></tr>
            <tr><td><code>200009</code></td><td>Medicamentos — Alíq. Zero</td><td>Medicamentos do Anexo XIV (Anvisa)</td><td>100% (alíq. zero)</td><td>Art. 146, LC 214/2025</td></tr>
            <tr><td><code>200028</code></td><td>Serviços de Educação</td><td>Escolas, universidades, cursos (Anexo II)</td><td>60%</td><td>Art. 129, LC 214/2025</td></tr>
            <tr><td><code>200029</code></td><td>Serviços de Saúde</td><td>Hospitais, clínicas, consultas (Anexo III)</td><td>60%</td><td>Art. 130, LC 214/2025</td></tr>
            <tr><td><code>200032</code></td><td>Medicamentos Anvisa</td><td>Medicamentos registrados (não no Anexo XIV)</td><td>60%</td><td>Art. 133, LC 214/2025</td></tr>
            <tr><td><code>200034</code></td><td>Alimentos Consumo Humano</td><td>Pães, biscoitos, massas (Anexo VII)</td><td>60%</td><td>Art. 135, LC 214/2025</td></tr>
            <tr><td><code>200036</code></td><td>Agropecuários In Natura</td><td>Soja, milho, frutas, hortaliças, gado</td><td>60%</td><td>Art. 137, LC 214/2025</td></tr>
            <tr><td><code>200047</code></td><td>Bares e Restaurantes</td><td>Fornecimento de alimentação (refeições)</td><td>40%</td><td>Art. 275, LC 214/2025</td></tr>
            <tr><td><code>200052</code></td><td>Profissões Liberais</td><td>Advogados, contadores, engenheiros, médicos</td><td>30%</td><td>Art. 127, LC 214/2025</td></tr>
            <tr><td><code>400001</code></td><td>Isenção — Transp. Urbano</td><td>Ônibus, metrô e VLT urbano/semiurbano</td><td>100% (isento)</td><td>Art. 157, LC 214/2025</td></tr>
            <tr><td><code>410004</code></td><td>Exportações</td><td>Exportação de bens e serviços</td><td>100% (imune)</td><td>Art. 8º, LC 214/2025</td></tr>
            <tr><td><code>410008</code></td><td>Livros, Jornais e Periódicos</td><td>Imunidade constitucional — livros/mídia impressa</td><td>100% (imune)</td><td>Art. 150, VI, d, CF/88</td></tr>
            <tr><td><code>510001</code></td><td>Diferimento — Energia</td><td>Geração e distribuição de energia elétrica</td><td>100% (diferido)</td><td>Art. 28, LC 214/2025</td></tr>
            <tr><td><code>620001</code></td><td>Monofásico — Combustíveis</td><td>Gasolina, diesel, etanol — tributação na refinaria</td><td>—</td><td>Arts. 172–179, LC 214/2025</td></tr>
          </tbody>
        </table>
      </div>

      <h2>4. Diferença entre Alíquota Zero, Isenção e Imunidade</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>Aspecto</th><th>Alíquota Zero (CST 200)</th><th>Isenção (CST 400)</th><th>Imunidade (CST 410)</th></tr>
          </thead>
          <tbody>
            <tr><td>Fundamento</td><td>Lei Complementar</td><td>Lei Complementar</td><td>Constituição Federal</td></tr>
            <tr><td>Direito a crédito</td><td>Sim, nas entradas</td><td>Verificar caso a caso</td><td>Sim, nas entradas tributadas</td></tr>
            <tr><td>Exemplos</td><td>Cesta básica, medicamentos Anvisa</td><td>Transporte público urbano</td><td>Livros, jornais, exportações</td></tr>
            <tr><td>Exemplo cClassTrib</td><td><code>200003</code>, <code>200009</code></td><td><code>400001</code></td><td><code>410008</code>, <code>410004</code></td></tr>
          </tbody>
        </table>
      </div>

      <h2>5. Exemplos Práticos de Enquadramento por NCM</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>NCM</th><th>Produto</th><th>CST</th><th>cClassTrib</th><th>Justificativa</th></tr>
          </thead>
          <tbody>
            <tr><td><code>1006.30.21</code></td><td>Arroz beneficiado</td><td><code>200</code></td><td><code>200003</code></td><td>Cesta Básica Nacional — Alíquota zero</td></tr>
            <tr><td><code>3004.90.99</code></td><td>Medicamentos (Anvisa)</td><td><code>200</code></td><td><code>200032</code></td><td>Medicamento registrado — redução 60%</td></tr>
            <tr><td><code>8517.12.00</code></td><td>Smartphones</td><td><code>000</code></td><td><code>000001</code></td><td>Tributação integral</td></tr>
            <tr><td><code>4901.99.00</code></td><td>Livros impressos</td><td><code>410</code></td><td><code>410008</code></td><td>Imunidade constitucional — Art. 150 CF</td></tr>
            <tr><td><code>2710.12.59</code></td><td>Gasolina automotiva</td><td><code>620</code></td><td><code>620001</code></td><td>Tributação monofásica — refinaria</td></tr>
            <tr><td><code>0401.10.10</code></td><td>Leite UHT integral</td><td><code>200</code></td><td><code>200003</code></td><td>Cesta Básica Nacional — Alíquota zero</td></tr>
            <tr><td><code>9018.11.00</code></td><td>Eletrocardiógrafos</td><td><code>200</code></td><td><code>200004</code></td><td>Dispositivo médico (Anexo XII) — red. 60%</td></tr>
            <tr><td><code>1905.31.00</code></td><td>Biscoitos salgados</td><td><code>200</code></td><td><code>200034</code></td><td>Alimentos consumo humano (Anexo VII) — red. 60%</td></tr>
          </tbody>
        </table>
      </div>

      <h2>6. Como Atualizar nos Sistemas</h2>
      <ul>
        <li>Mapear todos os produtos/serviços com o CST atual → novo cClassTrib (6 dígitos)</li>
        <li>Atualizar tabelas de tributação no ERP (campo <code>cClassTrib</code> no leiaute NF-e conforme NT 2025.002)</li>
        <li>Prestar atenção no CST IBS/CBS: são diferentes dos CSTs do PIS/COFINS e do ICMS</li>
        <li>Validar o leiaute com as tabelas oficiais disponíveis no Portal da NF-e (nfe.fazenda.gov.br)</li>
        <li>Treinar a equipe fiscal: cada cClassTrib vincula-se a um artigo específico da LC 214/2025</li>
      </ul>

      <div class="article-callout article-callout--warning">
        <i class="ph ph-warning"></i>
        <div>
          <strong>Atenção — Obrigatoriedade e Riscos</strong>
          <p>A partir de janeiro de 2026, o preenchimento de <strong>CST</strong> e <strong>cClassTrib</strong> é obrigatório e validado na autorização do documento fiscal. Código errado = rejeição da NF-e. Além disso, erros sistemáticos podem gerar autuações por tributação indevida ou crédito indevido, com multas e juros.</p>
        </div>
      </div>

      <h2>7. Conclusão</h2>
      <p>A cClassTrib (6 dígitos) é o coração operacional do novo sistema tributário brasileiro. Seu correto enquadramento é obrigatório nas NF-e, NFS-e, CT-e, NFCom e demais DFe, além da EFD-CBS. Empresas que mapearem seus produtos e serviços com antecedência — identificando o CST e o cClassTrib corretos para cada NCM ou CNAE — estarão preparadas para a vigência plena da Reforma Tributária a partir de 01/01/2027.</p>
    `
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
    destaque: false,
    conteudo: `
      <h2>1. Introdução</h2>
      <p>O setor de serviços é um dos mais impactados pela Reforma Tributária de 2026. A transição do ISS (2% a 5%) para o IBS (15%) representa uma mudança significativa de carga nominal — ainda que compensada pela não cumulatividade plena, que antes era praticamente inexistente para serviços.</p>

      <h2>2. Cenário Anterior — ISS</h2>
      <ul>
        <li>Alíquota: de 2% a 5% definida por cada município</li>
        <li>Sem crédito de entradas (tributo cumulativo)</li>
        <li>Conflitos de competência: onde a nota é emitida × onde o serviço é prestado</li>
        <li>5.570 legislações municipais distintas</li>
        <li>Retenção na fonte: regras diferentes em cada cidade</li>
      </ul>

      <h2>3. Cenário Novo — IBS para Serviços</h2>
      <div class="article-callout article-callout--info">
        <i class="ph ph-info"></i>
        <div>
          <strong>Mudança central</strong>
          <p>O IBS para serviços é cobrado no <strong>local de consumo (destino)</strong>, não mais no município do prestador. Isso elimina conflitos de competência e a guerra fiscal municipal.</p>
        </div>
      </div>
      <ul>
        <li>Alíquota padrão: 15% (12% estadual + 3% municipal)</li>
        <li>Não cumulatividade plena: crédito sobre todos os insumos tributados</li>
        <li>Gestão: CG-IBS arrecada e distribui ao município de destino</li>
        <li>Retenção simplificada pelo tomador do serviço</li>
      </ul>

      <h2>4. Impacto por CNAE — Comparativo</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>CNAE</th>
              <th>Segmento</th>
              <th>ISS Antigo</th>
              <th>IBS Novo</th>
              <th>cClassTrib</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>6201-5</code></td><td>Desenvolvimento de Software</td><td>2%–5%</td><td>15%</td><td>001</td></tr>
            <tr><td><code>6920-6</code></td><td>Contabilidade</td><td>2%–5%</td><td>15%</td><td>001</td></tr>
            <tr><td><code>8599-6</code></td><td>Ensino/Educação Privada</td><td>2%–5%</td><td>6% (redução 60%)</td><td>002</td></tr>
            <tr><td><code>8621-6</code></td><td>Serviços Médicos</td><td>2%–5%</td><td>6% (redução 60%)</td><td>002</td></tr>
            <tr><td><code>4912-4</code></td><td>Transporte Rodoviário</td><td>ICMS (2,5%–12%)</td><td>6% (redução 60%)</td><td>002</td></tr>
            <tr><td><code>5611-2</code></td><td>Restaurantes</td><td>ISS 5% + ICMS</td><td>15% IBS</td><td>001</td></tr>
            <tr><td><code>7111-1</code></td><td>Arquitetura e Eng.</td><td>2%–5%</td><td>15%</td><td>001</td></tr>
            <tr><td><code>7020-4</code></td><td>Consultoria de Gestão</td><td>2%–5%</td><td>15%</td><td>001</td></tr>
          </tbody>
        </table>
      </div>

      <h2>5. Exemplo Prático — Empresa de TI</h2>
      <p>Empresa de desenvolvimento de software (Lucro Real), faturamento mensal: R$ 200.000,00</p>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>Tributo</th><th>Modelo Antigo</th><th>Modelo Novo</th></tr>
          </thead>
          <tbody>
            <tr><td>ISS (2%)</td><td>R$ 4.000,00</td><td>— (extinto)</td></tr>
            <tr><td>PIS (1,65%)</td><td>R$ 3.300,00</td><td>— (extinto)</td></tr>
            <tr><td>COFINS (7,6%)</td><td>R$ 15.200,00</td><td>— (extinto)</td></tr>
            <tr><td>CBS (12%)</td><td>—</td><td>R$ 24.000,00</td></tr>
            <tr><td>IBS (15%)</td><td>—</td><td>R$ 30.000,00</td></tr>
            <tr><td>Crédito de entradas</td><td>R$ 2.500,00</td><td>R$ 12.000,00 (ampliado)</td></tr>
            <tr><td><strong>Tributo líquido</strong></td><td><strong>R$ 20.000,00</strong></td><td><strong>R$ 42.000,00</strong></td></tr>
          </tbody>
        </table>
      </div>
      <div class="article-callout article-callout--warning">
        <i class="ph ph-warning"></i>
        <div>
          <strong>Atenção — Setor de Serviços</strong>
          <p>Para empresas de serviços com poucos insumos tributáveis (como consultorias), o aumento de carga pode ser significativo mesmo com a não cumulatividade. O planejamento tributário é essencial para mitigar o impacto.</p>
        </div>
      </div>

      <h2>6. Setores com Benefício de Redução</h2>
      <p>A LC XXX/2025 prevê redução de 60% da alíquota para:</p>
      <ul>
        <li>Educação básica e superior</li>
        <li>Saúde (serviços médicos, hospitalares e odontológicos)</li>
        <li>Transporte coletivo de passageiros</li>
        <li>Produtos agropecuários (insumos)</li>
        <li>Serviços de comunicação (internet e telefonia residencial)</li>
      </ul>

      <h2>7. Orientações para Prestadores de Serviços</h2>
      <div class="article-callout article-callout--success">
        <i class="ph ph-check-circle"></i>
        <div>
          <strong>Passo a Passo</strong>
          <ul>
            <li>Identificar o CNAE de cada serviço prestado e seu cClassTrib correspondente</li>
            <li>Verificar se o segmento tem direito à redução de alíquota</li>
            <li>Revisar os contratos de prestação de serviço (cláusulas de reajuste por tributos)</li>
            <li>Mapear insumos tributáveis para maximizar créditos de CBS/IBS</li>
            <li>Adaptar o sistema de NFS-e para emissão com IBS e cClassTrib</li>
          </ul>
        </div>
      </div>

      <h2>8. Conclusão</h2>
      <p>O setor de serviços enfrenta o maior desafio da Reforma: aumento nominal de alíquota de até 3x (de 5% ISS para 15% IBS). Porém, a não cumulatividade plena e as reduções setoriais podem mitigar — e em alguns casos reverter — esse aumento. O planejamento tributário e a correta identificação do CNAE e cClassTrib são essenciais para o sucesso na transição.</p>
    `
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
    destaque: false,
    conteudo: `
      <h2>1. Introdução</h2>
      <p>As operações interestaduais eram a maior fonte de complexidade do ICMS: alíquotas diferentes por estado de origem e destino, DIFAL (Diferencial de Alíquota), partilha entre estados, Protocolo ICMS e Convênios CONFAZ. Com o IBS, toda essa estrutura é substituída por uma lógica simples: <strong>tributação no destino, alíquota única.</strong></p>

      <h2>2. Como Funcionava o ICMS Interestadual</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>Rota</th><th>Alíquota Interestadual</th><th>Alíquota Interna Destino</th><th>DIFAL</th></tr>
          </thead>
          <tbody>
            <tr><td>Sul/Sudeste → Norte/NE/CO</td><td>7%</td><td>17%–20%</td><td>10%–13%</td></tr>
            <tr><td>Demais → Demais</td><td>12%</td><td>17%–20%</td><td>5%–8%</td></tr>
            <tr><td>Operações internas SP</td><td>—</td><td>18%</td><td>—</td></tr>
          </tbody>
        </table>
      </div>
      <p>Além do DIFAL, havia o FECP (Fundo Estadual de Combate à Pobreza), Substituição Tributária diferenciada por estado, e benefícios fiscais heterogêneos que geravam a chamada <strong>guerra fiscal</strong>.</p>

      <h2>3. Como Funciona o IBS Interestadual</h2>
      <div class="article-callout article-callout--info">
        <i class="ph ph-info"></i>
        <div>
          <strong>Princípio do Destino</strong>
          <p>O IBS é integralmente devido no estado e município onde o bem é consumido ou o serviço é utilizado, independentemente da origem da operação. <strong>Alíquota única nacional: 15%.</strong></p>
        </div>
      </div>

      <h3>Principais mudanças:</h3>
      <ul>
        <li><strong>Fim do DIFAL:</strong> não há mais diferencial de alíquota entre estados</li>
        <li><strong>Fim da guerra fiscal:</strong> os benefícios estaduais de ICMS são extintos</li>
        <li><strong>Alíquota uniforme:</strong> 12% (estadual) + 3% (municipal) = 15% em qualquer destino</li>
        <li><strong>Crédito irrestrito:</strong> o adquirente se credita do IBS pago na origem</li>
        <li><strong>CG-IBS distribui:</strong> o Comitê repassa automaticamente para o estado/município de destino</li>
      </ul>

      <h2>4. Comparativo: ICMS vs IBS Interestadual</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>Aspecto</th><th>ICMS Interestadual</th><th>IBS</th></tr>
          </thead>
          <tbody>
            <tr><td>Alíquota</td><td>7% ou 12%</td><td>15% (uniforme)</td></tr>
            <tr><td>DIFAL</td><td>Sim — complexo</td><td>Não existe</td></tr>
            <tr><td>Guerra fiscal</td><td>Sim — benefícios estaduais</td><td>Extinta</td></tr>
            <tr><td>Destino da receita</td><td>Estado de origem + partilha DIFAL</td><td>Estado/município de destino</td></tr>
            <tr><td>Substituição Tributária</td><td>Protocolos ICMS por produto/estado</td><td>Regras nacionais uniformes (CG-IBS)</td></tr>
            <tr><td>Obrigação acessória</td><td>SPED ICMS por UF</td><td>EFD-IBS nacional</td></tr>
          </tbody>
        </table>
      </div>

      <h2>5. Exemplo Prático — Indústria de SP vendendo para PE</h2>
      <p>Indústria paulista vendendo produto (NCM 8471.30.19 – Notebook) para varejista pernambucano.</p>
      <p>Valor da operação: R$ 100.000,00</p>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>Tributo</th><th>Modelo ICMS</th><th>Modelo IBS</th></tr>
          </thead>
          <tbody>
            <tr><td>Alíquota na NF-e</td><td>7% (interestadual SP→PE)</td><td>15% (IBS)</td></tr>
            <tr><td>Tributo destacado</td><td>R$ 7.000,00</td><td>R$ 15.000,00</td></tr>
            <tr><td>DIFAL para PE</td><td>R$ 11.000,00 (alíq. interna 18%)</td><td>— (extinto)</td></tr>
            <tr><td>Total de ICMS/IBS</td><td>R$ 18.000,00</td><td>R$ 15.000,00</td></tr>
            <tr><td>Destino da receita</td><td>SP + PE (partilhado)</td><td>Integralmente para PE</td></tr>
            <tr><td>Crédito no varejista PE</td><td>Apenas os 7%</td><td>15% integral</td></tr>
          </tbody>
        </table>
      </div>
      <div class="article-callout article-callout--success">
        <i class="ph ph-lightbulb"></i>
        <div>
          <strong>Resultado</strong>
          <p>Carga menor (15% vs 18%) e simplificação total: sem DIFAL, sem guia GNRE, sem Protocolo ICMS, sem benefício fiscal a controlar.</p>
        </div>
      </div>

      <h2>6. Transição do Regime de Substituição Tributária</h2>
      <p>A ST (Substituição Tributária) do ICMS era regida por Protocolos ICMS assinados entre estados. No IBS, a ST é padronizada nacionalmente pelo CG-IBS, com regras uniformes por setor:</p>
      <ul>
        <li>Sem necessidade de Inscrição Estadual em outros estados</li>
        <li>GNRE (Guia Nacional de Recolhimento) substituída pelo pagamento centralizado via EFD-IBS</li>
        <li>Regimes especiais (combustíveis, bebidas) mantidos com nova regulamentação</li>
      </ul>

      <h2>7. Impacto no Planejamento Tributário</h2>
      <div class="article-callout article-callout--warning">
        <i class="ph ph-warning"></i>
        <div>
          <strong>Atenção — Benefícios Fiscais de ICMS</strong>
          <p>Todos os benefícios fiscais de ICMS (crédito presumido, isenções, diferimentos regionais) são extintos com o IBS. Empresas que dependem dessas vantagens devem revisar seu modelo de negócio e localização industrial.</p>
        </div>
      </div>

      <h2>8. Orientações Operacionais</h2>
      <div class="article-callout article-callout--success">
        <i class="ph ph-check-circle"></i>
        <div>
          <strong>Checklist para Operações Interestaduais</strong>
          <ul>
            <li>Mapear todos os estados para os quais a empresa vende e compra</li>
            <li>Eliminar o controle de DIFAL dos sistemas a partir de 2027</li>
            <li>Cancelar Inscrições Estaduais em outros estados (quando aplicável)</li>
            <li>Revisar precificação considerando a alíquota uniforme de 15%</li>
            <li>Atualizar o ERP para o novo leiaute da NF-e com IBS no destino</li>
            <li>Identificar quais Protocolos ICMS ainda vigem durante a transição (2027–2031)</li>
          </ul>
        </div>
      </div>

      <h2>9. Conclusão</h2>
      <p>A simplificação das operações interestaduais é um dos maiores benefícios práticos do IBS. A extinção do DIFAL, da guerra fiscal e dos Protocolos ICMS reduzirá significativamente o custo de compliance — mas exige revisão completa dos sistemas, contratos e modelos de negócio de todas as empresas que operam em mais de um estado.</p>
    `
  }
];

// Tabela NCM x CBS/IBS
// Fonte: LC 214/2025 | IT 2025.002 v1.40 | Anexos I–XV da LC 214/2025
const TABELA_NCM = [

  // ── CESTA BÁSICA NACIONAL DE ALIMENTOS ─────────────────────────────────────
  // CST 200 | cClassTrib 200003 | Alíquota Zero (Anexo I, LC 214/2025)
  { ncm: '0401.10.10', descricao: 'Leite UHT integral (até 1% de gordura)',       cstAntigo: '06', cstNovo: '200', novoCBS: 'Alíquota zero', novoIBS: 'Alíquota zero', cClassTrib: '200003', aliquotaCBS: 0, aliquotaIBS: 0, observacoes: 'Cesta Básica Nacional — Anexo I, LC 214/2025' },
  { ncm: '0401.20.10', descricao: 'Leite UHT semidesnatado',                      cstAntigo: '06', cstNovo: '200', novoCBS: 'Alíquota zero', novoIBS: 'Alíquota zero', cClassTrib: '200003', aliquotaCBS: 0, aliquotaIBS: 0, observacoes: 'Cesta Básica Nacional — Anexo I, LC 214/2025' },
  { ncm: '0201.10.00', descricao: 'Carcaças e meias-carcaças bovinas resfriadas', cstAntigo: '06', cstNovo: '200', novoCBS: 'Alíquota zero', novoIBS: 'Alíquota zero', cClassTrib: '200003', aliquotaCBS: 0, aliquotaIBS: 0, observacoes: 'Cesta Básica Nacional — carne bovina' },
  { ncm: '0207.14.00', descricao: 'Pedaços e miudezas de frango congelados',      cstAntigo: '06', cstNovo: '200', novoCBS: 'Alíquota zero', novoIBS: 'Alíquota zero', cClassTrib: '200003', aliquotaCBS: 0, aliquotaIBS: 0, observacoes: 'Cesta Básica Nacional — frango' },
  { ncm: '0713.33.19', descricao: 'Feijão preto, carioca e outros (seco)',         cstAntigo: '06', cstNovo: '200', novoCBS: 'Alíquota zero', novoIBS: 'Alíquota zero', cClassTrib: '200003', aliquotaCBS: 0, aliquotaIBS: 0, observacoes: 'Cesta Básica Nacional — leguminosas' },
  { ncm: '1001.99.00', descricao: 'Trigo não durum (outros)',                      cstAntigo: '06', cstNovo: '200', novoCBS: 'Alíquota zero', novoIBS: 'Alíquota zero', cClassTrib: '200003', aliquotaCBS: 0, aliquotaIBS: 0, observacoes: 'Cesta Básica Nacional — grão' },
  { ncm: '1006.30.21', descricao: 'Arroz beneficiado polido ou brunido',           cstAntigo: '06', cstNovo: '200', novoCBS: 'Alíquota zero', novoIBS: 'Alíquota zero', cClassTrib: '200003', aliquotaCBS: 0, aliquotaIBS: 0, observacoes: 'Cesta Básica Nacional — Anexo I, LC 214/2025' },
  { ncm: '1101.00.10', descricao: 'Farinha de trigo enriquecida com ferro e ácido fólico', cstAntigo: '06', cstNovo: '200', novoCBS: 'Alíquota zero', novoIBS: 'Alíquota zero', cClassTrib: '200003', aliquotaCBS: 0, aliquotaIBS: 0, observacoes: 'Cesta Básica Nacional — Anexo I, LC 214/2025' },
  { ncm: '1507.90.11', descricao: 'Óleo de soja refinado',                         cstAntigo: '06', cstNovo: '200', novoCBS: 'Alíquota zero', novoIBS: 'Alíquota zero', cClassTrib: '200003', aliquotaCBS: 0, aliquotaIBS: 0, observacoes: 'Cesta Básica Nacional — Anexo I, LC 214/2025' },
  { ncm: '1701.11.00', descricao: 'Açúcar de cana bruto (cristal)',                cstAntigo: '06', cstNovo: '200', novoCBS: 'Alíquota zero', novoIBS: 'Alíquota zero', cClassTrib: '200003', aliquotaCBS: 0, aliquotaIBS: 0, observacoes: 'Cesta Básica Nacional — Anexo I, LC 214/2025' },

  // ── ALIMENTOS CONSUMO HUMANO ─────────────────────────────────────────────────
  // CST 200 | cClassTrib 200034 | Redução 60% (Anexo VII, LC 214/2025)
  { ncm: '1905.31.00', descricao: 'Biscoitos e bolachas salgados',                 cstAntigo: '01', cstNovo: '200', novoCBS: 'Reduzido 60%', novoIBS: 'Reduzido 60%', cClassTrib: '200034', aliquotaCBS: 4.8, aliquotaIBS: 6, observacoes: 'Alimentos consumo humano — Anexo VII, LC 214/2025' },
  { ncm: '1905.90.90', descricao: 'Pão de forma, brioches e outros produtos de padaria', cstAntigo: '01', cstNovo: '200', novoCBS: 'Reduzido 60%', novoIBS: 'Reduzido 60%', cClassTrib: '200034', aliquotaCBS: 4.8, aliquotaIBS: 6, observacoes: 'Alimentos consumo humano — Anexo VII, LC 214/2025' },
  { ncm: '2106.90.10', descricao: 'Preparações compostas para elaboração de bebidas', cstAntigo: '01', cstNovo: '200', novoCBS: 'Reduzido 60%', novoIBS: 'Reduzido 60%', cClassTrib: '200034', aliquotaCBS: 4.8, aliquotaIBS: 6, observacoes: 'Alimentos consumo humano — Anexo VII, LC 214/2025' },
  { ncm: '2004.10.00', descricao: 'Batatas preparadas ou conservadas congeladas',  cstAntigo: '01', cstNovo: '200', novoCBS: 'Reduzido 60%', novoIBS: 'Reduzido 60%', cClassTrib: '200034', aliquotaCBS: 4.8, aliquotaIBS: 6, observacoes: 'Alimentos consumo humano — Anexo VII, LC 214/2025' },

  // ── PRODUTOS HORTÍCOLAS E FRUTAS ─────────────────────────────────────────────
  // CST 200 | cClassTrib 200036 | Redução 60% (Art. 137/148, LC 214/2025)
  { ncm: '0701.90.00', descricao: 'Batatas frescas ou refrigeradas',               cstAntigo: '06', cstNovo: '200', novoCBS: 'Reduzido 60%', novoIBS: 'Reduzido 60%', cClassTrib: '200036', aliquotaCBS: 4.8, aliquotaIBS: 6, observacoes: 'Hortícola in natura — Art. 148, LC 214/2025' },
  { ncm: '0803.10.00', descricao: 'Bananas frescas ou secas',                       cstAntigo: '06', cstNovo: '200', novoCBS: 'Reduzido 60%', novoIBS: 'Reduzido 60%', cClassTrib: '200036', aliquotaCBS: 4.8, aliquotaIBS: 6, observacoes: 'Frutas in natura — Art. 148, LC 214/2025' },
  { ncm: '1005.90.10', descricao: 'Milho em grão para uso industrial',              cstAntigo: '06', cstNovo: '200', novoCBS: 'Reduzido 60%', novoIBS: 'Reduzido 60%', cClassTrib: '200036', aliquotaCBS: 4.8, aliquotaIBS: 6, observacoes: 'Agropecuário in natura — grão' },
  { ncm: '1201.10.00', descricao: 'Soja em grão, mesmo triturada',                  cstAntigo: '06', cstNovo: '200', novoCBS: 'Reduzido 60%', novoIBS: 'Reduzido 60%', cClassTrib: '200036', aliquotaCBS: 4.8, aliquotaIBS: 6, observacoes: 'Agropecuário in natura — Art. 137, LC 214/2025' },
  { ncm: '0102.29.19', descricao: 'Bovinos vivos para abate ou reprodução',        cstAntigo: '06', cstNovo: '200', novoCBS: 'Reduzido 60%', novoIBS: 'Reduzido 60%', cClassTrib: '200036', aliquotaCBS: 4.8, aliquotaIBS: 6, observacoes: 'Agropecuário in natura — Art. 137, LC 214/2025' },

  // ── MEDICAMENTOS — ALÍQUOTA ZERO ─────────────────────────────────────────────
  // CST 200 | cClassTrib 200009 | Alíquota Zero (Anexo XIV, LC 214/2025)
  { ncm: '3004.10.11', descricao: 'Medicamentos com penicilinas',                  cstAntigo: '02', cstNovo: '200', novoCBS: 'Alíquota zero', novoIBS: 'Alíquota zero', cClassTrib: '200009', aliquotaCBS: 0, aliquotaIBS: 0, observacoes: 'Medicamento — Anexo XIV, LC 214/2025 (alíq. zero)' },
  { ncm: '3004.50.99', descricao: 'Medicamentos com vitaminas (outros)',            cstAntigo: '02', cstNovo: '200', novoCBS: 'Alíquota zero', novoIBS: 'Alíquota zero', cClassTrib: '200009', aliquotaCBS: 0, aliquotaIBS: 0, observacoes: 'Medicamento — Anexo XIV, LC 214/2025 (alíq. zero)' },
  { ncm: '3004.90.99', descricao: 'Outros medicamentos de uso humano',              cstAntigo: '02', cstNovo: '200', novoCBS: 'Reduzido 60%', novoIBS: 'Reduzido 60%', cClassTrib: '200032', aliquotaCBS: 4.8, aliquotaIBS: 6, observacoes: 'Medicamento Anvisa — Art. 133, LC 214/2025 (red. 60%)' },

  // ── DISPOSITIVOS MÉDICOS ──────────────────────────────────────────────────────
  // CST 200 | cClassTrib 200004 | Redução 60% (Anexo XII, LC 214/2025)
  { ncm: '9018.11.00', descricao: 'Eletrocardiógrafos',                            cstAntigo: '01', cstNovo: '200', novoCBS: 'Reduzido 60%', novoIBS: 'Reduzido 60%', cClassTrib: '200004', aliquotaCBS: 4.8, aliquotaIBS: 6, observacoes: 'Dispositivo médico — Anexo XII, LC 214/2025' },
  { ncm: '9018.90.99', descricao: 'Outros instrumentos e aparelhos médico-cirúrgicos', cstAntigo: '01', cstNovo: '200', novoCBS: 'Reduzido 60%', novoIBS: 'Reduzido 60%', cClassTrib: '200004', aliquotaCBS: 4.8, aliquotaIBS: 6, observacoes: 'Dispositivo médico — Anexo XII, LC 214/2025' },

  // ── HIGIENE PESSOAL ───────────────────────────────────────────────────────────
  // CST 200 | cClassTrib 200035 | Redução 60% (Anexo VIII, LC 214/2025)
  { ncm: '3305.10.00', descricao: 'Xampus para cabelo',                            cstAntigo: '01', cstNovo: '200', novoCBS: 'Reduzido 60%', novoIBS: 'Reduzido 60%', cClassTrib: '200035', aliquotaCBS: 4.8, aliquotaIBS: 6, observacoes: 'Higiene pessoal — Anexo VIII, LC 214/2025' },
  { ncm: '3306.10.00', descricao: 'Dentifrícios (pastas de dente)',                 cstAntigo: '01', cstNovo: '200', novoCBS: 'Reduzido 60%', novoIBS: 'Reduzido 60%', cClassTrib: '200035', aliquotaCBS: 4.8, aliquotaIBS: 6, observacoes: 'Higiene pessoal — Anexo VIII, LC 214/2025' },
  { ncm: '3401.11.90', descricao: 'Sabonetes e sabões (outros)',                    cstAntigo: '01', cstNovo: '200', novoCBS: 'Reduzido 60%', novoIBS: 'Reduzido 60%', cClassTrib: '200035', aliquotaCBS: 4.8, aliquotaIBS: 6, observacoes: 'Higiene pessoal — Anexo VIII, LC 214/2025' },

  // ── BEBIDAS ALCOÓLICAS ────────────────────────────────────────────────────────
  // CST 000 | cClassTrib 000001 | Tributação Integral (+ Imposto Seletivo)
  { ncm: '2203.00.00', descricao: 'Cervejas de malte',                             cstAntigo: '01', cstNovo: '000', novoCBS: 'Tributado', novoIBS: 'Tributado', cClassTrib: '000001', aliquotaCBS: 12, aliquotaIBS: 15, observacoes: 'Tributação integral + IS (Imposto Seletivo)' },
  { ncm: '2204.21.00', descricao: 'Vinhos tintos em recipientes ≤ 2L',             cstAntigo: '01', cstNovo: '000', novoCBS: 'Tributado', novoIBS: 'Tributado', cClassTrib: '000001', aliquotaCBS: 12, aliquotaIBS: 15, observacoes: 'Tributação integral + IS (Imposto Seletivo)' },
  { ncm: '2208.40.00', descricao: 'Rum e outras aguardentes de cana',               cstAntigo: '01', cstNovo: '000', novoCBS: 'Tributado', novoIBS: 'Tributado', cClassTrib: '000001', aliquotaCBS: 12, aliquotaIBS: 15, observacoes: 'Tributação integral + IS (Imposto Seletivo)' },

  // ── ELETRÔNICOS E TI ─────────────────────────────────────────────────────────
  // CST 000 | cClassTrib 000001 | Tributação Integral
  { ncm: '8517.12.00', descricao: 'Telefones celulares (smartphones)',             cstAntigo: '01', cstNovo: '000', novoCBS: 'Tributado', novoIBS: 'Tributado', cClassTrib: '000001', aliquotaCBS: 12, aliquotaIBS: 15, observacoes: 'Tributação integral' },
  { ncm: '8471.30.19', descricao: 'Notebooks e computadores portáteis',            cstAntigo: '01', cstNovo: '000', novoCBS: 'Tributado', novoIBS: 'Tributado', cClassTrib: '000001', aliquotaCBS: 12, aliquotaIBS: 15, observacoes: 'Tributação integral' },
  { ncm: '8528.72.20', descricao: 'Televisores e monitores (LED/LCD)',             cstAntigo: '01', cstNovo: '000', novoCBS: 'Tributado', novoIBS: 'Tributado', cClassTrib: '000001', aliquotaCBS: 12, aliquotaIBS: 15, observacoes: 'Tributação integral' },
  { ncm: '8443.31.11', descricao: 'Impressoras jato de tinta coloridas',           cstAntigo: '01', cstNovo: '000', novoCBS: 'Tributado', novoIBS: 'Tributado', cClassTrib: '000001', aliquotaCBS: 12, aliquotaIBS: 15, observacoes: 'Tributação integral' },

  // ── VEÍCULOS ──────────────────────────────────────────────────────────────────
  // CST 000 | cClassTrib 000001 | Tributação Integral (+ IPI + IS)
  { ncm: '8703.23.10', descricao: 'Automóveis a gasolina (1500–3000 cc)',          cstAntigo: '01', cstNovo: '000', novoCBS: 'Tributado', novoIBS: 'Tributado', cClassTrib: '000001', aliquotaCBS: 12, aliquotaIBS: 15, observacoes: 'Tributação integral + IPI + IS (Imposto Seletivo)' },
  { ncm: '8703.80.00', descricao: 'Veículos elétricos (motor elétrico)',           cstAntigo: '01', cstNovo: '000', novoCBS: 'Tributado', novoIBS: 'Tributado', cClassTrib: '000001', aliquotaCBS: 12, aliquotaIBS: 15, observacoes: 'Tributação integral — IS reduzido para VEs' },
  { ncm: '8704.31.10', descricao: 'Caminhões a diesel até 5 toneladas',            cstAntigo: '01', cstNovo: '000', novoCBS: 'Tributado', novoIBS: 'Tributado', cClassTrib: '000001', aliquotaCBS: 12, aliquotaIBS: 15, observacoes: 'Tributação integral' },

  // ── COMBUSTÍVEIS ──────────────────────────────────────────────────────────────
  // CST 620 | cClassTrib 620001 | Tributação Monofásica (Arts. 172–180, LC 214/2025)
  { ncm: '2207.10.00', descricao: 'Álcool etílico anidro combustível (AEAC)',      cstAntigo: '01', cstNovo: '620', novoCBS: 'Monofásico CBS', novoIBS: 'Monofásico IBS', cClassTrib: '620001', aliquotaCBS: 6, aliquotaIBS: 9, observacoes: 'Monofásico — tributação concentrada na usina' },
  { ncm: '2710.12.59', descricao: 'Gasolina automotiva comum (A)',                 cstAntigo: '01', cstNovo: '620', novoCBS: 'Monofásico CBS', novoIBS: 'Monofásico IBS', cClassTrib: '620001', aliquotaCBS: 10, aliquotaIBS: 13, observacoes: 'Monofásico — tributação concentrada na refinaria' },
  { ncm: '2710.19.21', descricao: 'Óleo diesel S10 (rodoviário)',                  cstAntigo: '01', cstNovo: '620', novoCBS: 'Monofásico CBS', novoIBS: 'Monofásico IBS', cClassTrib: '620001', aliquotaCBS: 8, aliquotaIBS: 11, observacoes: 'Monofásico — tributação concentrada na refinaria' },
  { ncm: '2711.11.00', descricao: 'Gás natural liquefeito (GNL)',                  cstAntigo: '01', cstNovo: '620', novoCBS: 'Monofásico CBS', novoIBS: 'Monofásico IBS', cClassTrib: '620001', aliquotaCBS: 4, aliquotaIBS: 6, observacoes: 'Monofásico — gás combustível' },

  // ── LIVROS, JORNAIS E IMPRENSA ────────────────────────────────────────────────
  // CST 410 | cClassTrib 410008 | Imunidade Constitucional (Art. 150, VI, d, CF/88)
  { ncm: '4801.00.10', descricao: 'Papel de imprensa para jornais',                cstAntigo: '03', cstNovo: '410', novoCBS: 'Imune', novoIBS: 'Imune', cClassTrib: '410008', aliquotaCBS: 0, aliquotaIBS: 0, observacoes: 'Imunidade constitucional — papel p/ imprimir jornal' },
  { ncm: '4901.99.00', descricao: 'Livros impressos (outros)',                      cstAntigo: '03', cstNovo: '410', novoCBS: 'Imune', novoIBS: 'Imune', cClassTrib: '410008', aliquotaCBS: 0, aliquotaIBS: 0, observacoes: 'Imunidade constitucional — Art. 150, VI, d, CF/88' },
  { ncm: '4902.90.00', descricao: 'Jornais, revistas e periódicos',                cstAntigo: '03', cstNovo: '410', novoCBS: 'Imune', novoIBS: 'Imune', cClassTrib: '410008', aliquotaCBS: 0, aliquotaIBS: 0, observacoes: 'Imunidade constitucional — Art. 150, VI, d, CF/88' },

  // ── VESTUÁRIO E TÊXTEIS ───────────────────────────────────────────────────────
  // CST 000 | cClassTrib 000001 | Tributação Integral
  { ncm: '6110.20.10', descricao: 'Camisetas e T-shirts de algodão',               cstAntigo: '01', cstNovo: '000', novoCBS: 'Tributado', novoIBS: 'Tributado', cClassTrib: '000001', aliquotaCBS: 12, aliquotaIBS: 15, observacoes: 'Tributação integral' },
  { ncm: '6203.42.00', descricao: 'Calças masculinas de algodão (jeans)',          cstAntigo: '01', cstNovo: '000', novoCBS: 'Tributado', novoIBS: 'Tributado', cClassTrib: '000001', aliquotaCBS: 12, aliquotaIBS: 15, observacoes: 'Tributação integral' }
];

// Tabela CST Mapeamento — PIS/COFINS/ICMS → IBS/CBS
// Fonte: IT 2025.002 v1.40 | LC 214/2025
const TABELA_CST = [
  { cstAntigo: '01', descricaoAntiga: 'Operação Tributável — Alíq. Normal',   cstNovo: '000', novoCBS: 'Tributado', novoIBS: 'Tributado',           observacoes: 'CST 000 — cClassTrib 000001 (tributação integral)' },
  { cstAntigo: '02', descricaoAntiga: 'Operação Tributável — Alíq. Diferenciada', cstNovo: '200', novoCBS: 'Reduzido', novoIBS: 'Reduzido',          observacoes: 'CST 200 — verificar cClassTrib conforme produto/serviço' },
  { cstAntigo: '03', descricaoAntiga: 'Operação Tributável — Alíq. Zero',     cstNovo: '200', novoCBS: 'Alíquota zero', novoIBS: 'Alíquota zero',     observacoes: 'CST 200 — cClassTrib 200003 (cesta básica) ou 200009 (medicamentos)' },
  { cstAntigo: '04', descricaoAntiga: 'Operação Tributável — Monofásica',      cstNovo: '620', novoCBS: 'Monofásico CBS', novoIBS: 'Monofásico IBS',   observacoes: 'CST 620 — cClassTrib 620001 (combustíveis e similares)' },
  { cstAntigo: '05', descricaoAntiga: 'Operação Tributável — ST Paga Anteriorm.', cstNovo: '620', novoCBS: 'Monofásico CBS', novoIBS: 'Monofásico IBS', observacoes: 'CST 620 — cClassTrib 620003 (tributos retidos anteriormente)' },
  { cstAntigo: '06', descricaoAntiga: 'Alíquota Zero (TIPI)',                  cstNovo: '200', novoCBS: 'Alíquota zero', novoIBS: 'Alíquota zero',     observacoes: 'CST 200 — verificar Anexo I, IX ou XIV da LC 214/2025' },
  { cstAntigo: '07', descricaoAntiga: 'Isento da Contribuição (PIS/COFINS)',   cstNovo: '400', novoCBS: 'Isento',        novoIBS: 'Isento',            observacoes: 'CST 400 — cClassTrib 400001 (isenção legal)' },
  { cstAntigo: '08', descricaoAntiga: 'Sem Incidência da Contribuição',        cstNovo: '410', novoCBS: 'Imune / Não Inc.', novoIBS: 'Imune / Não Inc.', observacoes: 'CST 410 — cClassTrib 410008 (livros) ou 410999 (outros)' },
  { cstAntigo: '09', descricaoAntiga: 'Outras Operações (saída)',              cstNovo: '—',   novoCBS: 'Análise',       novoIBS: 'Análise',           observacoes: 'Verificar enquadramento específico com especialista fiscal' },
  { cstAntigo: '49', descricaoAntiga: 'Outras Operações (entrada)',            cstNovo: '—',   novoCBS: 'Análise',       novoIBS: 'Análise',           observacoes: 'Verificar enquadramento específico com especialista fiscal' },
  { cstAntigo: '50', descricaoAntiga: 'Operação com Direito a Crédito — Alíq. Normal', cstNovo: '000', novoCBS: 'Tributado', novoIBS: 'Tributado',    observacoes: 'CST 000 — cClassTrib 000001 (crédito pleno mantido)' },
  { cstAntigo: '51', descricaoAntiga: 'Operação com Crédito Presumido',        cstNovo: '200', novoCBS: 'Reduzido',       novoIBS: 'Reduzido',          observacoes: 'CST 200 — verificar cCredPres (crédito presumido LC 214/2025)' },
  { cstAntigo: '99', descricaoAntiga: 'Outras Entradas',                       cstNovo: '—',   novoCBS: 'Análise',       novoIBS: 'Análise',           observacoes: 'Analisar caso a caso conforme natureza da operação' }
];

// Tabela cClassTrib — Classificação Tributária IBS/CBS
// Fonte: IT 2025.002 v1.40 (jan/2026) | LC 214/2025 | Informe Técnico RT 2025.002
// Estrutura: 6 dígitos — os 3 primeiros = CST | os 3 últimos = sub-código específico
const TABELA_CCLASSTRIB = [

  // ── CST 000 — Tributação Integral ────────────────────────────────────────────
  { cst: '000', cstDescricao: 'Tributação integral', codigo: '000001', nome: 'Tributado Integralmente', descricao: 'Situações tributadas integralmente pelo IBS e CBS — alíquotas plenas', reducao: 0, fundamentoLegal: 'Art. 4º, LC 214/2025' },
  { cst: '000', cstDescricao: 'Tributação integral', codigo: '000002', nome: 'Exploração de Via', descricao: 'Exploração de via (pedágio e serviços similares de rodovias)', reducao: 0, fundamentoLegal: 'Art. 11, LC 214/2025' },
  { cst: '000', cstDescricao: 'Tributação integral', codigo: '000003', nome: 'Regime Automotivo — Incentivados', descricao: 'Regime automotivo — projetos incentivados (art. 311)', reducao: 0, fundamentoLegal: 'Art. 311, LC 214/2025' },

  // ── CST 200 — Alíquota Reduzida ──────────────────────────────────────────────
  { cst: '200', cstDescricao: 'Alíquota reduzida', codigo: '200003', nome: 'Cesta Básica Nacional', descricao: 'Alimentos da Cesta Básica Nacional (Anexo I) — alíquota zero CBS e IBS', reducao: 100, fundamentoLegal: 'Art. 125, LC 214/2025' },
  { cst: '200', cstDescricao: 'Alíquota reduzida', codigo: '200004', nome: 'Dispositivos Médicos', descricao: 'Dispositivos médicos (Anexo XII) — redução de 60% das alíquotas', reducao: 60, fundamentoLegal: 'Art. 144, LC 214/2025' },
  { cst: '200', cstDescricao: 'Alíquota reduzida', codigo: '200007', nome: 'Disp. Acessibilidade — PCD', descricao: 'Dispositivos de acessibilidade para pessoas com deficiência (Anexo XIII)', reducao: 60, fundamentoLegal: 'Art. 145, LC 214/2025' },
  { cst: '200', cstDescricao: 'Alíquota reduzida', codigo: '200009', nome: 'Medicamentos — Alíquota Zero', descricao: 'Medicamentos do Anexo XIV (Anvisa) — alíquota zero CBS e IBS', reducao: 100, fundamentoLegal: 'Art. 146, LC 214/2025' },
  { cst: '200', cstDescricao: 'Alíquota reduzida', codigo: '200013', nome: 'Absorventes Femininos', descricao: 'Tampões, absorventes higiênicos, calcinhas absorventes e coletores menstruais', reducao: 100, fundamentoLegal: 'Art. 147, LC 214/2025' },
  { cst: '200', cstDescricao: 'Alíquota reduzida', codigo: '200014', nome: 'Hortícolas, Frutas e Ovos', descricao: 'Produtos hortícolas, frutas e ovos in natura (Anexo XV) — alíquota zero', reducao: 100, fundamentoLegal: 'Art. 148, LC 214/2025' },
  { cst: '200', cstDescricao: 'Alíquota reduzida', codigo: '200021', nome: 'Transporte Ferroviário/Hidroviário Urbano', descricao: 'Transporte público coletivo ferroviário e hidroviário urbano/metropolitano', reducao: 100, fundamentoLegal: 'Art. 285, LC 214/2025' },
  { cst: '200', cstDescricao: 'Alíquota reduzida', codigo: '200027', nome: 'Locação/Arrendamento de Imóveis', descricao: 'Locação, cessão onerosa e arrendamento de bens imóveis — redução de 60%', reducao: 60, fundamentoLegal: 'Art. 261, LC 214/2025' },
  { cst: '200', cstDescricao: 'Alíquota reduzida', codigo: '200028', nome: 'Serviços de Educação', descricao: 'Serviços educacionais (Anexo II) — redução de 60% das alíquotas', reducao: 60, fundamentoLegal: 'Art. 129, LC 214/2025' },
  { cst: '200', cstDescricao: 'Alíquota reduzida', codigo: '200029', nome: 'Serviços de Saúde Humana', descricao: 'Serviços de saúde humana (Anexo III) — redução de 60% das alíquotas', reducao: 60, fundamentoLegal: 'Art. 130, LC 214/2025' },
  { cst: '200', cstDescricao: 'Alíquota reduzida', codigo: '200032', nome: 'Medicamentos Anvisa — Reduzido', descricao: 'Medicamentos registrados na Anvisa ou farmácias de manipulação — redução de 60%', reducao: 60, fundamentoLegal: 'Art. 133, LC 214/2025' },
  { cst: '200', cstDescricao: 'Alíquota reduzida', codigo: '200034', nome: 'Alimentos Consumo Humano', descricao: 'Alimentos destinados ao consumo humano (Anexo VII) — redução de 60%', reducao: 60, fundamentoLegal: 'Art. 135, LC 214/2025' },
  { cst: '200', cstDescricao: 'Alíquota reduzida', codigo: '200035', nome: 'Higiene Pessoal e Limpeza', descricao: 'Produtos de higiene pessoal e limpeza (Anexo VIII) — redução de 60%', reducao: 60, fundamentoLegal: 'Art. 136, LC 214/2025' },
  { cst: '200', cstDescricao: 'Alíquota reduzida', codigo: '200036', nome: 'Agropecuários In Natura', descricao: 'Produtos agropecuários, aquícolas, pesqueiros e florestais in natura', reducao: 60, fundamentoLegal: 'Art. 137, LC 214/2025' },
  { cst: '200', cstDescricao: 'Alíquota reduzida', codigo: '200038', nome: 'Insumos Agropecuários', descricao: 'Insumos agropecuários e aquícolas (Anexo IX) — redução de 60%', reducao: 60, fundamentoLegal: 'Art. 138, LC 214/2025' },
  { cst: '200', cstDescricao: 'Alíquota reduzida', codigo: '200047', nome: 'Bares e Restaurantes', descricao: 'Fornecimento de alimentação por bares, restaurantes e similares — redução de 40%', reducao: 40, fundamentoLegal: 'Art. 275, LC 214/2025' },
  { cst: '200', cstDescricao: 'Alíquota reduzida', codigo: '200048', nome: 'Hotelaria e Parques Temáticos', descricao: 'Hotelaria, parques de diversão e parques temáticos — redução de 40%', reducao: 40, fundamentoLegal: 'Art. 281, LC 214/2025' },
  { cst: '200', cstDescricao: 'Alíquota reduzida', codigo: '200049', nome: 'Transporte Coletivo Interestadual', descricao: 'Transporte coletivo rodoviário, ferroviário e hidroviário intermunicipal/interestadual', reducao: 60, fundamentoLegal: 'Art. 286, LC 214/2025' },
  { cst: '200', cstDescricao: 'Alíquota reduzida', codigo: '200052', nome: 'Profissões Liberais', descricao: 'Profissões intelectuais com fiscalização por conselho (adv, méd, eng, cont, etc.) — redução de 30%', reducao: 30, fundamentoLegal: 'Art. 127, LC 214/2025' },

  // ── CST 400 — Isenção ────────────────────────────────────────────────────────
  { cst: '400', cstDescricao: 'Isenção', codigo: '400001', nome: 'Transp. Público Urbano — Isento', descricao: 'Transporte público coletivo rodoviário e metroviário urbano/semiurbano', reducao: 100, fundamentoLegal: 'Art. 157, LC 214/2025' },

  // ── CST 410 — Imunidade e Não Incidência ─────────────────────────────────────
  { cst: '410', cstDescricao: 'Imunidade e não incidência', codigo: '410004', nome: 'Exportações de Bens e Serviços', descricao: 'Exportações de bens e serviços — imunidade constitucional', reducao: 100, fundamentoLegal: 'Art. 8º, LC 214/2025 / EC 132/2023' },
  { cst: '410', cstDescricao: 'Imunidade e não incidência', codigo: '410008', nome: 'Livros, Jornais e Periódicos', descricao: 'Fornecimento de livros, jornais, periódicos e papel destinado à sua impressão', reducao: 100, fundamentoLegal: 'Art. 9º, LC 214/2025 / Art. 150, VI, d, CF/88' },
  { cst: '410', cstDescricao: 'Imunidade e não incidência', codigo: '410014', nome: 'Produtor Rural Não Contribuinte', descricao: 'Fornecimento por produtor rural pessoa física não contribuinte do IBS/CBS', reducao: 100, fundamentoLegal: 'Art. 164, LC 214/2025' },
  { cst: '410', cstDescricao: 'Imunidade e não incidência', codigo: '410999', nome: 'Não Tributado (Outros)', descricao: 'Operações não onerosas sem previsão de tributação, não especificadas anteriormente', reducao: 100, fundamentoLegal: 'Art. 4º, LC 214/2025' },

  // ── CST 510/515 — Diferimento ─────────────────────────────────────────────────
  { cst: '510', cstDescricao: 'Diferimento', codigo: '510001', nome: 'Diferimento — Energia Elétrica', descricao: 'Operações com energia elétrica ou direitos a ela relacionados (geração/distribuição)', reducao: 100, fundamentoLegal: 'Art. 28, LC 214/2025' },
  { cst: '515', cstDescricao: 'Diferimento com redução', codigo: '515001', nome: 'Diferimento — Insumos Agro', descricao: 'Operações com insumos agropecuários e aquícolas sujeitas a diferimento', reducao: 100, fundamentoLegal: 'Art. 138, LC 214/2025' },

  // ── CST 550 — Suspensão ───────────────────────────────────────────────────────
  { cst: '550', cstDescricao: 'Suspensão', codigo: '550001', nome: 'Suspensão — Exportação de Bens', descricao: 'Exportações de bens materiais — suspensão do IBS e CBS', reducao: 100, fundamentoLegal: 'Art. 82, LC 214/2025' },
  { cst: '550', cstDescricao: 'Suspensão', codigo: '550016', nome: 'REIDI — Infraestrutura', descricao: 'Regime Especial de Incentivos para o Desenvolvimento da Infraestrutura (REIDI)', reducao: 100, fundamentoLegal: 'Art. 106, LC 214/2025' },
  { cst: '550', cstDescricao: 'Suspensão', codigo: '550018', nome: 'Desoneração de Bens de Capital', descricao: 'Desoneração da aquisição de máquinas e bens de capital produtivo', reducao: 100, fundamentoLegal: 'Art. 109, LC 214/2025' },

  // ── CST 620 — Tributação Monofásica ──────────────────────────────────────────
  { cst: '620', cstDescricao: 'Tributação monofásica', codigo: '620001', nome: 'Monofásico — Combustíveis', descricao: 'Tributação monofásica sobre combustíveis — concentrada na refinaria/usina', reducao: 0, fundamentoLegal: 'Arts. 172 e 179, LC 214/2025' },
  { cst: '620', cstDescricao: 'Tributação monofásica', codigo: '620002', nome: 'Combustíveis — Responsável Retenção', descricao: 'Monofásico com responsabilidade pela retenção do IBS e CBS (distribuidor)', reducao: 0, fundamentoLegal: 'Art. 178, LC 214/2025' },
  { cst: '620', cstDescricao: 'Tributação monofásica', codigo: '620003', nome: 'Combustíveis — Tributos Retidos', descricao: 'Monofásico com tributos retidos por responsabilidade (posto de combustível)', reducao: 0, fundamentoLegal: 'Art. 178, LC 214/2025' }
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
  { id: 'cclasstrib', termo: 'Classificação Tributária', sigla: 'cClassTrib', categoria: 'classificacoes', definicao: 'Nova classificação tributária unificada de 6 dígitos que substitui os CSTs antigos (PIS/COFINS/ICMS) na sistemática CBS/IBS, conforme IT 2025.002 e LC 214/2025. Estrutura: AAA (CST IBS/CBS) + BBB (sub-código vinculado ao artigo da LC 214/2025). Obrigatório na NF-e, NFS-e, CT-e e demais documentos fiscais a partir de 2026.', exemploUso: 'A cClassTrib 000001 indica tributação integral pelo IBS e CBS. A cClassTrib 200003 indica produtos da Cesta Básica Nacional com alíquota zero.', fundamentoLegal: 'IT 2025.002 v1.40 | Art. 62, LC 214/2025', relacionados: ['CST', 'NCM', 'CBS', 'IBS'] },
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
