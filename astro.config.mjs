// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio.lorena-chevallot.fr",

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: "esbuild",
    },
  },

  adapter: node({
    mode: "standalone",
  }),

  output: "server",

  compressHTML: true,

  image: {
    domains: ["portfolio.lorena-chevallot.fr"],
    remotePatterns: [{ protocol: "https" }],
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
