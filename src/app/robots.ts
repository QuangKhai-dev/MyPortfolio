import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*", // Áp dụng cho tất cả các loại bot (Google, Bing,...)
      allow: "/", // Cho phép truy cập toàn bộ trang web
      disallow: [
        // Chặn bot truy cập các thư mục nhạy cảm (không chặn /blog để Google index bài viết)
        "/admin/",
        "/api/",
        "/private/",
        "/color-preview",
        "/blog",
        "/blog-category",
      ],
    },
    // Trỏ link tới file sitemap bạn đã tạo trước đó
    sitemap: `https://quangkhai.dev/sitemap.xml`,
  };
}
