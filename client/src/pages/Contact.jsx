import { useState } from "react";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";
import { Field } from "../sections/ContactPreview";
import { company, serviceOptions } from "../data/content";
import { submitContact } from "../services/api";

const initial = { name: "", email: "", phone: "", company: "", service: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  function update(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email";
    if (form.phone && !/^[+\d][\d\s()-]{6,19}$/.test(form.phone)) next.phone = "Enter a valid phone number";
    if (!form.message.trim() || form.message.trim().length < 10) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(event) {
    event.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setStatus({ type: "", message: "" });
    try {
      const res = await submitContact(form);
      setStatus({ type: "success", message: res.data.data.message || "Thanks! We'll get back to you shortly." });
      setForm(initial);
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageTransition>
      <SEO
        title="Contact HNitSolutions"
        description="Start a project with HNitSolutions. Email, phone and a direct brief form."
        path="/contact"
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.28em] text-muted uppercase">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">Let's Build Something Great Together</h1>
          <div className="mt-8 overflow-hidden rounded-3xl">
            <img
              src="/images/contact.jpg"
              alt="Working on a project brief at a laptop"
              className="h-52 w-full object-cover sm:h-64"
            />
          </div>
          <div className="mt-8 space-y-4 text-muted">
            <p><span className="text-snow">Email</span> — {company.email}</p>
            <p><span className="text-snow">Phone</span> — {company.phone}</p>
            <p><span className="text-snow">Office</span> — {company.address}</p>
            <p><span className="text-snow">Hours</span> — {company.hours}</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="glass space-y-4 rounded-3xl p-6 sm:p-8" noValidate>
          <Field label="Name" name="name" value={form.name} onChange={update} required />
          {errors.name ? <p className="text-xs text-red-400">{errors.name}</p> : null}
          <Field label="Email" name="email" type="email" value={form.email} onChange={update} required />
          {errors.email ? <p className="text-xs text-red-400">{errors.email}</p> : null}
          <Field label="Phone" name="phone" value={form.phone} onChange={update} />
          {errors.phone ? <p className="text-xs text-red-400">{errors.phone}</p> : null}
          <Field label="Company" name="company" value={form.company} onChange={update} />
          <Field label="Service" name="service" value={form.service} onChange={update} as="select">
            <option value="">Select a service</option>
            {serviceOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Field>
          <Field label="Message" name="message" value={form.message} onChange={update} as="textarea" rows={5} required />
          {errors.message ? <p className="text-xs text-red-400">{errors.message}</p> : null}
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
    </PageTransition>
  );
}
