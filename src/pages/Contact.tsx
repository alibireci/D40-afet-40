import { motion } from 'motion/react';
import { useLanguage } from '../hooks/useLanguage';
import { Mail, Phone, MapPin, MessageSquare, Building2, Users } from 'lucide-react';

export default function Contact() {
  const { t, language } = useLanguage();

  const contactInfo = [
    { icon: <Mail />, label: language === 'tr' ? 'E-posta' : 'Email', value: 'contact@d40network.org' },
    { icon: <Phone />, label: language === 'tr' ? 'Telefon' : 'Phone', value: '+90 (212) 555 0100' },
    { icon: <MapPin />, label: language === 'tr' ? 'Ofisler' : 'Offices', value: 'Istanbul / Brussels' },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl font-display font-bold mb-8">{language === 'tr' ? 'İletişime Geçin' : 'Get in Touch'}</h1>
            <p className="text-xl text-brand-blue/70 mb-12 leading-relaxed">
              {language === 'tr' 
                ? 'İster katılmak isteyen bir şehir, ister potansiyel bir ortak veya bir araştırmacı olun, sizden haber almak istiyoruz.'
                : 'Whether you are a city looking to join, a potential partner, or a researcher, we want to hear from you.'}
            </p>

            <div className="space-y-8 mb-12">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-white shadow-sm border border-brand-blue/5 rounded-xl flex items-center justify-center text-brand-orange">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-brand-blue/40 uppercase tracking-wider">{info.label}</div>
                    <div className="text-lg font-bold text-brand-blue">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-3xl bg-brand-light border border-brand-blue/5">
              <h3 className="text-xl font-bold mb-6">{language === 'tr' ? 'Sorgu Türleri' : 'Inquiry Types'}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-white rounded-xl">
                  <Building2 size={20} className="text-brand-orange" />
                  <span className="text-sm font-bold">{language === 'tr' ? 'Ağa Katıl' : 'Join Network'}</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-xl">
                  <Users size={20} className="text-brand-orange" />
                  <span className="text-sm font-bold">{language === 'tr' ? 'Ortaklık Talebi' : 'Partner Request'}</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-xl">
                  <Zap size={20} className="text-brand-orange" />
                  <span className="text-sm font-bold">{language === 'tr' ? 'Proje İş Birliği' : 'Project Collab'}</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-xl">
                  <MessageSquare size={20} className="text-brand-orange" />
                  <span className="text-sm font-bold">{language === 'tr' ? 'Medya Sorgusu' : 'Media Inquiry'}</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-10 shadow-2xl border border-brand-blue/5"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">{language === 'tr' ? 'Ad' : 'First Name'}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-brand-light border-none focus:ring-2 focus:ring-brand-orange" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">{language === 'tr' ? 'Soyad' : 'Last Name'}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-brand-light border-none focus:ring-2 focus:ring-brand-orange" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">{language === 'tr' ? 'E-posta Adresi' : 'Email Address'}</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-brand-light border-none focus:ring-2 focus:ring-brand-orange" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">{language === 'tr' ? 'Konu' : 'Subject'}</label>
                <select className="w-full px-4 py-3 rounded-lg bg-brand-light border-none focus:ring-2 focus:ring-brand-orange">
                  <option>{language === 'tr' ? 'Üyelik Sorgusu' : 'Membership Inquiry'}</option>
                  <option>{language === 'tr' ? 'Ortaklık Teklifi' : 'Partnership Proposal'}</option>
                  <option>{language === 'tr' ? 'Proje İş Birliği' : 'Project Collaboration'}</option>
                  <option>{language === 'tr' ? 'Genel Soru' : 'General Question'}</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">{language === 'tr' ? 'Mesaj' : 'Message'}</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-lg bg-brand-light border-none focus:ring-2 focus:ring-brand-orange" placeholder={language === 'tr' ? 'Size nasıl yardımcı olabiliriz?' : 'How can we help you?'}></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-4 text-lg">{language === 'tr' ? 'Mesaj Gönder' : 'Send Message'}</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Zap({ size, className }: { size: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}
