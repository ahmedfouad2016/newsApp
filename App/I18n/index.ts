import * as RNLocalize from 'react-native-localize';
import i18n, { TranslateOptions } from 'i18n-js';

import { memoize } from 'lodash';
import sp from './Language/sp.json';
import en from './Language/en.json';

const translationGetters: any = {
  en,
  sp,
};

const missingTranslationRegex = /^\[missing ".*" translation\]$/;

const translateOrFallback = (
  initialMsg: string,
  options: TranslateOptions,
): string => {
  if (typeof initialMsg !== 'string') {
    __DEV__ &&
      console.warn(
        `I18n: you must give a string to translate instead of "${typeof initialMsg}"`,
      );

    return '';
  }

  const localMsg = i18n.t(initialMsg, options);

  if (missingTranslationRegex.test(localMsg)) {
    __DEV__ &&
      console.log(
        `translation "${initialMsg}" does not exists in translations files`,
      );

    return initialMsg;
  }
  return localMsg;
};

const translate: any = memoize(
  (key: string, config: TranslateOptions) => translateOrFallback(key, config),
  (key: string, config: TranslateOptions) =>
    config ? key + JSON.stringify(config) : key,
);

const setI18nConfig = (lang: string | null = null) => {
  const fallback = { languageTag: 'en', isRTL: false };

  const { languageTag } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  translate.cache.clear();
  i18n.translations = {
    ...translationGetters,
  };
  i18n.locale = lang | languageTag;
};

const setLocal = (local: string) => {
  i18n.translations = { [local]: translationGetters[local] };
  i18n.locale = local;
};

const getLocal = () => i18n.locale;

export { setI18nConfig, setLocal, translate, getLocal };
