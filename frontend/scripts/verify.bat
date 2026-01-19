@echo off
chcp 65001 >nul
echo ========================================
echo Verificacao de Instalacao
echo ========================================
echo.

cd /d "%~dp0\.."

echo [1/4] Versoes do sistema...
node --version
npm --version
echo.

echo [2/4] Versoes no package.json...
findstr /C:"@angular/core" /C:"typescript" package.json
echo.

echo [3/4] Verificando instalacao...
if exist node_modules (
    echo [OK] node_modules encontrado
    if exist node_modules\@angular\core echo [OK] Angular instalado
    if exist node_modules\typescript echo [OK] TypeScript instalado
) else (
    echo [ERRO] node_modules NAO encontrado
)
echo.

echo [4/4] Versoes instaladas...
npm list @angular/core typescript @angular/cli --depth=0 2>nul
echo.

echo ========================================
echo Verificacao concluida!
echo ========================================
echo.
pause
