-- Vieira's Solar Platform - PostgreSQL schema (MVP)

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('customer', 'integrator', 'supplier', 'investor', 'admin')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID REFERENCES users(id),
  assigned_integrator_id UUID REFERENCES users(id),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  source TEXT DEFAULT 'website',
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'qualified', 'proposal', 'won', 'lost')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS simulations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID REFERENCES users(id),
  city TEXT NOT NULL,
  energy_bill NUMERIC(10,2) NOT NULL,
  roof_area NUMERIC(10,2) NOT NULL,
  system_size_kwp NUMERIC(10,2) NOT NULL,
  estimated_cost NUMERIC(12,2) NOT NULL,
  annual_generation NUMERIC(12,2) NOT NULL,
  monthly_savings NUMERIC(10,2) NOT NULL,
  payback_years NUMERIC(5,2) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID REFERENCES leads(id),
  integrator_id UUID REFERENCES users(id),
  title TEXT NOT NULL,
  stage TEXT NOT NULL DEFAULT 'survey' CHECK (stage IN ('survey', 'proposal', 'contract', 'installation', 'completed')),
  installation_progress INTEGER NOT NULL DEFAULT 0,
  start_date DATE,
  expected_end_date DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contracts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id),
  contract_number TEXT NOT NULL,
  amount NUMERIC(12,2) NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('draft', 'signed', 'cancelled')),
  signed_at TIMESTAMPTZ
);
