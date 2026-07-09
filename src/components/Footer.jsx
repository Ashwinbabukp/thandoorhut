import React from 'react';
import { siteConfig } from '../config/site';
import { Instagram, Facebook, MessageSquare, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-darker text-brand-light/60 py-12 border-t border-brand-gold/10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full z-10 relative">
        
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand details */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/assets/logo-golden.svg"
                alt={siteConfig.name}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xs leading-relaxed max-w-xs font-sans">
              Authentic Arabian culinary experience in Kerala. Cooked over charcoal pit firewood in traditional style.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-wider text-brand-light font-bold font-sans">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-sans">
              <a href="#home" className="hover:text-brand-gold transition-colors">Home</a>
              <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
              <a href="#menu" className="hover:text-brand-gold transition-colors">Menu</a>
              <a href="#reviews" className="hover:text-brand-gold transition-colors">Reviews</a>
              <a href="#catering" className="hover:text-brand-gold transition-colors">Catering</a>
              <a href="#contact" className="hover:text-brand-gold transition-colors">Location</a>
            </div>
          </div>

          {/* Col 3: Hours & Support */}
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-wider text-brand-light font-bold font-sans">Kitchen Hours</h4>
            <p className="text-xs leading-relaxed font-sans">
              {siteConfig.hours} <br />
              <span className="text-brand-gold mt-1 block">Dine-in, Takeaway &amp; Delivery</span>
            </p>
          </div>

          {/* Col 4: Social Connections */}
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-wider text-brand-light font-bold font-sans">Follow Our Fire</h4>
            <div className="flex space-x-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-brand-light/5 hover:bg-brand-gold hover:text-brand-dark transition-all text-brand-light/80"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-brand-light/5 hover:bg-brand-gold hover:text-brand-dark transition-all text-brand-light/80"
                title="Follow on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-brand-light/5 hover:bg-brand-gold hover:text-brand-dark transition-all text-brand-light/80"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-light/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
          <div className="font-sans">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Designed for Premium Mandi Lovers.
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-full bg-brand-light/5 border border-brand-light/10 text-brand-light/80 hover:border-brand-gold hover:text-brand-gold transition-all cursor-pointer font-sans"
          >
            <span>Back to top</span>
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
