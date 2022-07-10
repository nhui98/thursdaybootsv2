/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI:
      "mongodb+srv://khao:kaotik23@cluster0.l2iu8.mongodb.net/thursdayboots?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
