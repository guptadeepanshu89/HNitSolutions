import { technologies } from "../data/content";
import SectionHeading from "../components/SectionHeading";

export default function TechStack() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading eyebrow="Stack" title="Tools we use to ship durable products." />
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="rounded-2xl border border-white/8 bg-card px-4 py-5 text-center text-sm font-medium text-snow/80"
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}
