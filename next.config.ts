import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",

  images: {
    unoptimized: true, // Ensure Next.js images load properly
  },
};

export default nextConfig;
