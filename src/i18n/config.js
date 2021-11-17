import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "English",
  resources: {
    English: {
      translations: require("./locales/en.json"),
    },
    Deutsch: {
      translations: require("./locales/de.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["English", "Deutsch"];

export default i18n;
