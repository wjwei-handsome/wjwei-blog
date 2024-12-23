import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";
import tailwind from "@astrojs/tailwind";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import {
  remarkDirectivesRestoration,
  starlightAsides,
} from "./src/utils/remark-admon";
import expressiveCode from "astro-expressive-code";
import remarkMermaid from "remark-mermaidjs";

// https://astro.build/config
export default defineConfig({
  // vite: {
  //   optimizeDeps: {
  //     include: ["asciinema-player"],
  //   },
  // },
  site: "https://astro-theme-cody.netlify.app",
  integrations: [
    expressiveCode(),
    mdx({
      remarkPlugins: [
        remarkMermaid,
        remarkMath,
        remarkReadingTime,
        ...starlightAsides(),
        remarkDirectivesRestoration,
      ],
      rehypePlugins: [rehypeKatex],
      syntaxHighlight: "shiki",
      shikiConfig: {
        // https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting
        themes: {
          dark: "catppuccin-mocha",
          light: "catppuccin-latte",
        },
      },
    }),
    sitemap(),
    tailwind(),
  ],
  // NOTE: Make sure this matches your supported languages in the file: src/consts.ts
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  output: "static",
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
        dark: "catppuccin-mocha",
        light: "catppuccin-latte",
      },
    },
  },
});
