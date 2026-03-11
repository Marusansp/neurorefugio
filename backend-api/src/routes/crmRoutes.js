import { Router } from 'express';
import { randomUUID } from 'node:crypto';
import { z } from 'zod';

const router = Router();

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  source: z.string().default('website'),
  status: z.enum(['new', 'qualified', 'proposal', 'won', 'lost']).default('new')
});

const leads = [];
const projects = [];

router.get('/leads', (_req, res) => res.json({ items: leads }));

router.post('/leads', (req, res) => {
  const parsed = leadSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() });
  }

  const lead = { id: randomUUID(), createdAt: new Date().toISOString(), ...parsed.data };
  leads.push(lead);
  return res.status(201).json(lead);
});

router.get('/projects', (_req, res) => res.json({ items: projects }));

router.post('/projects', (req, res) => {
  const project = {
    id: randomUUID(),
    title: req.body.title || 'Projeto sem nome',
    customer: req.body.customer || 'Cliente pendente',
    stage: req.body.stage || 'survey',
    installationProgress: req.body.installationProgress || 0,
    createdAt: new Date().toISOString()
  };
  projects.push(project);
  return res.status(201).json(project);
});

export default router;
