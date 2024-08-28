/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.NEXT_PUBLIC__API_URL,
  },
};

export default nextConfig;
