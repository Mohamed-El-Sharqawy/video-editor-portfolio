import React from 'react';
import { viralShorts } from '../data/viralShorts';
import { TrendingUp, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ViralShortsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  return (
    <section id="shorts" className="py-20 bg-gradient-to-b from-purple-300 to-purple-400" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <div className="container px-4 mx-auto">
        <div className="flex gap-4 justify-center items-center mb-4">
          <Rocket className="w-8 h-8 text-white" />
          <h2 className="text-4xl font-bold text-center text-white md:text-5xl">
            {t('shorts.title')}
          </h2>
          <TrendingUp className="w-8 h-8 text-white" />
        </div>
        
        <div className="flex justify-center mb-16">
          <div className="w-24 h-1 bg-white rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mb-16 md:grid-cols-4">
          {viralShorts.slice(0, 4).map((short) => (
            <div 
              key={short.id} 
              className="overflow-hidden relative rounded-xl shadow-lg group"
            >
              <img 
                src={short.thumbnail} 
                alt={short.title} 
                className="w-full aspect-[9/16] object-cover transform group-hover:scale-110 transition-all duration-500"
              />
              
              <div className="absolute right-0 bottom-0 left-0 p-4 bg-gradient-to-t to-transparent from-black/80">
                <span className="block text-xl font-bold text-green-400 md:text-2xl">
                  {short.views} {i18n.language == "ar" ? "مشاهدة" : "VIEWS"}
                </span>
              </div>
              
              <div className="flex absolute inset-0 justify-center items-center opacity-0 transition-all duration-300 bg-black/50 group-hover:opacity-100">
                <span className="px-4 py-2 font-medium text-white bg-purple-600 rounded-full transition-all duration-300 transform -translate-y-4 group-hover:translate-y-0">
                  {t('hero.viewPortfolio')}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {viralShorts.slice(4, 8).map((short) => (
            <div 
              key={short.id} 
              className="overflow-hidden relative rounded-xl shadow-lg group"
            >
              <img 
                src={short.thumbnail} 
                alt={short.title} 
                className="w-full aspect-[9/16] object-cover transform group-hover:scale-110 transition-all duration-500"
              />
              
              <div className="absolute right-0 bottom-0 left-0 p-4 bg-gradient-to-t to-transparent from-black/80">
                <span className="block text-xl font-bold text-green-400 md:text-2xl">
                  {short.views} {i18n.language == "ar" ? "مشاهدة" : "VIEWS"}
                </span>
              </div>
              
              <div className="flex absolute inset-0 justify-center items-center opacity-0 transition-all duration-300 bg-black/50 group-hover:opacity-100">
                <span className="px-4 py-2 font-medium text-white bg-purple-600 rounded-full transition-all duration-300 transform -translate-y-4 group-hover:translate-y-0">
                  {t('hero.viewPortfolio')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ViralShortsSection;