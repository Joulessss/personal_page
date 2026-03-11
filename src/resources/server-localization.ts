import { cookies } from "next/headers";
import { getLocalizedContent, LOCALE_COOKIE_NAME, resolveLocale } from "./localization";
import { Locale, LocalizedContent } from "./content";

export async function getServerLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(LOCALE_COOKIE_NAME)?.value;
  return resolveLocale(cookieLocale);
}

export async function getServerContent(): Promise<LocalizedContent> {
  const locale = await getServerLocale();
  return getLocalizedContent(locale);
}
