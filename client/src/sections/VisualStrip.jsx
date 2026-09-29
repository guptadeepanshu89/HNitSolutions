import MediaImage from "../components/MediaImage";

const frames = [
  { src: "/images/office.jpg", alt: "Bright modern office interior", tall: false },
  { src: "/images/work-5.jpg", alt: "Brand and design work on a desk", tall: true },
  { src: "/images/work-3.jpg", alt: "Mobile product in someone's hands", tall: false },
];

export default function VisualStrip() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
      <div className="grid gap-4 md:grid-cols-3">
        {frames.map((frame) => (
          <MediaImage
            key={frame.src}
            src={frame.src}
            alt={frame.alt}
            className={`relative rounded-3xl ${frame.tall ? "h-64 md:h-80" : "h-56 md:mt-8 md:h-72"}`}
          />
        ))}
      </div>
    </section>
  );
}
