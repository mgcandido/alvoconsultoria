# 📦 Guia de Instalação e Atualização

## 🚀 Instalação Rápida

### Pré-requisitos
- Node.js 24.13.0+ (LTS 2026)
- npm 11.6.2+

### Instalação Inicial

```cmd
cd frontend
scripts\install.bat
```

Ou manualmente:
```cmd
cd frontend
npm install
```

---

## 🔄 Atualização de Versões

### Atualizar para Versões Mais Recentes

```cmd
cd frontend
scripts\update.bat
```

Este script:
1. Atualiza npm globalmente
2. Remove instalações antigas
3. Limpa cache
4. Reinstala com versões atualizadas

### Versões Atuais (2026)

| Biblioteca | Versão |
|------------|--------|
| Angular | 21.0.0 |
| TypeScript | 5.9.0 |
| Node.js | 24.13.0+ |
| npm | 11.6.2+ |

---

## ✅ Verificação

### Verificar Instalação

```cmd
cd frontend
scripts\verify.bat
```

Ou manualmente:
```cmd
npm list @angular/core typescript --depth=0
```

---

## 🔒 Vulnerabilidades

### Verificar Vulnerabilidades

```cmd
cd frontend
npm audit
```

### Corrigir Vulnerabilidades

```cmd
cd frontend
scripts\fix-audit.bat
```

**⚠️ IMPORTANTE**: Não use `npm audit fix --force` pois pode fazer downgrade de versões.

---

## 🛠️ Scripts Disponíveis

Todos os scripts estão na pasta `scripts/`:

| Script | Descrição |
|--------|-----------|
| `install.bat` | Instala dependências |
| `update.bat` | Atualiza para versões mais recentes |
| `verify.bat` | Verifica instalação e versões |
| `fix-audit.bat` | Corrige vulnerabilidades |

---

## 📋 Comandos Úteis

### Desenvolvimento
```cmd
npm start          # Inicia servidor de desenvolvimento
npm run build      # Compila para produção
npm test           # Executa testes
```

### Verificação
```cmd
npm list --depth=0              # Lista dependências principais
npm outdated                    # Verifica pacotes desatualizados
ng version                      # Versão do Angular CLI
```

### Limpeza
```cmd
npm cache clean --force        # Limpa cache do npm
rmdir /s /q node_modules       # Remove node_modules
del package-lock.json          # Remove lockfile
```

---

## ⚠️ Problemas Comuns

### Erro: Versões incompatíveis
**Solução**: Execute `scripts\update.bat` para reinstalar tudo.

### Erro: Vulnerabilidades após atualização
**Solução**: Execute `scripts\fix-audit.bat`. Se persistir, são vulnerabilidades de baixa severidade que podem ser ignoradas.

### Erro: npm install falha
**Solução**: 
1. Limpe cache: `npm cache clean --force`
2. Remova node_modules e package-lock.json
3. Execute `scripts\install.bat`

---

## 📚 Recursos

- [Angular Documentation](https://angular.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [npm Documentation](https://docs.npmjs.com)

---

**Última atualização**: Janeiro 2026
