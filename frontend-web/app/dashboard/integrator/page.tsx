import { MetricCard } from '@/components/metric-card';

export default function IntegratorDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Integrator Dashboard + Solar CRM</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard title="Leads ativos" value="42" hint="+18% no mês" />
        <MetricCard title="Projetos em instalação" value="11" hint="Pipeline aquecido" />
        <MetricCard title="Taxa de conversão" value="31%" hint="Últimos 30 dias" />
      </div>
    </div>
  );
}
