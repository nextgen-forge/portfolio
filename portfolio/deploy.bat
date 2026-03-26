@echo off
echo.
echo ==============================================
echo   STEP 1: PUSHING TO GITHUB
echo ==============================================
git add .
git commit -m "update portfolio"
git push origin main
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Could not push to GitHub. 
    echo Please make sure you have the 'portfolio' repo created
    echo and that you have entered your credentials correctly.
    pause
    exit /b %errorlevel%
)

echo.
echo ==============================================
echo   STEP 2: DEPLOYING TO GITHUB PAGES
echo ==============================================
npm run deploy
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Could not deploy to GitHub Pages.
    pause
    exit /b %errorlevel%
)

echo.
echo ==============================================
echo   SUCCESS! 
echo ==============================================
echo Your site is now being published.
echo 1. Go to GitHub Settings > Pages
echo 2. Select 'gh-pages' branch from the dropdown
echo 3. Click 'Save'
echo.
pause
