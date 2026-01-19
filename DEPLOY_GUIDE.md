# 🚀 Guia Completo de Deploy - GitHub Pages

## ✅ Configuração Realizada

O projeto Angular foi **totalmente configurado** para funcionar como site estático no GitHub Pages, mantendo toda a qualidade e funcionalidades.

### O que foi feito:

1. ✅ **HashLocationStrategy** - Rotas funcionam com `#` (compatível com GitHub Pages)
2. ✅ **Build Otimizado** - Produção com minificação e otimização
3. ✅ **GitHub Actions** - Deploy automático configurado
4. ✅ **Arquivo .nojekyll** - Evita processamento Jekyll

---

## 🎯 Passo a Passo para Deploy

### 1. Preparar o Repositório

```bash
# Adicionar e commitar os arquivos
git add .
git commit -m "Configurar deploy para GitHub Pages"
git push origin main
```

### 2. Configurar GitHub Pages

1. Acesse seu repositório no GitHub
2. Vá em **Settings** → **Pages**
3. Em **Source**, selecione **"GitHub Actions"**
4. Salve as alterações

### 3. Deploy Automático

Após configurar, cada push na branch `main` ou `master` fará:
- ✅ Build automático do Angular
- ✅ Deploy automático para GitHub Pages
- ✅ Site atualizado automaticamente

### 4. Acessar o Site

O site estará disponível em:
```
https://[seu-usuario].github.io/[nome-do-repositorio]/
```

**Exemplo**: Se seu usuário é `joao` e o repo é `reforma-tributaria-2026`:
```
https://joao.github.io/reforma-tributaria-2026/
```

---

## 🔧 Configurações Avançadas

### Se o Repositório está em uma Organização

O workflow já está configurado. Apenas ative o GitHub Pages nas configurações da organização.

### Se Quiser Usar um Domínio Personalizado

1. Adicione um arquivo `CNAME` na pasta `frontend/src/`
2. Configure o domínio nas configurações do GitHub Pages

### Ajustar Base Href

Se o repositório não estiver na raiz, ajuste o `base-href`:

```bash
# No package.json, ajuste o script build:gh-pages
"build:gh-pages": "ng build --configuration production --base-href /[nome-do-repo]/"
```

---

## 📋 Estrutura de Rotas

Com HashLocationStrategy, as rotas funcionam assim:

| Rota Original | URL no GitHub Pages |
|---------------|---------------------|
| `/` | `/#/` |
| `/artigos` | `/#/artigos` |
| `/tabelas` | `/#/tabelas` |
| `/glossario` | `/#/glossario` |
| `/cronograma` | `/#/cronograma` |
| `/calculadora` | `/#/calculadora` |

**✅ Todas as rotas funcionam perfeitamente!**

---

## 🛠️ Scripts Disponíveis

### Build Local

```bash
cd frontend
npm run build:production
```

Arquivos gerados em: `dist/reforma-tributaria-2026/browser`

### Build com Script

```bash
cd frontend
scripts\build-gh-pages.bat
```

### Verificar Build

```bash
cd frontend
npm run build:production
cd dist/reforma-tributaria-2026/browser
# Abra index.html no navegador para testar
```

---

## ✅ Verificação Pós-Deploy

Após o deploy, verifique:

1. ✅ Site carrega corretamente
2. ✅ Rotas funcionam (navegação)
3. ✅ Assets carregam (imagens, CSS, JS)
4. ✅ Responsividade funciona
5. ✅ Funcionalidades JavaScript funcionam

---

## 🔍 Troubleshooting

### Problema: Página em branco

**Solução**:
1. Verifique se o build foi executado: Actions → Deploy to GitHub Pages
2. Verifique se há erros no console do navegador
3. Certifique-se de que o GitHub Pages está ativado

### Problema: Rotas não funcionam

**Solução**: 
- HashLocationStrategy já está configurado
- As rotas devem funcionar com `#` (ex: `/#/artigos`)
- Se não funcionar, verifique o console do navegador

### Problema: Assets não carregam

**Solução**:
1. Verifique os caminhos no `angular.json`
2. Certifique-se de que o build foi executado corretamente
3. Verifique se o `.nojekyll` está presente

### Problema: Deploy não acontece automaticamente

**Solução**:
1. Verifique se o GitHub Actions está ativado
2. Verifique se o workflow está na branch correta
3. Veja os logs em Actions → Deploy to GitHub Pages

---

## 📊 Qualidade Mantida

### ✅ Performance
- Build otimizado com minificação
- Tree-shaking habilitado
- Assets otimizados
- Lazy loading de componentes

### ✅ Funcionalidades
- ✅ Todas as rotas funcionam
- ✅ Navegação completa
- ✅ Componentes carregam corretamente
- ✅ JavaScript funciona perfeitamente
- ✅ CSS/SCSS compilado corretamente

### ✅ Compatibilidade
- ✅ Funciona em todos os navegadores modernos
- ✅ Responsivo (mobile, tablet, desktop)
- ✅ SEO otimizado

---

## 📚 Recursos

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Angular Deployment Guide](https://angular.dev/guide/deployment)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

## 🎉 Pronto!

Seu projeto Angular está **100% configurado** para GitHub Pages!

Basta fazer push e o deploy será automático. 🚀

---

**Última atualização**: Janeiro 2026
