const pkg = require("./package")

module.exports = {
  mode: "spa",

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - Nuxt.js",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: "description", name: "description", content: "Meta description" }
    ],
    script: [{ src: "https://use.fontawesome.com/bcef0e49bd.js" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#13ea4e",
    failedColor: "#bf5050",
    duration: 100,
    height: "5px"
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: ["bootstrap-vue/nuxt", "@nuxtjs/axios", "@nuxtjs/auth"],
  bootstrapVue: {
    bootstrapCSS: false, // or `css`
    bootstrapVueCSS: false // or `bvCSS`
  },

  auth: {
    // Options
  },

  axios: {
    // proxyHeaders: false
    debug: true
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      const vueLoader = config.module.rules.find((rule) => rule.loader === "vue-loader")
      vueLoader.options.transformAssetUrls = {
        video: ["src", "poster"],
        source: "src",
        img: "src",
        image: "xlink:href",
        "b-img": "src",
        "b-img-lazy": ["src", "blank-src"],
        "b-card": "img-src",
        "b-card-img": "img-src",
        "b-card-img-lazy": ["src", "blank-src"],
        "b-carousel-slide": "img-src",
        "b-embed": "src"
      }

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
