import { useEffect, useState } from "react";
import { getAdminStats } from "../../services/api";
import Skeleton from "../../components/Skeleton";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getAdminStats()
      .then((res) => setStats(res.data.data.totals))
      .catch((err) => setError(err.message));
  }, []);

  const cards = [
    { key: "messages", label: "Total Messages" },
    { key: "projects", label: "Total Projects" },
    { key: "services", label: "Total Services" },
    { key: "subscribers", label: "Subscribers" },
  ];

  return (
    <div className="px-5 py-8 sm:px-8">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      {error ? <p className="mt-4 text-red-400">{error}</p> : null}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article key={card.key} className="rounded-3xl border border-white/8 bg-card p-6">
            <p className="text-sm text-muted">{card.label}</p>
            {stats ? (
              <p className="mt-3 text-4xl font-semibold">{stats[card.key]}</p>
            ) : (
              <Skeleton className="mt-3 h-10" />
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
