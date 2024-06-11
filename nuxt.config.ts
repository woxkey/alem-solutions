// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *;',
        },
      },
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
});
