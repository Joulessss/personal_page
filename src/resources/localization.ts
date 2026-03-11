import { localizedContent, Locale, LocalizedContent } from "./content";

export const LOCALE_COOKIE_NAME = "magic_portfolio_locale";
export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "es";
}

export function resolveLocale(value: string | null | undefined): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function getLocalizedContent(locale: Locale): LocalizedContent {
  return localizedContent[locale];
}
