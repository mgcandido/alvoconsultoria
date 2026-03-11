# Portal Reforma Tributária 2026

Site estático para GitHub Pages sobre a Reforma Tributária Brasileira 2026.

## 🚀 Deploy no GitHub Pages

### Opção 1: Deploy automático (recomendado)

1. Faça o push do código para o GitHub
2. Vá em **Settings** → **Pages**
3. Em **Source**, selecione **Deploy from a branch**
4. Em **Branch**, selecione `main` e a pasta `/docs`
5. Clique em **Save**

O site estará disponível em: `https://seuusuario.github.io/nome-do-repo/`

### Opção 2: GitHub Actions

Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs
```

## 📁 Estrutura

```
docs/
├── index.html          # Página inicial
├── artigos.html        # Lista de artigos
├── tabelas.html        # Tabelas práticas
├── glossario.html      # Glossário de termos
├── cronograma.html     # Timeline da transição
├── calculadora.html    # Calculadora tributária
├── css/
│   ├── styles.css      # Estilos globais
│   └── pages.css       # Estilos das páginas
└── js/
    ├── data.js         # Dados da aplicação
    └── app.js          # Lógica JavaScript
```

## 🎨 Tecnologias

- **HTML5** puro
- **CSS3** com variáveis CSS
- **JavaScript** ES6+ vanilla
- **Phosphor Icons** para ícones
- **Google Fonts** (Playfair Display, Source Sans 3, JetBrains Mono)

## 📝 Funcionalidades

- ✅ Design responsivo
- ✅ Tema dark moderno
- ✅ Artigos técnicos sobre CBS e IBS
- ✅ Tabelas de NCM, CST e cClassTrib
- ✅ Glossário interativo
- ✅ Cronograma visual da transição
- ✅ Calculadora tributária comparativa
- ✅ Filtros e busca
- ✅ Navegação por categorias

## 🔧 Personalização

### Adicionar novos artigos

Edite o arquivo `js/data.js` e adicione ao array `ARTIGOS`:

```javascript
{
  id: '6',
  slug: 'meu-novo-artigo',
  titulo: 'Título do Artigo',
  subtitulo: 'Subtítulo opcional',
  resumo: 'Resumo do artigo...',
  categoria: 'federal', // federal, estadual, municipal, integrado
  tags: ['tag1', 'tag2'],
  autor: 'Nome do Autor',
  dataPublicacao: '2026-01-20',
  tempoLeitura: 10,
  destaque: false
}
```

### Adicionar novos NCMs

Edite o array `TABELA_NCM` em `js/data.js`.

### Adicionar novos termos ao glossário

Edite o array `GLOSSARIO` em `js/data.js`.

## 📄 Licença

Conteúdo para fins educacionais.

---

**Versão**: 1.0.0  
**Última atualização**: Janeiro 2026
