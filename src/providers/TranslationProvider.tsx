/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/locale-data/en';
import '@formatjs/intl-relativetimeformat/locale-data/de';
import '@formatjs/intl-relativetimeformat/locale-data/es';
import '@formatjs/intl-relativetimeformat/locale-data/fr';
import '@formatjs/intl-relativetimeformat/locale-data/ja';
import '@formatjs/intl-relativetimeformat/locale-data/zh';

import { createContext, type PropsWithChildren, useContext, useState } from 'react';
import { IntlProvider } from 'react-intl';

import { I18N_CONFIG_KEY, I18N_DEFAULT_LANGUAGE } from '@/i18n';
import { type LanguageType, type TranslationProviderProps } from '@/i18n';
import { getData, setData } from '@/utils';

const calculateInitialLanguage = () => {
  const currentLanguage = getData(I18N_CONFIG_KEY) as LanguageType | undefined;

  return currentLanguage ?? I18N_DEFAULT_LANGUAGE;
};

const initialProps: TranslationProviderProps = {
  currentLanguage: calculateInitialLanguage(),
  changeLanguage: (_: LanguageType) => {}
};

const TranslationsContext = createContext<TranslationProviderProps>(initialProps);
const useLang = () => useContext(TranslationsContext);

const I18NProvider = ({ children }: PropsWithChildren) => {
  const { currentLanguage } = useLang();

  return (
    <IntlProvider
      messages={currentLanguage.messages}
      locale={currentLanguage.code}
      defaultLocale={calculateInitialLanguage().code}
    >
      {children}
    </IntlProvider>
  );
};

const TranslationProvider = ({ children }: PropsWithChildren) => {
  const [currentLanguage, setCurrentLanguage] = useState(initialProps.currentLanguage);

  const changeLanguage = (language: LanguageType) => {
    setData(I18N_CONFIG_KEY, language);
    setCurrentLanguage(language);
  };

  return (
    <TranslationsContext.Provider
      value={{
        currentLanguage,
        changeLanguage
      }}
    >
      <I18NProvider>{children}</I18NProvider>
    </TranslationsContext.Provider>
  );
};

export { TranslationProvider, useLang };
