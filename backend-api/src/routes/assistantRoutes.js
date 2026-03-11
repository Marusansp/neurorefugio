import { Router } from 'express';
import { z } from 'zod';
import { env } from '../config/env.js';

const router = Router();

const schema = z.object({
  question: z.string().min(3),
  context: z.record(z.any()).optional()
});

router.post('/chat', async (req, res) => {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() });
  }

  try {
    const response = await fetch(`${env.aiAssistantUrl}/assistant/respond`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed.data)
    });

    if (!response.ok) {
      throw new Error(`AI assistant returned ${response.status}`);
    }

    const payload = await response.json();
    return res.status(200).json(payload);
  } catch (error) {
    return res.status(200).json({
      answer:
        'No momento o assistente está em contingência. Recomendação inicial: sistema de 5 a 8 kWp para contas entre R$400 e R$700, com payback médio de 3 a 5 anos.',
      fallback: true,
      details: error.message
    });
  }
});

export default router;
