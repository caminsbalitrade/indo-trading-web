import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-navy-light text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          <div className="col-span-1 md:col-span-1 border-r-0 md:border-r border-navy-light pr-8">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 flex items-center justify-center">
                <div className="w-8 h-8 rounded border border-gold flex items-center justify-center bg-transparent">
                  <span className="text-gold font-serif text-xl">I</span>
                </div>
              </div>
              <span className="font-serif text-xl tracking-wider text-white">INDO TRADING</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Premium fashion jewelry sourcing, raw materials, and finished goods bridging global markets since 2005.
            </p>
            <div className="flex space-x-5 mt-8">
              <a href="#" className="text-slate-400 hover:text-gold transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-gold transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-gold transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-serif mb-6 uppercase tracking-wider text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif mb-6 uppercase tracking-wider text-sm font-semibold">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-gold transition-colors">Jewelry Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Raw Materials</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Finished Goods</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Quality Assurance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif mb-6 uppercase tracking-wider text-sm font-semibold">Contact Us</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>Room 1702, 17/F<br />Henan Building<br />90 Jaffe Road<br />Wan Chai, Hong Kong</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>+62 817-9773-616</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>contact@indotradinglimited.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-navy-light mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Indo Trading Limited. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
