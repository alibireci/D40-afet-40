import { motion } from 'motion/react';
import { useLanguage } from '../hooks/useLanguage';
import { CheckCircle2, Shield, Globe, Users, Zap, Award, GraduationCap, ShieldAlert, BarChart3, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Membership() {
  const { t, language } = useLanguage();

  const strategicBenefits = [
    { title: t('gain.funding.title'), desc: t('gain.funding.desc'), icon: <Zap /> },
    { title: t('pillar.risk.title'), desc: t('pillar.risk.desc'), icon: <ShieldAlert /> },
    { title: t('gain.training.title'), desc: t('gain.training.desc'), icon: <GraduationCap /> },
    { title: t('gain.visibility.title'), desc: t('gain.visibility.desc'), icon: <Globe /> },
  ];

  const useCaseSteps = [
    { title: language === 'tr' ? 'Şehir D40\'a Katılır' : 'City Joins D40', desc: language === 'tr' ? 'Resmi üyelik ve stratejik uyum.' : 'Formal membership and strategic alignment.' },
    { title: language === 'tr' ? 'Proje Havuzuna Girer' : 'Enters Project Pipeline', desc: language === 'tr' ? 'Devam eden konsorsiyumlara anında erişim.' : 'Immediate access to ongoing consortiums.' },
    { title: language === 'tr' ? 'Teknik Eğitim Alır' : 'Receives Technical Training', desc: language === 'tr' ? 'Personel kapasite geliştirme ve sistem kurulumu.' : 'Staff capacity building and system setup.' },
    { title: language === 'tr' ? 'Önlemleri Uygular' : 'Implements Measures', desc: language === 'tr' ? 'Sahada dirençlilik dönüşümü.' : 'On-the-ground resilience transformation.' },
    { title: language === 'tr' ? 'Fon ve Görünürlük Kazanır' : 'Gains Funding & Visibility', desc: language === 'tr' ? 'Ölçülebilir yatırım getirisi ve uluslararası statü.' : 'Measurable ROI and international status.' },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-display font-bold mb-6">{t('nav.membership')}</h1>
          <p className="text-xl text-brand-blue/70 leading-relaxed">
            {language === 'tr'
              ? 'D40\'a katılmak, ileri görüşlü kentsel liderler için stratejik bir karardır. Şehrinizin risklerin arttığı bir çağda gelişmesi için ihtiyaç duyduğu araçları, finansmanı ve konumlandırmayı sağlıyoruz.'
              : 'Joining D40 is a strategic decision for forward-thinking urban leaders. We provide the tools, funding, and positioning your city needs to thrive in an age of increasing risk.'}
          </p>
        </div>

        {/* Strategic Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {strategicBenefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start space-x-6 p-8 rounded-3xl bg-white shadow-sm border border-brand-blue/5"
            >
              <div className="w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-brand-blue/60 leading-relaxed">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ROI Section */}
        <section className="mb-32 bg-brand-blue rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/5 -skew-x-12 translate-x-1/4" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <TrendingUp className="text-brand-orange mb-8 mx-auto" size={48} />
            <h2 className="text-4xl font-display font-bold mb-6">{t('membership.roi_title')}</h2>
            <p className="text-2xl font-medium leading-relaxed mb-10 italic">
              "{t('membership.roi_text')}"
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="text-brand-orange font-bold text-sm uppercase mb-2">{language === 'tr' ? 'Finansman' : 'Funding'}</div>
                <div className="text-xl font-bold">{language === 'tr' ? '5M€+ Ort. Proje Hibesi' : '€5M+ Avg. Project Grant'}</div>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="text-brand-orange font-bold text-sm uppercase mb-2">{language === 'tr' ? 'Risk' : 'Risk'}</div>
                <div className="text-xl font-bold">{language === 'tr' ? '%30 Afet Kaybı Azalımı' : '30% Reduction in Disaster Loss'}</div>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="text-brand-orange font-bold text-sm uppercase mb-2">{language === 'tr' ? 'Kapasite' : 'Capacity'}</div>
                <div className="text-xl font-bold">{language === 'tr' ? '%100 Personel Sertifikasyonu' : '100% Staff Certification'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Case Flow */}
        <section className="mb-32">
          <h2 className="text-3xl font-display font-bold mb-16 text-center">{language === 'tr' ? 'D40 Uygulama Akışı' : 'The D40 Implementation Flow'}</h2>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-blue/10 -translate-y-1/2" />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
              {useCaseSteps.map((step, i) => (
                <div key={step.title} className="text-center">
                  <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold mx-auto mb-6 border-4 border-brand-light">
                    {i + 1}
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-xs text-brand-blue/60">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="apply" className="bg-brand-light rounded-[3rem] p-12 md:p-20 border border-brand-blue/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6 text-brand-blue">{language === 'tr' ? 'Şehrinizin Geleceğini Güvence Altına Alın' : 'Secure Your City\'s Future'}</h2>
              <p className="text-brand-blue/70 mb-8 leading-relaxed">
                {language === 'tr'
                  ? 'Stratejik üyelik sürecinizi bugün başlatın. Sekretaryamız talebinizi inceleyecek ve teknik bir görüşme planlayacaktır.'
                  : 'Start your strategic membership process today. Our secretariat will review your request and schedule a technical consultation.'}
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">1</div>
                  <span className="font-bold text-brand-blue">{language === 'tr' ? 'Stratejik İlgi Bildirimi' : 'Submit Strategic Interest'}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">2</div>
                  <span className="font-bold text-brand-blue">{language === 'tr' ? 'Teknik ve Siyasi Danışmanlık' : 'Technical & Political Consultation'}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">3</div>
                  <span className="font-bold text-brand-blue">{language === 'tr' ? 'Yönetim Kurulu Onayı ve Entegrasyon' : 'Board Approval & Integration'}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl text-brand-blue border border-brand-blue/5">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2">{language === 'tr' ? 'Belediye Adı' : 'Municipality Name'}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-brand-light border-none focus:ring-2 focus:ring-brand-orange" placeholder={language === 'tr' ? 'örn. İstanbul Büyükşehir' : 'e.g. Istanbul Metropolitan'} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2">{language === 'tr' ? 'Ülke' : 'Country'}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-brand-light border-none focus:ring-2 focus:ring-brand-orange" placeholder={language === 'tr' ? 'örn. Türkiye' : 'e.g. Turkey'} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">{language === 'tr' ? 'Belediye Başkanı / Yönetici Adı' : 'Mayor / Executive Name'}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-brand-light border-none focus:ring-2 focus:ring-brand-orange" placeholder={language === 'tr' ? 'Ad Soyad' : 'Full Name'} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">{language === 'tr' ? 'Resmi E-posta Adresi' : 'Official Email Address'}</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-brand-light border-none focus:ring-2 focus:ring-brand-orange" placeholder="executive@municipality.gov" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">{language === 'tr' ? 'Stratejik Hedef' : 'Strategic Goal'}</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-brand-light border-none focus:ring-2 focus:ring-brand-orange">
                    <option>{language === 'tr' ? 'Finansmana Erişim' : 'Access Funding'}</option>
                    <option>{language === 'tr' ? 'Afet Riskini Azaltma' : 'Reduce Disaster Risk'}</option>
                    <option>{language === 'tr' ? 'Kurumsal Kapasite Geliştirme' : 'Build Institutional Capacity'}</option>
                    <option>{language === 'tr' ? 'Uluslararası Görünürlük Kazanma' : 'Gain International Visibility'}</option>
                  </select>
                </div>
                <button type="submit" className="btn-primary w-full py-4 text-lg">{language === 'tr' ? 'Stratejik Başvuru Yap' : 'Submit Strategic Inquiry'}</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
