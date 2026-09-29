import {
  Cloud,
  Code2,
  FileText,
  Globe,
  Hexagon,
  Megaphone,
  Palette,
  PenTool,
  Radar,
  Search,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
} from "lucide-react";

const icons = {
  "code-2": Code2,
  globe: Globe,
  smartphone: Smartphone,
  radar: Radar,
  "share-2": Share2,
  search: Search,
  megaphone: Megaphone,
  palette: Palette,
  hexagon: Hexagon,
  "pen-tool": PenTool,
  "shopping-bag": ShoppingBag,
  cloud: Cloud,
  "file-text": FileText,
  "shield-check": ShieldCheck,
  sparkles: Sparkles,
};

export default function ServiceIcon({ name, className = "h-5 w-5" }) {
  const Icon = icons[name] || Sparkles;
  return <Icon className={className} />;
}
