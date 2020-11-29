const localeSubpaths = {
  // enable site.com/fr/..
  en: 'en',
  es: 'es',
}

const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
    devSwSrc: './.next/service-worker.js',
  },

  // i18n: {
  //   locales: ['en', 'fr'],
  //   defaultLocale: 'en',
  // },

  publicRuntimeConfig: {
    localeSubpaths,
  },

  async redirects() {
    return []
  },

  webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config

    return config
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config

    // to allow for better refresh with docker
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }

    return config
  },
}

module.exports = nextConfig
