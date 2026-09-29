import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Button from "../components/Button";
import AnimatedCounter from "../components/AnimatedCounter";
import { stats } from "../data/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="blob -left-24 top-10 h-80 w-80 bg-brand-purple/25" />
      <div className="blob right-0 top-40 h-96 w-96 bg-brand-cyan/15" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-12 lg:pb-24">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-[0.32em] text-muted uppercase"
          >
            Trusted by ambitious businesses
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Build. Grow. Scale.
            <span className="block mt-2">
              Your <span className="gradient-text">Digital Future</span> Starts Here.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg"
          >
            We build powerful digital experiences, intelligent marketing strategies and scalable technology
            solutions that help ambitious businesses grow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button to="/contact">
              Start a Project <ArrowUpRight size={16} />
            </Button>
            <Button to="/services" variant="secondary">
              Explore Services
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative lg:col-span-5"
        >
          <HeroDashboard />
        </motion.div>
      </div>

      <div className="relative border-t border-white/8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-10 sm:px-8 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-semibold text-snow sm:text-4xl">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto max-w-7xl px-5 pb-8 text-xs text-muted/70 sm:px-8">
          Demo figures for this fictional studio.
        </p>
      </div>
    </section>
  );
}

function HeroDashboard() {
  return (
    <div className="relative mx-auto h-[460px] max-w-md">
      <img
        src="/images/hero.jpg"
        alt="Designer working on a laptop in a modern studio"
        className="absolute inset-0 h-full w-full rounded-3xl object-cover"
      />
      <div className="absolute inset-0 rounded-3xl bg-ink/55" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 460" fill="none" aria-hidden="true">
        <path d="M40 80 L180 140 L320 70" stroke="url(#line)" strokeWidth="1.2" />
        <path d="M70 360 L190 220 L340 300" stroke="url(#line)" strokeWidth="1.2" />
        <circle cx="180" cy="140" r="4" fill="#06B6D4" />
        <circle cx="190" cy="220" r="4" fill="#7C3AED" />
        <defs>
          <linearGradient id="line" x1="40" y1="80" x2="340" y2="300">
            <stop stopColor="#7C3AED" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="glass gradient-border absolute left-0 top-8 w-56 rounded-3xl p-4"
      >
        <p className="text-xs text-muted">Weekly velocity</p>
        <p className="mt-2 text-2xl font-semibold">+38%</p>
        <div className="mt-4 flex h-16 items-end gap-1">
          {[28, 42, 36, 58, 49, 72, 64].map((h) => (
            <div key={h} className="flex-1 rounded-sm bg-gradient-to-t from-brand-purple to-brand-cyan" style={{ height: `${h}%` }} />
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute right-0 top-28 w-52 rounded-3xl p-4"
      >
        <p className="text-xs text-muted">Live nodes</p>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="h-2.5 w-2.5 rounded-full bg-brand-cyan/80 shadow-glow-cyan" />
          ))}
        </div>
        <p className="mt-4 font-mono text-[11px] text-muted">deploy.ok · us-west-2</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute bottom-8 left-10 right-6 rounded-3xl p-4"
      >
        <p className="font-mono text-[11px] leading-6 text-brand-cyan/80">
          {`const grow = async () => {`}
          <br />
          {`  await hnit.ship();`}
          <br />
          {`};`}
        </p>
      </motion.div>
    </div>
  );
}
