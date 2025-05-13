import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CreatorsSection from './components/CreatorsSection';
import WhatIServeSection from './components/WhatIServeSection';
import ViralShortsSection from './components/ViralShortsSection';
import ClientVideosSection from './components/ClientVideosSection';
import FooterSection from './components/FooterSection';

function App() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    // Set the title
    document.title = "Ahmed Ezz | Video Editor";
    // Set the direction attribute on the html element
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [isRTL, i18n.language]);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <CreatorsSection />
      <WhatIServeSection />
      <ViralShortsSection />
      <ClientVideosSection />
      <FooterSection />
    </div>
  );
}

export default App;