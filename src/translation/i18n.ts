import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// english imports
import consentEnglish from "./english/consent.json";
import questionsEnglish from "./english/questions/questions.json";
import closureQuestionsEnglish from "./english/questions/closure.json";
import demographyEnglish from "./english/demography.json";
import resultEnglish from "./english/result.json";

// persian imports
import consentPersian from "./persian/consent.json";
import questionsPersian from "./persian/questions/questions.json";
import closureQuestionsPersian from "./persian/questions/closure.json";
import demographyPersian from "./persian/demography.json";
import resultPersian from "./persian/result.json";

const resources = {
  en: {
    consent: consentEnglish,
    questions: {
      indecision: questionsEnglish,
      closure: closureQuestionsEnglish,
    },
    demography: demographyEnglish,
    result: resultEnglish,
  },
  fa: {
    consent: consentPersian,
    questions: {
      indecision: questionsPersian,
      closure: closureQuestionsPersian,
    },
    demography: demographyPersian,
    result: resultPersian,
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
