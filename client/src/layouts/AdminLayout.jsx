import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FolderKanban, LayoutDashboard, LogOut, Mail, MessageSquareQuote, Newspaper, Sparkles } from "lucide-react";
import Logo from "../components/Logo";
import { useAuth } from "../context/AuthContext";
import { cn } from "../utils/cn";

const links = [
  { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/messages", label: "Messages", icon: Mail },
  { to: "/admin/services", label: "Services", icon: Sparkles },
  { to: "/admin/projects", label: "Projects", icon: FolderKanban },
  { to: "/admin/testimonials", label: "Testimonials", icon: MessageSquareQuote },
  { to: "/admin/subscribers", label: "Subscribers", icon: Newspaper },
];

export default function AdminLayout() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  async function onLogout() {
    await logout();
    navigate("/admin/login");
  }

  return (
    <div className="min-h-screen bg-ink lg:grid lg:grid-cols-[260px_1fr]">
      <aside className="border-b border-white/8 bg-navy lg:min-h-screen lg:border-b-0 lg:border-r">
        <div className="flex items-center justify-between px-5 py-5">
          <Logo to="/admin/dashboard" compact />
        </div>
        <nav className="flex gap-2 overflow-x-auto px-3 pb-4 no-scrollbar lg:flex-col lg:px-4">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "flex min-w-max items-center gap-3 rounded-2xl px-3 py-2.5 text-sm text-muted",
                    isActive && "bg-white/5 text-snow"
                  )
                }
              >
                <Icon size={16} />
                {link.label}
              </NavLink>
            );
          })}
          <button
            type="button"
            onClick={onLogout}
            className="flex min-w-max items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm text-muted hover:text-snow"
          >
            <LogOut size={16} />
            Logout
          </button>
        </nav>
        <p className="hidden px-6 pb-6 text-xs text-muted lg:block">{user?.email}</p>
      </aside>
      <div className="min-w-0">
        <Outlet />
      </div>
    </div>
  );
}
