# FitPass Complete Starter

Includes UI prototype + backend stubs: NextAuth, Stripe (Checkout), Prisma (SQLite), bookings API, Vercel config, GitHub Actions CI, and an Expo scaffold.

## Quick start

1. Copy `.env.example` to `.env` and fill the values.
2. Install dependencies: `npm install`.
3. Run Prisma migrate: `npx prisma migrate dev --name init` (creates SQLite dev.db).
4. Seed example data: `node prisma/seed.js` (optional; create file if needed).
5. Run dev server: `npm run dev`.

## Notes
- Replace placeholders in `.env` (Google, Stripe).
- For Stripe webhooks locally: `stripe listen --forward-to localhost:3000/api/webhook`.
