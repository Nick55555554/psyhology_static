import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {

  },
  output: 'export',
  basePath: '/psyhology_static',
  images:{
    unoptimized: true,
  }
};

export default nextConfig;
