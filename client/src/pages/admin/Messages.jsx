import { useEffect, useState } from "react";
import { deleteMessage, getAdminMessages, updateMessageStatus } from "../../services/api";

const statuses = ["NEW", "READ", "REPLIED", "ARCHIVED"];

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState("");

  async function load() {
    const res = await getAdminMessages();
    setMessages(res.data.data.messages);
  }

  useEffect(() => {
    load().catch((err) => setError(err.message));
  }, []);

  async function changeStatus(id, status) {
    await updateMessageStatus(id, status);
    await load();
    setSelected((current) => (current?.id === id ? { ...current, status } : current));
  }

  async function remove(id) {
    await deleteMessage(id);
    setSelected(null);
    await load();
  }

  return (
    <div className="px-5 py-8 sm:px-8">
      <h1 className="text-3xl font-semibold">Messages</h1>
      {error ? <p className="mt-4 text-red-400">{error}</p> : null}
      <div className="mt-6 overflow-x-auto rounded-3xl border border-white/8">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-navy text-muted">
            <tr>
              {["Name", "Email", "Company", "Service", "Status", "Date"].map((h) => (
                <th key={h} className="px-4 py-3 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {messages.map((item) => (
              <tr
                key={item.id}
                className="cursor-pointer border-t border-white/8 hover:bg-white/5"
                onClick={() => setSelected(item)}
              >
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.email}</td>
                <td className="px-4 py-3">{item.company || "—"}</td>
                <td className="px-4 py-3">{item.service || "—"}</td>
                <td className="px-4 py-3">{item.status}</td>
                <td className="px-4 py-3">{new Date(item.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected ? (
        <aside className="mt-6 rounded-3xl border border-white/8 bg-card p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">{selected.name}</h2>
              <p className="text-sm text-muted">{selected.email}</p>
            </div>
            <button type="button" className="text-sm text-red-400" onClick={() => remove(selected.id)}>
              Delete
            </button>
          </div>
          <p className="mt-4 text-muted">{selected.message}</p>
          <label className="mt-6 block text-sm text-muted">
            Status
            <select
              value={selected.status}
              onChange={(event) => changeStatus(selected.id, event.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-ink px-4 py-3 text-snow"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>
        </aside>
      ) : null}
    </div>
  );
}
