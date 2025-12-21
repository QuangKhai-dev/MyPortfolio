/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["skillicons.dev", "images.unsplash.com"],
    dangerouslyAllowSVG: true, // Cho phép tải hình ảnh SVG
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // xử lí port xuất ra là 8083
  server: {
    port: 8083,
  },
};

export default nextConfig;
