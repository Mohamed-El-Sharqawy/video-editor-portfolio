import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './rtl.css';
import './i18n';

// Set initial language direction
document.documentElement.dir = localStorage.getItem('i18nextLng') === 'ar' ? 'rtl' : 'ltr';
document.documentElement.lang = localStorage.getItem('i18nextLng') || 'en';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
