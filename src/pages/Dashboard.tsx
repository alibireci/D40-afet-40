import { motion } from 'motion/react';
import { useLanguage } from '../hooks/useLanguage';
import { LayoutDashboard, FileText, Settings, Bell, LogOut } from 'lucide-react';

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
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-64 space-y-2">
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
              <span>Overview</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-4 text-brand-blue/60 hover:bg-white rounded-xl font-bold text-sm transition-all">
              <FileText size={18} />
              <span>My Projects</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-4 text-brand-blue/60 hover:bg-white rounded-xl font-bold text-sm transition-all">
              <Bell size={18} />
              <span>Notifications</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-4 text-brand-blue/60 hover:bg-white rounded-xl font-bold text-sm transition-all">
              <Settings size={18} />
              <span>Settings</span>
            </button>
            <div className="pt-8">
              <button className="w-full flex items-center space-x-3 p-4 text-red-500 hover:bg-red-50 rounded-xl font-bold text-sm transition-all">
                <LogOut size={18} />
                <span>Logout</span>
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

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-brand-blue/5">
              <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
              <div className="space-y-6">
                {[
                  { title: 'Project Report Submitted', time: '2 hours ago', status: 'Pending Review' },
                  { title: 'Funding Opportunity: Horizon Europe', time: '1 day ago', status: 'New' },
                  { title: 'Membership Dues Confirmed', time: '3 days ago', status: 'Completed' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-brand-blue/5 last:border-0">
                    <div>
                      <div className="font-bold text-brand-blue">{item.title}</div>
                      <div className="text-xs text-brand-blue/40">{item.time}</div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-brand-light rounded">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-orange/10 border border-brand-orange/20 rounded-3xl p-8 flex items-center justify-between">
              <div>
                <h4 className="text-brand-orange font-bold text-lg mb-1">New Funding Opportunity</h4>
                <p className="text-brand-blue/60 text-sm">A new €2M grant for coastal cities is now open for applications.</p>
              </div>
              <button className="btn-primary py-2 px-6 text-sm">Apply Now</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
