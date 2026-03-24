import { Project, City, NewsItem, EventItem } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: { en: 'Post-Earthquake Urban Recovery', tr: 'Deprem Sonrası Kentsel İyileşme' },
    description: { en: 'Comprehensive reconstruction strategy for resilient housing.', tr: 'Dirençli konutlar için kapsamlı yeniden inşa stratejisi.' },
    status: 'ongoing',
    theme: 'recovery',
    country: 'Turkey',
    fundingSource: 'EU Horizon Europe',
    image: 'https://picsum.photos/seed/recovery/800/600',
  },
  {
    id: '2',
    title: { en: 'Coastal Flood Adaptation', tr: 'Kıyı Taşkın Uyumu' },
    description: { en: 'Implementing nature-based solutions for sea-level rise.', tr: 'Deniz seviyesi yükselmesi için doğa tabanlı çözümlerin uygulanması.' },
    status: 'completed',
    theme: 'resilience',
    country: 'Netherlands',
    fundingSource: 'World Bank',
    image: 'https://picsum.photos/seed/flood/800/600',
  },
  {
    id: '3',
    title: { en: 'Smart Early Warning Systems', tr: 'Akıllı Erken Uyarı Sistemleri' },
    description: { en: 'AI-driven disaster preparedness for metropolitan areas.', tr: 'Metropol alanlar için yapay zeka destekli afet hazırlığı.' },
    status: 'flagship',
    theme: 'preparedness',
    country: 'Japan',
    fundingSource: 'D40 Innovation Fund',
    image: 'https://picsum.photos/seed/smart/800/600',
  },
];

export const cities: City[] = [
  { id: '1', name: 'Istanbul', coordinates: [28.9784, 41.0082], type: 'full' },
  { id: '2', name: 'Tokyo', coordinates: [139.6917, 35.6895], type: 'full' },
  { id: '3', name: 'Amsterdam', coordinates: [4.8952, 52.3702], type: 'full' },
  { id: '4', name: 'New York', coordinates: [-74.0060, 40.7128], type: 'full' },
  { id: '5', name: 'London', coordinates: [-0.1276, 51.5074], type: 'full' },
  { id: '6', name: 'Paris', coordinates: [2.3522, 48.8566], type: 'full' },
  { id: '7', name: 'Berlin', coordinates: [13.4050, 52.5200], type: 'full' },
  { id: '8', name: 'Rome', coordinates: [12.4964, 41.9028], type: 'full' },
  { id: '9', name: 'Madrid', coordinates: [-3.7038, 40.4168], type: 'full' },
  { id: '10', name: 'Athens', coordinates: [23.7275, 37.9838], type: 'full' },
];

export const news: NewsItem[] = [
  {
    id: '1',
    title: { en: 'D40 Summit 2026 Announced', tr: 'D40 Zirvesi 2026 Duyuruldu' },
    date: '2026-03-15',
    category: 'Announcement',
    excerpt: { en: 'Global leaders to gather in Istanbul for the annual resilience summit.', tr: 'Küresel liderler yıllık dirençlilik zirvesi için İstanbul\'da bir araya gelecek.' },
    image: 'https://picsum.photos/seed/summit/800/600',
  },
  {
    id: '2',
    title: { en: 'New Funding for Urban Resilience', tr: 'Kentsel Dirençlilik İçin Yeni Fon' },
    date: '2026-03-10',
    category: 'Policy',
    excerpt: { en: 'D40 secures €50M in partnership with international donors.', tr: 'D40, uluslararası bağışçılarla ortaklaşa 50 milyon Euro fon sağladı.' },
    image: 'https://picsum.photos/seed/funding/800/600',
  },
];

export const events: EventItem[] = [
  {
    id: '1',
    title: { en: 'Climate Adaptation Workshop', tr: 'İklim Uyumu Çalıştayı' },
    date: '2026-04-20',
    location: { en: 'Online', tr: 'Çevrimiçi' },
    type: 'workshop',
  },
  {
    id: '2',
    title: { en: 'Urban Resilience Training', tr: 'Kentsel Dirençlilik Eğitimi' },
    date: '2026-05-12',
    location: { en: 'Brussels, Belgium', tr: 'Brüksel, Belçika' },
    type: 'training',
  },
];
