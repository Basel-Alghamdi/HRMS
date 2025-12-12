-- HRIS Platform Database Initialization Script
-- This script runs automatically when the PostgreSQL container starts for the first time

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create schema if needed (optional, uses public by default)
-- CREATE SCHEMA IF NOT EXISTS hris;

-- Create indexes for common queries (will be overridden by TypeORM if using synchronize)
-- These are placeholders and will be managed by migrations

-- Set timezone
SET timezone = 'UTC';

-- Log initialization
DO $$
BEGIN
    RAISE NOTICE 'HRIS Platform database initialized successfully';
END $$;
