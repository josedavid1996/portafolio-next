/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'es'
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { svgProps: { fill: 'currentColor' }, icon: true }
        }
      ]
    })

    return config
  },
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com', 'jluseanrggkztvghetlz.supabase.co']
  }
}

module.exports = nextConfig
