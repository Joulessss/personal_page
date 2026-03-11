import { DEFAULT_LOCALE, getLocalizedContent } from "./localization";
import { Locale, LocalizedContent } from "./content";

export async function getServerLocale(): Promise<Locale> {
  return DEFAULT_LOCALE;
}

export async function getServerContent(): Promise<LocalizedContent> {
  const locale = await getServerLocale();
  return getLocalizedContent(locale);
}
