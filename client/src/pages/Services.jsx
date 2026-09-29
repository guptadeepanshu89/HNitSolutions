import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import ServiceIcon from "../components/ServiceIcon";
import Skeleton from "../components/Skeleton";
import CTA from "../sections/CTA";
import { getServices } from "../services/api";
import { fallbackServices } from "../data/fallback";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getServices()
      .then((res) => setServices(res.data.data.services))
      .catch(() => {
        setServices(fallbackServices);
        setError("");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <PageTransition>
      <SEO
        title="Services | HNitSolutions"
        description="Software, websites, mobile apps, SEO, ads, branding and ongoing digital operations."
        path="/services"
      />
      <section className="px-5 pb-10 pt-32 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.28em] text-muted uppercase">Services</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold sm:text-6xl">
            A full stack of product, brand and growth work.
          </h1>
          <div className="mt-10 overflow-hidden rounded-3xl">
            <img
              src="/images/work-2.jpg"
              alt="Product and engineering work on screen"
              className="h-56 w-full object-cover sm:h-72"
            />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        {error ? <p className="text-red-400">{error}</p> : null}
        <div className="grid gap-4 md:grid-cols-2">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} className="h-48" />)
            : services.map((service, index) => (
                <motion.article
                  key={service.id}
                  whileHover={{ y: -6 }}
                  className="group glass gradient-border rounded-3xl p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5 text-brand-cyan transition group-hover:scale-110">
                      <ServiceIcon name={service.icon} />
                    </span>
                    <span className="text-xs tracking-[0.2em] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold">{service.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
                  >
                    Learn More <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5" />
                  </Link>
                </motion.article>
              ))}
        </div>
      </section>
      <CTA />
    </PageTransition>
  );
}
