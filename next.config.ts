import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
   /* appDir: true */
    srcDir: true
  },
};

export default nextConfig;