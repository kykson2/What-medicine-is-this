/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["nedrug.mfds.go.kr"],
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
};

module.exports = nextConfig;
