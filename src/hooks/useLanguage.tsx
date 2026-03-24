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
  'nav.membership': { en: 'Why Join D40', tr: 'Neden D40?' },
  'nav.projects': { en: 'Strategic Projects', tr: 'Stratejik Projeler' },
  'nav.policy': { en: 'Knowledge Hub', tr: 'Bilgi Merkezi' },
  'nav.partners': { en: 'Partners', tr: 'Ortaklar' },
  'nav.news': { en: 'Insights', tr: 'Görüşler' },
  'nav.events': { en: 'Events', tr: 'Etkinlikler' },
  'nav.contact': { en: 'Contact', tr: 'İletişim' },
  'nav.dashboard': { en: 'City Dashboard', tr: 'Şehir Paneli' },
  
  'hero.title': { en: 'Lead Your City into a Resilient Future', tr: 'Şehrinizi Dirençli Bir Geleceğe Taşıyın' },
  'hero.subtitle': { en: 'D40 connects cities to funding, expertise, and real solutions for disaster resilience.', tr: 'D40, şehirleri afet dirençliliği için finansman, uzmanlık ve gerçek çözümlerle buluşturur.' },
  
  'cta.join': { en: 'Join as a Member City', tr: 'Üye Şehir Olarak Katılın' },
  'cta.pilot': { en: 'Become a Pilot City', tr: 'Pilot Şehir Olun' },
  'cta.partner': { en: 'Partner With Us', tr: 'Ortak Olun' },
  'cta.apply': { en: 'Apply Now', tr: 'Hemen Başvurun' },
  'cta.explore': { en: 'Explore Strategic Benefits', tr: 'Stratejik Kazanımları Keşfedin' },
  
  'section.pain_title': { en: 'Cities that are not prepared will pay the highest price', tr: 'Hazırlıklı olmayan şehirler en ağır bedeli ödeyecek' },
  'section.pain_subtitle': { en: 'In lives, infrastructure, and public trust. Disasters are not isolated events; they are strategic risks.', tr: 'Can kaybı, altyapı hasarı ve kamu güveni kaybı. Afetler münferit olaylar değil, stratejik risklerdir.' },
  'section.pain_warning': { en: 'Strategic Risk Warning', tr: 'Stratejik Risk Uyarısı' },
  
  'section.system_title': { en: 'D40 Resilience System™', tr: 'D40 Dirençlilik Sistemi™' },
  'section.system_subtitle': { en: 'We implement a structured, 4-pillar system to secure your city\'s future.', tr: 'Şehrinizin geleceğini güvence altına almak için 4 sütunlu, yapılandırılmış bir sistem uyguluyoruz.' },
  
  'pillar.risk.title': { en: 'Risk Assessment & City Mapping', tr: 'Risk Değerlendirme ve Şehir Haritalama' },
  'pillar.risk.desc': { en: 'We identify vulnerabilities before they become catastrophes.', tr: 'Kırılganlıkları felakete dönüşmeden önce tespit ediyoruz.' },
  'pillar.infra.title': { en: 'Infrastructure Strengthening', tr: 'Altyapı Güçlendirme' },
  'pillar.infra.desc': { en: 'We deliver technical pathways for resilient urban systems.', tr: 'Dirençli kentsel sistemler için teknik yollar sunuyoruz.' },
  'pillar.prep.title': { en: 'Preparedness & Response', tr: 'Hazırlık ve Müdahale' },
  'pillar.prep.desc': { en: 'We implement AFAD-aligned systems for rapid municipal action.', tr: 'Hızlı belediye aksiyonu için AFAD uyumlu sistemler kuruyoruz.' },
  'pillar.comm.title': { en: 'Community Engagement', tr: 'Toplumsal Katılım' },
  'pillar.comm.desc': { en: 'We train your citizens to be the first line of defense.', tr: 'Vatandaşlarınızı ilk savunma hattı olmaları için eğitiyoruz.' },
  
  'section.gains_title': { en: 'What Your City Gains', tr: 'Şehrinizin Kazanımları' },
  'gain.funding.title': { en: 'Access to International Funding', tr: 'Uluslararası Fonlara Erişim' },
  'gain.funding.desc': { en: 'We connect your municipality to EU and global project pipelines.', tr: 'Belediyenizi AB ve küresel proje havuzlarına bağlıyoruz.' },
  'gain.projects.title': { en: 'Ready-to-Join Projects', tr: 'Katılmaya Hazır Projeler' },
  'gain.projects.desc': { en: 'Skip the proposal phase with our established consortiums.', tr: 'Kurulu konsorsiyumlarımızla teklif aşamasını atlayın.' },
  'gain.training.title': { en: 'Municipal Team Training', tr: 'Belediye Ekibi Eğitimi' },
  'gain.training.desc': { en: 'We build the institutional capacity of your technical staff.', tr: 'Teknik personelinizin kurumsal kapasitesini geliştiriyoruz.' },
  'gain.visibility.title': { en: 'Global Visibility', tr: 'Küresel Görünürlük' },
  'gain.visibility.desc': { en: 'We position your city as a leader in international resilience forums.', tr: 'Şehrinizi uluslararası dirençlilik forumlarında lider olarak konumlandırıyoruz.' },
  
  'membership.roi_title': { en: 'Return on Membership', tr: 'Üyelik Getirisi' },
  'membership.roi_text': { en: 'Membership is not a cost. It is an investment that returns through funding, capacity, and risk reduction.', tr: 'Üyelik bir maliyet değil; finansman, kapasite ve risk azaltma yoluyla geri dönen bir yatırımdır.' },
  
  'dashboard.building_safety': { en: 'Building Safety Tests', tr: 'Bina Güvenlik Testleri' },
  'dashboard.retrofitting': { en: 'Retrofitting Requests', tr: 'Güçlendirme Talepleri' },
  'dashboard.volunteers': { en: 'Volunteer Network', tr: 'Gönüllü Ağı' },
  'dashboard.training': { en: 'Citizen Training', tr: 'Vatandaş Eğitimi' },
  'dashboard.cost': { en: 'Estimated Cost', tr: 'Tahmini Maliyet' },
  'dashboard.neighborhood': { en: 'Neighborhood', tr: 'Mahalle' },
  'dashboard.overview': { en: 'Overview', tr: 'Genel Bakış' },
  'dashboard.logout': { en: 'Logout', tr: 'Çıkış Yap' },
  'dashboard.live_requests': { en: 'Live Requests', tr: 'Canlı Talepler' },
  'dashboard.cost_analysis': { en: 'Cost Analysis', tr: 'Maliyet Analizi' },
  'dashboard.search_neighborhood': { en: 'Search Neighborhood', tr: 'Mahalle Ara' },
  'dashboard.training_desc': { en: 'Promote these certified training platforms to your citizens to build a resilient community.', tr: 'Dirençli bir topluluk oluşturmak için bu sertifikalı eğitim platformlarını vatandaşlarınıza tanıtın.' },
  
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
