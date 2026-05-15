import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-navy/95 backdrop-blur-md sticky top-0 z-50 border-b border-navy-light shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <div className="w-8 h-8 rounded border border-gold flex items-center justify-center bg-navy-dark">
                  <span className="text-gold font-serif text-xl">I</span>
                </div>
              </div>
              <span className="font-serif text-xl tracking-wider text-white">INDO TRADING</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm tracking-wide transition-colors hover:text-gold ${
                  isActive(item.href) ? 'text-gold border-b border-gold pb-1' : 'text-slate-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-navy-dark px-6 py-2 rounded-sm text-sm font-semibold hover:bg-gold-light transition-colors"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-gold p-2 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-navy-light bg-navy">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base ${
                  isActive(item.href)
                    ? 'text-gold bg-navy-light'
                    : 'text-slate-300 hover:text-gold hover:bg-navy-dark'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
