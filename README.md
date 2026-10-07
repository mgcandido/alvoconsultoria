# Reforma Tributária 2026 — Portal e Ferramentas

Portal especializado na **Reforma Tributária Brasileira de 2026** (CBS e IBS), com conteúdo técnico e **ferramentas interativas de consulta fiscal**. É um site estático, sem backend, publicado via **GitHub Pages**.

🔗 **Online:** https://mgcandido.github.io/alvoconsultoria/

---

## ✨ O que o site oferece

| Página | Descrição | Fonte dos dados |
|---|---|---|
| **Início** | Visão geral da Reforma e atalhos para as ferramentas | — |
| **Artigos** | Artigos técnicos sobre CBS, IBS e a transição | conteúdo próprio (`js/data.js`) |
| **Tabelas** | Tabelas práticas: NCM × CBS/IBS, CST, cClassTrib, alíquotas | conteúdo próprio (`js/data.js`) |
| **Consulta NCM** | Busca de NCM com classificação, em tempo real | [BrasilAPI](https://brasilapi.com.br/) (ao vivo) |
| **Consultas Fiscais** | CFOP, CST ICMS, CSOSN, CST PIS/COFINS, CST IPI, alíquota de ICMS por UF e os novos **CST IBS/CBS** (18) e **cClassTrib** (173) — offline — + **CNAE ao vivo** | tabelas offline + [IBGE](https://servicodados.ibge.gov.br/) |
| **Leitor de NF-e** | Abre o XML da NF-e/NFC-e e exibe chave, partes, itens, impostos e os campos de **IBS/CBS/IS** — 100% no navegador | o próprio arquivo do usuário |
| **Calculadora** | Comparativo de carga antes/depois + **Simulador de transição ano a ano (2026–2033)** | cálculo local |
| **Glossário** | Termos técnicos da Reforma | conteúdo próprio (`js/data.js`) |
| **Cronograma** | Linha do tempo da transição (LC 214/2025) | conteúdo próprio (`js/data.js`) |

> 🔒 **Privacidade:** a Consulta NCM e a de CNAE chamam APIs públicas direto do navegador; o Leitor de NF-e processa o XML **localmente** — nenhum arquivo é enviado a servidores.

---

## 🧱 Estrutura do repositório

```
alvoconsultoria/
├── docs/                      # Site estático publicado (GitHub Pages)
│   ├── index.html             # Início
│   ├── artigos.html           # Artigos
│   ├── tabelas.html           # Tabelas práticas
│   ├── consulta-ncm.html      # Consulta NCM (BrasilAPI, ao vivo)
│   ├── consultas-fiscais.html # CFOP/CST/CSOSN/ICMS (offline) + CNAE (IBGE)
│   ├── leitor-nfe.html        # Leitor de NF-e (XML, client-side)
│   ├── calculadora.html       # Calculadora + simulador IBS/CBS 2026–2033
│   ├── glossario.html         # Glossário
│   ├── cronograma.html        # Cronograma da transição
│   ├── css/
│   │   ├── styles.css         # Estilos globais
│   │   └── pages.css          # Estilos por página
│   ├── js/
│   │   ├── app.js             # Lógica compartilhada (nav, render, filtros)
│   │   ├── data.js            # Conteúdo (artigos, tabelas, glossário, cronograma)
│   │   ├── fiscal-data.js     # Tabelas fiscais offline (CFOP, CST, CSOSN, ICMS)
│   │   └── reforma-data.js    # CST IBS/CBS (18) e cClassTrib (173) — IT 2025.002
│   ├── favicon.svg            # Ícone do site
│   ├── og-image.png           # Imagem de compartilhamento (Open Graph)
│   ├── robots.txt             # Diretrizes para robôs + link do sitemap
│   ├── sitemap.xml            # Mapa do site (SEO)
│   └── .nojekyll              # Desliga o processamento Jekyll
│
├── Artigos/                   # Base de artigos em Markdown (Federais, Estaduais, …)
├── Tabelas/                   # Base de tabelas de referência
├── Exemplos/                  # Casos reais e cenários simulados
├── Templates/                 # Template padrão de artigo
├── Documentacao/              # Glossário e referências legais
└── README.md
```

As pastas fora de `docs/` são o **espaço de trabalho de conteúdo** (rascunhos e material de apoio). O que vai ao ar fica em `docs/`.

---

## 🛠️ Tecnologias

- **HTML5**, **CSS3** (variáveis CSS, tema dark) e **JavaScript** vanilla (ES6+) — sem frameworks nem build.
- [Phosphor Icons](https://phosphoricons.com/) e Google Fonts (Playfair Display, Source Sans 3, JetBrains Mono).
- **SEO:** títulos/descrições por página, canonical, Open Graph e Twitter Cards, dados estruturados **JSON-LD** (Organization, WebSite, WebPage, BreadcrumbList), `sitemap.xml`, `robots.txt` e favicon.
- **Analytics:** Cloudflare Web Analytics (sem cookies, respeita a privacidade).

---

## 🚀 Deploy (GitHub Pages)

O site é publicado a partir da pasta `/docs` no branch `main`:

1. **Settings → Pages**
2. **Source:** *Deploy from a branch*
3. **Branch:** `main` · **Folder:** `/docs` → **Save**

Cada `git push` no `main` atualiza o site em 1–2 minutos.

## 💻 Rodar localmente

Por usar `fetch` a APIs, abra via um servidor local (não pelo `file://`):

```bash
cd docs
python -m http.server 8000
# acesse http://localhost:8000
```

---

## 🔧 Como editar o conteúdo

Todo o conteúdo editorial fica em [`docs/js/data.js`](docs/js/data.js):

- **Artigos:** array `ARTIGOS`
- **Tabelas (NCM/CST/cClassTrib):** arrays de tabela correspondentes
- **Glossário:** array `GLOSSARIO`
- **Cronograma:** fases `FASES_CBS` / `FASES_IBS`

As tabelas fiscais offline (CFOP, CST, CSOSN, ICMS) ficam em [`docs/js/fiscal-data.js`](docs/js/fiscal-data.js).

---

## 📚 Créditos e fontes

- Dados das tabelas fiscais offline (CFOP, CST, CSOSN, alíquotas de ICMS) e o modelo do simulador de transição e do leitor de NF-e são derivados do projeto de código aberto **[mcp-fiscal-brasil](https://github.com/DeHor-Labs/mcp-fiscal-brasil)** (licença MIT, © 2026 Nikolas DeHor).
- Consulta NCM: **BrasilAPI**. Consulta CNAE: **API do IBGE**.
- Tabelas de **CST IBS/CBS** e **cClassTrib**: **Informe Técnico RT 2025.002** (Portal Nacional da NF-e) / Portal DFe SVRS.
- Base normativa: **LC 214/2025** e notas técnicas da Reforma (NT/IT 2025.002, inclusive os campos de IBS/CBS/IS na NF-e).

## ⚠️ Aviso

Conteúdo e ferramentas para **fins informativos e educacionais**. As alíquotas de referência de CBS/IBS são estimativas ainda sujeitas a regulamentação. Não substitui parecer contábil ou jurídico — consulte sempre um profissional especializado.

---

**Última atualização:** outubro de 2026
