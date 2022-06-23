import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import es from "./es"
import en from "./en"
import pt from "./pt"

i18n.use(LanguageDetector).init({
  resources: {
    es: es,
    en: en,
    pt: pt,
  },
  fallbackLng: "es",
  debug: true,
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: false, // we use content as keys
  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },
  react: {
    wait: true
  }
});

export default i18n;
