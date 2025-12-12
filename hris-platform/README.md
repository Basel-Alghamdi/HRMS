# HRIS Platform

A modern, scalable Human Resources Information System built with a microservices architecture.

## Project Structure

```
hris-platform/
├── apps/
│   ├── web/                    # Next.js 15 - Employee Portal (Arabic RTL)
│   └── admin/                  # Next.js 15 - Admin Dashboard (Arabic RTL)
├── services/
│   ├── auth-service/          # NestJS - Authentication & Authorization
│   └── employee-service/      # NestJS - Employee Management
├── packages/
│   ├── ui/                    # Shared React components (shadcn/ui + Tailwind)
│   ├── database/              # TypeORM entities, migrations, seeds
│   ├── types/                 # Shared TypeScript types
│   ├── utils/                 # Helper functions
│   └── config/                # Shared configuration
```

## Tech Stack

### Frontend
- **Next.js 15** with App Router
- **React 18**
- **TypeScript 5.3+**
- **Tailwind CSS**
- **shadcn/ui** components
- **next-intl** for internationalization (Arabic primary, English secondary)
- **RTL support** for Arabic language

### Backend
- **NestJS 10+**
- **TypeORM** for database ORM
- **PostgreSQL** database
- **JWT** authentication
- **Swagger/OpenAPI** documentation
- **class-validator** and **class-transformer** for validation

### Tooling
- **Turborepo** for monorepo management
- **PNPM** for package management
- **ESLint** for code linting
- **Prettier** for code formatting
- **Husky** for git hooks
- **Commitlint** for conventional commits

## Getting Started

### Prerequisites

- Node.js >= 20.0.0
- PNPM >= 9.0.0
- Docker & Docker Compose (recommended for local development)

**OR** (if not using Docker):
- PostgreSQL >= 14
- Redis >= 7
- MinIO (optional)

## Docker Setup (Recommended)

The easiest way to run the HRIS Platform locally is using Docker Compose. This will set up all required services automatically.

### Quick Start with Docker

1. Clone and navigate to the project:
```bash
cd hris-platform
```

2. Copy the Docker environment file:
```bash
cp .env.docker .env.docker.local
```

3. (Optional) Customize the credentials in `.env.docker.local`

4. Start all services:
```bash
# Using Make
make up

# OR using npm scripts
pnpm docker:up

# OR using docker compose directly
docker compose --env-file .env.docker up -d
```

5. Install project dependencies:
```bash
pnpm install
```

6. Run the development servers:
```bash
pnpm dev
```

### Docker Services

The Docker setup includes:

| Service | Port | Description | URL |
|---------|------|-------------|-----|
| PostgreSQL | 5432 | Main database | `localhost:5432` |
| Redis | 6379 | Cache & sessions | `localhost:6379` |
| MinIO | 9000, 9001 | S3-compatible storage | Console: http://localhost:9001 |
| Elasticsearch | 9200 | Search engine (optional) | http://localhost:9200 |
| PgAdmin | 5050 | PostgreSQL admin (optional) | http://localhost:5050 |
| Redis Commander | 8081 | Redis admin (optional) | http://localhost:8081 |

### Docker Commands

#### Using Make (Recommended)

```bash
make help              # Show all available commands
make up                # Start all services
make down              # Stop all services
make logs              # View logs
make ps                # Show running containers
make restart           # Restart all services
make stop              # Stop without removing containers
make reset             # Reset all data and restart
make clean             # Stop and remove volumes
make with-admin        # Start with admin tools (PgAdmin, Redis Commander)
make with-es           # Start with Elasticsearch
make with-all          # Start all services including optional ones
make urls              # Show all service URLs
make health            # Check service health
make dev               # Start Docker + development servers
```

#### Using npm Scripts

```bash
pnpm docker:up         # Start all services
pnpm docker:down       # Stop all services
pnpm docker:logs       # View logs
pnpm docker:restart    # Restart services
pnpm docker:ps         # Show running containers
pnpm docker:reset      # Reset all data
pnpm docker:with-admin # Start with admin tools
pnpm docker:with-es    # Start with Elasticsearch
pnpm docker:with-all   # Start all services
```

#### Accessing Admin Tools

**PgAdmin** (Database Management):
```bash
make with-admin
# Visit: http://localhost:5050
# Email: admin@hris.local
# Password: admin
```

**Redis Commander** (Redis Management):
```bash
make with-admin
# Visit: http://localhost:8081
```

**MinIO Console** (Object Storage):
```bash
# Always available when Docker is running
# Visit: http://localhost:9001
# Username: hris_minio
# Password: hris_minio_pass_change_me
```

### Troubleshooting Docker

**Services not starting:**
```bash
# Check service logs
make logs

# Check specific service
docker compose logs postgres
```

**Port conflicts:**
```bash
# Check what's using the port
lsof -i :5432  # Change port number as needed

# Or stop all Docker services
make down
```

**Reset everything:**
```bash
# Complete reset (removes all data)
make reset

# Nuclear option (removes all Docker data)
make prune  # WARNING: This affects all Docker on your machine
```

### Installation (Without Docker)

1. Clone the repository and navigate to the project:
```bash
cd hris-platform
```

2. Install dependencies:
```bash
pnpm install
```

3. Copy the environment file and configure:
```bash
cp .env.example .env
```

4. Update the `.env` file with your database credentials and other configuration.

### Development

Run all apps and services in development mode:
```bash
pnpm dev
```

Run specific app or service:
```bash
# Web app (port 3000)
pnpm --filter @hris/web dev

# Admin app (port 3001)
pnpm --filter @hris/admin dev

# Auth service (port 3001)
pnpm --filter @hris/auth-service dev

# Employee service (port 3002)
pnpm --filter @hris/employee-service dev
```

### Build

Build all apps and services:
```bash
pnpm build
```

Build specific app or service:
```bash
pnpm --filter @hris/web build
```

### Testing

Run tests:
```bash
pnpm test
```

### Linting & Formatting

```bash
# Lint all code
pnpm lint

# Format all code
pnpm format

# Check formatting
pnpm format:check

# Type check
pnpm typecheck
```

## API Documentation

Once the services are running, access the Swagger documentation:

- **Auth Service**: http://localhost:3001/api/docs
- **Employee Service**: http://localhost:3002/api/docs

## Database

### Migrations

```bash
# Generate migration
pnpm --filter @hris/database migration:generate

# Run migrations
pnpm --filter @hris/database migration:run

# Revert migration
pnpm --filter @hris/database migration:revert
```

### Seeding

```bash
pnpm --filter @hris/database seed
```

## Internationalization

The platform supports multiple languages with Arabic as the primary language:

- Arabic (ar) - Default, RTL layout
- English (en) - Secondary

Language files are located in:
- Web app: `apps/web/messages/`
- Admin app: `apps/admin/messages/`

## Git Workflow

This project uses conventional commits enforced by commitlint. Commit message format:

```
<type>(<scope>): <subject>

Types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
```

Example:
```bash
git commit -m "feat(auth): add JWT token refresh endpoint"
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Commit using conventional commits
5. Push and create a pull request

## License

Private - All rights reserved
