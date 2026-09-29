import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { processSteps } from "../data/content";

export default function WorkProcess() {
  return (
    <section className="bg-navy/50 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Process"
          title="A calm path from brief to compounding growth."
        />
        <div className="relative mt-16">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-brand-purple via-brand-blue to-brand-cyan md:left-1/2 md:block" />
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                className={`md:flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
              >
                <article className="glass w-full rounded-3xl p-6 md:w-[46%]">
                  <p className="text-xs tracking-[0.28em] text-brand-cyan">{step.id}</p>
                  <h3 className="mt-3 text-2xl font-semibold uppercase">{step.title}</h3>
                  <p className="mt-2 text-muted">{step.text}</p>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
