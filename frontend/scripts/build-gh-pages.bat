@echo off
chcp 65001 >nul
echo ========================================
echo Build para GitHub Pages
echo ========================================
echo.

cd /d "%~dp0\.."

echo [1/3] Verificando versoes...
node --version
npm --version
echo.

echo [2/3] Construindo aplicacao para producao...
npm run build:production
if %ERRORLEVEL% NEQ 0 (
    echo [ERRO] Falha no build!
    pause
    exit /b %ERRORLEVEL%
)
echo.

echo [3/3] Build concluido!
echo.
echo Arquivos gerados em: dist\reforma-tributaria-2026\browser
echo.
echo Para fazer deploy:
echo   1. Configure GitHub Pages em Settings -^> Pages
echo   2. Source: GitHub Actions
echo   3. Faça push do código
echo.
pause
