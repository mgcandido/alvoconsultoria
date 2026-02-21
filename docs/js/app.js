// ============================================
// APP.JS - LÓGICA DA APLICAÇÃO
// ============================================

// Toggle Sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('active');
}

// Format Date
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('pt-BR');
}

// Get Categoria Label
function getCategoriaLabel(categoriaId) {
  const cat = CATEGORIAS.find(c => c.id === categoriaId);
  return cat ? cat.nome : categoriaId;
}

// Render Featured Articles (Home)
function renderFeaturedArticles() {
  const container = document.getElementById('featuredArticles');
  if (!container) return;

  const featured = ARTIGOS.filter(a => a.destaque);
  
  container.innerHTML = featured.map((artigo, i) => `
    <article class="article-card animate-fade-in stagger-${i + 1}">
      <div class="article-card__header">
        <span class="badge badge--${artigo.categoria}">
          ${getCategoriaLabel(artigo.categoria)}
        </span>
        <span class="article-card__time">
          <i class="ph ph-clock"></i>
          ${artigo.tempoLeitura} min
        </span>
      </div>
      
      <h3 class="article-card__title">${artigo.titulo}</h3>
      <p class="article-card__subtitle">${artigo.subtitulo}</p>
      <p class="article-card__excerpt">${artigo.resumo}</p>
      
      <div class="article-card__footer">
        <div class="article-card__tags">
          ${artigo.tags.slice(0, 3).map(tag => `<span class="article-card__tag">${tag}</span>`).join('')}
        </div>
        <a href="artigo.html?slug=${artigo.slug}" class="article-card__link">
          Ler artigo <i class="ph ph-arrow-right"></i>
        </a>
      </div>
    </article>
  `).join('');
}

// Render All Articles (Artigos Page)
function renderArticles(categoria = null, termo = '') {
  const container = document.getElementById('articlesGrid');
  if (!container) return;

  let filtered = [...ARTIGOS];

  if (categoria) {
    filtered = filtered.filter(a => a.categoria === categoria);
  }

  if (termo) {
    const termoLower = termo.toLowerCase();
    filtered = filtered.filter(a =>
      a.titulo.toLowerCase().includes(termoLower) ||
      a.resumo.toLowerCase().includes(termoLower) ||
      a.tags.some(t => t.toLowerCase().includes(termoLower))
    );
  }

  document.getElementById('resultsCount').textContent = `${filtered.length} artigo(s) encontrado(s)`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="ph ph-article"></i>
        <h3>Nenhum artigo encontrado</h3>
        <p>Tente ajustar os filtros ou termo de busca.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((artigo, i) => `
    <article class="article-card animate-fade-in" style="animation-delay: ${i * 0.1}s">
      <div class="article-card__header">
        <span class="badge badge--${artigo.categoria}">
          ${getCategoriaLabel(artigo.categoria)}
        </span>
        <div class="article-card__meta">
          <span class="article-card__time">
            <i class="ph ph-clock"></i>
            ${artigo.tempoLeitura} min
          </span>
          <span class="article-card__date">
            <i class="ph ph-calendar"></i>
            ${formatDate(artigo.dataPublicacao)}
          </span>
        </div>
      </div>
      
      <h2 class="article-card__title">${artigo.titulo}</h2>
      ${artigo.subtitulo ? `<p class="article-card__subtitle">${artigo.subtitulo}</p>` : ''}
      <p class="article-card__excerpt">${artigo.resumo}</p>
      
      <div class="article-card__footer">
        <div class="article-card__tags">
          ${artigo.tags.slice(0, 4).map(tag => `<span class="article-card__tag">${tag}</span>`).join('')}
        </div>
        <a href="artigo.html?slug=${artigo.slug}" class="article-card__link">
          Ler artigo completo
          <i class="ph ph-arrow-right"></i>
        </a>
      </div>
    </article>
  `).join('');
}

// Filter Articles
let currentCategoria = null;
let currentTermo = '';

function filterByCategoria(categoria) {
  currentCategoria = categoria;
  
  // Update active tab
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.dataset.categoria === (categoria || '')) {
      tab.classList.add('active');
    }
  });
  
  renderArticles(currentCategoria, currentTermo);
}

function filterByTermo(termo) {
  currentTermo = termo;
  renderArticles(currentCategoria, currentTermo);
}

