import React from 'react';
import { clientVideos } from '../data/clientVideos';
import { Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ClientVideosSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-blue-100 to-blue-200" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-red-500 mb-16">
          {t('clientVideos.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500">
            <img 
              src="https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Featured video thumbnail" 
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <div className="rounded-full bg-red-600 p-4 transform hover:scale-110 transition-transform">
                <Play className="h-8 w-8 text-white" fill="white" />
              </div>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500">
            <img 
              src="https://images.pexels.com/photos/7915433/pexels-photo-7915433.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Featured video thumbnail" 
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <div className="rounded-full bg-red-600 p-4 transform hover:scale-110 transition-transform">
                <Play className="h-8 w-8 text-white" fill="white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {clientVideos.slice(2).map((video) => (
            <div 
              key={video.id} 
              className="rounded-xl overflow-hidden shadow-lg group relative"
            >
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full aspect-video object-cover transform group-hover:scale-110 transition-all duration-500"
              />
              
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                <div className="rounded-full bg-red-600 p-3 transform scale-75 group-hover:scale-100 transition-all duration-300">
                  <Play className="h-6 w-6 text-white" fill="white" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-gray-600">©2025 by Ahmed Ezz</p>
        </div>
      </div>
    </section>
  );
};

export default ClientVideosSection;