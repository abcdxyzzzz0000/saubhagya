import { useState, useEffect } from 'react';
import i18n from '../i18n';

export const useTranslation = () => {
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const unsubscribe = i18n.onLanguageChanged((lng: string) => {
      setLanguage(lng);
    });

    return unsubscribe;
  }, []);

  const t = (key: string, options?: any) => {
    return i18n.t(key, options);
  };

  return {
    t,
    i18n: {
      language,
      changeLanguage: (lng: 'en' | 'hi') => i18n.changeLanguage(lng)
    }
  };
};