This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Supabase + Auth0 integration

This project ships with Auth0 for user authentication and includes a small server-side integration to access Supabase using a service role key. The approach implemented here keeps Supabase service credentials on the server and uses the Auth0 session to scope queries to the logged-in user.

Environment variables to add (server-only keys must never be exposed to the browser):

- **`NEXT_PUBLIC_SUPABASE_URL`** — your Supabase project URL (can be public)
- **`NEXT_PUBLIC_SUPABASE_ANON_KEY`** — Supabase anon key (public client usage)
- **`SUPABASE_SERVICE_ROLE_KEY`** — Supabase service role key (server-only, keep secret)

Files added:

- `lib/supabase.js` — helper factories for service/anon Supabase clients
- `pages/api/supabase/user.js` — example authenticated API route that reads/upserts the current user's `profiles` row (matched by `auth0_id`)

Usage notes:

- The API route uses the Auth0 session (`lib/auth0.js`) to identify the user and then uses the Supabase service role client to access the database. This keeps the service key on the server.
- The example assumes a `profiles` table with a column `auth0_id` containing the Auth0 `user.sub`. Adapt queries and table names to your schema.

Optional: configure Auth0 as an external OIDC provider in Supabase (if you prefer Supabase to handle sign-in directly):

1. In the Supabase dashboard go to **Authentication → Providers → OpenID Connect (OIDC)**.
2. Add a new provider for your Auth0 tenant with the appropriate issuer, client ID and client secret (from your Auth0 application).
3. After setup you can use Supabase client-side sign-in flows and Supabase will accept Auth0 as an OAuth provider.

Security reminder: never expose `SUPABASE_SERVICE_ROLE_KEY` to client-side code or commit it to source control.
