import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// english imports
import consentEnglish from "./english/consent.json";
import questionsEnglish from "./english/questions.json";

// persian imports
import consentPersian from "./persian/consent.json";
import questionsPersian from "./persian/questions.json";


const resources = {
  en: {
    consent: consentEnglish,
    questions: questionsEnglish
  },
  fa: {
    consent: consentPersian,
    questions: questionsPersian
  },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18next;
