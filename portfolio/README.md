# 🚀 My Portfolio — React + Vite + GitHub Pages

A dark, editorial-styled developer portfolio with live GitHub project fetching, smooth animations, and full responsiveness.

## ✏️ Step 1: Personalize (takes 5 minutes)

Open `src/App.jsx` and edit the `CONFIG` object at the top:

```js
const CONFIG = {
  name:      "Your Full Name",
  title:     "Full Stack Developer",
  tagline:   "Your one-liner pitch.",
  bio:       "A few sentences about yourself.",
  github:    "your-github-username",   // ← GitHub API will auto-fetch your repos!
  linkedin:  "your-linkedin-slug",
  email:     "you@email.com",
  resumeUrl: "/portfolio/resume.pdf",  // put your resume.pdf in the /public folder
  skills: { ... },     // edit skill categories
  experience: [ ... ], // edit job history
}
```

## 📁 Step 2: Add your resume

1. Place your `resume.pdf` in the `/public` folder
2. Update `resumeUrl: '/portfolio/resume.pdf'` in CONFIG

## ⚙️ Step 3: Update the base path

In `vite.config.js`, change `base` to match your **GitHub repo name**:

```js
// If your repo URL is: github.com/yourname/my-portfolio
base: '/my-portfolio/',
```

## 🛠 Local Development

```bash
npm install
npm run dev       # → http://localhost:5173/portfolio/
```

## 🌐 Deploy to GitHub Pages (Automatic)

This repo includes a **GitHub Actions workflow** that auto-deploys on every push to `main`.

### One-time setup:
1. Push this project to a new GitHub repo
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to `main` — your site will be live at:
   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

That's it! Every future `git push` auto-deploys.

## 🏗 Manual Deploy (alternative)

```bash
npm run build
# Then push the /dist folder to the gh-pages branch
```

## 📦 Tech Stack

- **React 18** + **Vite**
- **Framer Motion** — animations
- **Lucide React** — icons
- **GitHub REST API** — live project fetching
- **Google Fonts** — Clash Display + DM Sans

---
Built with ❤️ and deployed on GitHub Pages.
