import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",

  images: {
    unoptimized: true, // Fix image paths in static export
  },
};

export default nextConfig;
