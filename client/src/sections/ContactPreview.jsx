import { useState } from "react";
import { company, serviceOptions } from "../data/content";
import { submitContact } from "../services/api";
import Button from "../components/Button";

const initial = { name: "", email: "", phone: "", company: "", service: "", message: "" };

export default function ContactPreview() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  function update(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });
    try {
      const res = await submitContact(form);
      setStatus({ type: "success", message: res.data.data.message });
      setForm(initial);
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2">
      <div>
        <p className="text-xs tracking-[0.28em] text-brand-cyan uppercase">Contact</p>
        <h2 className="mt-3 text-4xl font-semibold">Let's start with a useful conversation.</h2>
        <p className="mt-4 text-muted">{company.email}</p>
        <p className="text-muted">{company.phone}</p>
      </div>
      <form onSubmit={onSubmit} className="glass space-y-4 rounded-3xl p-6">
        <Field label="Name" name="name" value={form.name} onChange={update} required />
        <Field label="Email" name="email" type="email" value={form.email} onChange={update} required />
        <Field label="Service" name="service" value={form.service} onChange={update} as="select">
          <option value="">Select a service</option>
          {serviceOptions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Field>
        <Field label="Message" name="message" value={form.message} onChange={update} as="textarea" required />
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Sending…" : "Send Message"}
        </Button>
        {status.message ? (
          <p className={status.type === "error" ? "text-sm text-red-400" : "text-sm text-brand-cyan"}>
            {status.message}
          </p>
        ) : null}
      </form>
    </section>
  );
}

export function Field({ label, name, as = "input", children, className = "", ...props }) {
  const classes = "w-full rounded-2xl border border-white/10 bg-ink px-4 py-3 text-sm text-snow";
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm text-muted">{label}</span>
      {as === "select" ? (
        <select name={name} {...props} className={classes}>
          {children}
        </select>
      ) : as === "textarea" ? (
        <textarea name={name} {...props} className={classes} />
      ) : (
        <input name={name} {...props} className={classes} />
      )}
    </label>
  );
}
