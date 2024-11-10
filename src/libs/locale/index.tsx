import enMessages from "./en.json";
import idMessages from "./id.json";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const allMessage = {
  en: enMessages,
  id: idMessages
};

export const optionDetection = {
  lookupLocalStorage: "i18nextLng"
};

const resources = {
  en: { translation: enMessages },
  id: { translation: idMessages }
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "id",
  detection: optionDetection,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
