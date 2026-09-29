export default function MediaImage({
  src,
  alt,
  className = "",
  imgClassName = "h-full w-full object-cover",
}) {
  return (
    <div className={`overflow-hidden bg-navy ${className}`}>
      <img src={src} alt={alt} className={imgClassName} loading="lazy" />
    </div>
  );
}
