import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";
import ServiceIcon from "../components/ServiceIcon";
import Skeleton from "../components/Skeleton";
import CTA from "../sections/CTA";
import { getService } from "../services/api";
import { fallbackServices } from "../data/fallback";

export default function ServiceDetail() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getService(slug)
      .then((res) => setService(res.data.data.service))
      .catch((err) => {
        const local = fallbackServices.find((item) => item.slug === slug);
        if (local) {
          setService({ ...local, content: { overview: local.description } });
          setError("");
        } else {
          setError(err.message);
        }
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="mx-auto max-w-5xl px-5 pt-32">
        <Skeleton className="h-64" />
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="mx-auto max-w-3xl px-5 pt-36 text-center">
        <h1 className="text-3xl font-semibold">Service not found</h1>
        <Link to="/services" className="mt-6 inline-block text-brand-cyan">
          Back to services
        </Link>
      </div>
    );
  }

  const content = service.content || {};

  return (
    <PageTransition>
      <SEO
        title={`${service.title} | HNitSolutions`}
        description={service.description}
        path={`/services/${service.slug}`}
      />
      <section className="px-5 pb-12 pt-32 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 text-brand-cyan">
              <ServiceIcon name={service.icon} />
            </span>
            <p className="text-xs tracking-[0.28em] text-muted uppercase">{service.category}</p>
          </div>
          <h1 className="mt-6 text-4xl font-semibold sm:text-6xl">{service.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">{content.overview || service.description}</p>
          <Button to="/contact" className="mt-8">
            Start a Project
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-16 px-5 pb-16 sm:px-8">
        <Block title="Overview" text={content.overview} />
        <Grid title="Problems we solve" items={content.problems} />
        <Grid title="Our approach" items={content.approach} />
        <Pills title="Features" items={content.features} />
        <Pills title="Technology / Tools" items={content.tools} />
        <Grid title="Process" items={content.process} />
        <Pills title="Benefits" items={content.benefits} />
        <div>
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-6 space-y-4">
            {(content.faq || []).map((item) => (
              <article key={item.q} className="rounded-2xl border border-white/8 p-5">
                <h3 className="font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm text-muted">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </PageTransition>
  );
}

function Block({ title, text }) {
  if (!text) return null;
  return (
    <div>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-4 leading-7 text-muted">{text}</p>
    </div>
  );
}

function Grid({ title, items = [] }) {
  if (!items.length) return null;
  return (
    <div>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="rounded-2xl bg-card p-5">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function Pills({ title, items = [] }) {
  if (!items.length) return null;
  return (
    <div>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-2xl border border-white/10 px-4 py-2 text-sm text-muted">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
