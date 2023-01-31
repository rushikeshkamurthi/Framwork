// import * as RNLocalize from 'react-native-localize' 

import i18next from 'i18next'; 
import { DEFAULT_LANGUAGE } from '../common/constants' 

// import { isDevelopment } from '../common/operations' ; 
const isDevelopment = () => { return true; }
const debug = false; 
let backendTranslations = {}; 
let getTranslations; 

export const fallbackLanguageCode = DEFAULT_LANGUAGE; 
const i18nTranslate = (key, options) => { 
    // eslint-disable-next-line import/no-named-as-default-member 
    if (isDevelopment() && !i18next.exists(key, options)) 
    {  return `${i18next.language}.${key} not found`
    }
     // eslint-disable-next-line import/no-named-as-default-member 
     return i18next.t(key, options); 
};

export const setI18nConfig = async lKey => { 
    if (lKey == i18next.language){
         return Promise.resolve();
         } 
     
         backendTranslations = await getTranslations(lKey) ; 
     // eslint-disable-next-line import/no-named-as-default-member
      await i18next.init({ 
        compatibilityJSON: 'v3',
         lng: lKey, 
         debug,
        resources: {
            [lkey]: {
             translation: backendTranslations 
            }
         } 
        });
     };
     
     export const setLocale = async locale => {
          await setI18nConfig(locale);
    }; 

    export const translations = () => backendTranslations; 

    export const getCurrentLocale = () => i18next.language;

    export const setTranslationService = servicePromise =>  
    getTranslations = servicePromise; 

    export default i18nTranslate;