import type { NextConfig } from "next";

const backendApiUrl =
  process.env.BACKEND_API_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:5000";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/tasks",
        destination: `${backendApiUrl}/tasks`,
      },
      {
        source: "/tasks/:path*",
        destination: `${backendApiUrl}/tasks/:path*`,
      },
    ];
  },
};

export default nextConfig;
