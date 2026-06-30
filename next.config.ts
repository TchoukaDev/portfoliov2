import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      // Anciennes pages offre fusionnées dans la home (préserve le SEO)
      { source: "/sites-web", destination: "/", permanent: true },
      { source: "/applications", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
