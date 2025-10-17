import React from 'react';
import { useTranslation } from '../hooks/react-i18next';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  variant?: 'default' | 'compact' | 'icon-only';
  className?: string;
  showLabels?: boolean;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  variant = 'default',
  className = '',
  showLabels = true
}) => {
  const { i18n } = useTranslation();
  
  const currentLanguage = i18n.language;
  const isHindi = currentLanguage === 'hi';
  
  const toggleLanguage = () => {
    const newLanguage = isHindi ? 'en' : 'hi';
    i18n.changeLanguage(newLanguage);
  };
  
  if (variant === 'icon-only') {
    return (
      <button
        onClick={toggleLanguage}
        className={`inline-flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 ${className}`}
        aria-label={`Switch to ${isHindi ? 'English' : 'Hindi'}`}
        title={`Current: ${isHindi ? 'हिंदी' : 'English'}`}
      >
        <Globe className="w-5 h-5 text-gray-600" />
        <span className="ml-1 text-sm font-medium text-gray-600">
          {isHindi ? 'हि' : 'EN'}
        </span>
      </button>
    );
  }
  
  if (variant === 'compact') {
    return (
      <button
        onClick={toggleLanguage}
        className={`inline-flex items-center px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 ${className}`}
        aria-label={`Switch to ${isHindi ? 'English' : 'Hindi'}`}
      >
        <span className={`text-xs font-medium transition-colors duration-200 ${isHindi ? 'text-gray-500' : 'text-blue-600'}`}>
          EN
        </span>
        <div className="mx-2 w-8 h-4 bg-gray-300 rounded-full relative">
          <div 
            className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-transform duration-300 ${
              isHindi ? 'transform translate-x-4 bg-green-500' : 'transform translate-x-0.5'
            }`}
          />
        </div>
        <span className={`text-xs font-medium transition-colors duration-200 ${isHindi ? 'text-green-600' : 'text-gray-500'}`}>
          हि
        </span>
      </button>
    );
  }
  
  // Default variant - full toggle switch
  return (
    <div className={`inline-flex items-center ${className}`}>
      {showLabels && (
        <Globe className="w-4 h-4 text-gray-600 mr-2" />
      )}
      <button
        onClick={toggleLanguage}
        className="relative inline-flex items-center w-16 h-8 bg-gray-200 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:bg-gray-300"
        aria-label={`Switch to ${isHindi ? 'English' : 'Hindi'}`}
        role="switch"
        aria-checked={isHindi}
      >
        {/* Background track */}
        <div className={`absolute inset-0 rounded-full transition-colors duration-300 ${
          isHindi ? 'bg-green-500' : 'bg-blue-500'
        }`} />
        
        {/* Labels */}
        <span className={`absolute left-1.5 text-xs font-medium transition-colors duration-200 ${
          isHindi ? 'text-white/70' : 'text-white'
        }`}>
          EN
        </span>
        <span className={`absolute right-1.5 text-xs font-medium transition-colors duration-200 ${
          isHindi ? 'text-white' : 'text-white/70'
        }`}>
          हि
        </span>
        
        {/* Sliding indicator */}
        <div 
          className={`relative w-6 h-6 bg-white rounded-full shadow-lg transition-transform duration-300 ${
            isHindi ? 'transform translate-x-8' : 'transform translate-x-1'
          }`}
        />
      </button>
    </div>
  );
};