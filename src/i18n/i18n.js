import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import PT_BR from './translations/pt_BR';
import EN_US from './translations/en_US';

const resources = {
  pt_BR: PT_BR,
  en_US: EN_US
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt_BR',
    fallbackLng: ['pt_BR', 'en_US'],
    debug: false
  })
  .then(() => {
    // TODO Set logger here
  });

export default i18n;
