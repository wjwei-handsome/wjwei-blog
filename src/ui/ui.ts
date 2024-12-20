/**
 * This configures the translations for all ui text in your website.
 *
 * All languages will follow this ordering/structure and will fallback to the
 * default language for any entries that haven't been translated
 */

export default {
  "site.title": {
    text: "WenjieWei Blog",
  },
  "site.description": {
    text: "A minimalist blog theme built with Astro. A quick and easy starter build for anyone who wants to start their own blog.",
  },
  "profile.description": {
    text: "your bio description",
  },
  "blog.lastUpdated": {
    text: "Last updated:",
  },
  "sidebar.tableOfContents": {
    text: "Table of Contents",
  },
  "project.platform": {
    text: "PLATFORM",
  },
  "project.stack": {
    text: "STACK",
  },
  "project.website": {
    text: "WEBSITE",
  },
} as const satisfies UIEntries;

type UIEntries = Record<string, UIEntry>;

export type UIEntry = { text: string };
