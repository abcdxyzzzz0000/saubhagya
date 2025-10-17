// React-i18next compatible implementation
import enTranslation from './locales/en/translation.json';
import hiTranslation from './locales/hi/translation.json';

const translations = {
  en: enTranslation,
  hi: hiTranslation
};

class I18nInstance {
  constructor() {
    this.currentLanguage = this.getStoredLanguage() || this.detectBrowserLanguage() || 'en';
    this.listeners = [];
    this.updateHtmlLang();
  }

  getStoredLanguage() {
    try {
      return localStorage.getItem('i18nextLng');
    } catch (e) {
      return null;
    }
  }

  detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.languages[0];
    if (browserLang.startsWith('hi')) return 'hi';
    return 'en';
  }

  updateHtmlLang() {
    document.documentElement.setAttribute('lang', this.currentLanguage);
  }

  changeLanguage(lng) {
    if (lng !== this.currentLanguage && (lng === 'en' || lng === 'hi')) {
      this.currentLanguage = lng;
      try {
        localStorage.setItem('i18nextLng', lng);
      } catch (e) {
        console.warn('Could not save language preference to localStorage');
      }
      this.updateHtmlLang();
      this.notifyListeners();
    }
    return Promise.resolve();
  }

  t(key, options = {}) {
    const fallback = options.fallback || key;
    const keys = key.split('.');
    let value = translations[this.currentLanguage];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if key not found in current language
        value = translations.en;
        for (const k of keys) {
          if (value && typeof value === 'object' && k in value) {
            value = value[k];
          } else {
            return fallback;
          }
        }
        break;
      }
    }
    
    if (options.returnObjects && Array.isArray(value)) {
      return value;
    }
    
    return typeof value === 'string' ? value : (Array.isArray(value) ? value : fallback);
  }

  get language() {
    return this.currentLanguage;
  }

  onLanguageChanged(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  notifyListeners() {
    this.listeners.forEach(callback => callback(this.currentLanguage));
  }
}

const i18n = new I18nInstance();

export default i18n;