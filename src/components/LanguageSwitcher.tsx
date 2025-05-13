import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLanguage);
    // Set dir attribute on html element
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLanguage;
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center justify-center px-4 py-2 text-sm font-medium bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
      aria-label={`Switch to ${currentLanguage === 'ar' ? 'English' : 'Arabic'}`}
    >
      {currentLanguage === 'ar' ? 'English' : 'العربية'}
    </button>
  );
};

export default LanguageSwitcher;
