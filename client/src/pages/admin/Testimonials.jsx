import { useEffect, useState } from "react";
import { createTestimonial, deleteTestimonial, getAdminTestimonials } from "../../services/api";
import Button from "../../components/Button";
import { Field } from "../../sections/ContactPreview";

const empty = { clientName: "", company: "", role: "", avatar: "", rating: 5, content: "" };

export default function AdminTestimonials() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(empty);

  async function load() {
    const res = await getAdminTestimonials();
    setItems(res.data.data.testimonials);
  }

  useEffect(() => {
    load();
  }, []);

  async function onSubmit(event) {
    event.preventDefault();
    await createTestimonial({ ...form, rating: Number(form.rating) });
    setForm(empty);
    await load();
  }

  return (
    <div className="px-5 py-8 sm:px-8">
      <h1 className="text-3xl font-semibold">Testimonials</h1>
      <form onSubmit={onSubmit} className="mt-6 grid gap-4 rounded-3xl border border-white/8 p-6 md:grid-cols-2">
        <Field label="Client name" value={form.clientName} onChange={(e) => setForm({ ...form, clientName: e.target.value })} required />
        <Field label="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} required />
        <Field label="Role" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} required />
        <Field label="Avatar initials" value={form.avatar} onChange={(e) => setForm({ ...form, avatar: e.target.value })} />
        <Field
          className="md:col-span-2"
          label="Testimonial"
          as="textarea"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          required
        />
        <Button type="submit">Add testimonial</Button>
      </form>
      <div className="mt-8 space-y-3">
        {items.map((item) => (
          <article key={item.id} className="flex items-start justify-between gap-4 rounded-2xl border border-white/8 p-4">
            <div>
              <p className="font-semibold">{item.clientName}</p>
              <p className="text-sm text-muted">{item.content}</p>
            </div>
            <button type="button" className="text-sm text-red-400" onClick={() => deleteTestimonial(item.id).then(load)}>
              Delete
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
