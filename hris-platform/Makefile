.PHONY: help up down restart logs ps stop reset clean prune with-admin with-es with-all db-reset

# Default target
.DEFAULT_GOAL := help

# Colors for output
CYAN := \033[0;36m
GREEN := \033[0;32m
YELLOW := \033[0;33m
RED := \033[0;31m
NC := \033[0m # No Color

# Docker Compose command
DOCKER_COMPOSE := docker compose --env-file .env.docker

help: ## Show this help message
	@echo "$(CYAN)HRIS Platform - Docker Commands$(NC)"
	@echo ""
	@echo "$(GREEN)Available commands:$(NC)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(CYAN)%-20s$(NC) %s\n", $$1, $$2}'
	@echo ""

up: ## Start all services
	@echo "$(GREEN)Starting HRIS Platform services...$(NC)"
	$(DOCKER_COMPOSE) up -d
	@echo "$(GREEN)Services started successfully!$(NC)"
	@echo "$(YELLOW)Run 'make logs' to view logs$(NC)"

down: ## Stop all services
	@echo "$(YELLOW)Stopping HRIS Platform services...$(NC)"
	$(DOCKER_COMPOSE) down
	@echo "$(GREEN)Services stopped successfully!$(NC)"

restart: ## Restart all services
	@echo "$(YELLOW)Restarting HRIS Platform services...$(NC)"
	$(DOCKER_COMPOSE) restart
	@echo "$(GREEN)Services restarted successfully!$(NC)"

logs: ## View logs (follow mode)
	@echo "$(CYAN)Viewing logs... (Press Ctrl+C to exit)$(NC)"
	$(DOCKER_COMPOSE) logs -f

ps: ## Show running containers
	@echo "$(CYAN)Running containers:$(NC)"
	$(DOCKER_COMPOSE) ps

stop: ## Stop services without removing containers
	@echo "$(YELLOW)Stopping services...$(NC)"
	$(DOCKER_COMPOSE) stop
	@echo "$(GREEN)Services stopped!$(NC)"

reset: ## Reset all data and restart services
	@echo "$(RED)⚠️  WARNING: This will delete all data!$(NC)"
	@read -p "Are you sure? [y/N] " -n 1 -r; \
	echo; \
	if [[ $$REPLY =~ ^[Yy]$$ ]]; then \
		echo "$(YELLOW)Resetting all services...$(NC)"; \
		$(DOCKER_COMPOSE) down -v; \
		$(DOCKER_COMPOSE) up -d; \
		echo "$(GREEN)Reset complete!$(NC)"; \
	else \
		echo "$(GREEN)Reset cancelled.$(NC)"; \
	fi

clean: down ## Stop services and remove volumes
	@echo "$(YELLOW)Removing volumes...$(NC)"
	$(DOCKER_COMPOSE) down -v
	@echo "$(GREEN)Cleanup complete!$(NC)"

prune: ## Remove all unused Docker resources
	@echo "$(RED)⚠️  WARNING: This will remove all unused Docker images, containers, and volumes!$(NC)"
	@read -p "Are you sure? [y/N] " -n 1 -r; \
	echo; \
	if [[ $$REPLY =~ ^[Yy]$$ ]]; then \
		echo "$(YELLOW)Pruning Docker system...$(NC)"; \
		docker system prune -af --volumes; \
		echo "$(GREEN)Prune complete!$(NC)"; \
	else \
		echo "$(GREEN)Prune cancelled.$(NC)"; \
	fi

with-admin: ## Start services with admin tools (PgAdmin, Redis Commander)
	@echo "$(GREEN)Starting services with admin tools...$(NC)"
	docker compose --profile with-admin-tools --env-file .env.docker up -d
	@echo "$(GREEN)Services started!$(NC)"
	@echo "$(CYAN)PgAdmin: http://localhost:5050$(NC)"
	@echo "$(CYAN)Redis Commander: http://localhost:8081$(NC)"

with-es: ## Start services with Elasticsearch
	@echo "$(GREEN)Starting services with Elasticsearch...$(NC)"
	docker compose --profile with-elasticsearch --env-file .env.docker up -d
	@echo "$(GREEN)Services started!$(NC)"
	@echo "$(CYAN)Elasticsearch: http://localhost:9200$(NC)"

with-all: ## Start all services including optional ones
	@echo "$(GREEN)Starting all services...$(NC)"
	docker compose --profile with-admin-tools --profile with-elasticsearch --env-file .env.docker up -d
	@echo "$(GREEN)All services started!$(NC)"
	@make urls

db-reset: ## Reset only the database
	@echo "$(RED)⚠️  WARNING: This will delete all database data!$(NC)"
	@read -p "Are you sure? [y/N] " -n 1 -r; \
	echo; \
	if [[ $$REPLY =~ ^[Yy]$$ ]]; then \
		echo "$(YELLOW)Resetting database...$(NC)"; \
		$(DOCKER_COMPOSE) stop postgres; \
		docker volume rm hris_postgres_data; \
		$(DOCKER_COMPOSE) up -d postgres; \
		echo "$(GREEN)Database reset complete!$(NC)"; \
	else \
		echo "$(GREEN)Database reset cancelled.$(NC)"; \
	fi

urls: ## Show service URLs
	@echo ""
	@echo "$(CYAN)═══════════════════════════════════════════$(NC)"
	@echo "$(GREEN)  HRIS Platform - Service URLs$(NC)"
	@echo "$(CYAN)═══════════════════════════════════════════$(NC)"
	@echo ""
	@echo "$(YELLOW)Core Services:$(NC)"
	@echo "  PostgreSQL:        localhost:5432"
	@echo "  Redis:             localhost:6379"
	@echo "  MinIO API:         http://localhost:9000"
	@echo "  MinIO Console:     http://localhost:9001"
	@echo ""
	@echo "$(YELLOW)Admin Tools (if enabled):$(NC)"
	@echo "  PgAdmin:           http://localhost:5050"
	@echo "  Redis Commander:   http://localhost:8081"
	@echo ""
	@echo "$(YELLOW)Optional Services (if enabled):$(NC)"
	@echo "  Elasticsearch:     http://localhost:9200"
	@echo ""
	@echo "$(CYAN)═══════════════════════════════════════════$(NC)"
	@echo ""

health: ## Check health of all services
	@echo "$(CYAN)Checking service health...$(NC)"
	@$(DOCKER_COMPOSE) ps --format "table {{.Service}}\t{{.Status}}\t{{.Ports}}"

install: ## Install project dependencies
	@echo "$(GREEN)Installing dependencies...$(NC)"
	pnpm install
	@echo "$(GREEN)Dependencies installed!$(NC)"

dev: ## Start Docker services and run development servers
	@echo "$(GREEN)Starting development environment...$(NC)"
	@make up
	@echo "$(YELLOW)Waiting for services to be ready...$(NC)"
	@sleep 5
	@echo "$(GREEN)Starting application...$(NC)"
	pnpm dev

build: ## Build all applications
	@echo "$(GREEN)Building applications...$(NC)"
	pnpm build
	@echo "$(GREEN)Build complete!$(NC)"
