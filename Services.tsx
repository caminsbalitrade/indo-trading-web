import { motion } from 'motion/react';
import { Sparkles, Gem, ArrowRight, ShieldCheck, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Precision Sourcing',
    description: 'We connect you with specialized artisans and vetted suppliers globally. From trend discovery to factory selection, our team ensures your collections meet rigorous international standards.',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80'
  },
  {
    id: 'materials',
    icon: Gem,
    title: 'Raw Materials Procurement',
    description: 'Provide secure access to rare stones, pearls, and premium metal alloys. We source raw materials ethically, verifying authenticity and quality before they reach manufacturing facilities.',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=80'
  },
  {
    id: 'finished-goods',
    icon: Sparkles,
    title: 'Finished Goods Curation',
    description: 'Curated collections prepared for international retail. We manage the end-to-end purchasing of finished fashion pieces, ensuring design integrity and a refined presentation.',
    image: 'https://i.imgur.com/ORrX2W1.jpg'
  },
  {
    id: 'quality',
    icon: ShieldCheck,
    title: 'Measured Quality Assurance',
    description: 'Rigorous multi-stage inspections. Every clasp, setting, and polish is reviewed by our specialists to guarantee structural integrity and high aesthetic fidelity.',
    image: 'https://i.imgur.com/vSv4fPM.jpg'
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-40 bg-navy-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-white tracking-wide mb-8"
          >
            Our <span className="text-gold italic font-light">Capabilities</span>
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-lg text-slate-300 font-light leading-8"
          >
            Comprehensive sourcing and curation frameworks designed for precise international procurement.
          </motion.p>
        </div>

        <div className="space-y-40">
          {services.map((service, idx) => (
            <div 
              key={service.id}
              className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full lg:w-1/2 relative h-[450px] md:h-[550px] rounded overflow-hidden border border-navy-light/50"
              >
                <div className="absolute inset-0 bg-navy-dark/10 mix-blend-overlay z-10 transition-opacity duration-500 hover:opacity-0"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full lg:w-1/2"
              >
                <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center mb-10 hover:border-gold/50 transition-colors">
                  <service.icon className="w-6 h-6 text-gold/80" strokeWidth={1} />
                </div>
                <h2 className="text-3xl font-serif text-white mb-6 tracking-wide">{service.title}</h2>
                <p className="text-lg text-slate-400 mb-12 leading-8 font-light">
                  {service.description}
                </p>
                <div className="border-b border-navy-light/50 pb-2 inline-block">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-3 font-medium text-gold hover:text-gold-light transition-colors uppercase tracking-widest text-sm group"
                  >
                    Initiate Inquiry
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
