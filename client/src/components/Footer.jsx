import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { company } from "../data/content";
import { subscribeNewsletter } from "../services/api";

const companyLinks = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

const serviceLinks = [
  { to: "/services/software-development", label: "Software Development" },
  { to: "/services/website-development", label: "Website Development" },
  { to: "/services/seo", label: "SEO" },
  { to: "/services/social-media-marketing", label: "Digital Marketing" },
  { to: "/services/branding", label: "Branding" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });
    try {
      const res = await subscribeNewsletter(email);
      setStatus({ type: "success", message: res.data.data.message || "You are now subscribed." });
      setEmail("");
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="border-t border-white/8 bg-navy">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
            We build software, digital products and growth systems for ambitious companies. Technology that
            moves business forward.
          </p>
          <div className="mt-6 flex gap-3">
            <Social href={company.socials.linkedin} label="LinkedIn">
              <IconLinkedIn />
            </Social>
            <Social href={company.socials.instagram} label="Instagram">
              <IconInstagram />
            </Social>
            <Social href={company.socials.facebook} label="Facebook">
              <IconFacebook />
            </Social>
            <Social href={company.socials.x} label="X">
              <IconX />
            </Social>
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="text-sm font-semibold text-snow">Company</p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {companyLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-snow">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-sm font-semibold text-snow">Services</p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {serviceLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-snow">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-sm font-semibold text-snow">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>{company.email}</li>
            <li>{company.phone}</li>
            <li>{company.address}</li>
          </ul>
          <form onSubmit={onSubmit} className="mt-6">
            <label htmlFor="newsletter-email" className="text-sm font-medium text-snow">
              Newsletter
            </label>
            <div className="mt-2 flex gap-2">
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-2xl border border-white/10 bg-ink px-4 py-3 text-sm text-snow placeholder:text-muted"
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-2xl bg-brand-purple px-4 text-sm font-semibold text-white disabled:opacity-60"
              >
                {loading ? "…" : "Join"}
              </button>
            </div>
            {status.message ? (
              <p className={`mt-2 text-xs ${status.type === "error" ? "text-red-400" : "text-brand-cyan"}`}>
                {status.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
      <div className="border-t border-white/8 px-5 py-6 text-center text-xs text-muted sm:px-8">
        © 2026 HNitSolutions. All rights reserved.
      </div>
    </footer>
  );
}

function Social({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 text-muted hover:text-snow"
    >
      {children}
    </a>
  );
}

function IconLinkedIn() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.5 9H4v11h2.5V9zM5.25 4A1.75 1.75 0 1 0 5.26 7.5 1.75 1.75 0 0 0 5.25 4zM20 20h-2.5v-5.6c0-1.8-.7-2.4-1.7-2.4s-1.9.8-1.9 2.5V20H11.4V9H14v1.3c.5-.8 1.6-1.6 3.2-1.6 2.3 0 3.8 1.5 3.8 4.6V20z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.5 20v-7h2.4l.4-2.8h-2.8V8.6c0-.8.2-1.3 1.4-1.3H17.5V4.8c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v1.7H9v2.8h2.6V20h2.9z" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 4h2.3l-5 5.7L21 20h-4.4l-3.4-4.5L9.2 20H6.9l5.3-6.1L4 4h4.5l3.1 4.1L17.5 4zm-.8 14.4h1.3L7.4 5.5H6L16.7 18.4z" />
    </svg>
  );
}
