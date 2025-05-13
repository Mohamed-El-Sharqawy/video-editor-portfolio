import { ClientVideo } from '../types';
import i18next from 'i18next';

// Function to get translated title based on current language
const getTranslatedTitle = (enTitle: string, arTitle: string) => {
  return i18next.language === 'ar' ? arTitle : enTitle;
};

export const clientVideos: ClientVideo[] = [
  {
    id: 1,
    title: getTranslatedTitle('Gaming Reaction Compilation', 'تجميعة ردود أفعال الألعاب'),
    thumbnail: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: 2,
    title: getTranslatedTitle('Studio Tour', 'جولة في الاستوديو'),
    thumbnail: 'https://images.pexels.com/photos/7915433/pexels-photo-7915433.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: 3,
    title: getTranslatedTitle('Fortnite Highlights', 'أبرز لحظات فورتنايت'),
    thumbnail: 'https://images.pexels.com/photos/7915429/pexels-photo-7915429.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: 4,
    title: getTranslatedTitle('Vlog Sequence', 'تسلسل الفلوج'),
    thumbnail: 'https://images.pexels.com/photos/7915440/pexels-photo-7915440.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: 5,
    title: getTranslatedTitle('Crime Scene Investigation', 'تحقيق مسرح الجريمة'),
    thumbnail: 'https://images.pexels.com/photos/7915533/pexels-photo-7915533.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: 6,
    title: getTranslatedTitle('Reaction Video', 'فيديو رد فعل'),
    thumbnail: 'https://images.pexels.com/photos/7915526/pexels-photo-7915526.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: 7,
    title: getTranslatedTitle('Extreme Sports', 'الرياضات المتطرفة'),
    thumbnail: 'https://images.pexels.com/photos/7915498/pexels-photo-7915498.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: 8,
    title: getTranslatedTitle('Subscriber Milestone', 'إنجاز المشتركين'),
    thumbnail: 'https://images.pexels.com/photos/7915505/pexels-photo-7915505.jpeg?auto=compress&cs=tinysrgb&w=500'
  }
];