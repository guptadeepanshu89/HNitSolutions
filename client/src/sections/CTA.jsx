import Button from "../components/Button";

export default function CTA() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan p-[1px]">
        <div className="rounded-3xl bg-ink px-8 py-16 sm:px-14">
          <p className="text-xs tracking-[0.28em] text-muted uppercase">Next conversation</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold sm:text-5xl">
            Bring the brief. We will bring the system.
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Tell us what you are building. We will respond with a clear path — not a generic proposal deck.
          </p>
          <Button to="/contact" className="mt-8">
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
}
