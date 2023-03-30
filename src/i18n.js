import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import { languageCA } from './lang/ca/translate';
import { languageDE } from './lang/de/translate';
import { languageEN } from './lang/en/translate';
import { languageES } from './lang/es/translate';

const resources = {
    // ca: { translation: { "welcome": "Benvingut@", "title": "Català"}}, 
    // de: { translation: { "welcome": "Willkommen", "title": "Germany"}}, 
    // en: { translation: { "welcome": "Welcome", "title": "English"}}, 
    // es: { translation: { "welcome": "Bienvenid@", "title": "Español"}}

    ca: { translation: languageCA },
    de: { translation: languageDE },
    en: { translation: languageEN },
    es: { translation: languageES }
}

i18n.use(LanguageDetector).use(initReactI18next).init({
    resources, lgn: 'ca', fallbackLng: 'es', interpolation: { escapeValue: false }
});

export default i18n;