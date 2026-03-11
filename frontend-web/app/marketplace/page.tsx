export default function MarketplacePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Solar Marketplace</h1>
      <p className="text-slate-300">Conecte clientes, integradores, fornecedores e investidores em um único hub nacional.</p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">Integradores verificados por região</div>
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">Fornecedores com catálogo de equipamentos</div>
      </div>
    </div>
  );
}
