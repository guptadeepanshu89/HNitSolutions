import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import ProjectCover from "../components/ProjectCover";
import Skeleton from "../components/Skeleton";
import CTA from "../sections/CTA";
import { portfolioFilters } from "../data/content";
import { getProjects } from "../services/api";
import { fallbackProjects } from "../data/fallback";
import { cn } from "../utils/cn";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then((res) => setProjects(res.data.data.projects))
      .catch(() => setProjects(fallbackProjects))
      .finally(() => setLoading(false));
  }, []);

  const visible = filter === "All" ? projects : projects.filter((item) => item.category === filter);

  return (
    <PageTransition>
      <SEO
        title="Portfolio | HNitSolutions"
        description="Selected fictional work across web, software, mobile, marketing, branding and UI/UX."
        path="/portfolio"
      />
      <section className="px-5 pb-8 pt-32 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.28em] text-muted uppercase">Portfolio</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">Work, imagined with care.</h1>
          <p className="mt-4 max-w-2xl text-muted">
            These case studies are fictional demonstrations of how HNitSolutions presents product work. They do not
            represent real clients.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <div className="flex flex-wrap gap-2">
          {portfolioFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn(
                "rounded-2xl border border-white/10 px-4 py-2 text-sm text-muted",
                filter === item && "border-white/20 bg-white/10 text-snow"
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-80" />)
            : (
              <AnimatePresence mode="popLayout">
                {visible.map((project) => (
                  <motion.article
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="rounded-3xl border border-white/8 bg-card p-4"
                  >
                    <ProjectCover image={project.image} title={project.title} className="h-64" />
                    <p className="mt-4 text-xs tracking-[0.2em] text-muted uppercase">{project.category}</p>
                    <h2 className="mt-2 text-2xl font-semibold">{project.title}</h2>
                    <p className="mt-2 text-sm text-muted">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="rounded-xl bg-white/5 px-3 py-1 text-xs text-muted">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.projectUrl ? (
                      <a href={project.projectUrl} className="mt-4 inline-block text-sm text-brand-cyan">
                        View Project
                      </a>
                    ) : (
                      <p className="mt-4 text-sm text-brand-cyan">View Project — private case study</p>
                    )}
                  </motion.article>
                ))}
              </AnimatePresence>
            )}
        </div>
      </section>
      <CTA />
    </PageTransition>
  );
}
