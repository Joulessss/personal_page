"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Locale, LocalizedContent } from "@/resources/content";
import {
  getLocalizedContent,
  LOCALE_COOKIE_NAME,
  resolveLocale,
} from "@/resources/localization";

type LanguageContextValue = {
  locale: Locale;
  content: LocalizedContent;
  setLocale: (nextLocale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

type LanguageProviderProps = {
  children: React.ReactNode;
  initialLocale: Locale;
};

export const LanguageProvider = ({ children, initialLocale }: LanguageProviderProps) => {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    const stored = window.localStorage.getItem(LOCALE_COOKIE_NAME);
    const cookieValue = document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith(`${LOCALE_COOKIE_NAME}=`))
      ?.split("=")[1];
    const nextLocale = resolveLocale(stored ?? cookieValue);

    if (nextLocale !== locale) {
      setLocaleState(nextLocale);
    }
  }, [locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;

    document.cookie = `${LOCALE_COOKIE_NAME}=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
    window.localStorage.setItem(LOCALE_COOKIE_NAME, nextLocale);
    setLocaleState(nextLocale);
    window.location.reload();
  };

  const value = useMemo(
    () => ({
      locale,
      content: getLocalizedContent(locale),
      setLocale,
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
};
