import { motion } from 'motion/react';
import { useLanguage } from '../hooks/useLanguage';
import { CheckCircle2, Shield, Globe, Users, Zap, Award, GraduationCap, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Membership() {
  const { t } = useLanguage();

  const benefits = [
    { title: 'EU Project Access', desc: 'Direct access to consortiums for Horizon Europe and other major funding streams.', icon: <Zap /> },
    { title: 'International Visibility', desc: 'Showcase your city\'s resilience achievements on the global stage.', icon: <Globe /> },
    { title: 'Policy Influence', desc: 'Participate in high-level policy dialogues with international organizations.', icon: <Shield /> },
    { title: 'Capacity Building', desc: 'Exclusive training for municipal staff on disaster recovery and climate adaptation.', icon: <Award /> },
    { title: t('membership.benefit_training'), desc: 'Integrated platform to promote and manage citizen search & rescue training.', icon: <GraduationCap /> },
    { title: t('membership.benefit_volunteers'), desc: 'Infrastructure to build and track neighborhood-level volunteer networks.', icon: <Users /> },
    { title: t('membership.benefit_safety'), desc: 'Tools for citizens to request building safety tests and retrofitting analysis.', icon: <ShieldAlert /> },
  ];

  const types = [
    {
      name: 'Full Member',
      target: 'Cities & Municipalities',
      features: ['Voting rights', 'Project leadership', 'Policy board access', 'Full training suite'],
      cta: 'Apply as City',
      highlight: true
    },
    {
      name: 'Associate Member',
      target: 'NGOs, Academia, Private Sector',
      features: ['Consortium participation', 'Knowledge exchange', 'Event access', 'Network visibility'],
      cta: 'Join as Partner',
      highlight: false
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-display font-bold mb-6">Membership</h1>
          <p className="text-xl text-brand-blue/70 leading-relaxed">
            Join a powerful network of urban leaders dedicated to building safer, more resilient cities. 
            We provide the platform, the knowledge, and the funding access you need to succeed.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start space-x-6 p-8 rounded-2xl bg-white shadow-sm border border-brand-blue/5"
            >
              <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-brand-blue/60 leading-relaxed">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Membership Types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {types.map((type) => (
            <div 
              key={type.name} 
              className={`p-12 rounded-3xl border-2 ${
                type.highlight ? 'border-brand-orange bg-white shadow-2xl' : 'border-brand-blue/10 bg-brand-light'
              }`}
            >
              <h3 className="text-3xl font-display font-bold mb-2">{type.name}</h3>
              <p className="text-brand-blue/60 mb-8 font-medium">{type.target}</p>
              <ul className="space-y-4 mb-12">
                {type.features.map(feature => (
                  <li key={feature} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-brand-orange" size={20} />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={type.highlight ? 'btn-primary w-full' : 'btn-secondary w-full'}>
                {type.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Application Form Section */}
        <section id="apply" className="bg-brand-blue rounded-3xl p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">Ready to lead?</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Start your application process today. Our secretariat will review your request and get back to you within 5 business days.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold">1</div>
                  <span className="font-medium">Submit Initial Interest</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold">2</div>
                  <span className="font-medium">Technical Consultation</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold">3</div>
                  <span className="font-medium">Board Approval</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-brand-blue">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2">City/Institution Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-brand-light border-none focus:ring-2 focus:ring-brand-orange" placeholder="e.g. Istanbul Metropolitan" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2">Country</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-brand-light border-none focus:ring-2 focus:ring-brand-orange" placeholder="e.g. Turkey" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">Contact Person</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-brand-light border-none focus:ring-2 focus:ring-brand-orange" placeholder="Full Name" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-brand-light border-none focus:ring-2 focus:ring-brand-orange" placeholder="email@municipality.gov" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">Membership Type</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-brand-light border-none focus:ring-2 focus:ring-brand-orange">
                    <option>Full Member (City)</option>
                    <option>Associate Member (NGO/Academic)</option>
                  </select>
                </div>
                <button type="submit" className="btn-primary w-full py-4 text-lg">Submit Application</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
