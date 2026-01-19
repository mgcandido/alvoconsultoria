# Consultoria Tributária - Reforma Tributária 2026

## 📋 Sobre o Projeto

Repositório especializado em conteúdos técnicos sobre a **Reforma Tributária Brasileira de 2026**, com foco nos impactos da substituição do PIS/COFINS pela CBS e na implementação do IBS.

## 🌐 Site Publicado

O projeto está configurado para deploy automático no GitHub Pages.

**Acesse o site**: [https://[seu-usuario].github.io/[nome-do-repo]/](https://github.com)

## 🚀 Deploy Rápido

### Deploy Automático (Recomendado)

1. Configure o GitHub Pages:
   - Vá em **Settings → Pages**
   - Source: selecione **"GitHub Actions"**

2. Faça push do código:
   ```bash
   git push origin main
   ```

3. O deploy será feito automaticamente via GitHub Actions!

### Deploy Manual

```bash
cd frontend
npm install
npm run build:production
```

Depois, faça upload da pasta `dist/reforma-tributaria-2026/browser` para o GitHub Pages.

## 📂 Estrutura do Projeto

```
Reforma Tributária 2026/
│
├── frontend/                  # Aplicação Angular
│   ├── src/                  # Código-fonte
│   ├── scripts/              # Scripts de instalação
│   └── dist/                 # Build de produção (gerado)
│
├── Artigos/                  # Artigos técnicos completos
│   ├── Federais/            # Impactos tributários federais
│   ├── Estaduais/            # Impactos tributários estaduais
│   ├── Municipais/           # Impactos tributários municipais
│   └── Integrados/           # Análises integradas dos três níveis
│
├── Tabelas/                  # Tabelas práticas de referência
│   ├── Transicao_PIS_COFINS/ # Tabelas de transição PIS/COFINS → CBS
│   ├── NCM_CBS/              # NCMs e enquadramento CBS
│   ├── NCM_IBS/              # NCMs e enquadramento IBS
│   └── cClassTrib/           # Classificações tributárias
│
├── Exemplos/                 # Exemplos práticos aplicados
│   ├── Casos_Reais/          # Exemplos baseados em casos reais
│   └── Simulados/            # Cenários simulados para estudo
│
├── Templates/                # Templates para criação de conteúdo
│   └── Template_Artigo.md    # Template padrão para artigos
│
└── Documentacao/             # Documentação auxiliar
    ├── Glossario.md          # Terminologia técnica
    └── Referencias_Legais.md # Referências legais e normativas
```

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 24.13.0+ (LTS 2026)
- npm 11.6.2+

### Instalação

```bash
cd frontend
npm install
```

### Executar em Desenvolvimento

```bash
npm start
```

O projeto será iniciado em `http://localhost:4200`

### Build de Produção

```bash
npm run build:production
```

Os arquivos serão gerados em `dist/reforma-tributaria-2026/browser`

## 📝 Como Usar

### Para Criar um Novo Artigo

```bash
# Use o template como base
cp Templates/Template_Artigo.md Artigos/[Categoria]/Meu_Artigo.md

# Edite seguindo a estrutura do template
```

### Exemplo de Solicitação

> "Crie um artigo sobre a substituição do PIS/COFINS pela CBS, incluindo uma tabela prática com exemplos de NCM, CST antigo, novo enquadramento CBS/IBS e cClassTrib."

## 🎓 Diretrizes de Conteúdo

### Nível Técnico
- **Público-alvo**: Consultores tributários sênior, contadores, fiscais, analistas de sistemas fiscais
- **Linguagem**: Profissional, clara e objetiva
- **Abordagem**: Prática e aplicável ao dia a dia

### Abrangência
- ✅ Tributos **Federais** (CBS, PIS/COFINS)
- ✅ Tributos **Estaduais** (ICMS integrado ao IBS)
- ✅ Tributos **Municipais** (ISS integrado ao IBS)

### Foco Principal
1. Substituição do PIS/COFINS pela **CBS**
2. **IBS** (Imposto sobre Bens e Serviços)
3. Integração **CBS/IBS**
4. Transição do modelo antigo para o novo

### Estrutura dos Artigos
Cada artigo deve conter:
1. **Introdução objetiva**
2. **Contexto legal e conceitual**
3. **Impactos práticos para empresas**
4. **Exemplos aplicados**
5. **Conclusão com orientações operacionais**

### Tabelas Obrigatórias
Sempre que possível, incluir:
- NCM (Nomenclatura Comum do Mercosul)
- Descrição do produto/serviço
- CST antigo (Código de Situação Tributária)
- Novo enquadramento CBS
- Novo enquadramento IBS
- cClassTrib correta
- Observações fiscais relevantes

## 🔍 Terminologia Técnica

- **CBS**: Contribuição sobre Bens e Serviços (substitui PIS/COFINS)
- **IBS**: Imposto sobre Bens e Serviços (unifica ICMS + ISS)
- **NCM**: Nomenclatura Comum do Mercosul
- **CST**: Código de Situação Tributária
- **cClassTrib**: Classificação Tributária

## 📚 Referências

Para mais informações sobre terminologia e referências legais, consulte:
- `Documentacao/Glossario.md`
- `Documentacao/Referencias_Legais.md`
- `frontend/INSTALL.md` - Guia de instalação
- `frontend/DEPLOY.md` - Guia de deploy

## 🔧 Tecnologias

- **Angular 21** - Framework frontend
- **TypeScript 5.9** - Linguagem de programação
- **SCSS** - Pré-processador CSS
- **GitHub Pages** - Hospedagem estática

---

**Versão**: 1.0  
**Última atualização**: 2026
