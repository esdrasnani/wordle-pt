/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    config.externals.push({
      knex: 'commonjs knex',
    })
    return config
  },
  images: {
    domains: ['images.unsplash.com', 'flowbite.com', 'img.freepik.com'],
  },
  experimental: {
    serverActions: true,
    // serverComponentsExternalPackages: ['knex'],
  },
}

module.exports = nextConfig
