import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 1. Gather all the data from the form
    const formData = new FormData(e.currentTarget);
    
    // 2. Add your Web3Forms Access Key here!
    formData.append("access_key", "246cce6e-ca03-4576-9bb6-a6c88d119fdf");

    // 3. Send the data silently to Web3Forms
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        e.currentTarget.reset(); // Clears the form fields
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Form submission failed", error);
    }
  };

  return (
    <div className="pt-32 pb-40 bg-navy min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 p-32 opacity-[0.02] pointer-events-none">
        <MapPin className="w-[600px] h-[600px]" strokeWidth={0.5} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-white tracking-wide mb-6"
          >
            Direct <span className="text-gold italic font-light">Inquiries</span>
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-lg text-slate-400 font-light leading-8"
          >
            Connect with our international team to discuss sourcing, exclusive collections, or discrete procurement requirements.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Contact Information */}
          <div className="lg:col-span-4 space-y-12 h-fit">
            <h3 className="text-2xl font-serif text-white tracking-wide border-b border-navy-light/50 pb-6">Our Headquarters</h3>
            
            <div className="flex gap-5">
              <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" strokeWidth={1} />
              <div>
                <h4 className="text-white mb-2 tracking-wide text-xs uppercase font-medium">Hong Kong Office</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  Room 1702, 17/F<br />
                  Henan Building<br />
                  90 Jaffe Road<br />
                  Wan Chai, Hong Kong
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <Phone className="w-5 h-5 text-gold shrink-0 mt-1" strokeWidth={1} />
              <div>
                <h4 className="text-white mb-2 tracking-wide text-xs uppercase font-medium">Phone</h4>
                <p className="text-slate-400 text-sm font-light">
                  +62 817-9773-616
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <Mail className="w-5 h-5 text-gold shrink-0 mt-1" strokeWidth={1} />
              <div>
                <h4 className="text-white mb-2 tracking-wide text-xs uppercase font-medium">Email</h4>
                <p className="text-slate-400 text-sm font-light">
                  contact@indotradinglimited.com
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <Clock className="w-5 h-5 text-gold shrink-0 mt-1" strokeWidth={1} />
              <div>
                <h4 className="text-white mb-2 tracking-wide text-xs uppercase font-medium">Operating Hours</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  Monday - Friday<br />
                  8:30 AM - 5:30 PM (HKT)
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-10">
              <h3 className="text-2xl font-serif text-white tracking-wide border-b border-navy-light/50 pb-6 mb-12">Submit Requisition</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <label htmlFor="firstName" className="block text-xs text-slate-500 uppercase tracking-widest mb-2 font-medium">First Name</label>
                  <input required type="text" name="firstName" id="firstName" className="w-full px-0 py-3 bg-transparent border-b border-navy-light/60 text-white focus:border-gold outline-none transition-colors font-light text-sm" placeholder="e.g. Elena" />
                </div>
                <div className="relative">
                  <label htmlFor="lastName" className="block text-xs text-slate-500 uppercase tracking-widest mb-2 font-medium">Last Name</label>
                  <input required type="text" name="lastName" id="lastName" className="w-full px-0 py-3 bg-transparent border-b border-navy-light/60 text-white focus:border-gold outline-none transition-colors font-light text-sm" placeholder="e.g. Rossi" />
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="email" className="block text-xs text-slate-500 uppercase tracking-widest mb-2 font-medium">Business Email</label>
                <input required type="email" name="email" id="email" className="w-full px-0 py-3 bg-transparent border-b border-navy-light/60 text-white focus:border-gold outline-none transition-colors font-light text-sm" placeholder="elena@company.com" />
              </div>

              <div className="relative">
                <label htmlFor="subject" className="block text-xs text-slate-500 uppercase tracking-widest mb-2 font-medium">Subject</label>
                <select name="subject" id="subject" className="w-full px-0 py-3 bg-transparent border-b border-navy-light/60 text-white focus:border-gold outline-none transition-colors font-light appearance-none text-sm cursor-pointer">
                  <option className="bg-navy-dark">General Inquiry</option>
                  <option className="bg-navy-dark">Jewelry Sourcing</option>
                  <option className="bg-navy-dark">Raw Material Consultation</option>
                  <option className="bg-navy-dark">Strategic Partnership</option>
                </select>
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-xs text-slate-500 uppercase tracking-widest mb-2 font-medium">Message Details</label>
                <textarea required name="message" id="message" rows={4} className="w-full px-0 py-3 bg-transparent border-b border-navy-light/60 text-white focus:border-gold outline-none transition-colors resize-none font-light text-sm" placeholder="Please provide insight into your sourcing requirements..."></textarea>
              </div>

              <button 
                type="submit"
                className="inline-flex justify-center items-center bg-gold/90 text-navy-dark px-10 py-4 font-medium text-sm tracking-wide uppercase hover:bg-gold transition-colors mt-4"
              >
                Send Communication
              </button>

              {isSubmitted && (
                <div className="border border-gold/30 text-gold p-4 mt-6 text-sm font-light">
                  Your inquiry has been received. Our team will review your requirements and respond shortly.
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
