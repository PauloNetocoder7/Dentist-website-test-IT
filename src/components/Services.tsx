import { motion } from 'motion/react';
import { 
  Smile, 
  Sparkles, 
  Stethoscope, 
  ShieldCheck, 
  Heart, 
  Trash2,
  Clock,
  ChevronRight
} from 'lucide-react';

const services = [
  {
    title: 'Odontoiatria Generale',
    description: 'Esami completi, igiene dentale e radiografie digitali per mantenere la salute del tuo sorriso.',
    icon: Stethoscope,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Odontoiatria Estetica',
    description: 'Trasforma il tuo sorriso con faccette in ceramica personalizzate, sbiancamenti e soluzioni estetiche.',
    icon: Sparkles,
    color: 'bg-purple-50 text-purple-600'
  },
  {
    title: 'Odontoiatria Restaurativa',
    description: 'Corone resistenti, ponti e otturazioni estetiche progettate per apparire e sembrare del tutto naturali.',
    icon: ShieldCheck,
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    title: 'Sbiancamento Dentale',
    description: 'Trattamenti sbiancanti professionali per illuminare il tuo sorriso in modo sicuro ed estremamente efficace.',
    icon: Smile,
    color: 'bg-amber-50 text-amber-600'
  },
  {
    title: 'Impianti Dentali',
    description: 'Soluzioni permanenti per denti mancanti che ripristinano la piena funzionalità orale e la sicurezza.',
    icon: Heart,
    color: 'bg-rose-50 text-rose-600'
  },
  {
    title: 'Emergenze Dentistiche',
    description: 'Assistenza tempestiva per problemi urgenti, mirata ad alleviare il dolore e prevenire danni futuri.',
    icon: Clock,
    color: 'bg-orange-50 text-orange-600'
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Eccellenza Clinica
          </motion.h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-xl border border-slate-100 flex flex-col items-center text-center transition-all duration-300 ${
                index === 2 ? 'bg-sky-800 text-white shadow-xl shadow-sky-800/20' : 'bg-slate-50 hover:bg-white hover:shadow-lg'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                index === 2 ? 'bg-sky-700 text-white' : 'bg-sky-100 text-sky-600'
              }`}>
                <service.icon size={24} />
              </div>
              <h3 className={`font-bold mb-3 ${index === 2 ? 'text-white' : 'text-slate-800'}`}>{service.title}</h3>
              <p className={`text-xs leading-relaxed ${index === 2 ? 'opacity-80' : 'text-slate-500'}`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
