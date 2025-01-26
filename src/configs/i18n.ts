import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../translations/en.json';
import ar from '../translations/ar.json';
import fr from '../translations/fr.json';
import ko from '../translations/ko.json';

i18n
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, ar: { translation: ar }, fr: { translation: fr }, ko: { translation: ko } },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;