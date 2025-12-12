# Docker Configuration

This directory contains Docker-related configuration files and initialization scripts for the HRIS Platform.

## Directory Structure

```
docker/
├── postgres/
│   └── init/              # PostgreSQL initialization scripts
│       ├── 01-init-db.sql
│       └── 02-create-test-db.sql
└── README.md
```

## PostgreSQL Initialization

SQL scripts in `postgres/init/` are executed in alphabetical order when the PostgreSQL container starts for the first time.

### Adding New Initialization Scripts

1. Create a new `.sql` file in `docker/postgres/init/`
2. Prefix the filename with a number to control execution order (e.g., `03-my-script.sql`)
3. Scripts are executed only once when the volume is first created

### Re-running Initialization Scripts

To re-run the initialization scripts:

```bash
# Using Make
make db-reset

# Using npm
pnpm docker:reset

# Using docker compose directly
docker compose down -v
docker compose --env-file .env.docker up -d
```

## Adding New Services

To add a new service to the Docker setup:

1. Add the service definition in `docker-compose.yml`
2. Add health checks where applicable
3. Add the service to the `hris-network` network
4. Document any new ports or URLs in the main README
5. Add any initialization scripts if needed

## Environment Variables

Environment variables are loaded from `.env.docker`. Create a local copy:

```bash
cp .env.docker .env.docker.local
```

Then customize the values in `.env.docker.local`.
