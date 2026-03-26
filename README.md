# Consultoria Tributária - Reforma Tributária 2026

## 📋 Sobre o Projeto

Repositório especializado em conteúdos técnicos sobre a **Reforma Tributária Brasileira de 2026**, com foco nos impactos da substituição do PIS/COFINS pela CBS e na implementação do IBS.

## 🎯 Missão

Produzir artigos técnicos, didáticos e aplicáveis ao dia a dia das empresas, com tabelas práticas para uso operacional e consultivo.

## 📂 Estrutura do Projeto

```
alvoconsultoria/
│
├── docs/                       # Site estático (HTML/CSS/JS) — publicado via GitHub Pages
│   ├── index.html             # Página inicial
│   ├── artigos.html           # Listagem de artigos
│   ├── calculadora.html       # Calculadora tributária
│   ├── cronograma.html        # Cronograma da reforma
│   ├── glossario.html         # Glossário técnico
│   ├── tabelas.html           # Tabelas de referência
│   ├── css/
│   │   ├── styles.css         # Estilos globais
│   │   └── pages.css          # Estilos por página
│   └── js/
│       ├── app.js             # Lógica principal
│       └── data.js            # Dados estáticos
│
├── Artigos/                    # Artigos técnicos completos (Markdown)
│   ├── Federais/              # Impactos tributários federais
│   ├── Estaduais/             # Impactos tributários estaduais
│   ├── Municipais/            # Impactos tributários municipais
│   └── Integrados/            # Análises integradas dos três níveis
│
├── Tabelas/                    # Tabelas práticas de referência
│   ├── Transicao_PIS_COFINS/  # Tabelas de transição PIS/COFINS → CBS
│   ├── NCM_CBS/               # NCMs e enquadramento CBS
│   ├── NCM_IBS/               # NCMs e enquadramento IBS
│   └── cClassTrib/            # Classificações tributárias
│
├── Exemplos/                   # Exemplos práticos aplicados
│   ├── Casos_Reais/           # Exemplos baseados em casos reais
│   └── Simulados/             # Cenários simulados para estudo
│
├── Templates/                  # Templates para criação de conteúdo
│   └── Template_Artigo.md     # Template padrão para artigos
│
└── Documentacao/              # Documentação auxiliar
    ├── Glossario.md           # Terminologia técnica
    └── Referencias_Legais.md  # Referências legais e normativas
```

## 🌐 Site

O site está disponível em HTML/CSS/JS puro na pasta `docs/`, sem dependências de frameworks.  
Para rodar localmente, basta abrir `docs/index.html` no navegador ou usar qualquer servidor estático simples.

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

## 📝 Como Usar

### Para Criar um Novo Artigo

```bash
# Use o template como base
cp Templates/Template_Artigo.md Artigos/[Categoria]/Meu_Artigo.md

# Edite seguindo a estrutura do template
```

### Exemplo de Solicitação

> "Crie um artigo sobre a substituição do PIS/COFINS pela CBS, incluindo uma tabela prática com exemplos de NCM, CST antigo, novo enquadramento CBS/IBS e cClassTrib."

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

---

**Versão**: 1.0  
**Última atualização**: 2026
