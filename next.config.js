/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["cdn.simpleicons.org"],
  },
  output: "export",
};

module.exports = nextConfig;
