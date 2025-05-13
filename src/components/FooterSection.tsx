import React from 'react';
import { Instagram, Youtube, Mail, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FooterSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  return (
    <footer id="contact" className="py-20 text-white bg-gradient-to-b from-purple-600 to-purple-800" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-8 text-4xl font-bold md:text-5xl">{t('footer.getInTouch')}</h2>
          <p className="text-2xl font-medium">{t('footer.followMe')}</p>
        </div>
        
        <div className="flex justify-center mb-16 space-x-8">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white transition-all duration-300 transform hover:text-purple-300 hover:scale-125"
          >
            <Instagram className="w-10 h-10" />
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white transition-all duration-300 transform hover:text-red-400 hover:scale-125"
          >
            <Youtube className="w-10 h-10" />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white transition-all duration-300 transform hover:text-blue-400 hover:scale-125"
          >
            <Twitter className="w-10 h-10" />
          </a>
        </div>
        
        <div className="mx-auto max-w-lg">
          <div className="px-4 py-8 text-center rounded-2xl backdrop-blur-md sm:px-8 bg-white/10">
            <h3 className="mb-6 text-2xl font-bold">{t('footer.getInTouch')}</h3>
            <p className="mb-8 text-lg">{t('footer.contactDesc')}</p>
            
            <a 
              href="mailto:contact@ahmedezz.com" 
              className="inline-flex items-center px-8 py-3 font-medium bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-300 transform hover:opacity-90 hover:scale-105"
            >
              <Mail className="mr-2 w-5 h-5" /> 
              contact@ahmedezz.com
            </a>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/70">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;