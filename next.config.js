/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = withPWA({
  reactStrictMode: true,
});

module.exports = nextConfig;
