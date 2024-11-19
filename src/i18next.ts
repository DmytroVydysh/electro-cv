import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa i file di traduzione (esempio per italiano e inglese)
import translationEN from './locales/en/index.json';
import translationIT from './locales/it/index.json';
import translationUA from './locales/ua/index.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      it: {
        translation: translationIT,
      },
      ua: {
        translation: translationUA,
      }
    },
    lng: 'en', // Lingua di default
    fallbackLng: 'en', // Lingua di fallback se la traduzione non è disponibile
    interpolation: {
      escapeValue: false, // React già gestisce l'escaping
    },
  });

export default i18n;
