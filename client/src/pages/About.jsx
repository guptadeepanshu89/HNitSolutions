import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import WhyChooseUs from "../sections/WhyChooseUs";
import WorkProcess from "../sections/WorkProcess";
import TechStack from "../sections/TechStack";
import CTA from "../sections/CTA";
import AnimatedCounter from "../components/AnimatedCounter";
import { stats, team } from "../data/content";

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About HNitSolutions"
        description="We combine technology, design and digital marketing to help businesses create meaningful digital experiences."
        path="/about"
      />
      <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8">
        <div className="blob right-0 top-24 h-72 w-72 bg-brand-purple/20" />
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.28em] text-muted uppercase">About</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            We combine technology, design and digital marketing to help businesses create meaningful digital
            experiences.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-6 sm:px-8">
        <div className="relative h-64 overflow-hidden rounded-3xl sm:h-80">
          <img src="/images/office.jpg" alt="HNitSolutions studio workspace" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-2">
        <article className="rounded-3xl border border-white/8 bg-card p-8">
          <h2 className="text-2xl font-semibold">Who we are</h2>
          <p className="mt-4 leading-7 text-muted">
            HNitSolutions is a fictional premium studio assembled like a product company. Strategy, design,
            engineering and growth sit together so the work stays coherent from first sketch to live operations.
          </p>
        </article>
        <div className="grid gap-6">
          <article className="rounded-3xl bg-navy p-8">
            <h2 className="text-2xl font-semibold">Mission</h2>
            <p className="mt-3 text-muted">Build systems that make ambitious companies feel inevitable online.</p>
          </article>
          <article className="rounded-3xl bg-navy p-8">
            <h2 className="text-2xl font-semibold">Vision</h2>
            <p className="mt-3 text-muted">
              A world where technology, brand and growth are designed as one language — not three vendors.
            </p>
          </article>
        </div>
      </section>

      <WhyChooseUs />
      <WorkProcess />
      <TechStack />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionHeading title="Company statistics" description="Demo figures for this fictional studio." />
        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/8 p-6">
              <p className="text-3xl font-semibold">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <SectionHeading eyebrow="People" title="A compact senior team." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person) => (
            <article key={person.name} className="overflow-hidden rounded-3xl border border-white/8 bg-card">
              <img
                src={person.photo}
                alt={`${person.name}, ${person.role}`}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold">{person.name}</h3>
                <p className="text-sm text-muted">{person.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </PageTransition>
  );
}
