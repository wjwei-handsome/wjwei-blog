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
    text: "WenjieWei's personal blog",
  },
  "profile.description": {
    text: "Ph.D student in JianYang-Lab, Genomics & Genetics ",
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
