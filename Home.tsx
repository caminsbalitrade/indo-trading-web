import { motion } from 'motion/react';
import { ArrowRight, Globe2, TrendingUp, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-navy-dark text-slate-300">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 overflow-hidden min-h-[90vh] flex items-center border-b border-navy-light/50">
        <div className="absolute inset-0 bg-[url('https://i.imgur.com/VpQ4ST4.jpg')] bg-cover bg-center opacity-90" />
        
        {/* Simplified gradients for a calmer, more composed look */}
        <div className="absolute inset-0 bg-navy-dark/60 mix-blend-multiply" />
        <div className="absolute inset-y-0 left-0 w-full md:w-3/4 lg:w-[60%] bg-gradient-to-r from-navy-dark via-navy-dark/90 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <h1 className="text-4xl lg:text-6xl font-serif text-white tracking-tight leading-tight">
                Curated Fashion <br /><span className="text-gold italic font-light">Jewelry Sourcing</span>
              </h1>
              <p className="text-lg text-slate-300 leading-8 font-light max-w-xl">
                Indo Trading Limited facilitates international commerce with a focus on precise material selection, artisan-driven design, and understated contemporary craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Link to="/services" className="inline-flex justify-center items-center gap-3 bg-gold/90 text-navy-dark px-8 py-4 rounded-sm font-medium hover:bg-gold transition-colors tracking-wide text-sm uppercase">
                  Discover Our Work
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
                <Link to="/contact" className="inline-flex justify-center items-center gap-2 bg-transparent text-white border border-slate-500/30 px-8 py-4 rounded-sm font-medium hover:border-gold/50 transition-colors tracking-wide text-sm uppercase">
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-24">
            <h2 className="text-3xl font-serif tracking-wide text-white sm:text-4xl mb-8">A Deliberate Approach</h2>
            <p className="text-slate-400 font-light leading-8">
              We apply decades of strategic insight and cultural awareness to our international partnerships, ensuring precise execution from concept to delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { icon: Globe2, title: "International Access", desc: "Connecting distinct material markets with contemporary artisan networks globally." },
              { icon: TrendingUp, title: "Strategic Vision", desc: "Navigating emerging styles with clarity and market foresight." },
              { icon: ShieldCheck, title: "Measured Fidelity", desc: "A disciplined review process for every sourced stone, metal, and creation." },
              { icon: Clock, title: "Refined Execution", desc: "A streamlined supply chain focused on precision and reliable delivery." }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col items-center text-center px-4"
              >
                <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center mb-8 group-hover:border-gold/50 transition-colors">
                  <feature.icon className="w-6 h-6 text-gold/80" strokeWidth={1} />
                </div>
                <h3 className="text-lg font-serif text-white mb-4 tracking-wide">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-dark py-32 relative overflow-hidden border-t border-navy-light/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif text-white mb-8 tracking-wide">Advance your collection.</h2>
          <p className="text-slate-400 text-lg font-light leading-8 mb-12 max-w-2xl mx-auto">
            Collaborate with us to refine your sourcing framework and access curated global materials with clarity and intention.
          </p>
          <Link to="/contact" className="inline-flex justify-center items-center bg-gold/90 text-navy-dark px-10 py-4 rounded-sm font-medium text-sm tracking-wide uppercase hover:bg-gold transition-colors">
            Initiate Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
