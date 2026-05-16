import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/FitStats",
        destination: "/",
        permanent: true,
      },
      {
        source: "/Fitstats",
        destination: "/",
        permanent: true,
      },
      {
        source: "/FitStats/privacy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/Fitstats/privacy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/FitStats/delete-data",
        destination: "/delete-data",
        permanent: true,
      },
      {
        source: "/Fitstats/delete-data",
        destination: "/delete-data",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
