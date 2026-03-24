import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { projects } from '../data';
import { Filter, Search, MapPin, Tag } from 'lucide-react';

export default function Projects() {
  const { language } = useLanguage();
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
            <h1 className="text-5xl font-display font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-brand-blue/70">
              Explore our global portfolio of resilience and recovery initiatives. We deliver results that transform urban landscapes.
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

        {/* Filters Bar */}
        <div className="flex flex-wrap items-center gap-6 mb-12 p-6 bg-white rounded-2xl shadow-sm border border-brand-blue/5">
          <div className="flex items-center space-x-2 text-brand-blue/40">
            <Filter size={18} />
            <span className="text-sm font-bold uppercase tracking-wider">Filters:</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <select 
              onChange={(e) => setThemeFilter(e.target.value)}
              className="bg-brand-light border-none rounded-lg px-4 py-2 text-sm font-medium focus:ring-2 focus:ring-brand-orange"
            >
              <option value="all">All Themes</option>
              <option value="recovery">Disaster Recovery</option>
              <option value="resilience">Climate Resilience</option>
              <option value="preparedness">Urban Preparedness</option>
              <option value="empowerment">Community Empowerment</option>
            </select>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-blue/30" size={16} />
              <input 
                type="text" 
                placeholder="Search projects..." 
                className="pl-10 pr-4 py-2 bg-brand-light border-none rounded-lg text-sm focus:ring-2 focus:ring-brand-orange"
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-brand-blue/5">
              <div className="h-64 overflow-hidden relative">
                <img src={project.image} alt={project.title[language]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-brand-blue/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {project.theme}
                  </span>
                  {project.status === 'flagship' && (
                    <span className="bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      Flagship
                    </span>
                  )}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-2 text-brand-blue/40 text-xs font-bold uppercase tracking-wider mb-4">
                  <MapPin size={14} />
                  <span>{project.country}</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-orange transition-colors">
                  {project.title[language]}
                </h3>
                <p className="text-brand-blue/60 text-sm leading-relaxed mb-8">
                  {project.description[language]}
                </p>
                <div className="pt-6 border-t border-brand-blue/5 flex justify-between items-center">
                  <div className="flex items-center space-x-2 text-xs font-bold text-brand-blue/40">
                    <Tag size={14} />
                    <span>{project.fundingSource}</span>
                  </div>
                  <button className="text-brand-blue font-bold text-sm flex items-center space-x-1 hover:text-brand-orange transition-colors">
                    <span>Details</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="py-32 text-center">
            <p className="text-brand-blue/40 font-medium">No projects found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
