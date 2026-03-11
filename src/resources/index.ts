// import a pre-defined template for config and content options
export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
  ui,
  localizedContent,
} from "./content";

export {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  getLocalizedContent,
  resolveLocale,
  isLocale,
} from "./localization";

export {
  display,
  mailchimp,
  routes,
  protectedRoutes,
  baseURL,
  fonts,
  style,
  schema,
  sameAs,
  socialSharing,
  effects,
  dataStyle,
} from "./once-ui.config";
