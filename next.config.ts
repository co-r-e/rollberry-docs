import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/rollberry-docs",
  images: { unoptimized: true },
  reactCompiler: true,
};

export default nextConfig;
