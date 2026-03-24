import { motion } from 'motion/react';
import { useLanguage } from '../hooks/useLanguage';
import { LayoutDashboard, FileText, Settings, Bell, LogOut, ShieldAlert, HardHat, Users, GraduationCap, ExternalLink, Search } from 'lucide-react';
import { buildingRequests, volunteers } from '../data';

export default function Dashboard() {
  const { t } = useLanguage();

  const stats = [
    { label: 'Active Projects', value: '3' },
    { label: 'Funding Received', value: '€1.2M' },
    { label: 'Network Score', value: '92/100' },
  ];

  return (
    <div className="pt-32 pb-24 bg-brand-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 space-y-2 shrink-0">
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-brand-blue/5 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold">I</div>
                <div>
                  <div className="text-sm font-bold">Istanbul</div>
                  <div className="text-[10px] text-brand-blue/40 uppercase font-bold">Full Member</div>
                </div>
              </div>
            </div>
            
            <button className="w-full flex items-center space-x-3 p-4 bg-brand-blue text-white rounded-xl font-bold text-sm">
              <LayoutDashboard size={18} />
              <span>{t('dashboard.overview')}</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-4 text-brand-blue/60 hover:bg-white rounded-xl font-bold text-sm transition-all">
              <ShieldAlert size={18} />
              <span>{t('dashboard.building_safety')}</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-4 text-brand-blue/60 hover:bg-white rounded-xl font-bold text-sm transition-all">
              <HardHat size={18} />
              <span>{t('dashboard.retrofitting')}</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-4 text-brand-blue/60 hover:bg-white rounded-xl font-bold text-sm transition-all">
              <Users size={18} />
              <span>{t('dashboard.volunteers')}</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-4 text-brand-blue/60 hover:bg-white rounded-xl font-bold text-sm transition-all">
              <GraduationCap size={18} />
              <span>{t('dashboard.training')}</span>
            </button>
            
            <div className="pt-8">
              <button className="w-full flex items-center space-x-3 p-4 text-red-500 hover:bg-red-50 rounded-xl font-bold text-sm transition-all">
                <LogOut size={18} />
                <span>{t('dashboard.logout')}</span>
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-grow space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map(stat => (
                <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-sm border border-brand-blue/5">
                  <div className="text-xs font-bold text-brand-blue/40 uppercase tracking-wider mb-1">{stat.label}</div>
                  <div className="text-2xl font-display font-bold text-brand-blue">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Building Safety & Retrofitting Section */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-brand-blue/5">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">{t('dashboard.building_safety')}</h3>
                  <span className="text-xs font-bold text-brand-orange bg-brand-orange/10 px-2 py-1 rounded">{t('dashboard.live_requests')}</span>
                </div>
                <div className="space-y-4">
                  {buildingRequests.filter(r => r.type === 'safety_test').map(req => (
                    <div key={req.id} className="p-4 bg-brand-light rounded-xl border border-brand-blue/5">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-bold text-sm">{req.address}</div>
                        <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded ${
                          req.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                        }`}>
                          {req.status}
                        </span>
                      </div>
                      <div className="text-xs text-brand-blue/40">{t('dashboard.neighborhood')}: {req.neighborhood}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm border border-brand-blue/5">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">{t('dashboard.retrofitting')}</h3>
                  <span className="text-xs font-bold text-brand-orange bg-brand-orange/10 px-2 py-1 rounded">{t('dashboard.cost_analysis')}</span>
                </div>
                <div className="space-y-4">
                  {buildingRequests.filter(r => r.type === 'retrofitting').map(req => (
                    <div key={req.id} className="p-4 bg-brand-light rounded-xl border border-brand-blue/5">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-bold text-sm">{req.address}</div>
                        <div className="text-brand-orange font-bold text-xs">{req.estimatedCost}</div>
                      </div>
                      <div className="text-xs text-brand-blue/40">{t('dashboard.neighborhood')}: {req.neighborhood}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Volunteer & Training Section */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-brand-blue/5">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">{t('dashboard.volunteers')}</h3>
                  <button className="text-xs font-bold text-brand-blue/40 hover:text-brand-orange flex items-center space-x-1">
                    <Search size={12} />
                    <span>{t('dashboard.search_neighborhood')}</span>
                  </button>
                </div>
                <div className="space-y-4">
                  {volunteers.map(v => (
                    <div key={v.id} className="flex items-center justify-between p-4 bg-brand-light rounded-xl">
                      <div>
                        <div className="font-bold text-sm">{v.name}</div>
                        <div className="text-xs text-brand-blue/40">{v.neighborhood} • {v.specialty}</div>
                      </div>
                      <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded ${
                        v.trainingStatus === 'certified' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {v.trainingStatus.replace('_', ' ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-brand-blue rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">{t('dashboard.training')}</h3>
                <p className="text-sm text-white/60 mb-8">{t('dashboard.training_desc')}</p>
                <div className="space-y-4">
                  {[
                    { name: 'AFAD Gönüllü Eğitimi', url: 'https://gonullu.afad.gov.tr/' },
                    { name: 'AKUT Akademi', url: 'https://www.akut.org.tr/akademi' },
                    { name: 'Global Resilience Academy', url: '#' },
                  ].map(link => (
                    <a 
                      key={link.name} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10"
                    >
                      <span className="font-bold text-sm">{link.name}</span>
                      <ExternalLink size={16} className="text-brand-orange" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
