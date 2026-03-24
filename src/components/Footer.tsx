import { useLanguage } from '../hooks/useLanguage';
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-blue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-brand-blue font-bold text-xl">D</div>
              <span className="text-2xl font-display font-bold tracking-tighter">D40</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-orange transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-brand-orange transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-orange transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/membership" className="hover:text-white transition-colors">{t('nav.membership')}</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">{t('nav.projects')}</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">{t('nav.news')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/policy" className="hover:text-white transition-colors">Policy Briefs</Link></li>
              <li><Link to="/policy" className="hover:text-white transition-colors">Toolkits</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Upcoming Events</Link></li>
              <li><Link to="/partners" className="hover:text-white transition-colors">Our Partners</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-orange shrink-0" />
                <span>Istanbul, Turkey / Brussels, Belgium</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-orange shrink-0" />
                <span>contact@d40network.org</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-orange shrink-0" />
                <span>+90 (212) 555 0100</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>© 2026 D40 Network. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
