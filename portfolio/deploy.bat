@echo off
echo.
echo ==============================================
echo   DEPLOYING PORTFOLIO TO GITHUB
echo ==============================================
echo.

:: 1. Initialize or update Git
git init
git remote add origin https://github.com/reddykarthik2002/portfolio.git 2>nul
git branch -M main

:: 2. Push to GitHub (This may ask for your password/token)
echo.
echo Step 1: Pushing code to GitHub...
git push -u origin main

:: 3. Deploy to GitHub Pages
echo.
echo Step 2: Deploying to GitHub Pages...
npm run deploy

echo.
echo ==============================================
echo   DEPLOYMENT COMPLETE!
echo   Your site should be live at:
echo   https://reddykarthik2002.github.io/portfolio/
echo ==============================================
pause
