# SolarFlow ☀️

MVP de uma **plataforma de gestão e vendas para Aplicador Solar**, pronta para evoluir para SaaS.

## O que este MVP entrega

- Dashboard com KPIs comerciais e operacionais.
- Gestão de leads/clientes.
- Controle de propostas e status de venda.
- Agenda de instalações.
- Estoque com alerta de reposição.
- Bloco de insights para IA e automações.
- Funcionamento offline básico (PWA + cache).

## Arquitetura recomendada (evolução SaaS)

```txt
/frontend (Next.js + React)
/backend (Node.js/NestJS)
/database (PostgreSQL / Supabase)
/apis (REST + Webhooks + integrações)
/auth (Supabase Auth / Firebase Auth)
```

### Stack sugerida (mercado)

- **Frontend:** Next.js + React + Tailwind + shadcn/ui
- **Backend:** Node.js (NestJS/Express)
- **Banco:** PostgreSQL (Supabase)
- **Auth:** Supabase Auth com RBAC (admin, vendedor, técnico)
- **Automação/IA:** OpenAI API + WhatsApp Business API + n8n

## Como rodar localmente

Como é um MVP estático, basta abrir `index.html` no navegador.

Opção com servidor local:

```bash
python3 -m http.server 8080
# depois abra http://localhost:8080
```

## Próximos passos de produto

1. Multiusuário com permissões por perfil.
2. Pipeline de vendas com funil e metas por vendedor.
3. Geração automática de propostas PDF.
4. Integração com assinatura eletrônica.
5. Follow-up automático por IA para leads parados.
6. App mobile Flutter para equipe de campo.
