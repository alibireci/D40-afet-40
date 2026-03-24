import { motion } from 'motion/react';
import { useLanguage } from '../hooks/useLanguage';
import { FileText, Download, BookOpen, ShieldCheck } from 'lucide-react';

export default function Policy() {
  const resources = [
    { title: 'Urban Resilience Framework 2026', type: 'Report', size: '4.2 MB' },
    { title: 'Post-Disaster Housing Toolkit', type: 'Toolkit', size: '12.8 MB' },
    { title: 'Climate Adaptation Policy Brief', type: 'Policy Brief', size: '1.5 MB' },
    { title: 'Global City Connectivity Research', type: 'Research', size: '8.4 MB' },
    { title: 'Municipal Funding Guide', type: 'Toolkit', size: '3.1 MB' },
    { title: 'Earthquake Preparedness Manual', type: 'Report', size: '15.2 MB' },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-display font-bold mb-6">Policy & Knowledge Hub</h1>
          <p className="text-xl text-brand-blue/70 leading-relaxed">
            Our authority engine. We translate complex research into actionable policy briefs, toolkits, and reports for urban leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((res, i) => (
                <motion.div
                  key={res.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group p-6 rounded-2xl bg-white border border-brand-blue/5 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center text-brand-blue">
                      <FileText size={20} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue/40 bg-brand-light px-2 py-1 rounded">
                      {res.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-4 group-hover:text-brand-orange transition-colors">{res.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-brand-blue/40 font-medium">{res.size}</span>
                    <button className="flex items-center space-x-2 text-brand-orange font-bold text-sm">
                      <Download size={16} />
                      <span>Download</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-brand-blue text-white">
              <ShieldCheck className="text-brand-orange mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Authority & Influence</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-8">
                D40 provides technical expertise to the EU Commission, UN-Habitat, and major international donors.
              </p>
              <button className="btn-primary w-full">Request Expert Advice</button>
            </div>

            <div className="p-8 rounded-3xl bg-brand-light border border-brand-blue/5">
              <h3 className="text-xl font-bold mb-6">Categories</h3>
              <ul className="space-y-4">
                {['Disaster Recovery', 'Climate Adaptation', 'Urban Planning', 'Funding Strategies', 'Community Resilience'].map(cat => (
                  <li key={cat}>
                    <button className="flex items-center space-x-3 text-sm font-medium text-brand-blue/60 hover:text-brand-orange transition-colors">
                      <BookOpen size={16} />
                      <span>{cat}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
