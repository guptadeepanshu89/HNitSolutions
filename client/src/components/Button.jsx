import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

const variants = {
  primary:
    "bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan text-white shadow-glow hover:brightness-110",
  secondary:
    "border border-white/10 bg-white/5 text-snow hover:border-white/20 hover:bg-white/10",
  ghost: "text-snow hover:bg-white/5",
};

export default function Button({
  children,
  to,
  href,
  type = "button",
  variant = "primary",
  className,
  disabled,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold tracking-wide transition duration-300",
    variants[variant],
    disabled && "pointer-events-none opacity-60",
    className
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
