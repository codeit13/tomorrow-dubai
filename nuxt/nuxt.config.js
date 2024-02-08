import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/google-fonts",
    "vue3-carousel-nuxt",
  ],
  devtools: { enabled: true },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  googleFonts: {
    families: {
      "Josefin+Sans": {
        wght: "400;700",
      },
      "Josefin+Slab": {
        wght: "300",
      },
      "Montserrat Subrayada": {
        wght: "400;700",
      },
    },
  },
  hooks: {
    "pages:extend"(pages) {
      pages.push({
        name: "Buy",
        path: "/buy",
        file: resolve(__dirname, "pages/index.vue"),
      });
    },
  },
});
