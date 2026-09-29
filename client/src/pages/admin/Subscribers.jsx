import { useEffect, useState } from "react";
import { deleteSubscriber, getAdminNewsletters } from "../../services/api";

export default function AdminSubscribers() {
  const [items, setItems] = useState([]);

  async function load() {
    const res = await getAdminNewsletters();
    setItems(res.data.data.subscribers);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="px-5 py-8 sm:px-8">
      <h1 className="text-3xl font-semibold">Subscribers</h1>
      <div className="mt-6 overflow-x-auto rounded-3xl border border-white/8">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-navy text-muted">
            <tr>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3"> </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t border-white/8">
                <td className="px-4 py-3">{item.email}</td>
                <td className="px-4 py-3">{new Date(item.createdAt).toLocaleDateString()}</td>
                <td className="px-4 py-3">
                  <button type="button" className="text-red-400" onClick={() => deleteSubscriber(item.id).then(load)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
