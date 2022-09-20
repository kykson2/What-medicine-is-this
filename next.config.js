/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["nedrug.mfds.go.kr"],
  },
};

module.exports = nextConfig;
