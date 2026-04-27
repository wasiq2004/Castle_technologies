# Castle Technologies

Single-port Vite application ready for Vercel deployment.

## Local development

1. Install dependencies with `npm install`
2. Add `VITE_WEB3FORMS_ACCESS_KEY` to your local `.env`
3. Run `npm run dev`

## Deployment notes

- Deploy as a Vite static site on Vercel
- Keep `    ` in Vercel environment variables
- `vercel.json` rewrites all app routes to `index.html` so React Router works on refresh
