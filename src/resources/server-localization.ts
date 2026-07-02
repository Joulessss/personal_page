import { cookies } from "next/headers";
import { DEFAULT_LOCALE, getLocalizedContent } from "./localization";
import { Locale, LocalizedContent } from "./content";
import { LOCALE_COOKIE_NAME, resolveLocale } from "./localization";

export async function getServerLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get(LOCALE_COOKIE_NAME)?.value;

  return resolveLocale(localeCookie ?? DEFAULT_LOCALE);
}

export async function getServerContent(): Promise<LocalizedContent> {
  const locale = await getServerLocale();
  return getLocalizedContent(locale);
}
