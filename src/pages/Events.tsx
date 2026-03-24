import { motion } from 'motion/react';
import { useLanguage } from '../hooks/useLanguage';
import { events } from '../data';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Events() {
  const { language } = useLanguage();

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-display font-bold mb-6">Events</h1>
          <p className="text-xl text-brand-blue/70 leading-relaxed">
            Join our conferences, trainings, and workshops. Connect with the global community of resilience experts.
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white p-8 rounded-3xl border border-brand-blue/5 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row md:items-center gap-8"
            >
              <div className="flex flex-col items-center justify-center w-24 h-24 bg-brand-light rounded-2xl text-brand-blue shrink-0">
                <span className="text-xs font-bold uppercase tracking-widest opacity-40">
                  {new Date(event.date).toLocaleDateString(language === 'en' ? 'en-US' : 'tr-TR', { month: 'short' })}
                </span>
                <span className="text-3xl font-display font-bold">
                  {new Date(event.date).getDate()}
                </span>
              </div>

              <div className="flex-grow">
                <div className="flex items-center space-x-3 mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${
                    event.type === 'conference' ? 'bg-blue-100 text-blue-600' :
                    event.type === 'training' ? 'bg-green-100 text-green-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    {event.type}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-orange transition-colors">
                  {event.title[language]}
                </h3>
                <div className="flex flex-wrap gap-6 text-sm text-brand-blue/60 font-medium">
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-brand-orange" />
                    <span>{event.location[language]}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-brand-orange" />
                    <span>09:00 - 17:00</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0">
                <button className="btn-outline py-3 px-8">Register Now</button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Past Events Link */}
        <div className="mt-16 text-center">
          <button className="text-brand-blue/40 font-bold hover:text-brand-blue transition-colors flex items-center space-x-2 mx-auto">
            <span>View Past Events Archive</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
