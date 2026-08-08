# E-commerce Project

This repository contains the main E-commerce application with separate `backend/` and `frontend/` packages.

## Project layout

- `backend/` — Node.js + Express API and Prisma database layer.
- `frontend/` — React SPA built with Vite.

## Development

Install dependencies from the `backend/` and `frontend/` directories separately.

```bash
cd backend && npm install
cd ../frontend && npm install
```

To start both apps in separate shells:

```bash
cd backend && npm run dev
cd frontend && npm run dev
```

## Free frontend deployment

### Vercel

- Connect your GitHub repository to Vercel
- Set the project root to `frontend`
- Build command: `npm run build`
- Output directory: `dist`

### Netlify

- Connect your GitHub repository to Netlify
- Base directory: `frontend`
- Build command: `npm install && npm run build`
- Publish directory: `dist`

## Backend deployment

Deploy `backend/` to Railway or Render.

- Install command: `npm install`
- Start command: `npm start`
- Set environment variables from `backend/.env.example`:
  - `DATABASE_URL`
  - `JWT_SECRET`
  - `STRIPE_SECRET_KEY`
  - `PORT` (optional, default 5000)

## Notes

- The backend currently uses SQLite via Prisma. For production, use Postgres or another hosted database provider.
- The frontend is a static SPA and can be deployed independently if you do not need backend API integration.
