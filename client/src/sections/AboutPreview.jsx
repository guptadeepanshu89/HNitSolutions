import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";

export default function AboutPreview() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-8 sm:px-8 lg:grid-cols-12 lg:py-16">
      <div className="lg:col-span-6">
        <SectionHeading
          eyebrow="Studio"
          title="Technology, design and growth in one room."
          description="We combine technology, design and digital marketing to help businesses create meaningful digital experiences."
        />
        <p className="mt-6 max-w-xl text-muted">
          HNitSolutions is built like a product company: researchers, designers, engineers and growth leads working
          against the same brief. The result is software and brands that feel inevitable rather than assembled.
        </p>
        <Button to="/about" variant="secondary" className="mt-8">
          About the studio
        </Button>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative h-[380px] overflow-hidden rounded-3xl bg-navy lg:col-span-6"
      >
        <img
          src="/images/studio.jpg"
          alt="HNitSolutions team collaborating around a table"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
        <div className="absolute inset-x-6 bottom-6 grid grid-cols-3 gap-3">
          {["Strategy", "Product", "Growth"].map((item, i) => (
            <div key={item} className="glass rounded-2xl px-3 py-3 text-center">
              <span className="block text-[10px] tracking-[0.2em] text-muted">0{i + 1}</span>
              <span className="mt-1 block text-sm font-semibold">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
