/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'tr';

interface Translations {
  [key: string]: {
    en: string;
    tr: string;
  };
}

const translations: Translations = {
  'nav.home': { en: 'Home', tr: 'Anasayfa' },
  'nav.about': { en: 'About', tr: 'Hakkımızda' },
  'nav.membership': { en: 'Membership', tr: 'Üyelik' },
  'nav.projects': { en: 'Projects', tr: 'Projeler' },
  'nav.policy': { en: 'Policy & Knowledge', tr: 'Politika ve Bilgi' },
  'nav.partners': { en: 'Partners', tr: 'Ortaklar' },
  'nav.news': { en: 'News', tr: 'Haberler' },
  'nav.events': { en: 'Events', tr: 'Etkinlikler' },
  'nav.contact': { en: 'Contact', tr: 'İletişim' },
  'nav.dashboard': { en: 'City Dashboard', tr: 'Şehir Paneli' },
  'hero.title': { en: 'Cities United for Disaster Resilience', tr: 'Afet Dirençliliği İçin Birleşen Şehirler' },
  'hero.subtitle': { en: 'A global network of cities building resilience, recovery, and future-ready urban systems.', tr: 'Dirençlilik, iyileşme ve geleceğe hazır kentsel sistemler inşa eden küresel bir şehir ağı.' },
  'cta.join': { en: 'Join the Network', tr: 'Ağa Katılın' },
  'cta.partner': { en: 'Partner With Us', tr: 'Ortak Olun' },
  'cta.apply': { en: 'Apply Now', tr: 'Hemen Başvurun' },
  'section.impact': { en: 'Our Impact', tr: 'Etkimiz' },
  'section.programs': { en: 'Programs & Themes', tr: 'Programlar ve Temalar' },
  'dashboard.building_safety': { en: 'Building Safety Tests', tr: 'Bina Güvenlik Testleri' },
  'dashboard.retrofitting': { en: 'Retrofitting Requests', tr: 'Güçlendirme Talepleri' },
  'dashboard.volunteers': { en: 'Volunteer Network', tr: 'Gönüllü Ağı' },
  'dashboard.training': { en: 'Citizen Training', tr: 'Vatandaş Eğitimi' },
  'dashboard.cost': { en: 'Estimated Cost', tr: 'Tahmini Maliyet' },
  'dashboard.neighborhood': { en: 'Neighborhood', tr: 'Mahalle' },
  'membership.benefit_training': { en: 'Citizen Training Infrastructure', tr: 'Vatandaş Eğitim Altyapısı' },
  'membership.benefit_volunteers': { en: 'Neighborhood Volunteer Network', tr: 'Mahalle Gönüllü Ağı' },
  'membership.benefit_safety': { en: 'Building Assessment Tools', tr: 'Bina Değerlendirme Araçları' },
  'footer.tagline': { en: 'Building resilient futures, together.', tr: 'Birlikte dirençli gelecekler inşa ediyoruz.' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
