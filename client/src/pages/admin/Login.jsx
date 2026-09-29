import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import SEO from "../../components/SEO";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import { Field } from "../../sections/ContactPreview";
import { useAuth } from "../../context/AuthContext";

export default function AdminLogin() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (user?.role === "ADMIN") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      await login(form);
      navigate(location.state?.from?.pathname || "/admin/dashboard", { replace: true });
    } catch (err) {
      setError(err.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid min-h-screen place-items-center bg-ink px-5">
      <SEO title="Admin Login | HNitSolutions" path="/admin/login" />
      <form onSubmit={onSubmit} className="glass w-full max-w-md space-y-4 rounded-3xl p-8">
        <Logo to="/" />
        <h1 className="text-2xl font-semibold">Admin access</h1>
        <Field
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={(event) => setForm((c) => ({ ...c, email: event.target.value }))}
          required
        />
        <Field
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={(event) => setForm((c) => ({ ...c, password: event.target.value }))}
          required
        />
        {error ? <p className="text-sm text-red-400">{error}</p> : null}
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Signing in…" : "Sign in"}
        </Button>
      </form>
    </div>
  );
}
