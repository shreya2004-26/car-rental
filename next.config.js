/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "ddzlhdlda",
    NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: "ly8qb38k",
  },
  images: {
    domains: ["res.cloudinary.com", "lh3.googleusercontent.com", "github.com"],
  },
  httpAgentOptions: {
    keepAlive: true,
  },
};

module.exports = nextConfig;
