import i18nTranslate, { getCurrentLocale, setI18nConfig, setLocale, fallbackLanguageCode,
     translations, setTranslationService } from './i18n'; 
     /**,
      *  Translates a language key into a string for the current landuage. *
      * 
      * @param {string} languageKey - The language key to translate. 
      * @param {object} arg2 - Argument to be passed to the language library. 
      * @returns {string} Translated string from language key. */ 
     export const translate = (languageKey, arg2) => {
         if (languageKey === undefined) 
         {  return undefined; 
        } 
        if (languageKey === '') { 
             return '';
             } 
             let ret; 
             try { 
                 ret = i18nTranslate(languageKey, arg2); 
                } catch (ex) {
                    throw new Error(`I18n exception, You passed in languageKey=${JSON.parse(languageKey, undefined, 2)}`); 
                } 
                return ret;
             }
              export { getCurrentLocale, setI18nConfig, setLocale,fallbackLanguageCode, translations, setTranslationService }