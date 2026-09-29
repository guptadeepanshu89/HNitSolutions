export const photos = {
  hero: "/images/hero.jpg",
  studio: "/images/studio.jpg",
  office: "/images/office.jpg",
  contact: "/images/contact.jpg",
};

export const projectPhotos = {
  aurora: "/images/work-1.jpg",
  orbit: "/images/work-2.jpg",
  pulse: "/images/work-3.jpg",
  flare: "/images/work-4.jpg",
  prism: "/images/work-5.jpg",
  grid: "/images/work-6.jpg",
};

export const teamPhotos = {
  EV: "/images/team-1.jpg",
  AK: "/images/team-2.jpg",
  MC: "/images/team-3.jpg",
  TM: "/images/team-4.jpg",
};

export const avatarPhotos = {
  AH: "/images/avatar-1.jpg",
  RM: "/images/avatar-2.jpg",
  SA: "/images/avatar-3.jpg",
  JO: "/images/avatar-4.jpg",
  PN: "/images/avatar-5.jpg",
  LB: "/images/avatar-6.jpg",
};

export function projectPhoto(key) {
  if (key && String(key).startsWith("/")) return key;
  return projectPhotos[key] || photos.hero;
}

export function avatarPhoto(key) {
  if (key && (String(key).startsWith("/") || String(key).startsWith("http"))) return key;
  return avatarPhotos[key] || null;
}
