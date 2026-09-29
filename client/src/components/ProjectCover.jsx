import { projectPhoto } from "../data/images";

export default function ProjectCover({ image = "aurora", title, className = "h-56" }) {
  const src = projectPhoto(image);

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-navy ${className}`}>
      <img src={src} alt={title ? `${title} project visual` : "Project visual"} className="h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
      {title ? (
        <div className="absolute bottom-6 left-6 text-sm font-medium tracking-[0.2em] text-white/90">
          {title}
        </div>
      ) : null}
    </div>
  );
}
