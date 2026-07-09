import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, MapPin, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/site';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Our Process', href: '#process' },
    { label: 'Menu', href: '#menu' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Catering', href: '#catering' },
    { label: 'Location', href: '#contact' },
  ];

  return (
    <>
      {/* Top Banner (Desktop Only) */}
      <div className="hidden lg:block bg-brand-darker text-brand-light/60 py-2 border-b border-brand-gold/10 text-xs transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-brand-gold transition-colors">{siteConfig.phone}</a>
            </span>
            <span className="flex items-center space-x-2">
              <Clock className="w-3.5 h-3.5 text-brand-gold" />
              <span>{siteConfig.hours}</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              <span className="max-w-[200px] truncate">{siteConfig.address}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed top-0 lg:top-8 left-0 right-0 z-40 mx-auto max-w-7xl lg:px-6 transition-all duration-300 ${
          isScrolled ? 'top-0 lg:top-0' : ''
        }`}
      >
        <div
          className={`flex items-center justify-between px-6 py-4 transition-all duration-300 ${
            isScrolled
              ? 'bg-brand-darker/95 backdrop-blur-md shadow-lg border-b border-brand-gold/20'
              : 'bg-brand-darker/60 backdrop-blur-sm lg:rounded-2xl border border-brand-gold/10'
          }`}
        >
          {/* Brand Logo/Name */}
          <a href="#home" className="flex items-center group">
            <img
              src="/assets/logo-golden.svg"
              alt={siteConfig.name}
              className="h-12 w-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
            />
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-brand-light/80 hover:text-brand-gold transition-colors relative group"
              >
                {link.label}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            ))}
          </div>

          {/* Nav CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="px-5 py-2.5 rounded-full border border-brand-gold text-brand-gold text-sm font-semibold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-light/80 hover:text-brand-gold transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-[80%] max-w-[400px] bg-brand-darker border-l border-brand-gold/20 z-50 p-8 flex flex-col justify-between transition-transform duration-500 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex justify-between items-center pb-6 border-b border-brand-gold/10">
            <div className="flex items-center">
              <img
                src="/assets/logo-golden.svg"
                alt={siteConfig.name}
                className="h-9 w-auto object-contain"
              />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-brand-light/80 hover:text-brand-gold transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-5 pt-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-brand-light/80 hover:text-brand-gold transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-brand-gold/30">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="space-y-6 pt-6 border-t border-brand-gold/10">
          <div className="space-y-3 text-sm text-brand-light/60">
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
              <span>{siteConfig.address}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-4 h-4 text-brand-gold shrink-0" />
              <span>{siteConfig.hours}</span>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="w-full py-3 rounded-xl bg-brand-gold text-brand-dark font-semibold text-center hover:bg-brand-gold/90 transition-colors flex justify-center items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call {siteConfig.phone}</span>
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl border border-brand-gold/30 text-brand-gold font-semibold text-center hover:bg-brand-gold/5 transition-colors flex justify-center items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
