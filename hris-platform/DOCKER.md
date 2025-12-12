# Docker Quick Reference

## Quick Start

```bash
# 1. Copy environment file
cp .env.docker .env.docker.local

# 2. Start all services
make up

# 3. Install dependencies
pnpm install

# 4. Run development servers
pnpm dev
```

## Common Commands

| Command | Description |
|---------|-------------|
| `make up` | Start all services |
| `make down` | Stop all services |
| `make logs` | View logs (follow mode) |
| `make ps` | Show running containers |
| `make restart` | Restart all services |
| `make reset` | Reset all data and restart |
| `make urls` | Show all service URLs |
| `make health` | Check service health |

## Service Access

### Core Services
- **PostgreSQL**: `localhost:5432`
  - Database: `hris_db`
  - Username: `hris_user`
  - Password: See `.env.docker`

- **Redis**: `localhost:6379`
  - Password: See `.env.docker`

- **MinIO Console**: http://localhost:9001
  - Username: `hris_minio`
  - Password: See `.env.docker`

### Admin Tools (Optional)
Start with: `make with-admin`

- **PgAdmin**: http://localhost:5050
  - Email: `admin@hris.local`
  - Password: `admin`

- **Redis Commander**: http://localhost:8081

### Search Engine (Optional)
Start with: `make with-es`

- **Elasticsearch**: http://localhost:9200

## Profiles

Docker Compose profiles allow you to start optional services:

```bash
# Start with admin tools
make with-admin

# Start with Elasticsearch
make with-es

# Start with everything
make with-all
```

## Data Management

### Reset Database Only
```bash
make db-reset
```

### Reset All Services
```bash
make reset
```

### Complete Cleanup
```bash
# Stop and remove all volumes
make clean

# Remove all unused Docker resources (careful!)
make prune
```

## Troubleshooting

### View Logs
```bash
# All services
make logs

# Specific service
docker compose logs -f postgres
docker compose logs -f redis
docker compose logs -f minio
```

### Check Service Health
```bash
make health

# Or check individual services
docker compose ps
```

### Restart Single Service
```bash
docker compose restart postgres
docker compose restart redis
```

### Connect to Database
```bash
# Using psql inside container
docker compose exec postgres psql -U hris_user -d hris_db

# Using psql from host
psql -h localhost -p 5432 -U hris_user -d hris_db
```

### Connect to Redis
```bash
# Using redis-cli inside container
docker compose exec redis redis-cli -a your_password

# Using redis-cli from host
redis-cli -h localhost -p 6379 -a your_password
```

## Port Conflicts

If you get port conflict errors:

```bash
# Check what's using the port
lsof -i :5432  # PostgreSQL
lsof -i :6379  # Redis
lsof -i :9000  # MinIO

# Kill the process or change the port in .env.docker.local
```

## Environment Files

- `.env.docker` - Default Docker environment (committed)
- `.env.docker.local` - Your local overrides (gitignored)
- `.env` - Application environment (gitignored)
- `.env.example` - Application environment template (committed)

Priority: `.env.docker.local` > `.env.docker`

## Docker Compose Files

- `docker-compose.yml` - Main configuration (committed)
- `docker-compose.override.yml` - Optional overrides (committed)
- `docker-compose.override.local.yml` - Your local overrides (gitignored)

## Useful Docker Commands

```bash
# View running containers
docker ps

# View all containers (including stopped)
docker ps -a

# View volumes
docker volume ls

# View networks
docker network ls

# Remove unused volumes
docker volume prune

# Remove unused images
docker image prune

# Complete system cleanup (CAREFUL!)
docker system prune -af --volumes
```

## Development Workflow

### Daily Start
```bash
make up     # Start Docker services
pnpm dev    # Start development servers
```

### Daily Stop
```bash
# Stop dev servers (Ctrl+C)
make down   # Stop Docker services
```

### Fresh Start
```bash
make reset  # Reset all data
pnpm install
pnpm dev
```

## CI/CD Considerations

For CI/CD pipelines, you may want to:

1. Use separate Docker Compose file for CI
2. Use test database instead of development database
3. Skip optional services (Elasticsearch, admin tools)
4. Use different credentials

Example CI command:
```bash
docker compose -f docker-compose.ci.yml up -d
```

## Performance Tips

### Speed up rebuilds
```bash
# Use Docker BuildKit
export DOCKER_BUILDKIT=1
export COMPOSE_DOCKER_CLI_BUILD=1
```

### Reduce disk usage
```bash
# Regular cleanup
docker system prune -a --volumes

# Keep only recent images
docker image prune -a --filter "until=24h"
```

### Monitor resource usage
```bash
# Check container stats
docker stats

# Check specific service
docker stats hris-postgres
```
