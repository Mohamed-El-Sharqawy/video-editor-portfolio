import React from 'react';
import { ChevronDown, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  return (
    <section id="home" className="flex justify-center items-center pt-20 min-h-screen text-white bg-gradient-to-b from-black to-purple-900" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <div className="container px-4 py-16 mx-auto md:py-24">
        <div className="flex flex-col items-center md:flex-row">
          {/* Left side - Text content */}
          <div className={`md:w-1/2 space-y-8 ${isRTL ? 'md:pl-8' : 'md:pr-8'} mb-12 md:mb-0 md:text-${isRTL ? 'right' : 'left'}`}>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl animate-fadeIn">
              <span className="block mb-2">{t('hero.transforming')}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                {t('hero.ideasIntoViral')}
              </span>
            </h1>
            
            <p className="max-w-xl text-lg text-gray-300 md:text-xl animate-fadeInUp animation-delay-200">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-start animate-fadeInUp animation-delay-400">
              <a 
                href="#contact" 
                className="flex justify-center items-center px-8 py-3 font-medium bg-gradient-to-r from-purple-600 to-blue-500 rounded-full transition-all duration-300 transform hover:opacity-90 hover:scale-105"
              >
                <Mail className="mr-2 w-5 h-5" /> 
                {t('hero.workWithMe')}
              </a>
              
              <a 
                href="#videos" 
                className="flex justify-center items-center px-8 py-3 font-medium bg-transparent rounded-full border-2 border-purple-500 transition-all duration-300 transform hover:bg-purple-900/30 hover:scale-105"
              >
                {t('hero.viewPortfolio')}
              </a>
            </div>
          </div>
          
          {/* Right side - Image grid */}
          <div className={`md:w-1/2 grid grid-cols-2 gap-4 ${isRTL ? 'md:pr-8' : 'md:pl-8'} animate-float`}>
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg shadow-2xl transition-all duration-500 transform hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/2764678/pexels-photo-2764678.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt={t('hero.videoEditing')} 
                  className="object-cover w-full h-48 md:h-56"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-2xl transition-all duration-500 transform hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/7713456/pexels-photo-7713456.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt={t('hero.videoProduction')} 
                  className="object-cover w-full h-40 md:h-48"
                />
              </div>
            </div>
            <div className="mt-12">
              <div className="overflow-hidden rounded-lg shadow-2xl transition-all duration-500 transform hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/7092359/pexels-photo-7092359.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt={t('hero.contentCreation')} 
                  className="object-cover w-full h-80 md:h-96"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <a href="#creators" className="text-white/70 hover:text-white">
            <ChevronDown className="w-10 h-10" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;