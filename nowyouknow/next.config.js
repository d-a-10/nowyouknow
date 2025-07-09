/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'images.unsplash.com', 'assets.voxcinemas.com'],
    unoptimized: true
  },
  output: 'standalone'
}
