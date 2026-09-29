import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Skeleton from "../components/Skeleton";
import { avatarPhoto } from "../data/images";

export default function Testimonials({ testimonials = [], loading }) {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  function next() {
    setIndex((value) => (value + 1) % testimonials.length);
  }

  function prev() {
    setIndex((value) => (value - 1 + testimonials.length) % testimonials.length);
  }

  return (
    <section className="bg-navy/40 py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Voices"
          title="Placeholder stories from fictional clients."
          description="These testimonials are illustrative. They do not represent real companies or engagements."
        />

        {loading ? (
          <Skeleton className="mt-12 h-72" />
        ) : current ? (
          <div className="mt-12">
            <AnimatePresence mode="wait">
              <motion.article
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="glass rounded-3xl p-8 sm:p-12"
              >
                <div className="flex gap-1 text-brand-cyan">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-6 text-xl leading-9 text-snow sm:text-2xl">“{current.content}”</p>
                <div className="mt-8 flex items-center gap-4">
                  {avatarPhoto(current.avatar) ? (
                    <img
                      src={avatarPhoto(current.avatar)}
                      alt={current.clientName}
                      className="h-12 w-12 rounded-2xl object-cover"
                    />
                  ) : (
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-purple to-brand-cyan text-sm font-semibold">
                      {current.avatar}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold">{current.clientName}</p>
                    <p className="text-sm text-muted">
                      {current.role}, {current.company}
                    </p>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
            <div className="mt-6 flex justify-center gap-3">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={prev}
                className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={next}
                className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
