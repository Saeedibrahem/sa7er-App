import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ar from "./ar/ar.json";
import en from "./en/en.json";

i18n
    .use(LanguageDetector) // detects user language from browser settings, localStorage, etc.
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: en
            },
            ar: {
                translation: ar
            }
        },
        
        // Language detection configuration
        fallbackLng: "ar",
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            lookupLocalStorage: 'i18nextLng',
            caches: ['localStorage'],
        },

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });
