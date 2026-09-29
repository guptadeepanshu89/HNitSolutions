import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import ProjectCover from "../components/ProjectCover";
import Skeleton from "../components/Skeleton";

export default function PortfolioPreview({ projects = [], loading }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="flex items-end justify-between gap-6">
        <SectionHeading eyebrow="Selected work" title="A few systems we have imagined." />
        <Link to="/portfolio" className="hidden text-sm font-semibold text-brand-cyan sm:block">
          View portfolio
        </Link>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-72" />)
          : projects.slice(0, 4).map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={index === 0 ? "md:col-span-2" : ""}
              >
                <ProjectCover
                  image={project.image}
                  title={project.title}
                  className={index === 0 ? "h-72 md:h-80" : "h-64"}
                />
                <div className="mt-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs tracking-[0.2em] text-muted uppercase">{project.category}</p>
                    <h3 className="mt-1 text-xl font-semibold">{project.title}</h3>
                  </div>
                  <Link to="/portfolio" className="text-sm text-brand-cyan">
                    View Project
                  </Link>
                </div>
              </motion.article>
            ))}
      </div>
    </section>
  );
}
