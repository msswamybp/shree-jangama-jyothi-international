import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// ✅ Import translation JSON files correctly from /src/locales
import en from './locales/en/translation.json';
import hi from './locales/hi/translation.json';
import ja from './locales/ja/translation.json';
import it from './locales/it/translation.json';
import kn from './locales/kn/translation.json';
import ar from './locales/ar/translation.json';
import de from './locales/de/translation.json';
import el from './locales/el/translation.json';
import fr from './locales/fr/translation.json';
import id from './locales/id/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      ja: { translation: ja },
      it: { translation: it },
      kn: { translation: kn },
      ar: { translation: ar },
      de: { translation: de },
      el: { translation: el },
      fr: { translation: fr },
      id: { translation: id },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // react already handles XSS
    },
  });

export default i18n;
