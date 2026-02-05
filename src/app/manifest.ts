import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Quang Khải Dev Portfolio",
    short_name: "Đỗ Quang Khải",
    description:
      "Đỗ Quang Khải – Fullstack Engineer chuyên React, Next.js, TypeScript, NestJS. Xây dựng website hiệu năng cao, kiến trúc scalable và chuẩn SEO.",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    start_url: "/", // Vẫn giữ
    display: "standalone", // Vẫn giữ
    background_color: "#fff", // Vẫn giữ
    theme_color: "#fff", // Vẫn giữ
  };
}
