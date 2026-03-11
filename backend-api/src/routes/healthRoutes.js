import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({ status: 'ok', service: 'vieira-solar-backend-api' });
});

export default router;
