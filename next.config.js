/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'source.unsplash.com'
    ]
  },
  async rewrites() {
    return [
      {
        source: '/:any*',
        destination: '/'
      }
    ]
  }
}

module.exports = nextConfig
