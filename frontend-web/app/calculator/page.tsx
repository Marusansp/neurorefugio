'use client';

import { useState } from 'react';
import { runSimulation } from '@/lib/api';

export default function CalculatorPage() {
  const [city, setCity] = useState('Belém');
  const [energyBill, setEnergyBill] = useState(450);
  const [roofArea, setRoofArea] = useState(60);
  const [result, setResult] = useState<any>(null);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const payload = await runSimulation({ city, energyBill, roofArea });
    setResult(payload.results);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Professional Solar Simulator</h1>
      <form onSubmit={handleSubmit} className="grid gap-4 rounded-xl border border-slate-700 bg-slate-900 p-6 md:grid-cols-3">
        <input className="rounded bg-slate-800 p-2" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Cidade" />
        <input className="rounded bg-slate-800 p-2" type="number" value={energyBill} onChange={(e) => setEnergyBill(Number(e.target.value))} placeholder="Conta de energia (R$)" />
        <input className="rounded bg-slate-800 p-2" type="number" value={roofArea} onChange={(e) => setRoofArea(Number(e.target.value))} placeholder="Área do telhado (m²)" />
        <button className="rounded bg-emerald-500 px-4 py-2 font-semibold text-slate-950 md:col-span-3">Simular agora</button>
      </form>

      {result && (
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded border border-slate-700 bg-slate-900 p-4">Sistema: {result.systemSizeKwp} kWp</div>
          <div className="rounded border border-slate-700 bg-slate-900 p-4">Custo estimado: R$ {result.estimatedCost}</div>
          <div className="rounded border border-slate-700 bg-slate-900 p-4">Geração anual: {result.annualGeneration} kWh</div>
          <div className="rounded border border-slate-700 bg-slate-900 p-4">Payback: {result.paybackYears} anos</div>
        </div>
      )}
    </div>
  );
}
