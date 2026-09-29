import { useEffect, useState } from "react";
import { createService, deleteService, getAdminServices, updateService } from "../../services/api";
import Button from "../../components/Button";
import { Field } from "../../sections/ContactPreview";

const empty = {
  title: "",
  slug: "",
  description: "",
  icon: "sparkles",
  category: "General",
  isActive: true,
};

export default function AdminServices() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState(empty);
  const [editing, setEditing] = useState(null);
  const [error, setError] = useState("");

  async function load() {
    const res = await getAdminServices();
    setServices(res.data.data.services);
  }

  useEffect(() => {
    load().catch((err) => setError(err.message));
  }, []);

  async function onSubmit(event) {
    event.preventDefault();
    const payload = { ...form, isActive: Boolean(form.isActive) };
    if (editing) {
      await updateService(editing, payload);
    } else {
      await createService(payload);
    }
    setForm(empty);
    setEditing(null);
    await load();
  }

  return (
    <div className="px-5 py-8 sm:px-8">
      <h1 className="text-3xl font-semibold">Services</h1>
      {error ? <p className="mt-4 text-red-400">{error}</p> : null}
      <form onSubmit={onSubmit} className="mt-6 grid gap-4 rounded-3xl border border-white/8 p-6 md:grid-cols-2">
        <Field label="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <Field label="Slug" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
        <Field label="Icon" value={form.icon} onChange={(e) => setForm({ ...form, icon: e.target.value })} />
        <Field label="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
        <Field
          className="md:col-span-2"
          label="Description"
          as="textarea"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <label className="flex items-center gap-3 text-sm text-muted">
          <input
            type="checkbox"
            checked={form.isActive}
            onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
          />
          Active
        </label>
        <Button type="submit">{editing ? "Update service" : "Create service"}</Button>
      </form>

      <div className="mt-8 space-y-3">
        {services.map((service) => (
          <article key={service.id} className="flex flex-col gap-3 rounded-2xl border border-white/8 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold">{service.title}</p>
              <p className="text-sm text-muted">
                {service.slug} · {service.isActive ? "Active" : "Inactive"}
              </p>
            </div>
            <div className="flex gap-3 text-sm">
              <button
                type="button"
                onClick={() => {
                  setEditing(service.id);
                  setForm({
                    title: service.title,
                    slug: service.slug,
                    description: service.description,
                    icon: service.icon,
                    category: service.category,
                    isActive: service.isActive,
                  });
                }}
              >
                Edit
              </button>
              <button type="button" onClick={() => updateService(service.id, { isActive: !service.isActive }).then(load)}>
                {service.isActive ? "Deactivate" : "Activate"}
              </button>
              <button type="button" className="text-red-400" onClick={() => deleteService(service.id).then(load)}>
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
