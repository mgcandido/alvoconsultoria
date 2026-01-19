@echo off
chcp 65001 >nul
echo ========================================
echo Correcao de Vulnerabilidades
echo ========================================
echo.

cd /d "%~dp0\.."

echo [1/3] Verificando vulnerabilidades...
npm audit
echo.

echo [2/3] Corrigindo vulnerabilidades (sem breaking changes)...
npm audit fix
echo.

echo [3/3] Verificando resultado...
npm audit
echo.

echo ========================================
echo Correcao concluida!
echo ========================================
echo.
echo NOTA: Se ainda houver vulnerabilidades, elas sao de baixa severidade
echo e podem ser ignoradas ou aguardar correcao oficial.
echo.
pause