// Render Table
function renderTable(tipo) {
  const container = document.getElementById('tableContainer');
  if (!container) return;

  let data, columns;

  switch (tipo) {
    case 'ncm-cbs':
    case 'ncm-ibs':
      data = TABELA_NCM;
      columns = [
        { key: 'ncm', label: 'NCM', type: 'code' },
        { key: 'descricao', label: 'Descrição' },
        { key: 'cstAntigo', label: 'CST Antigo', type: 'code' },
        { key: tipo === 'ncm-cbs' ? 'novoCBS' : 'novoIBS', label: tipo === 'ncm-cbs' ? 'CBS' : 'IBS', type: 'badge' },
        { key: 'cClassTrib', label: 'cClassTrib', type: 'code' },
        { key: tipo === 'ncm-cbs' ? 'aliquotaCBS' : 'aliquotaIBS', label: 'Alíquota %', type: 'percent' },
        { key: 'observacoes', label: 'Observações' }
      ];
      break;
    case 'cst-mapeamento':
    case 'transicao-pis-cofins':
      data = TABELA_CST;
      columns = [
        { key: 'cstAntigo', label: 'CST Antigo', type: 'code' },
        { key: 'descricaoAntiga', label: 'Descrição' },
        { key: 'novoCBS', label: 'CBS', type: 'badge' },
        { key: 'novoIBS', label: 'IBS', type: 'badge' },
        { key: 'observacoes', label: 'Observações' }
      ];
      break;
    case 'cclasstrib':
      data = TABELA_CCLASSTRIB;
      columns = [
        { key: 'codigo', label: 'Código', type: 'code' },
        { key: 'descricao', label: 'Descrição' },
        { key: 'aplicacao', label: 'Aplicação' },
        { key: 'aliquotaPadrao', label: 'Alíquota %', type: 'percent' },
        { key: 'reducao', label: 'Redução %', type: 'percent' },
        { key: 'fundamentoLegal', label: 'Fundamento Legal' }
      ];
      break;
    case 'aliquotas':
      data = TABELA_NCM;
      columns = [
        { key: 'ncm', label: 'NCM', type: 'code' },
        { key: 'descricao', label: 'Produto' },
        { key: 'aliquotaCBS', label: 'CBS %', type: 'percent' },
        { key: 'aliquotaIBS', label: 'IBS %', type: 'percent' }
      ];
      break;
    default:
      data = TABELA_NCM;
      columns = [
        { key: 'ncm', label: 'NCM', type: 'code' },
        { key: 'descricao', label: 'Descrição' },
        { key: 'cClassTrib', label: 'cClassTrib', type: 'code' }
      ];
  }

  const tableHtml = `
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            ${columns.map(col => `<th>${col.label}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${data.map(row => `
            <tr>
              ${columns.map(col => {
                const value = row[col.key];
                switch (col.type) {
                  case 'code':
                    return `<td><code>${value}</code></td>`;
                  case 'percent':
                    return `<td class="highlight">${value}%</td>`;
                  case 'badge':
                    return `<td><span class="table-badge ${getBadgeClass(value)}">${value}</span></td>`;
                  default:
                    return `<td>${value}</td>`;
                }
              }).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  container.innerHTML = tableHtml;
}

function getBadgeClass(value) {
  const str = String(value).toLowerCase();
  if (str.includes('tributad')) return 'badge-tributado';
  if (str.includes('isent')) return 'badge-isento';
  if (str.includes('zero')) return 'badge-zero';
  if (str.includes('reduzid')) return 'badge-reduzido';
  if (str.includes('st') || str.includes('substituição')) return 'badge-st';
  return 'badge-default';
}

// Render Glossary
let glossarioExpandido = null;

function renderGlossario(categoria = null, termo = '') {
  const container = document.getElementById('glossarioGrid');
  if (!container) return;

  let filtered = [...GLOSSARIO];

  if (categoria) {
    filtered = filtered.filter(t => t.categoria === categoria);
  }

  if (termo) {
    const termoLower = termo.toLowerCase();
    filtered = filtered.filter(t =>
      t.termo.toLowerCase().includes(termoLower) ||
      (t.sigla && t.sigla.toLowerCase().includes(termoLower)) ||
      t.definicao.toLowerCase().includes(termoLower)
    );
  }

  document.getElementById('glossarioCount').textContent = `${filtered.length} termo(s)`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="ph ph-book-open"></i>
        <h3>Nenhum termo encontrado</h3>
        <p>Tente ajustar os filtros ou termo de busca.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((termo, i) => `
    <div class="term-card animate-fade-in ${glossarioExpandido === termo.id ? 'expanded' : ''}" 
         style="animation-delay: ${i * 0.05}s"
         onclick="toggleTermo('${termo.id}')">
      <div class="term-card__header">
        <div class="term-card__title-row">
          <h3 class="term-card__title">${termo.termo}</h3>
          ${termo.sigla ? `<span class="term-card__sigla">${termo.sigla}</span>` : ''}
        </div>
        <i class="ph ${glossarioExpandido === termo.id ? 'ph-caret-up' : 'ph-caret-down'}"></i>
      </div>

      <p class="term-card__preview ${glossarioExpandido === termo.id ? 'hidden' : ''}">
        ${termo.definicao.substring(0, 150)}${termo.definicao.length > 150 ? '...' : ''}
      </p>

      ${glossarioExpandido === termo.id ? `
        <div class="term-card__content">
          <p class="term-card__definition">${termo.definicao}</p>

          ${termo.exemploUso ? `
            <div class="term-card__example">
              <h4><i class="ph ph-lightbulb"></i> Exemplo de uso:</h4>
              <p>${termo.exemploUso}</p>
            </div>
          ` : ''}

          ${termo.fundamentoLegal ? `
            <div class="term-card__legal">
              <h4><i class="ph ph-scales"></i> Fundamento Legal:</h4>
              <p>${termo.fundamentoLegal}</p>
            </div>
          ` : ''}

          ${termo.relacionados && termo.relacionados.length > 0 ? `
            <div class="term-card__related">
              <h4><i class="ph ph-link"></i> Termos Relacionados:</h4>
              <div class="term-card__tags">
                ${termo.relacionados.map(rel => `
                  <span class="term-tag" onclick="buscarTermoGlossario('${rel}'); event.stopPropagation();">
                    ${rel}
                  </span>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      ` : ''}
    </div>
  `).join('');
}

function toggleTermo(id) {
  glossarioExpandido = glossarioExpandido === id ? null : id;
  renderGlossario(currentCategoriaGlossario, currentTermoGlossario);
}

let currentCategoriaGlossario = null;
let currentTermoGlossario = '';

function filterGlossarioByCategoria(categoria) {
  currentCategoriaGlossario = categoria;
  
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.dataset.categoria === (categoria || '')) {
      tab.classList.add('active');
    }
  });
  
  renderGlossario(currentCategoriaGlossario, currentTermoGlossario);
}

function filterGlossarioByTermo(termo) {
  currentTermoGlossario = termo;
  renderGlossario(currentCategoriaGlossario, currentTermoGlossario);
}

function buscarTermoGlossario(sigla) {
  document.getElementById('glossarioSearch').value = sigla;
  currentTermoGlossario = sigla;
  currentCategoriaGlossario = null;
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.dataset.categoria === '') {
      tab.classList.add('active');
    }
  });
  renderGlossario(null, sigla);
}

// Render Cronograma
function renderCronograma() {
  const cbsContainer = document.getElementById('timelineCBS');
  const ibsContainer = document.getElementById('timelineIBS');

  if (cbsContainer) {
    cbsContainer.innerHTML = FASES_CBS.map(fase => `
      <div class="timeline-item ${fase.ano === 2026 ? 'active' : ''}">
        <div class="timeline-item__year">${fase.ano}</div>
        <div class="timeline-item__content">
          <div class="timeline-item__header">
            <span class="timeline-item__label">PIS/COFINS</span>
            <div class="progress-bar">
              <div class="progress-bar__fill progress-bar__fill--old" style="width: ${fase.pisCofins}%">
                ${fase.pisCofins}%
              </div>
            </div>
          </div>
          <div class="timeline-item__header">
            <span class="timeline-item__label">CBS</span>
            <div class="progress-bar">
              <div class="progress-bar__fill progress-bar__fill--new" style="width: ${fase.cbs}%">
                ${fase.cbs}%
              </div>
            </div>
          </div>
          <p class="timeline-item__desc">${fase.descricao}</p>
          ${fase.marcos.length > 0 ? `
            <ul class="timeline-item__marcos">
              ${fase.marcos.map(m => `<li><i class="ph ph-check-circle"></i> ${m}</li>`).join('')}
            </ul>
          ` : ''}
        </div>
      </div>
    `).join('');
  }

  if (ibsContainer) {
    ibsContainer.innerHTML = FASES_IBS.map(fase => `
      <div class="timeline-item ${fase.ano === 2026 ? 'active' : ''}">
        <div class="timeline-item__year">${fase.ano}</div>
        <div class="timeline-item__content">
          <div class="timeline-item__header">
            <span class="timeline-item__label">ICMS/ISS</span>
            <div class="progress-bar">
              <div class="progress-bar__fill progress-bar__fill--old" style="width: ${fase.icms}%">
                ${fase.icms}%
              </div>
            </div>
          </div>
          <div class="timeline-item__header">
            <span class="timeline-item__label">IBS</span>
            <div class="progress-bar">
              <div class="progress-bar__fill progress-bar__fill--new" style="width: ${fase.ibs}%">
                ${fase.ibs}%
              </div>
            </div>
          </div>
          <p class="timeline-item__desc">${fase.descricao}</p>
          ${fase.marcos.length > 0 ? `
            <ul class="timeline-item__marcos">
              ${fase.marcos.map(m => `<li><i class="ph ph-check-circle"></i> ${m}</li>`).join('')}
            </ul>
          ` : ''}
        </div>
      </div>
    `).join('');
  }
}

// Calculadora
function calcular() {
  const valorOperacao = parseFloat(document.getElementById('valorOperacao').value) || 1000;
  const tipoOperacao = document.getElementById('tipoOperacao').value;
  const regimeAtual = document.getElementById('regimeAtual').value;
  const aliquotaICMS = parseFloat(document.getElementById('aliquotaICMS')?.value) || 18;
  const aliquotaISS = parseFloat(document.getElementById('aliquotaISS')?.value) || 5;
  const classificacaoNova = document.getElementById('classificacaoNova').value;
  const creditosEntrada = parseFloat(document.getElementById('creditosEntrada')?.value) || 0;

  // Alíquotas PIS/COFINS
  let aliquotaPIS, aliquotaCOFINS;
  if (regimeAtual === 'cumulativo') {
    aliquotaPIS = 0.65;
    aliquotaCOFINS = 3;
  } else {
    aliquotaPIS = 1.65;
    aliquotaCOFINS = 7.6;
  }

  // Cálculo ANTES
  const valorPIS = valorOperacao * (aliquotaPIS / 100);
  const valorCOFINS = valorOperacao * (aliquotaCOFINS / 100);
  const valorICMS = tipoOperacao === 'mercadoria' ? valorOperacao * (aliquotaICMS / 100) : 0;
  const valorISS = tipoOperacao === 'servico' ? valorOperacao * (aliquotaISS / 100) : 0;
  const totalAntes = valorPIS + valorCOFINS + valorICMS + valorISS;

  // Fator de redução
  let fatorReducao = 1;
  switch (classificacaoNova) {
    case 'reduzido60': fatorReducao = 0.4; break;
    case 'reduzido30': fatorReducao = 0.7; break;
    case 'zero':
    case 'isento': fatorReducao = 0; break;
    default: fatorReducao = 1;
  }

  const aliquotaCBSEfetiva = 12 * fatorReducao;
  const aliquotaIBSEfetiva = 15 * fatorReducao;

  // Cálculo DEPOIS
  const valorCBS = valorOperacao * (aliquotaCBSEfetiva / 100);
  const valorIBS = valorOperacao * (aliquotaIBSEfetiva / 100);
  const totalDepois = Math.max(0, valorCBS + valorIBS - creditosEntrada);

  // Diferença
  const diferenca = totalDepois - totalAntes;

  // Update UI
  document.getElementById('aliquotaPIS').textContent = aliquotaPIS;
  document.getElementById('aliquotaCOFINS').textContent = aliquotaCOFINS;
  document.getElementById('valorPIS').textContent = valorPIS.toFixed(2);
  document.getElementById('valorCOFINS').textContent = valorCOFINS.toFixed(2);
  document.getElementById('valorICMS').textContent = valorICMS.toFixed(2);
  document.getElementById('valorISS').textContent = valorISS.toFixed(2);
  document.getElementById('totalAntes').textContent = totalAntes.toFixed(2);
  document.getElementById('cargaAntes').textContent = ((totalAntes / valorOperacao) * 100).toFixed(2);

  document.getElementById('aliquotaCBSEfetiva').textContent = aliquotaCBSEfetiva.toFixed(2);
  document.getElementById('aliquotaIBSEfetiva').textContent = aliquotaIBSEfetiva.toFixed(2);
  document.getElementById('valorCBS').textContent = valorCBS.toFixed(2);
  document.getElementById('valorIBS').textContent = valorIBS.toFixed(2);
  document.getElementById('creditosDisplay').textContent = creditosEntrada.toFixed(2);
  document.getElementById('totalDepois').textContent = totalDepois.toFixed(2);
  document.getElementById('cargaDepois').textContent = ((totalDepois / valorOperacao) * 100).toFixed(2);

  const compCard = document.getElementById('comparisonCard');
  const compIcon = document.getElementById('compIcon');
  const compLabel = document.getElementById('compLabel');
  const compValue = document.getElementById('compValue');
  const compPercent = document.getElementById('compPercent');

  if (diferenca <= 0) {
    compCard.className = 'comparison-card positive';
    compIcon.className = 'ph ph-trend-down';
    compLabel.textContent = 'Economia';
  } else {
    compCard.className = 'comparison-card negative';
    compIcon.className = 'ph ph-trend-up';
    compLabel.textContent = 'Aumento';
  }

  compValue.textContent = `R$ ${Math.abs(diferenca).toFixed(2)}`;
  const percentChange = totalAntes > 0 ? ((Math.abs(diferenca) / totalAntes) * 100).toFixed(1) : 0;
  compPercent.textContent = `${percentChange}% ${diferenca <= 0 ? 'menor' : 'maior'}`;

  // Show/hide fields
  document.getElementById('icmsRow').style.display = tipoOperacao === 'mercadoria' ? 'flex' : 'none';
  document.getElementById('issRow').style.display = tipoOperacao === 'servico' ? 'flex' : 'none';
  document.getElementById('icmsField').style.display = tipoOperacao === 'mercadoria' ? 'block' : 'none';
  document.getElementById('issField').style.display = tipoOperacao === 'servico' ? 'block' : 'none';
  
  const showCredits = ['tributado', 'reduzido60', 'reduzido30'].includes(classificacaoNova);
  document.getElementById('creditosField').style.display = showCredits ? 'block' : 'none';
  document.getElementById('creditosRow').style.display = showCredits && creditosEntrada > 0 ? 'flex' : 'none';
}

// URL Params Helper
function getUrlParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
<<<<<<< HEAD
=======

// ============================================
// WHATSAPP WIDGET
// ============================================

function initWhatsAppWidget() {
  const whatsappNumber = '5532988726385';
  
  const widgetHtml = `
    <div class="whatsapp-widget" id="whatsappWidget">
      <div class="whatsapp-widget__window">
        <div class="whatsapp-widget__header">
          <div class="whatsapp-widget__header-icon">
            <i class="ph-fill ph-whatsapp-logo"></i>
          </div>
          <div class="whatsapp-widget__header-info">
            <h4>Fale com um Consultor</h4>
            <p>Responde rapidamente</p>
          </div>
        </div>
        <div class="whatsapp-widget__body">
          <div class="whatsapp-widget__message">
            Olá! Como podemos te ajudar hoje?
          </div>
        </div>
        <div class="whatsapp-widget__footer">
          <input type="text" id="whatsappInput" class="whatsapp-widget__input" placeholder="Digite sua mensagem..." />
          <button id="whatsappSend" class="whatsapp-widget__send">
            <i class="ph-fill ph-paper-plane-right"></i>
          </button>
        </div>
      </div>
      <button id="whatsappToggle" class="whatsapp-widget__btn">
        <i class="ph-fill ph-whatsapp-logo"></i>
      </button>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', widgetHtml);

  const widget = document.getElementById('whatsappWidget');
  const toggleBtn = document.getElementById('whatsappToggle');
  const sendBtn = document.getElementById('whatsappSend');
  const input = document.getElementById('whatsappInput');

  toggleBtn.addEventListener('click', () => {
    widget.classList.toggle('open');
    if (widget.classList.contains('open')) {
      setTimeout(() => input.focus(), 300);
      toggleBtn.innerHTML = '<i class="ph ph-x"></i>';
    } else {
      toggleBtn.innerHTML = '<i class="ph-fill ph-whatsapp-logo"></i>';
    }
  });

  const sendMessage = () => {
    const text = input.value.trim();
    if (!text) return;
    
    const encodeText = encodeURIComponent(text);
    const url = \`https://wa.me/\${whatsappNumber}?text=\${encodeText}\`;
    
    window.open(url, '_blank');
    
    input.value = '';
    widget.classList.remove('open');
    toggleBtn.innerHTML = '<i class="ph-fill ph-whatsapp-logo"></i>';
  };

  sendBtn.addEventListener('click', sendMessage);
  
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
}

// Ensure the widget is initialized after DOM is loaded. 
// If it's already loaded, run it directly.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWhatsAppWidget);
} else {
  initWhatsAppWidget();
}
>>>>>>> 50afbf9e (add chat whatsapp)
