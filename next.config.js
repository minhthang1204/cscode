/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    "MONGO_URI": "mongodb+srv://admin-deeni:muha234mmad@cluster0.n2lhm.mongodb.net/wootlabfoundation"
  }
}

module.exports = nextConfig
