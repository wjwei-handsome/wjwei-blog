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
import { rehypeShiki } from "@astrojs/markdown-remark";
import rehypeMermaid from "rehype-mermaid";
import partytown from "@astrojs/partytown";

// import expressiveCode from "astro-expressive-code";
// import remarkMermaid from "remark-mermaidjs";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-theme-cody.netlify.app",
  integrations: [
    expressiveCode(),
    mdx({
      remarkPlugins: [
        // remarkMermaid,
        remarkMath,
        remarkReadingTime,
        ...starlightAsides(),
        remarkDirectivesRestoration,
      ],
      rehypePlugins: [rehypeKatex, rehypeMermaid, rehypeShiki],
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
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  // NOTE: Make sure this matches your supported languages in the file: src/consts.ts
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  output: "static",

  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [rehypeKatex, rehypeMermaid, rehypeShiki],
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
