import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { languageConfig } from "./words";

i18n
  .use(initReactI18next)
  .init({
    lng: "es",
    fallbackLng: "es",
    resources: {
      es: {
        translation: languageConfig.es,
      },
      en: {
        translation: languageConfig.en,
      },
    },
  });


