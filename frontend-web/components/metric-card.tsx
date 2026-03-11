interface MetricCardProps {
  title: string;
  value: string;
  hint: string;
}

export function MetricCard({ title, value, hint }: MetricCardProps) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
      <p className="text-sm text-slate-400">{title}</p>
      <p className="mt-2 text-2xl font-bold">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{hint}</p>
    </div>
  );
}
