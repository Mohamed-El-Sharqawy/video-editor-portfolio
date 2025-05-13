import React from 'react';
import { Video, Wand2, Clapperboard, Trophy } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhatIServeSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-purple-400 to-purple-300 sm:py-20 md:py-24" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <div className="container px-4 mx-auto">
        <h2 className="mb-10 text-3xl font-bold text-center text-white sm:mb-16 md:mb-20 sm:text-4xl md:text-5xl">
          {t('services.title')}
        </h2>
        
        <div className="flex flex-col gap-10 items-center sm:gap-12 md:gap-16 lg:gap-20 lg:flex-row">
          <div className={`w-full lg:w-1/2 space-y-6 sm:space-y-8 text-${isRTL ? 'right' : 'left'}`}>
            <p className={`text-xl sm:text-2xl md:text-3xl font-medium text-white text-center lg:text-${isRTL ? 'right' : 'left'}`}>
              {t('services.editorIntro')}
            </p>
            
            <p className={`text-base sm:text-lg md:text-xl text-white/90 text-center lg:text-${isRTL ? 'right' : 'left'}`}>
              {t('services.editorDesc')}
            </p>
            
            <div className="grid grid-cols-1 gap-5 text-center sm:grid-cols-2 sm:gap-7">
              <div className="p-5 rounded-xl backdrop-blur-md transition-all duration-300 sm:p-7 bg-white/10 hover:bg-white/20 hover:shadow-lg hover:-translate-y-1">
                <Wand2 className="mx-auto mb-4 w-9 h-9 text-blue-500 sm:mb-5 sm:w-12 sm:h-12" />
                <h3 className="mb-2 text-lg font-bold text-white sm:mb-3 sm:text-xl md:text-2xl">{t('services.contentEditing')}</h3>
                <p className="text-sm sm:text-base text-white/80">{t('services.contentEditingDesc')}</p>
              </div>
              
              <div className="p-5 rounded-xl backdrop-blur-md transition-all duration-300 sm:p-7 bg-white/10 hover:bg-white/20 hover:shadow-lg hover:-translate-y-1">
                <Clapperboard className="mx-auto mb-4 w-9 h-9 text-blue-500 sm:mb-5 sm:w-12 sm:h-12" />
                <h3 className="mb-2 text-lg font-bold text-white sm:mb-3 sm:text-xl md:text-2xl">{t('services.viralShorts')}</h3>
                <p className="text-sm sm:text-base text-white/80">{t('services.viralShortsDesc')}</p>
              </div>
              
              <div className="p-5 rounded-xl backdrop-blur-md transition-all duration-300 sm:p-7 bg-white/10 hover:bg-white/20 hover:shadow-lg hover:-translate-y-1">
                <Video className="mx-auto mb-4 w-9 h-9 text-blue-500 sm:mb-5 sm:w-12 sm:h-12" />
                <h3 className="mb-2 text-lg font-bold text-white sm:mb-3 sm:text-xl md:text-2xl">{t('services.motionGraphics')}</h3>
                <p className="text-sm sm:text-base text-white/80">{t('services.motionGraphicsDesc')}</p>
              </div>
              
              <div className="p-5 rounded-xl backdrop-blur-md transition-all duration-300 sm:p-7 bg-white/10 hover:bg-white/20 hover:shadow-lg hover:-translate-y-1">
                <Trophy className="mx-auto mb-4 w-9 h-9 text-blue-500 sm:mb-5 sm:w-12 sm:h-12" />
                <h3 className="mb-2 text-lg font-bold text-white sm:mb-3 sm:text-xl md:text-2xl">{t('services.colorGrading')}</h3>
                <p className="text-sm sm:text-base text-white/80">{t('services.colorGradingDesc')}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 w-full lg:mt-0 lg:w-1/2 flex items-center justify-center">
            <div className="overflow-hidden mx-auto w-full rounded-xl shadow-2xl transition-all duration-500 transform hover:scale-105 lg:max-w-none">
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="Ahmed Ezz Video Editor Showcase" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIServeSection;