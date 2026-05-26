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
  | "play"
  // Extra gallery images (Rectangle uploads)
  | "gal1"
  | "gal2"
  | "gal3"
  | "gal4"
  | "gal5"
  | "gal6"
  | "gal7"
  | "gal8";

// Fallback filenames used for local / vercel providers
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
  gal1: "Rectangle_11-1.png",
  gal2: "Rectangle_10-1.png",
  gal3: "Rectangle_9.png",
  gal4: "Rectangle_8.png",
  gal5: "Rectangle_9-1.png",
  gal6: "Rectangle_8-2.png",
  gal7: "Rectangle_8-1.png",
  gal8: "Rectangle_11.png",
};

// Cloudinary public IDs (version/publicId.ext)
const cloudinaryFiles: Partial<Record<ImageKey, string>> = {
  bg:       "v1779815018/bg_dgxgs4.png",
  hero:     "v1779815024/hero-img_vyndla.webp",
  image1:   "v1779815033/image1_h59fg3.webp",
  image3:   "v1779815065/image3_os9nxa.webp",
  image5:   "v1779815054/image5_nwrfzt.webp",
  image4: "v1779815050/image4_a4w4y3.webp",
  image6:   "v1779815083/image6_lthpay.jpg",
  image7:   "v1779815062/image7_xsmgs2.webp",
  gal1:     "v1779817070/Rectangle_11-1_jexfkn.png",
  gal2:     "v1779817070/Rectangle_10-1_bspizh.png",
  gal3:     "v1779817070/Rectangle_9_kqlwqs.png",
  gal4:     "v1779817068/Rectangle_8_pydg5l.png",
  gal5:     "v1779817066/Rectangle_9-1_bqzgsy.png",
  gal6:     "v1779817064/Rectangle_8-2_gqousr.png",
  gal7:     "v1779817062/Rectangle_8-1_cl6v2o.png",
  gal8:     "v1779817061/Rectangle_11_sbm5ak.png",
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
  const baseUrl = baseUrls[provider] || baseUrls.local;

  // Use Cloudinary-specific path if available, otherwise fall back to default filename
  const fileName =
    provider === "cloudinary" && cloudinaryFiles[key]
      ? cloudinaryFiles[key]!
      : imageFiles[key];

  return joinUrl(baseUrl, fileName);
};
