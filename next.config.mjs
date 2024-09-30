/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["skillicons.dev"],
    dangerouslyAllowSVG: true, // Cho phép tải hình ảnh SVG
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
