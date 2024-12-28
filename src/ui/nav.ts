/**
 * This configures the navigation bar and footer. Each entry is a nav link with
 * the correct translation and url path.
 *
 * All languages will follow this ordering/structure and will fallback to the
 * default language for any entries that haven't been translated
 */

export default {
  about: {
    text: "About",
    slug: "about",
  },
  blog: {
    text: "Blog",
    slug: "blog",
    route: "/blog/pages/1",
  },
  projects: {
    text: "Projects",
    slug: "projects",
    route: "/projects/pages/1",
  },
  archive: {
    text: "Archive",
    slug: "archive",
  },
  tags: {
    text: "Tags",
    slug: "tags",
  },
  series: {
    text: "Series",
    slug: "series",
  },
  // wec: {
  //   text: "WEC",
  //   slug: "wec",
  // },
} as const satisfies NavEntries;

type NavEntries = Record<string, NavEntry>;

export type NavEntry = {
  /*
        Provided translation
    */
  text: string;

  /*
        Content collection slug or url path for this page without the language code
    */
  slug: string;

  route?: string;
};
