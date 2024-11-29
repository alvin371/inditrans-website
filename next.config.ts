import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ output: "export",
  images: {
    domains: ["merakiui.com", "images.unsplash.com"]
  }
};

export default nextConfig;
