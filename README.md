# Vieira's Solar Platform - National Marketplace MVP

Este repositório agora contém um ecossistema SaaS modular para energia solar, pronto para evoluir para marketplace nacional.

## Estrutura

- `frontend-web/` - plataforma web (Next.js + React + TypeScript + Tailwind)
- `mobile-app/` - aplicativo Flutter com modos Cliente e Integrador
- `backend-api/` - API Node.js/Express com CRM, simulador e integração com IA
- `database/` - schema PostgreSQL
- `ai-assistant/` - microserviço de assistente comercial solar

## Arquitetura (MVP)

```text
[Flutter App] ----\
                   --> [Backend API] --> [PostgreSQL]
[Next.js Web] ----/          |
                             -> [AI Assistant Service]
```

## Principais módulos entregues

1. **Mobile App (Flutter)**
   - Fluxo Cliente: simulação, orçamento, status de instalação, chat (estrutura inicial)
   - Fluxo Integrador: leads, projetos, propostas e acompanhamento (estrutura inicial)

2. **Web Platform (Next.js)**
   - Homepage
   - Solar Calculator conectado à API
   - Marketplace
   - Dashboards de integrador, fornecedor e investidor

3. **Solar CRM (API + Dashboard)**
   - Leads
   - Pipeline básico
   - Projetos
   - Base para contratos

4. **Professional Solar Simulator**
   - Entradas: cidade, valor da conta, área do telhado
   - Saídas: tamanho do sistema, custo, geração anual, economia mensal, payback

5. **AI Solar Assistant**
   - Responde perguntas comerciais
   - Sugere sistema com base em contexto
   - Geração textual de proposta simplificada

## Como rodar

### 1) Backend API

```bash
cd backend-api
cp .env.example .env
npm install
npm run dev
```

### 2) AI Assistant

```bash
cd ai-assistant
npm install
npm run dev
```

### 3) Frontend Web

```bash
cd frontend-web
npm install
npm run dev
```

Defina `NEXT_PUBLIC_API_URL` se necessário.

### 4) Banco de dados

Execute o schema:

```bash
psql "$DATABASE_URL" -f database/schema.sql
```

### 5) Mobile App

```bash
cd mobile-app
flutter pub get
flutter run
```

## API routes (MVP)

- `GET /health`
- `POST /api/simulator`
- `GET/POST /api/crm/leads`
- `GET/POST /api/crm/projects`
- `GET /api/marketplace/integrators`
- `GET /api/marketplace/suppliers`
- `POST /api/assistant/chat`

## Próximos passos recomendados (escala SaaS)

- Autenticação multi-tenant com Supabase Auth (RLS) ou Firebase Auth
- Filas assíncronas (SQS) para geração de propostas e notificações
- Módulo financeiro (LTV, MRR, inadimplência)
- Integração com dados de irradiação reais por CEP/cidade
- Gestão de permissões por papel (RBAC) e trilha de auditoria
- Observabilidade completa (OpenTelemetry + dashboards)

## Segurança e performance

- `helmet` e `cors` habilitados no backend
- validação de payload com `zod`
- arquitetura preparada para separar API Gateway + microsserviços
- cache de dados de marketplace recomendado via Redis/Cloudflare
