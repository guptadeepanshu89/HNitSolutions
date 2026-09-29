import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { whyChoose } from "../data/content";

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading eyebrow="Why HNitSolutions" title="Serious work, without the theatre." />
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {whyChoose.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/8 bg-card p-8"
          >
            <p className="text-sm tracking-[0.24em] text-brand-purple">0{index + 1}</p>
            <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-muted">{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
