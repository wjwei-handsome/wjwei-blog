import { DEFAULT_LANG, SUPPORTED_LANGUAGES } from "src/consts";
// import nav, { type NavEntry } from "@/i18n/nav";
// import ui, { type UIEntry } from "@/i18n/ui";

export type SupportedLanguage = keyof typeof SUPPORTED_LANGUAGES;

export function getSupportedLanguages(): string[] {
  return Object.keys(SUPPORTED_LANGUAGES);
}

export function isValidLanguageCode(lang: string): boolean {
  return Object.hasOwn(SUPPORTED_LANGUAGES, lang);
}

export function getLangFromUrl(url: URL) {
  // const [, lang] = url.pathname.split("/");
  // if (lang in SUPPORTED_LANGUAGES) {
  //   return lang as SupportedLanguage;
  // }
  return DEFAULT_LANG;
}

export function getLangFromSlug(slug: string) {
  // const [lang] = slug.split("/");
  // if (lang in SUPPORTED_LANGUAGES) {
  //   return lang as SupportedLanguage;
  // }
  return DEFAULT_LANG;
}

export function getLocalizedUrl(url: URL, locale: SupportedLanguage): string {
  const [, , ...slug] = url.pathname.split("/");
  if (isValidLanguageCode(locale)) {
    return `/${slug.join("/")}`;
  }
  return `/${slug.join("/")}`;
}

// export function useNav(key: keyof typeof nav) {
//   return nav[key] || nav[key];
// }

// export function useUITranslations(lang: keyof typeof nav) {
//   return function t(key: keyof typeof ui): UIEntry {
//     return ui[key] || ui[key];
//   };
// }
