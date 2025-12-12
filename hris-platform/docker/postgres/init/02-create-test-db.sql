-- Create test database for running tests
CREATE DATABASE hris_test;

-- Grant privileges to the user
GRANT ALL PRIVILEGES ON DATABASE hris_test TO hris_user;

-- Log test database creation
DO $$
BEGIN
    RAISE NOTICE 'HRIS test database created successfully';
END $$;
