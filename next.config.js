/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placeimg.com',
      },
      {
        protocol: "https",
        hostname: "api.lorem.space",
      },
      {
        protocol: "https",
        hostname: "www.nationalgeographic.com.es",
      },
      {
        protocol: "https",
        hostname: "es.digitaltrends.com",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "media-cdn.tripadvisor.com",
      },
      {
        protocol: "https",
        hostname: "tunicaragua.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
    ]
  },
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  }
}

module.exports = nextConfig
