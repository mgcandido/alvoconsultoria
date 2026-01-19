# 🚀 Deploy para GitHub Pages

## 📋 Configuração Realizada

O projeto Angular foi configurado para ser hospedado no GitHub Pages como site estático.

### ✅ Alterações Implementadas

1. **HashLocationStrategy**: Rotas agora usam `#` (ex: `/artigos` → `/#/artigos`)
   - Funciona perfeitamente com GitHub Pages
   - Não requer configuração de servidor

2. **Build de Produção**: Configurado para gerar arquivos estáticos otimizados
   - Minificação ativada
   - Tree-shaking habilitado
   - Output otimizado

3. **GitHub Actions**: Workflow automático para deploy
   - Deploy automático ao fazer push na branch main/master
   - Build e deploy em cada atualização

---

## 🚀 Como Fazer Deploy

### Opção 1: Deploy Automático (Recomendado)

1. **Configure o GitHub Pages no repositório**:
   - Vá em Settings → Pages
   - Source: selecione "GitHub Actions"

2. **Faça push do código**:
   ```bash
   git add .
   git commit -m "Configurar deploy para GitHub Pages"
   git push origin main
   ```

3. **Aguarde o deploy automático**:
   - O GitHub Actions fará o build e deploy automaticamente
   - Verifique em Actions → Deploy to GitHub Pages

### Opção 2: Deploy Manual

```bash
cd frontend
npm run build:production
```

Depois, faça upload da pasta `dist/reforma-tributaria-2026/browser` para o GitHub Pages.

---

## 📝 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run build:production` | Build para produção (sem base-href) |
| `npm run build:gh-pages` | Build com base-href para GitHub Pages |
| `npm run deploy` | Build e deploy usando angular-cli-ghpages |

---

## ⚙️ Configuração do GitHub Pages

### Se o repositório está na raiz do GitHub:

1. Settings → Pages
2. Source: GitHub Actions
3. O workflow fará o deploy automaticamente

### Se o repositório está em uma organização:

O workflow já está configurado. Apenas ative o GitHub Pages nas configurações.

---

## 🔍 Verificação

Após o deploy, acesse:
- `https://[seu-usuario].github.io/[nome-do-repo]/`

As rotas funcionarão com hash:
- `/#/` - Home
- `/#/artigos` - Artigos
- `/#/tabelas` - Tabelas
- `/#/glossario` - Glossário
- `/#/cronograma` - Cronograma
- `/#/calculadora` - Calculadora

---

## ⚠️ Importante

### HashLocationStrategy

O projeto usa **HashLocationStrategy** para compatibilidade com GitHub Pages:
- ✅ Funciona sem configuração de servidor
- ✅ Todas as rotas funcionam corretamente
- ✅ URLs ficam com `#` (ex: `/#/artigos`)

### Build de Produção

O build gera arquivos estáticos otimizados:
- HTML, CSS e JavaScript minificados
- Assets otimizados
- Pronto para produção

---

## 🛠️ Troubleshooting

### Problema: Página em branco
**Solução**: Verifique se o build foi executado corretamente e se os arquivos estão na pasta correta.

### Problema: Rotas não funcionam
**Solução**: Certifique-se de que está usando HashLocationStrategy (já configurado).

### Problema: Assets não carregam
**Solução**: Verifique os caminhos dos assets no `angular.json`.

---

## 📚 Recursos

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Angular Deployment Guide](https://angular.dev/guide/deployment)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**Última atualização**: Janeiro 2026
