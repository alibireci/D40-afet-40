import { motion } from 'motion/react';
import { useLanguage } from '../hooks/useLanguage';
import { ArrowRight, Shield, Globe, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import MemberMap from '../components/MemberMap';
import { projects, news } from '../data';

export default function Home() {
  const { t, language } = useLanguage();

  const impactMetrics = [
    { label: 'Cities Engaged', value: '40+', icon: <Globe className="text-brand-orange" /> },
    { label: 'Projects Implemented', value: '120+', icon: <Zap className="text-brand-orange" /> },
    { label: 'Funding Leveraged', value: '€250M', icon: <Shield className="text-brand-orange" /> },
    { label: 'People Impacted', value: '15M+', icon: <Users className="text-brand-orange" /> },
  ];

  const programs = [
    { title: 'Disaster Recovery', desc: 'Building back better after urban catastrophes.', icon: '🏗️' },
    { title: 'Climate Resilience', desc: 'Adapting infrastructure to changing climates.', icon: '🌊' },
    { title: 'Urban Preparedness', desc: 'Strategic planning for future-ready systems.', icon: '📋' },
    { title: 'Community Empowerment', desc: 'Engaging citizens in local resilience.', icon: '🤝' },
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
                <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-brand-blue">
                  {t('cta.partner')}
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

      {/* Trust Section */}
      <section className="py-12 bg-white border-b border-brand-blue/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-brand-blue/40 uppercase tracking-[0.2em] mb-8">Trusted by Global Municipalities & Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            {['Istanbul Metropolitan', 'Brussels Region', 'UNDP', 'World Bank', 'EU Commission'].map(logo => (
              <span key={logo} className="text-xl font-display font-bold text-brand-blue">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* What is D40 */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">What is D40?</h2>
            <p className="text-lg text-brand-blue/70 leading-relaxed">
              D40 is a global network of cities committed to building disaster resilience, recovery, and climate adaptation. 
              We bridge the gap between political will and technical implementation, ensuring cities are ready for the challenges of tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-brand-blue/5"
              >
                <div className="mb-4">{metric.icon}</div>
                <div className="text-3xl font-display font-bold text-brand-blue mb-1">{metric.value}</div>
                <div className="text-sm text-brand-blue/60 font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">{t('section.programs')}</h2>
            <p className="text-brand-blue/60">Our core focus areas for urban transformation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, i) => (
              <div key={program.title} className="group p-8 rounded-2xl bg-brand-light border border-transparent hover:border-brand-orange/20 transition-all hover:shadow-xl">
                <div className="text-4xl mb-6">{program.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-orange transition-colors">{program.title}</h3>
                <p className="text-sm text-brand-blue/70 leading-relaxed">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Projects */}
      <section className="py-24 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-display font-bold mb-4">Latest Projects</h2>
              <p className="text-white/60">Real impact on the ground.</p>
            </div>
            <Link to="/projects" className="text-brand-orange font-bold flex items-center space-x-2 hover:underline">
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id} className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all">
                <div className="h-48 overflow-hidden">
                  <img src={project.image} alt={project.title[language]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">{project.theme}</div>
                  <h3 className="text-xl font-bold mb-3">{project.title[language]}</h3>
                  <p className="text-sm text-white/60 mb-6 line-clamp-2">{project.description[language]}</p>
                  <div className="flex justify-between items-center text-xs font-medium text-white/40">
                    <span>{project.country}</span>
                    <span className="bg-white/10 px-2 py-1 rounded">{project.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-orange text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Join the cities shaping resilient futures</h2>
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
