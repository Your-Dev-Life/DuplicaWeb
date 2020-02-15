import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import pt_BR from './translations/pt_BR';
import en_US from './translations/en_US';

const resources = {
  pt_BR,
  en_US,
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt_BR',
    fallbackLng: ['pt_BR', 'en_US'],
    debug: false,
  })
  .then(() => {
    // TODO Set logger here
  });

export default i18n;
