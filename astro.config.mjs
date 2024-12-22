import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";
// import vercel from '@astrojs/vercel/static';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-theme-cody.netlify.app",
  integrations: [mdx(), sitemap(), tailwind()],
  // NOTE: Make sure this matches your supported languages in the file: src/consts.ts
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  // output: "static",
  // adapter: vercel(
  //   {
  //     webAnalytics: {
  //       enabled: true,
  //     },
  //   }
  // ),
  markdown: {
    remarkPlugins: [remarkReadingTime],
    syntaxHighlight: "shiki",
    shikiConfig: {
      // https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting
      themes: {
        light: "catppuccin-mocha",
        dark: "catppuccin-latte",
      },
    },
  },
});
