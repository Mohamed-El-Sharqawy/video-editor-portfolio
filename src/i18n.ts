import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const enTranslations = {
  navbar: {
    home: 'Home',
    creators: 'Creators',
    services: 'Services',
    viralShorts: 'Viral Shorts',
    clientVideos: 'Client Videos',
    contact: 'Contact'
  },
  hero: {
    transforming: 'Transforming',
    ideasIntoViral: 'Ideas into Viral Content',
    description: 'I help creators and brands tell their stories through powerful, engaging, and shareable video content that connects with audiences.',
    workWithMe: 'Work with me',
    viewPortfolio: 'View Portfolio',
    videoEditing: 'Video editing sample',
    videoProduction: 'Video production',
    contentCreation: 'Content creation'
  },
  creators: {
    title: 'Creators I Work With',
    subtitle: 'Partnering with top content creators to produce engaging videos that resonate with their audience.',
    subscribers: 'subscribers'
  },
  services: {
    title: 'What I Serve',
    subtitle: 'Professional video editing services tailored to your needs',
    editorIntro: 'I am a video editor with over 5 years of experience. I don\'t just edit — I build stories.',
    editorDesc: 'From concept to final cut, I write, direct, shoot, and manage every detail to bring your vision to life. Let\'s create content that connects, inspires, and goes viral.',
    contentEditing: 'Content Editing',
    contentEditingDesc: 'Transform raw footage into engaging content that keeps viewers watching.',
    viralShorts: 'Viral Shorts',
    viralShortsDesc: 'Create attention-grabbing short-form videos optimized for social media algorithms.',
    motionGraphics: 'Motion Graphics',
    motionGraphicsDesc: 'Enhance your videos with custom animations and visual effects.',
    colorGrading: 'Color Grading',
    colorGradingDesc: 'Professional color correction to give your videos a cinematic look.',
    learnMore: 'Learn More'
  },
  shorts: {
    title: 'Viral Shorts',
    subtitle: 'Short-form videos that capture attention and drive engagement',
    views: 'views'
  },
  clientVideos: {
    title: 'Client Videos',
    subtitle: 'A selection of my best work for clients across different niches'
  },
  footer: {
    getInTouch: 'Get in Touch',
    contactDesc: 'Ready to take your content to the next level? Let\'s work together!',
    name: 'Your Name',
    email: 'Your Email',
    message: 'Your Message',
    send: 'Send Message',
    copyright: '© 2025 Ahmed Ezz. All rights reserved.',
    followMe: 'Follow Me',
    services: 'Services',
    contentEditing: 'Content Editing',
    viralShorts: 'Viral Shorts',
    motionGraphics: 'Motion Graphics',
    colorGrading: 'Color Grading'
  }
};

// Arabic translations
const arTranslations = {
  navbar: {
    home: 'الرئيسية',
    creators: 'المنشئون',
    services: 'الخدمات',
    viralShorts: 'فيديوهات قصيرة مشهورة',
    clientVideos: 'فيديوهات العملاء',
    contact: 'تواصل معنا'
  },
  hero: {
    transforming: 'تحويل',
    ideasIntoViral: 'الأفكار إلى محتوى فيروسي',
    description: 'أساعد المنشئين والعلامات التجارية على سرد قصصهم من خلال محتوى فيديو قوي وجذاب وقابل للمشاركة يتواصل مع الجماهير.',
    workWithMe: 'اعمل معي',
    viewPortfolio: 'عرض الأعمال',
    videoEditing: 'نموذج تحرير فيديو',
    videoProduction: 'إنتاج فيديو',
    contentCreation: 'إنشاء المحتوى'
  },
  creators: {
    title: 'المنشئون الذين أعمل معهم',
    subtitle: 'الشراكة مع أفضل منشئي المحتوى لإنتاج مقاطع فيديو جذابة تتناغم مع جمهورهم.',
    subscribers: 'مشترك'
  },
  services: {
    title: 'ما أقدمه',
    subtitle: 'خدمات احترافية لتحرير الفيديو مصممة خصيصًا لتلبية احتياجاتك',
    editorIntro: 'أنا محرر فيديو بخبرة تزيد عن 5 سنوات. أنا لا أقوم بالتحرير فقط - أنا أبني قصصًا.',
    editorDesc: 'من المفهوم إلى القطع النهائي، أكتب وأوجه وأصور وأدير كل التفاصيل لإحياء رؤيتك. دعنا ننشئ محتوى يتواصل ويلهم وينتشر.',
    contentEditing: 'تحرير المحتوى',
    contentEditingDesc: 'تحويل اللقطات الخام إلى محتوى جذاب يجعل المشاهدين يستمرون في المشاهدة.',
    viralShorts: 'فيديوهات قصيرة مشهورة',
    viralShortsDesc: 'إنشاء مقاطع فيديو قصيرة تجذب الانتباه وتم تحسينها لخوارزميات وسائل التواصل الاجتماعي.',
    motionGraphics: 'رسوم متحركة',
    motionGraphicsDesc: 'تعزيز مقاطع الفيديو الخاصة بك بالرسوم المتحركة المخصصة والمؤثرات البصرية.',
    colorGrading: 'تصحيح الألوان',
    colorGradingDesc: 'تصحيح الألوان الاحترافي لإعطاء مقاطع الفيديو الخاصة بك مظهرًا سينمائيًا.',
    learnMore: 'اعرف المزيد'
  },
  shorts: {
    title: 'فيديوهات قصيرة مشهورة',
    subtitle: 'مقاطع فيديو قصيرة تجذب الانتباه وتزيد التفاعل',
    views: 'مشاهدة'
  },
  clientVideos: {
    title: 'فيديوهات العملاء',
    subtitle: 'مجموعة مختارة من أفضل أعمالي للعملاء عبر مختلف المجالات'
  },
  footer: {
    getInTouch: 'تواصل معنا',
    contactDesc: 'هل أنت مستعد للارتقاء بمحتواك إلى المستوى التالي؟ دعنا نعمل معًا!',
    name: 'اسمك',
    email: 'بريدك الإلكتروني',
    message: 'رسالتك',
    send: 'إرسال الرسالة',
    copyright: '© 2025 أحمد عز. جميع الحقوق محفوظة.',
    followMe: 'تابعني',
    services: 'الخدمات',
    contentEditing: 'تحرير المحتوى',
    viralShorts: 'فيديوهات قصيرة مشهورة',
    motionGraphics: 'رسوم متحركة',
    colorGrading: 'تصحيح الألوان'
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      ar: {
        translation: arTranslations
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
