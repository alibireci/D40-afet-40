import { motion } from 'motion/react';
import { useLanguage } from '../hooks/useLanguage';
import { news } from '../data';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function News() {
  const { language } = useLanguage();

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-display font-bold mb-6">News & Insights</h1>
          <p className="text-xl text-brand-blue/70 leading-relaxed">
            Stay updated with the latest developments, project milestones, and policy announcements from the D40 network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {news.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-brand-blue/5 shadow-sm hover:shadow-2xl transition-all"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={item.image} alt={item.title[language]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center space-x-2 text-brand-blue/40 text-xs font-bold uppercase tracking-wider mb-4">
                  <Calendar size={14} />
                  <span>{new Date(item.date).toLocaleDateString(language === 'en' ? 'en-US' : 'tr-TR', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-orange transition-colors leading-tight">
                  {item.title[language]}
                </h3>
                <p className="text-brand-blue/60 text-sm leading-relaxed mb-8 line-clamp-3">
                  {item.excerpt[language]}
                </p>
                <div className="mt-auto pt-6 border-t border-brand-blue/5">
                  <button className="text-brand-blue font-bold text-sm flex items-center space-x-2 hover:text-brand-orange transition-colors">
                    <span>Read Full Article</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <section className="mt-32 p-12 md:p-20 rounded-[3rem] bg-brand-blue text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-orange rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-orange rounded-full blur-[100px]" />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-6">Stay Informed</h2>
            <p className="text-white/60 mb-10">
              Subscribe to our monthly newsletter for mayors and policymakers. Get insights delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your professional email" 
                className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-orange"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">Subscribe Now</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
