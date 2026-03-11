import { Router } from 'express';

const router = Router();

const integrators = [
  { id: 'int-1', company: 'Solar Norte Integradora', state: 'PA', rating: 4.8 },
  { id: 'int-2', company: 'Eco Luz Engenharia', state: 'SP', rating: 4.6 }
];

const suppliers = [
  { id: 'sup-1', company: 'Distribuidora MóduloMax', category: 'painéis solares' },
  { id: 'sup-2', company: 'Baterias PowerSun', category: 'armazenamento' }
];

router.get('/integrators', (_req, res) => res.json({ items: integrators }));
router.get('/suppliers', (_req, res) => res.json({ items: suppliers }));

export default router;
