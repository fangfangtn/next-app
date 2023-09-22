/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "vi",
    localeDetection: false,
  },
}

module.exports = nextConfig
