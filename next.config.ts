import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // ~420 static pages: use fewer, lighter build workers so builds fit on low-memory machines.
  experimental: {
    staticGenerationMinPagesPerWorker: 150,
    staticGenerationMaxConcurrency: 4,
    staticGenerationRetryCount: 1,
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      // www → apex canonical domain (architecture item 2)
      { source: "/:path*", has: [{ type: "host", value: "www.ecard.gg" }], destination: "https://ecard.gg/:path*", permanent: true },
      // Architecture legal URLs → existing policy pages (avoid duplicate content)
      { source: "/legal/terms", destination: "/legal-centre/terms-of-service", permanent: true },
      { source: "/legal/privacy", destination: "/legal-centre/privacy-policy", permanent: true },
      { source: "/legal/cookies", destination: "/legal-centre/cookie-policy", permanent: true },
      { source: "/legal/dpa", destination: "/legal-centre/data-processing", permanent: true },
    ];
  },
};

export default nextConfig;
