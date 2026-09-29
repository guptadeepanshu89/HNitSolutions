# HNitSolutions

Premium full-stack website for a fictional IT and digital agency.

**Build. Grow. Scale.**  
Technology That Moves Business Forward.

The application is a production-ready React frontend, Express REST API and PostgreSQL database, connected through the official `pg` driver. Public pages load services, projects and testimonials from the API. Contact and newsletter submissions are stored in PostgreSQL. An authenticated admin dashboard manages the content.

These case studies, logos and testimonials are fictional. They do not represent real clients.

## Features

- Premium marketing site for 14 service lines
- Dynamic service detail pages (`/services/:slug`)
- Portfolio filtering
- Contact form with validation, persistence and optional email
- Newsletter with duplicate prevention
- JWT admin authentication (httpOnly cookie + bearer token)
- Admin dashboard for messages, services, projects, testimonials and subscribers
- SEO tags, Open Graph, canonical URLs, `robots.txt` and `sitemap.xml`
- Rate limiting, Helmet, CORS, input validation and centralized errors
- SQL migrations tracked in `schema_migrations`

## Tech stack

| Layer | Technology |
| --- | --- |
| Frontend | React, React Router, Tailwind CSS, Axios, Framer Motion, Lucide React, Vite |
| Backend | Node.js, Express, JWT, Nodemailer |
| Database | PostgreSQL |
| Driver | `pg` connection pool |

All queries are parameterized SQL in repository modules. There is no ORM.

## Folder structure

```text
HNit_Solutions/
  client/                 React frontend
    src/components/
    src/pages/
    src/layouts/
    src/sections/
    src/services/
    src/hooks/
    src/context/
    src/utils/
    src/data/
    src/assets/
  server/                 Express API
    src/config/db.js
    src/controllers/
    src/middleware/
    src/routes/
    src/services/
    src/repositories/
    src/validators/
    src/utils/
    src/server.js
    database/migrations/
    database/seeds/
    database/migrate.js
    database/seed.js
  README.md
```

## Installation

```bash
cd client
npm install

cd ../server
npm install
```

## PostgreSQL setup

Create a PostgreSQL database named `HNitSolutions` and a dedicated role.

```sql
CREATE USER hnitsolutions WITH PASSWORD 'hnitsolutions';
CREATE DATABASE "HNitSolutions" OWNER hnitsolutions;
```

Then set `DATABASE_URL` in `server/.env`.

## Environment variables

Copy the examples and fill in real values. Never commit `.env` files.

`client/.env`

```env
VITE_API_URL=http://localhost:5000/api
VITE_SITE_URL=http://localhost:5173
```

`server/.env`

```env
PORT=5000
NODE_ENV=development
DATABASE_URL="postgresql://hnitsolutions:hnitsolutions@localhost:5432/HNitSolutions"
JWT_SECRET="change-this-secret"
ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="change-this-password"
SMTP_HOST=""
SMTP_PORT=""
SMTP_USER=""
SMTP_PASSWORD=""
SMTP_FROM="HNitSolutions <hello@hnitsolutions.com>"
CLIENT_URL="http://localhost:5173"
```

Admin credentials are read from `ADMIN_EMAIL` and `ADMIN_PASSWORD` during seed. They are never hardcoded.

SMTP is optional. If it is empty, contact messages still save to PostgreSQL and email is skipped.

## SQL migrations

```bash
cd server
npm run migrate
```

This runs SQL files in `server/database/migrations/` in order and records each file in `schema_migrations`. Already-applied files are skipped.

## Seed setup

```bash
cd server
npm run seed
```

Seed creates 14 services, 6 projects, 6 testimonials and one admin user.

## Database schema

- **users** — id, name, email, password_hash, role, timestamps
- **services** — id, title, slug, description, icon, category, content, is_active, timestamps
- **projects** — id, title, slug, description, category, image, technologies, project_url, timestamps
- **testimonials** — id, client_name, company, role, avatar, rating, content, created_at
- **contact_messages** — id, name, email, phone, company, service, message, status, created_at
- **newsletter_subscribers** — id, email, created_at
- **schema_migrations** — migration tracker

## Development

```bash
cd server
npm run migrate
npm run seed
npm run dev

cd client
npm run dev
```

Frontend: `http://localhost:5173`  
API: `http://localhost:5000`

## Production

```bash
cd client
npm run build

cd ../server
npm run migrate
npm start
```

Serve the Vite `client/dist` build from any static host. Point `VITE_API_URL` at the public API. The Express server reads `PORT` and `DATABASE_URL` from the environment, which is compatible with Railway, Render, Fly.io and similar Node hosts.

## Deployment

1. Provision PostgreSQL and set `DATABASE_URL`.
2. Set `JWT_SECRET`, admin credentials, `CLIENT_URL` and optional SMTP.
3. Run `npm run migrate` and `npm run seed` on the API host.
4. Build the client with the production `VITE_API_URL`.
5. Deploy `client/dist` to a static host and the Express app to a Node host.
6. Restrict CORS to the real client origin.

## API documentation

All responses use:

```json
{ "success": true, "data": {} }
```

or

```json
{ "success": false, "message": "Something went wrong" }
```

### Public

| Method | Path | Description |
| --- | --- | --- |
| GET | `/api/health` | Health check |
| GET | `/api/services` | Active services |
| GET | `/api/services/:slug` | Service detail |
| GET | `/api/projects` | Projects |
| GET | `/api/projects/:slug` | Project detail |
| GET | `/api/testimonials` | Testimonials |
| POST | `/api/contact` | Contact form |
| POST | `/api/newsletter` | Newsletter subscribe |
| POST | `/api/auth/login` | Admin login |
| POST | `/api/auth/logout` | Logout |
| GET | `/api/auth/me` | Current user |

### Admin (JWT required)

| Method | Path | Description |
| --- | --- | --- |
| GET | `/api/admin/stats` | Dashboard totals |
| GET | `/api/admin/messages` | Contact messages |
| PATCH | `/api/admin/messages/:id` | Update status |
| DELETE | `/api/admin/messages/:id` | Delete message |
| GET | `/api/admin/services` | All services |
| POST | `/api/admin/services` | Create service |
| PUT | `/api/admin/services/:id` | Update service |
| DELETE | `/api/admin/services/:id` | Delete service |
| GET | `/api/admin/projects` | Projects |
| POST | `/api/admin/projects` | Create project |
| PUT | `/api/admin/projects/:id` | Update project |
| DELETE | `/api/admin/projects/:id` | Delete project |
| GET | `/api/admin/testimonials` | Testimonials |
| GET | `/api/admin/newsletters` | Subscribers |

## Admin login

1. Set `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `server/.env`.
2. Run `npm run seed` from `server`.
3. Open `/admin/login` and sign in with those values.
4. Unauthorized visitors are redirected to `/admin/login`.

## Architecture

```text
Route → Controller → Service → Repository → PostgreSQL (pg Pool)
```

SQL lives only in repositories and migration files. Routes never build queries.

## License

Private project scaffold for HNitSolutions.
