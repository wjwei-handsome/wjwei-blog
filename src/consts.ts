// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

import type nav from "@/ui/nav";
import ui from "@/ui/ui";
import type { SupportedLanguage } from "./utils/i18n";

type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  };
  settings: {
    paginationSize: number;
  };
};

type SocialLink = {
  icon: string;
  friendlyName: string; // for accessibility
  link: string;
};

export const SUPPORTED_LANGUAGES = {
  en: "en",
  zh: "zh",
};

export const DEFAULT_LANG = SUPPORTED_LANGUAGES.zh as SupportedLanguage;

export const siteConfig: Config = {
  title: ui["site.title"].text,
  description: ui["site.description"].text,
  lang: DEFAULT_LANG,
  profile: {
    author: "Wenjie Wei",
    description: ui["profile.description"].text,
  },
  settings: {
    paginationSize: 5,
  },
};

/**
  These are you social media links.
  It uses https://github.com/natemoo-re/astro-icon#readme
  You can find icons @ https://icones.js.org/
*/
export const SOCIAL_LINKS: Array<SocialLink> = [
  {
    icon: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/wjwei-handsome",
  },
  {
    icon: "mdi:email",
    friendlyName: "email",
    link: "mailto:weiwenjie@westlake.edu.cn",
  },
  {
    icon: "mdi:rss",
    friendlyName: "rss",
    link: "/rss.xml",
  },
  {
    icon: "mdi:wechat",
    friendlyName: "rss",
    link: "/rss.xml",
  },
];

// NOTE: match these entries with keys in `src/i18n/nav.ts`
export const NAV_LINKS: Array<keyof typeof nav> = [
  "about",
  "blog",
  "projects",
  "archive",
  "series",
  "tags",
];
