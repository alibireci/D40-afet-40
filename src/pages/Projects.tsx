import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { projects } from '../data';
import { Filter, Search, MapPin, Tag, ArrowRight, ShieldCheck, Target, BarChart3 } from 'lucide-react';

export default function Projects() {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'ongoing' | 'completed' | 'flagship'>('all');
  const [themeFilter, setThemeFilter] = useState<string>('all');

  const filteredProjects = projects.filter(p => {
    const statusMatch = filter === 'all' || p.status === filter;
    const themeMatch = themeFilter === 'all' || p.theme === themeFilter;
    return statusMatch && themeMatch;
  });

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-display font-bold mb-6">{t('nav.projects')}</h1>
            <p className="text-xl text-brand-blue/70">
              {language === 'tr'
                ? 'Sonuç üretiyoruz, vaat değil. Küresel ağ genelinde uygulanan yüksek etkili dirençlilik ve iyileştirme girişimleri portföyümüzü keşfedin.'
                : 'We deliver results, not promises. Explore our portfolio of high-impact resilience and recovery initiatives implemented across the global network.'}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {(['all', 'ongoing', 'completed', 'flagship'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-bold capitalize transition-all ${
                  filter === f ? 'bg-brand-orange text-white' : 'bg-brand-light text-brand-blue hover:bg-brand-blue/5'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List with Problem/Solution/Impact */}
        <div className="space-y-12">
          {filteredProjects.map(project => (
            <div key={project.id} className="group bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-brand-blue/5 grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 h-80 lg:h-auto relative overflow-hidden">
                <img src={project.image} alt={project.title[language]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="bg-brand-blue/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {project.theme}
                  </span>
                </div>
              </div>
              
              <div className="lg:col-span-7 p-8 md:p-12">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2 text-brand-blue/40 text-xs font-bold uppercase tracking-wider">
                    <MapPin size={14} />
                    <span>{project.country}</span>
                  </div>
                  <div className="text-xs font-bold text-brand-orange uppercase tracking-widest">
                    {project.fundingSource}
                  </div>
                </div>

                <h3 className="text-3xl font-display font-bold mb-8 group-hover:text-brand-orange transition-colors">
                  {project.title[language]}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                  <div>
                    <div className="flex items-center space-x-2 text-brand-blue/40 mb-2">
                      <ShieldCheck size={16} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{language === 'tr' ? 'Sorun' : 'Problem'}</span>
                    </div>
                    <p className="text-sm text-brand-blue/70 leading-relaxed">
                      {language === 'tr' ? 'Artan kentsel kırılganlık ve koordineli müdahale sistemlerinin eksikliği.' : 'Increasing urban vulnerability and lack of coordinated response systems.'}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 text-brand-blue/40 mb-2">
                      <Target size={16} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{language === 'tr' ? 'Çözüm' : 'Solution'}</span>
                    </div>
                    <p className="text-sm text-brand-blue/70 leading-relaxed">{project.description[language]}</p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 text-brand-blue/40 mb-2">
                      <BarChart3 size={16} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{language === 'tr' ? 'Etki' : 'Impact'}</span>
                    </div>
                    <p className="text-sm text-brand-blue/70 leading-relaxed font-bold">
                      {language === 'tr' ? 'Riskte ölçülebilir azalma ve %100 personel hazır bulunuşluğu.' : 'Measurable reduction in risk and 100% staff readiness.'}
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-brand-blue/5 flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span className={`text-[10px] font-bold uppercase px-3 py-1 rounded-full ${
                      project.status === 'flagship' ? 'bg-brand-orange text-white' : 'bg-brand-light text-brand-blue'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <button className="btn-primary py-2 px-6 text-sm flex items-center space-x-2">
                    <span>{language === 'tr' ? 'Teknik Detayları Görüntüle' : 'View Technical Details'}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="py-32 text-center">
            <p className="text-brand-blue/40 font-medium">{language === 'tr' ? 'Filtrelerinize uygun proje bulunamadı.' : 'No projects found matching your filters.'}</p>
          </div>
        )}
      </div>
    </div>
  );
}
