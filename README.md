# Enrichment Center

This project is a standard local Vite + React + TypeScript app.

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Create a production build:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

## GitHub setup

1. Create a new GitHub repository.
2. Push this project to the `main` branch.
3. In GitHub, open `Settings -> Pages`.
4. Under `Build and deployment`, choose `GitHub Actions`.
5. Pushes to `main` will deploy automatically using `.github/workflows/deploy-pages.yml`.

The Vite config automatically uses the repository name as the base path during GitHub Pages builds, so it works for the usual `https://username.github.io/repository-name/` URL format.

## Notes

- `dist/404.html` is generated from `index.html` after each build to make single-page app routing more resilient on GitHub Pages.
- If you later deploy to a custom domain or the root Pages site, you can override the base path with `VITE_BASE_PATH=/ npm run build`.
