
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
    EMAIL_SERVICE: process.env.EMAIL_SERVICE,
    EMAIL_FROM: process.env.EMAIL_FROM,
  },
  // Add this to properly handle environment variables in the browser
  publicRuntimeConfig: {
    EMAIL_SERVICE: process.env.EMAIL_SERVICE,
    EMAIL_FROM: process.env.EMAIL_FROM,
  },
  serverRuntimeConfig: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
  }
}

module.exports = nextConfig
