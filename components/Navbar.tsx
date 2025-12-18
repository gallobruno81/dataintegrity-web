import React, { useState } from 'react';
import { Menu, X, Database } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Resources', href: '/blog' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo(0, 0);
    } else if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate(`/${href}`);
      } else {
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  }

  return (
    <nav className="fixed w-full z-50 glass border-b border-slate-100/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={handleLogoClick}>
            <div className="bg-brand-600 p-2 rounded-xl mr-3 shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform duration-300">
              <Database className="h-6 w-6 text-white" />
            </div>
            <span className="font-display font-bold text-xl text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">DataIntegrity</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-slate-600 hover:text-brand-600 font-medium transition-colors bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <Button variant="primary" size="sm" onClick={() => handleNavClick('#contact')}>
              Start a Chat
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-4 px-3">
              <Button fullWidth onClick={() => handleNavClick('#contact')}>
                Start a Chat
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};