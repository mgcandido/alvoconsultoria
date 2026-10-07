# Portal Reforma Tributária 2026 — site (`docs/`)

Site estático publicado no **GitHub Pages**: https://mgcandido.github.io/alvoconsultoria/

Esta pasta é a **raiz publicada** do site. A documentação completa do projeto está no [README principal](../README.md).

## 📁 Conteúdo desta pasta

```
docs/
├── index.html             # Início
├── artigos.html           # Artigos técnicos
├── tabelas.html           # Tabelas práticas (NCM, CST, cClassTrib, alíquotas)
├── consulta-ncm.html      # Consulta NCM ao vivo (BrasilAPI)
├── consultas-fiscais.html # CFOP/CST/CSOSN/ICMS (offline) + CNAE (IBGE, ao vivo)
├── leitor-nfe.html        # Leitor de NF-e (XML, 100% no navegador)
├── calculadora.html       # Calculadora + simulador IBS/CBS 2026–2033
├── glossario.html         # Glossário
├── cronograma.html        # Cronograma da transição
├── css/                   # styles.css (global) e pages.css (por página)
├── js/                    # app.js (lógica), data.js (conteúdo), fiscal-data.js (tabelas offline)
├── favicon.svg            # Ícone
├── og-image.png           # Imagem de compartilhamento (Open Graph)
├── robots.txt             # Robôs + sitemap
├── sitemap.xml            # Mapa do site (SEO)
└── .nojekyll              # Desliga o Jekyll no GitHub Pages
```

## 🚀 Deploy

Em **Settings → Pages**, selecione *Deploy from a branch*, branch `main`, pasta `/docs`.
Cada push no `main` republica o site.

## 💻 Rodar localmente

```bash
cd docs
python -m http.server 8000
# http://localhost:8000
```

Use um servidor local (não `file://`), pois as páginas de consulta usam `fetch` a APIs públicas.

## 🎨 Tecnologias

HTML5 + CSS3 (variáveis, tema dark) + JavaScript vanilla · Phosphor Icons · Google Fonts · SEO (JSON-LD, sitemap, Open Graph) · Cloudflare Web Analytics.
