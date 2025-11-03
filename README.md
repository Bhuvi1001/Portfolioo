# Bhuvanesh S — React Portfolio

A simple, fast React (Vite) portfolio generated from CV details.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy (Vercel - easiest)
1. Push this folder to a GitHub repo.
2. Go to https://vercel.com → **New Project** → import your repo.
3. Framework: **Vite**, Build command: `npm run build`, Output dir: `dist`.
4. Deploy. Your live link will be generated automatically.

## Deploy (Netlify)
1. Push to GitHub → **New site from Git** on Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`

## Deploy (GitHub Pages)
1. In `vite.config.js`, ensure `base: '/<repo-name>/'` when deploying under a repo path.
2. Build: `npm run build`
3. Serve `dist` using GitHub Pages (e.g., via Actions or upload `dist` to `gh-pages` branch).

## Edit your content
Everything is in `src/data/profile.js` and the files in `src/pages`.
