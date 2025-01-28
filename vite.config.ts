import { resolve } from "node:path";
import Vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import Icons from "unplugin-icons/vite";
import Markdown from "unplugin-vue-markdown/vite";
import { defineConfig } from "vite";
import VueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
  define: {
    "import.meta.env.VITE_BUILD_DATE": JSON.stringify(new Date().toISOString()),
  },
  plugins: [
    UnoCSS(),
    Markdown({
      markdownItOptions: {
        linkify: false,
      },
    }),
    Icons({
      compiler: "vue3",
      autoInstall: false,
    }),
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
      "changelog": resolve(__dirname, "./CHANGELOG.md"),
      "package": resolve(__dirname, "./package.json"),
    },
  },
  optimizeDeps: {
    include: [
      "@vueuse/core",
      "naive-ui",
      "pinia",
      "vue",
      "vue-i18n",
      "vue-router",
      "zod",
    ],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          a: ["vue"],
          b: ["vue-i18n", "vue-router", "pinia"],
          c: ["naive-ui"],
          d: ["@vueuse/core", "zod"],
        },
      },
    },
  },
});
