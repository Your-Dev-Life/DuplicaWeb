import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enUS, ptBR } from './translations';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  'pt-BR': ptBR,
  'en-US': enUS,
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt-BR',
    fallbackLng: 'pt-BR',
    debug: true,
  }).then(() => {
    //TODO Set logger here
  });

export default i18n;
