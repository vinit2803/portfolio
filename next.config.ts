import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio", // Set base path for GitHub Pages
  assetPrefix: "/portfolio/", // Fix asset paths for CSS & JS
};
export default nextConfig;
