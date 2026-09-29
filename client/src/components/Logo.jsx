import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

export default function Logo({ compact = false, to = "/", className }) {
  return (
    <Link to={to} className={cn("group flex items-center gap-3", className)} aria-label="HNitSolutions home">
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-2xl bg-navy">
        <span className="absolute inset-0 bg-gradient-to-br from-brand-purple via-brand-blue to-brand-cyan opacity-90" />
        <span className="relative font-semibold tracking-tight text-white">H</span>
      </span>
      <span className={cn("leading-none", compact && "hidden sm:block")}>
        <span className="block text-[13px] font-semibold tracking-[0.22em] text-snow">HNIT</span>
        <span className="mt-1 block text-[10px] font-medium tracking-[0.32em] text-muted">SOLUTIONS</span>
      </span>
    </Link>
  );
}
