import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.membership'), path: '/membership' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.policy'), path: '/policy' },
    { name: t('nav.news'), path: '/news' },
    { name: t('nav.contact'), path: '/contact' },
    { name: language === 'tr' ? 'Kontrol Paneli' : 'Dashboard', path: '/dashboard' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">D</div>
            <span className="text-2xl font-display font-bold text-brand-blue tracking-tighter">D40</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-orange ${
                  location.pathname === link.path ? 'text-brand-orange' : 'text-brand-blue/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4 border-l pl-6 border-brand-blue/10">
              <button
                onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
                className="flex items-center space-x-1 text-sm font-bold text-brand-blue hover:text-brand-orange transition-colors"
              >
                <Globe size={16} />
                <span>{language.toUpperCase()}</span>
              </button>
              <Link to="/membership" className="btn-primary py-2 px-4 text-sm">
                {t('cta.join')}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button
                onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
                className="text-sm font-bold text-brand-blue"
              >
                {language.toUpperCase()}
              </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-blue">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-brand-blue/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-brand-blue hover:bg-brand-light rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/membership"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center btn-primary"
                >
                  {t('cta.join')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
