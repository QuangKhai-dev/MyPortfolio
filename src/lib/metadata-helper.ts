import { Metadata } from "next";

export function generatePageMetadata(data: any): Metadata {
  return {
    title: data?.seo_title || "Trang chủ | Brand Name",
    description: data?.seo_description || "Mô tả mặc định của website",
    openGraph: {
      title: data?.og_title || data?.seo_title,
      description: data?.og_description || data?.seo_description,
      images: [data?.image_url || "/default-share.png"],
    },
    // Bạn có thể thêm robots, canonical... từ API vào đây
  };
}
