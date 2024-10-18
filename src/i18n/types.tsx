/* eslint-disable no-unused-vars */
import { type Direction } from '@mui/material';
import { type Localization } from '@mui/material/locale';
import { type MessageFormatElement } from 'react-intl';

export type LanguageCodeType = 'en' | 'fr' | 'ar' | 'zh';

export interface LanguageType {
  label: string;
  code: LanguageCodeType;
  systemValue: Localization;
  direction: Direction;
  flag: string;
  messages: Record<string, string> | Record<string, MessageFormatElement[]>;
}

export interface TranslationProviderProps {
  currentLanguage: LanguageType;
  changeLanguage: (lang: LanguageType) => void;
}
