import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ServiceIcon from "../components/ServiceIcon";
import Skeleton from "../components/Skeleton";

export default function ServicesPreview({ services = [], loading }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading
          eyebrow="Capabilities"
          title="Fourteen ways to move a business forward."
          description="Engineering, design and growth — assembled as one operating system rather than a menu of disconnected services."
        />
        <Link to="/services" className="text-sm font-semibold text-brand-cyan">
          View all services
        </Link>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-52" />)
          : services.slice(0, 6).map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group glass gradient-border rounded-3xl p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5 text-brand-cyan transition group-hover:scale-110">
                    <ServiceIcon name={service.icon} />
                  </span>
                  <span className="text-xs tracking-[0.2em] text-muted">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
                <Link
                  to={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-snow"
                >
                  Learn More <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5" />
                </Link>
              </motion.article>
            ))}
      </div>
    </section>
  );
}
