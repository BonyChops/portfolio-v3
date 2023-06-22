/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["cdn.simpleicons.org"],
    unoptimized: true
  },
  output: "export",
};


module.exports = nextConfig;
