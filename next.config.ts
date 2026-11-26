import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
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
      { source: "/legal/terms", destination: "/legal/terms-of-service", permanent: true },
      { source: "/legal/privacy", destination: "/legal/privacy-policy", permanent: true },
      { source: "/legal/cookies", destination: "/legal/cookie-policy", permanent: true },
      { source: "/legal/dpa", destination: "/legal/data-processing", permanent: true },
    ];
  },
};

export default nextConfig;
