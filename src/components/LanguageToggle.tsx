"use client";

import { ToggleButton } from "@once-ui-system/core";
import { useLanguage } from "./LanguageProvider";

export const LanguageToggle = () => {
  const { locale, setLocale, content } = useLanguage();

  const nextLocale = locale === "en" ? "es" : "en";
  const label = locale === "en" ? content.ui.language.spanish : content.ui.language.english;

  return (
    <ToggleButton
      onClick={() => setLocale(nextLocale)}
      label={label}
      aria-label={`${content.ui.language.label}: ${label}`}
    />
  );
};
