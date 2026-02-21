# Portal Reforma Tributária 2026 - Frontend

Portal Angular moderno para consultoria tributária especializada na Reforma Tributária Brasileira 2026.

## 🚀 Tecnologias

- **Angular 17** - Framework frontend
- **TypeScript** - Tipagem estática
- **SCSS** - Estilos com variáveis CSS
- **Standalone Components** - Arquitetura moderna do Angular
- **Lazy Loading** - Carregamento otimizado de rotas

## 📦 Instalação

```bash
# Navegar para a pasta frontend
cd frontend

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start
```

O servidor estará disponível em `http://localhost:4200`

## 🎯 Funcionalidades

### Páginas Disponíveis

| Rota | Descrição |
|------|-----------|
| `/` | Home - Visão geral e destaques |
| `/artigos` | Lista de artigos técnicos |
| `/artigos/:slug` | Detalhe do artigo |
| `/tabelas` | Lista de tabelas práticas |
| `/tabelas/:tipo` | Tabela específica |
| `/glossario` | Glossário de termos |
| `/cronograma` | Cronograma da transição |
| `/calculadora` | Calculadora tributária |

### Conteúdo Incluído

- **Artigos Técnicos**
  - Substituição PIS/COFINS → CBS
  - Unificação ICMS/ISS → IBS
  - cClassTrib: Nova Classificação Tributária
  - Impactos no Setor de Serviços
  - Operações Interestaduais no IBS

- **Tabelas Práticas**
  - NCM × CBS
  - NCM × IBS
  - CST Antigo → Novo
  - cClassTrib Completa
  - Alíquotas Comparativas

- **Ferramentas**
  - Calculadora Tributária Comparativa
  - Cronograma Visual de Transição
  - Glossário Interativo

## 🎨 Design System

### Variáveis CSS

```scss
// Cores principais
--color-primary: #059669;      // Verde esmeralda
--color-primary-light: #10b981;
--color-accent: #d97706;       // Dourado

// Backgrounds
--bg-primary: #0f172a;         // Navy escuro
--bg-secondary: #1e293b;
--bg-card: #1e293b;

// Tipografia
--font-display: 'Playfair Display';  // Títulos
--font-body: 'Source Sans 3';        // Texto
--font-mono: 'JetBrains Mono';       // Código
```

### Badges de Categoria

```html
<span class="badge badge--federal">Federal</span>
<span class="badge badge--estadual">Estadual</span>
<span class="badge badge--municipal">Municipal</span>
<span class="badge badge--cbs">CBS</span>
<span class="badge badge--ibs">IBS</span>
```

## 📁 Estrutura do Projeto

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/        # Componentes reutilizáveis
│   │   │   ├── header/
│   │   │   ├── sidebar/
│   │   │   └── footer/
│   │   ├── models/            # Interfaces TypeScript
│   │   │   ├── artigo.model.ts
│   │   │   ├── tabela.model.ts
│   │   │   ├── glossario.model.ts
│   │   │   └── cronograma.model.ts
│   │   ├── pages/             # Páginas da aplicação
│   │   │   ├── home/
│   │   │   ├── artigos/
│   │   │   ├── tabelas/
│   │   │   ├── glossario/
│   │   │   ├── cronograma/
│   │   │   └── calculadora/
│   │   ├── services/          # Serviços de dados
│   │   │   ├── artigos.service.ts
│   │   │   ├── tabelas.service.ts
│   │   │   └── glossario.service.ts
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── styles.scss            # Estilos globais
│   ├── index.html
│   └── main.ts
├── angular.json
├── package.json
└── tsconfig.json
```

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm start         # Inicia servidor dev (localhost:4200)

# Build
npm run build     # Build de produção

# Watch
npm run watch     # Build com watch mode
```

## 📚 Modelos de Dados

### Artigo
```typescript
interface Artigo {
  id: string;
  slug: string;
  titulo: string;
  subtitulo?: string;
  resumo: string;
  conteudo: string;
  categoria: 'federal' | 'estadual' | 'municipal' | 'integrado';
  tags: string[];
  autor: string;
  dataPublicacao: Date;
  tempoLeitura: number;
  destaque?: boolean;
}
```

### Tabela Tributária
```typescript
interface TabelaTributaria {
  id: string;
  tipo: TipoTabela;
  titulo: string;
  descricao: string;
  colunas: ColunaTabela[];
  dados: RegistroTabela[];
  ultimaAtualizacao: Date;
}
```

## 🎯 Público-Alvo

- Contadores
- Fiscais
- Consultores tributários
- Analistas de sistemas fiscais

## 📝 Licença

Este projeto é para fins educacionais sobre a Reforma Tributária 2026.

---

**Versão**: 1.0.0  
**Última atualização**: Janeiro 2026
