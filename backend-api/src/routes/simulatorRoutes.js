import { Router } from 'express';
import { z } from 'zod';
import { simulateSolarSystem } from '../services/solarCalculator.js';

const schema = z.object({
  city: z.string().min(2),
  energyBill: z.number().positive(),
  roofArea: z.number().positive()
});

const router = Router();

router.post('/', (req, res) => {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() });
  }

  const simulation = simulateSolarSystem(parsed.data);
  return res.status(200).json(simulation);
});

export default router;
