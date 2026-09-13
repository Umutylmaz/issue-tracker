# Issue Tracker

A full-stack issue tracking application built with **Next.js 16 (App Router)**, **TypeScript**, **Prisma**, **MySQL**, **NextAuth**, and **Radix UI**. Users can sign in with Google, create and manage issues, assign them to team members, and view dashboards with charts and the latest activity.

> Built as a hands-on Next.js learning project, adapted from Mosh Hamedani's _Ultimate Next.js Series_.

---

## Features

- Google OAuth authentication via NextAuth
- Create, edit, and delete issues (Markdown supported)
- Assign issues to registered users
- Filter issues by status (`OPEN`, `IN_PROGRESS`, `CLOSED`)
- Sort and paginate the issue list
- Dashboard with issue summary cards and a status chart (Recharts)
- Latest issues widget on the home page
- Form validation with React Hook Form + Zod
- Server-side data fetching and caching with React Query
- Error monitoring with Sentry
- Loading skeletons and toast notifications for a polished UX

---

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4, Radix UI Themes
- **Database:** MySQL + Prisma ORM
- **Auth:** NextAuth (Google Provider) + Prisma Adapter
- **Forms & Validation:** React Hook Form, Zod
- **Data Fetching:** Axios, TanStack React Query
- **Charts:** Recharts
- **Monitoring:** Sentry
- **Markdown Editor:** react-simplemde-editor, react-markdown

---

## Getting Started

### Prerequisites

- Node.js 18+
- A MySQL database (local or hosted, e.g. PlanetScale)
- A Google OAuth Client ID & Secret
- (Optional) A Sentry project DSN

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/issue-tracker.git
cd issue-tracker
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
# Database
DATABASE_URL="mysql://user:password@host:3306/issue_tracker"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-random-secret"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Sentry (optional)
SENTRY_AUTH_TOKEN="your-sentry-token"
```

### 4. Set up the database

```bash
npx prisma generate
npx prisma migrate dev
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Script          | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Build the app for production |
| `npm start`     | Start the production server  |
| `npm run lint`  | Run ESLint                   |

---

## Project Structure

```
app/
  api/              # Route handlers (issues, users, auth)
  auth/             # NextAuth options and session provider
  components/       # Shared UI components
  issues/           # Issues pages (list, new, edit, detail)
prisma/
  schema.prisma     # Database schema
  migrations/       # Prisma migrations
```

---

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com/new). Make sure to:

1. Set all environment variables in the Vercel dashboard.
2. Provide a production `DATABASE_URL`.
3. Update `NEXTAUTH_URL` to your production domain.
4. Add the production callback URL to your Google OAuth credentials:
   `https://your-domain.com/api/auth/callback/google`

See the [Next.js deployment docs](https://nextjs.org/docs/deployment) for details.

---

## License

This project is for educational purposes and is available under the [MIT License](LICENSE).
