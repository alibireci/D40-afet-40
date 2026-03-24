import { motion } from 'motion/react';
import { useLanguage } from '../hooks/useLanguage';
import { Handshake, Building2, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';

export default function Partners() {
  const partnerTypes = [
    { title: 'Municipalities', icon: <Building2 />, desc: 'Cities leading the way in urban resilience.' },
    { title: 'NGOs', icon: <Handshake />, desc: 'Organizations implementing change on the ground.' },
    { title: 'Universities', icon: <GraduationCap />, desc: 'Academic institutions providing research and data.' },
    { title: 'Private Sector', icon: <Briefcase />, desc: 'Companies offering innovative technical solutions.' },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-display font-bold mb-6">Our Partners</h1>
          <p className="text-xl text-brand-blue/70 leading-relaxed">
            Resilience is a collective effort. We partner with the world\'s leading organizations to deliver impact at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {partnerTypes.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-brand-blue/5 shadow-sm"
            >
              <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-orange mb-6">
                {type.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{type.title}</h3>
              <p className="text-sm text-brand-blue/60 leading-relaxed">{type.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos Grid */}
        <section className="mb-32">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Global Network</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-20 bg-brand-light rounded-xl flex items-center justify-center font-display font-bold text-brand-blue">
                PARTNER {i + 1}
              </div>
            ))}
          </div>
        </section>

        {/* Become a Partner CTA */}
        <section className="bg-brand-orange rounded-[3rem] p-12 md:p-20 text-white text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Become a Partner</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join our ecosystem of experts and organizations. Together, we can build more resilient urban futures.
          </p>
          <button className="bg-brand-blue text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center space-x-3 mx-auto">
            <span>Start Partnership Inquiry</span>
            <ArrowRight size={20} />
          </button>
        </section>
      </div>
    </div>
  );
}
