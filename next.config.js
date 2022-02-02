/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  },
  experimental: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/hiragana',
        permanent: true,
      },
    ]
  },
}
