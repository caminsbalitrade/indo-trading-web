import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-40 bg-navy-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-white tracking-wide mb-8"
          >
            Our <span className="text-gold italic font-light">Heritage</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-300 leading-8 font-light"
          >
            Founded on the principles of transparency and precise craftsmanship, we have evolved to serve as a discrete, reliable link for international jewelry sourcing.
          </motion.p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[450px] md:h-[550px] rounded overflow-hidden border border-navy-light/50"
          >
            <div className="absolute inset-0 bg-navy-dark/10 mix-blend-overlay z-10"></div>
            <img 
              src="https://i.imgur.com/Ii0ZwdB.jpg" 
              alt="Jewelry Crafting" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-serif text-white mb-8 tracking-wide">A Measured Legacy</h2>
            <p className="text-slate-400 mb-8 leading-8 font-light">
              Since 2005, Indo Trading Limited has dedicated itself to sourcing refined fashion jewelry, carefully vetted raw materials, and meticulously finished goods. We established our practice to provide discerning retailers with direct access to specialized artisans globally.
            </p>
            <p className="text-slate-400 mb-12 leading-8 font-light">
              Today, we facilitate international commerce with a focus on disciplined procurement, structural integrity, and cultural awareness—prioritizing quiet sophistication over volume.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-navy-light/30 pt-10">
              <div>
                <p className="text-4xl font-serif text-gold mb-3 text-light">18<span className="text-gold/60 text-3xl font-light italic ml-1">+</span></p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Years of Practice</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-gold mb-3 text-light">40<span className="text-gold/60 text-3xl font-light italic ml-1">+</span></p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Markets Served</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-navy rounded p-12 md:p-20 border border-navy-light/30">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            {[
              { icon: Target, title: "Our Objective", text: "To provide curated, ethically sourced fashion jewelry and raw materials that enable our clients to build elevated collections." },
              { icon: Eye, title: "Our Perspective", text: "To maintain a clear, uncompromised view on global procurement, balancing artisan traditions with contemporary requirements." },
              { icon: ShieldCheck, title: "Our Discipline", text: "Measured fidelity, ethical sourcing, and a resolute focus on the structural integrity of every partnership." },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center border border-gold/20 mb-8 hover:border-gold/50 transition-colors">
                  <item.icon className="w-6 h-6 text-gold/80" strokeWidth={1} />
                </div>
                <h3 className="text-lg font-serif text-white mb-5 tracking-wide">{item.title}</h3>
                <p className="text-slate-400 leading-8 font-light text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
