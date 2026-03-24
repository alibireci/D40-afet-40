import { motion } from 'motion/react';
import { useLanguage } from '../hooks/useLanguage';
import { ArrowRight, Shield, Globe, Zap, Users, AlertTriangle, CheckCircle2, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import MemberMap from '../components/MemberMap';
import { projects } from '../data';

export default function Home() {
  const { t, language } = useLanguage();

  const impactMetrics = [
    { label: language === 'tr' ? 'Katılımcı Şehirler' : 'Cities Engaged', value: '40+', icon: <Globe className="text-brand-orange" /> },
    { label: language === 'tr' ? 'Tamamlanan Projeler' : 'Projects Implemented', value: '120+', icon: <Zap className="text-brand-orange" /> },
    { label: language === 'tr' ? 'Sağlanan Finansman' : 'Funding Leveraged', value: '€250M', icon: <Shield className="text-brand-orange" /> },
    { label: language === 'tr' ? 'Etkilenen Nüfus' : 'People Impacted', value: '15M+', icon: <Users className="text-brand-orange" /> },
  ];

  const systemPillars = [
    { title: t('pillar.risk.title'), desc: t('pillar.risk.desc'), icon: <BarChart3 /> },
    { title: t('pillar.infra.title'), desc: t('pillar.infra.desc'), icon: <Shield /> },
    { title: t('pillar.prep.title'), desc: t('pillar.prep.desc'), icon: <Zap /> },
    { title: t('pillar.comm.title'), desc: t('pillar.comm.desc'), icon: <Users /> },
  ];

  const cityGains = [
    { title: t('gain.funding.title'), desc: t('gain.funding.desc') },
    { title: t('gain.projects.title'), desc: t('gain.projects.desc') },
    { title: t('gain.training.title'), desc: t('gain.training.desc') },
    { title: t('gain.visibility.title'), desc: t('gain.visibility.desc') },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-blue text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.2),transparent_70%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/membership" className="btn-primary flex items-center space-x-2">
                  <span>{t('cta.join')}</span>
                  <ArrowRight size={20} />
                </Link>
                <Link to="/membership#pilot" className="btn-outline border-white text-white hover:bg-white hover:text-brand-blue">
                  {t('cta.pilot')}
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block"
            >
              <MemberMap />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why This Matters (Pain Section) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-red-600 font-bold text-sm uppercase tracking-widest mb-6">
                <AlertTriangle size={18} />
                <span>{t('section.pain_warning')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-brand-blue">
                {t('section.pain_title')}
              </h2>
              <p className="text-xl text-brand-blue/70 leading-relaxed mb-8">
                {t('section.pain_subtitle')}
              </p>
              <p className="text-lg text-brand-blue/60 leading-relaxed">
                {language === 'tr' 
                  ? 'Afetler münferit olaylar değil; belediyeleri iflas ettirebilen ve kamu güvenini yok edebilen stratejik risklerdir. Bugün dirençliliğe yatırım yapmayan şehirler, yarın en ağır bedeli ödeyecek.'
                  : 'Disasters are not isolated events; they are strategic risks that can bankrupt municipalities and destroy public trust. Cities that fail to invest in resilience today will pay the highest price tomorrow.'}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-light p-8 rounded-2xl border-l-4 border-red-600">
                <div className="text-3xl font-bold text-brand-blue mb-2">{language === 'tr' ? '%80' : '80%'}</div>
                <p className="text-sm text-brand-blue/60">
                  {language === 'tr' ? 'Kentsel altyapının %80\'i iklim olaylarından kaynaklı risk altındadır.' : 'Of urban infrastructure is at risk from climate events.'}
                </p>
              </div>
              <div className="bg-brand-light p-8 rounded-2xl border-l-4 border-red-600">
                <div className="text-3xl font-bold text-brand-blue mb-2">4x</div>
                <p className="text-sm text-brand-blue/60">
                  {language === 'tr' ? 'Hazırlıksız şehirler için 4 kat daha yüksek iyileşme maliyeti.' : 'Higher recovery costs for unprepared cities.'}
                </p>
              </div>
              <div className="bg-brand-light p-8 rounded-2xl border-l-4 border-red-600">
                <div className="text-3xl font-bold text-brand-blue mb-2">{language === 'tr' ? '%65' : '65%'}</div>
                <p className="text-sm text-brand-blue/60">
                  {language === 'tr' ? 'Afet yönetimi hataları sonrası kamu güveninde %65 kayıp.' : 'Loss in public trust following disaster mismanagement.'}
                </p>
              </div>
              <div className="bg-brand-light p-8 rounded-2xl border-l-4 border-red-600">
                <div className="text-3xl font-bold text-brand-blue mb-2">{language === 'tr' ? '1Mlr€+' : '€1B+'}</div>
                <p className="text-sm text-brand-blue/60">
                  {language === 'tr' ? 'Büyük bir kentsel afetin ortalama ekonomik etkisi.' : 'Average economic impact of a major urban disaster.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D40 Resilience System™ */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-brand-blue">{t('section.system_title')}</h2>
            <p className="text-xl text-brand-blue/60 max-w-2xl mx-auto">{t('section.system_subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {systemPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-brand-blue/5 hover:border-brand-orange/20 transition-all"
              >
                <div className="w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-sm text-brand-blue/60 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Your City Gains */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img src="https://picsum.photos/seed/gains/800/600" alt="City Gains" className="rounded-3xl shadow-2xl" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-display font-bold mb-12 text-brand-blue">{t('section.gains_title')}</h2>
              <div className="space-y-8">
                {cityGains.map((gain) => (
                  <div key={gain.title} className="flex items-start space-x-4">
                    <div className="mt-1 bg-brand-orange/10 p-1 rounded-full text-brand-orange">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-blue mb-1">{gain.title}</h3>
                      <p className="text-sm text-brand-blue/60 leading-relaxed">{gain.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link to="/membership" className="btn-primary">{t('cta.explore')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, i) => (
              <div key={metric.label} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl mb-6">
                  {metric.icon}
                </div>
                <div className="text-4xl font-display font-bold mb-2">{metric.value}</div>
                <div className="text-sm text-white/40 font-medium uppercase tracking-widest">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot City Program */}
      <section id="pilot" className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-brand-blue/5 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange/5 -skew-x-12 translate-x-1/4" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-display font-bold mb-6 text-brand-blue">{language === 'tr' ? 'Pilot Şehir Programı' : 'Pilot City Program'}</h2>
                <p className="text-lg text-brand-blue/70 mb-8 leading-relaxed">
                  {language === 'tr' 
                    ? 'Yoğun uygulama programımız için her yıl sınırlı sayıda şehir seçiyoruz. Pilot şehirler finansmana öncelikli erişim, tam teknik destek ve dirençlilik liderleri olarak küresel görünürlük elde eder.'
                    : 'We select a limited number of cities each year for our intensive implementation program. Pilot cities receive priority access to funding, full technical support, and global visibility as resilience leaders.'}
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center space-x-3 font-bold text-brand-blue">
                    <CheckCircle2 className="text-brand-orange" size={20} />
                    <span>{language === 'tr' ? 'Tam Uygulama Desteği' : 'Full Implementation Support'}</span>
                  </li>
                  <li className="flex items-center space-x-3 font-bold text-brand-blue">
                    <CheckCircle2 className="text-brand-orange" size={20} />
                    <span>{language === 'tr' ? 'Öncelikli Proje Katılımı' : 'Priority Project Participation'}</span>
                  </li>
                  <li className="flex items-center space-x-3 font-bold text-brand-blue">
                    <CheckCircle2 className="text-brand-orange" size={20} />
                    <span>{language === 'tr' ? 'Küresel Dirençlilik Liderliği Statüsü' : 'Global Resilience Leadership Status'}</span>
                  </li>
                </ul>
                <Link to="/contact" className="btn-primary inline-block">{language === 'tr' ? 'Pilot Şehir Olarak Başvur' : 'Apply as Pilot City'}</Link>
              </div>
              <div className="hidden lg:block">
                <div className="aspect-square bg-brand-blue rounded-3xl flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="text-6xl font-display font-bold text-brand-orange mb-4">05</div>
                    <p className="text-white font-bold uppercase tracking-widest text-sm">{language === 'tr' ? '2026 İçin Açık Kontenjan' : 'Open Slots for 2026'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-orange text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            {language === 'tr' ? 'Dirençli şehirlerin geleceğini şekillendiren ağa katılın' : 'Join the network shaping the future of resilient cities'}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/membership" className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
              {t('cta.join')}
            </Link>
            <Link to="/contact" className="bg-white text-brand-blue px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
              {t('cta.partner')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
