interface StatCardProps {
  title: string;
  amount: string;
  color: string;
}

export default function StatCard({
  title,
  amount,
  color,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">

      <p className="text-slate-400">
        {title}
      </p>

      <h3 className={`mt-2 text-2xl font-bold ${color}`}>
        {amount}
      </h3>

    </div>
  );
}