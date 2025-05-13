import { VideoShort } from '../types';
import i18next from 'i18next';

// Function to get translated title based on current language
const getTranslatedTitle = (enTitle: string, arTitle: string) => {
  return i18next.language === 'ar' ? arTitle : enTitle;
};

export const viralShorts: VideoShort[] = [
  {
    id: 1,
    title: getTranslatedTitle('Gaming Reaction', 'رد فعل الألعاب'),
    views: '54M+',
    thumbnail: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 2,
    title: getTranslatedTitle('Dubai Vlog', 'فلوج دبي'),
    views: '51M+',
    thumbnail: 'https://images.pexels.com/photos/7239947/pexels-photo-7239947.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 3,
    title: getTranslatedTitle('Family Moments', 'لحظات عائلية'),
    views: '46M+',
    thumbnail: 'https://images.pexels.com/photos/7915457/pexels-photo-7915457.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 4,
    title: getTranslatedTitle('Interview', 'مقابلة'),
    views: '47M+',
    thumbnail: 'https://images.pexels.com/photos/7915509/pexels-photo-7915509.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 5,
    title: getTranslatedTitle('Gaming Setup', 'إعداد الألعاب'),
    views: '10M+',
    thumbnail: 'https://images.pexels.com/photos/7915255/pexels-photo-7915255.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 6,
    title: getTranslatedTitle('Night Dinner', 'عشاء ليلي'),
    views: '300k+',
    thumbnail: 'https://images.pexels.com/photos/7915435/pexels-photo-7915435.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 7,
    title: getTranslatedTitle('Stream Highlights', 'أبرز لحظات البث'),
    views: '7M+',
    thumbnail: 'https://images.pexels.com/photos/7915509/pexels-photo-7915509.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 8,
    title: getTranslatedTitle('Urban Shorts', 'فيديوهات قصيرة حضرية'),
    views: '10M+',
    thumbnail: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];