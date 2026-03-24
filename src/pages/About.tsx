import { motion } from 'motion/react';
import { useLanguage } from '../hooks/useLanguage';
import { Target, Eye, History, ShieldAlert } from 'lucide-react';

export default function About() {
  const { t, language } = useLanguage();

  const values = [
    { 
      title: language === 'tr' ? 'Misyon' : 'Mission', 
      desc: language === 'tr' ? 'Şehirleri küresel ölçekte birbirine bağlamak, afet dirençliliği ve sürdürülebilir kentsel iyileştirme için iş birliğini teşvik etmek.' : 'To connect cities globally, fostering collaboration for disaster resilience and sustainable urban recovery.', 
      icon: <Target className="text-brand-orange" /> 
    },
    { 
      title: language === 'tr' ? 'Vizyon' : 'Vision', 
      desc: language === 'tr' ? 'Her şehrin çevresel ve kentsel zorluklara karşı dayanabildiği, iyileşebildiği ve gelişebildiği bir dünya.' : 'A world where every city is equipped to withstand, recover from, and thrive amidst environmental and urban challenges.', 
      icon: <Eye className="text-brand-orange" /> 
    },
    { 
      title: language === 'tr' ? 'Bağlam' : 'Context', 
      desc: language === 'tr' ? 'Büyük sismik olaylar ve iklim krizlerinin ardından koordineli eylem ihtiyacından doğmuştur.' : 'Born from the urgent need for coordinated action following major seismic events and climate crises.', 
      icon: <History className="text-brand-orange" /> 
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-display font-bold mb-6">{language === 'tr' ? 'D40 Hakkında' : 'About D40'}</h1>
          <p className="text-xl text-brand-blue/70 leading-relaxed">
            {language === 'tr' 
              ? 'D40 bir ağdan daha fazlasıdır; kentsel dirençliliğin küresel bir hareketidir. Şehirlerin daha iyisini inşa etmeleri için siyasi ve teknik altyapı sağlıyoruz.'
              : 'D40 is more than a network; it is a global movement of urban resilience. We provide the political and technical infrastructure for cities to build back better.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white shadow-sm border border-brand-blue/5"
            >
              <div className="mb-6">{val.icon}</div>
              <h3 className="text-2xl font-display font-bold mb-4">{val.title}</h3>
              <p className="text-brand-blue/60 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Governance */}
        <section className="bg-brand-blue rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/5 -skew-x-12 translate-x-1/4" />
          
          <div className="relative z-10">
            <h2 className="text-4xl font-display font-bold mb-12">{language === 'tr' ? 'Yönetişim Yapısı' : 'Governance Structure'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h4 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">{language === 'tr' ? 'Yönetim Kurulu' : 'The Board'}</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {language === 'tr' 
                    ? 'Önde gelen üye şehirlerin Belediye Başkanlarından oluşur, siyasi yön ve stratejik denetim sağlar.'
                    : 'Composed of Mayors from leading member cities, providing political direction and strategic oversight.'}
                </p>
              </div>
              <div>
                <h4 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">{language === 'tr' ? 'Sekreterya' : 'The Secretariat'}</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {language === 'tr' 
                    ? 'D40\'ın teknik motoru; İstanbul ve Brüksel\'deki merkezlerimizden projeleri, finansmanı ve bilgi değişimini yönetir.'
                    : 'The technical engine of D40, managing projects, funding, and knowledge exchange from our hubs in Istanbul and Brussels.'}
                </p>
              </div>
              <div>
                <h4 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">{language === 'tr' ? 'Üyeler' : 'The Members'}</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {language === 'tr' 
                    ? 'Projeleri uygulayan ve sahada uzmanlık paylaşan dinamik bir şehir ve ortak ortaklar ağı.'
                    : 'A dynamic network of cities and associate partners who implement projects and share expertise on the ground.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Earthquake Context */}
        <section className="py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-brand-orange font-bold text-sm uppercase tracking-widest mb-6">
                <ShieldAlert size={18} />
                <span>{language === 'tr' ? 'Neden Varız' : 'Why We Exist'}</span>
              </div>
              <h2 className="text-4xl font-display font-bold mb-8">{language === 'tr' ? 'Küresel İhtiyaca Bir Yanıt' : 'A Response to Global Need'}</h2>
              <p className="text-lg text-brand-blue/70 leading-relaxed mb-6">
                {language === 'tr' 
                  ? '2023 yılında Türkiye ve Suriye\'de meydana gelen yıkıcı depremler, kentsel kırılganlığın sert bir hatırlatıcısı oldu. D40, hiçbir şehrin bu tür felaketlerle tek başına yüzleşmek zorunda kalmamasını sağlamak için kuruldu.'
                  : 'The devastating earthquakes in Turkey and Syria in 2023 served as a stark reminder of urban vulnerability. D40 was established to ensure that no city has to face such catastrophes alone.'}
              </p>
              <p className="text-lg text-brand-blue/70 leading-relaxed">
                {language === 'tr' 
                  ? 'Afet yönetiminin tüm döngüsüne odaklanıyoruz: erken uyarı ve hazırlıktan hızlı müdahale ve dirençli yeniden inşaya kadar.'
                  : 'We focus on the entire lifecycle of disaster management: from early warning and preparedness to rapid response and resilient reconstruction.'}
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/resilience-about/1200/800" alt="Resilient City" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
