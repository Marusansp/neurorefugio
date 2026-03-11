import express from 'express';

const app = express();
const port = process.env.AI_ASSISTANT_PORT || 5000;

app.use(express.json());

app.post('/assistant/respond', (req, res) => {
  const { question, context = {} } = req.body;

  const normalized = String(question || '').toLowerCase();
  const bill = Number(context.energyBill || 0);
  const sizeSuggestion = bill > 0 ? Math.max(2, Math.min(15, Number((bill / 100).toFixed(1)))) : 5;

  let answer = `Para avançar com sua venda solar, recomendamos um sistema inicial de ${sizeSuggestion} kWp com análise técnica detalhada.`;

  if (normalized.includes('payback')) {
    answer =
      'Com os parâmetros médios de mercado, o payback costuma ficar entre 3 e 5 anos, variando por tarifa local e custo de instalação.';
  }

  if (normalized.includes('proposta')) {
    answer =
      'Proposta gerada: escopo de módulos + inversor, prazo de instalação de 45 dias, economia estimada de até 90% da fatura.';
  }

  res.json({
    answer,
    insights: {
      recommendedSystemSizeKwp: sizeSuggestion,
      confidence: 0.74
    }
  });
});

app.listen(port, () => {
  console.log(`AI assistant running on ${port}`);
});
