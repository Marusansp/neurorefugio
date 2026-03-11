import Link from 'next/link';

const modules = [
  ['Solar Calculator', '/calculator'],
  ['Marketplace', '/marketplace'],
  ['Integrator Dashboard', '/dashboard/integrator'],
  ['Supplier Dashboard', '/dashboard/supplier'],
  ['Investor Dashboard', '/dashboard/investor']
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-700 bg-gradient-to-r from-emerald-600/30 to-cyan-600/20 p-8">
        <p className="text-sm uppercase tracking-wider text-emerald-200">Vieira&apos;s Solar Platform</p>
        <h1 className="mt-2 text-4xl font-bold">National-ready solar marketplace SaaS</h1>
        <p className="mt-4 max-w-2xl text-slate-200">
          Plataforma integrada com app mobile, CRM, simulador profissional e assistente de IA para acelerar vendas solares.
        </p>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        {modules.map(([label, href]) => (
          <Link key={href} href={href} className="rounded-xl border border-slate-700 bg-slate-900 p-5 hover:border-emerald-500">
            <p className="text-lg font-semibold">{label}</p>
            <p className="text-sm text-slate-400">Acessar módulo</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
