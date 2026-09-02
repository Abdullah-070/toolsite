# Dev Toolkit

Personal learning project: free browser-based dev tools plus plain-language
hardware explainer articles.

## Run locally

```
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Push this folder to a GitHub repo, then import it into Vercel
(vercel.com -> New Project -> import your repo). No extra config needed,
Vercel auto-detects Next.js.

## Structure

- `src/app/tools/dev` - developer tool pages
- `src/app/blog/hardware` - hardware explainer articles
- `src/app/about`, `src/app/privacy-policy` - static pages

Add each new blog post as `src/app/blog/hardware/<slug>/page.tsx`, and each
new tool as `src/app/tools/<category>/<slug>/page.tsx`, then link it from the
matching category page and the homepage.
