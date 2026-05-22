export type ImageKey =
  | "bg"
  | "hero"
  | "image1"
  | "image2"
  | "image2Jpg"
  | "image3"
  | "image4"
  | "image5"
  | "image6"
  | "image7"
  | "logo"
  | "menu"
  | "play";

const imageFiles: Record<ImageKey, string> = {
  bg: "bg.png",
  hero: "hero-img.webp",
  image1: "image1.webp",
  image2: "image2.webp",
  image2Jpg: "image2.jpg",
  image3: "image3.webp",
  image4: "image4.webp",
  image5: "image5.webp",
  image6: "image6.jpg",
  image7: "image7.webp",
  logo: "logo.svg",
  menu: "menu.svg",
  play: "play.svg",
};

type ImageProvider = "cloudinary" | "local" | "vercel";

const provider = (import.meta.env.VITE_IMAGE_PROVIDER || "local") as ImageProvider;

const baseUrls: Record<ImageProvider, string | undefined> = {
  cloudinary: import.meta.env.VITE_CLOUDINARY_BASE_URL,
  local: "/lovable-uploads",
  vercel: import.meta.env.VITE_VERCEL_BLOB_BASE_URL,
};

const joinUrl = (baseUrl: string, fileName: string) => {
  const cleanBase = baseUrl.replace(/\/+$/, "");
  const cleanFile = fileName.replace(/^\/+/, "");

  return `${cleanBase}/${cleanFile}`;
};

export const imageUrl = (key: ImageKey) => {
  const fileName = imageFiles[key];
  const baseUrl = baseUrls[provider] || baseUrls.local;

  return joinUrl(baseUrl, fileName);
};
