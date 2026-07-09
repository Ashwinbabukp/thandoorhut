import React from 'react';
import { siteConfig } from '../config/site';
import { Flame, Utensils, ShieldCheck, Check, MessageSquare, Phone, Users, Map } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Catering() {
  const packages = [
    {
      title: "Royal Arabian Banquet",
      subtitle: "Authentic Middle-Eastern Feast",
      items: ["Charcoal Chicken & Mutton Kuzhi Mandi", "Signature Garlic Toum & Spicy Salata", "Arabian Sulaimani Tea & Mint Lime", "Live Pit digging & cooking setup"],
      price: "From ₹250 / plate"
    },
    {
      title: "Malabar Fusion Fest",
      subtitle: "Flavors of Northern Kerala",
      items: ["Steamed banana-leaf wrapped Kee Porotta", "Fiery Beef Chili & Chicken Kondattam", "Soft Rumali Rotis & Flaky Porottas", "Live hot-griddle service counters"],
      price: "From ₹220 / plate"
    },
    {
      title: "Tandoori BBQ Fiesta",
      subtitle: "Live Charcoal Grills Station",
      items: ["Tandoori Chicken & Afghani Grills", "Crushed Black Pepper Alfaham Chicken", "Freshly baked Tandoori Rotis & Naans", "Live clay tandoor oven setups"],
      price: "From ₹240 / plate"
    }
  ];

  const pillars = [
    {
      icon: <Flame className="w-5 h-5" />,
      title: "Live Pit Mandi Cooking",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      icon: <Utensils className="w-5 h-5" />,
      title: "Live Tandoor Stations",
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Scale: 50 to 2000+ Guests",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
      icon: <Map className="w-5 h-5" />,
      title: "Malappuram & Kozhikode",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur."
    }
  ];

  return (
    <section id="catering" className="relative bg-brand-dark px-6 md:px-12 lg:px-24 section-padding overflow-hidden">
      {/* Decorative background radial lights */}
      <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-brand-blue/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] bg-brand-gold/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-sm uppercase tracking-widest text-brand-gold font-bold">
            Elite Outdoor Catering
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-light">
            Hut Kitchen Services
          </h2>
          <div className="w-16 h-1 bg-brand-gold rounded mx-auto" />
          <p className="text-sm text-brand-light/60 font-sans leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
          </p>
        </div>

        {/* Catering Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pil, idx) => (
            <ScrollReveal
              key={idx}
              className="flex h-full"
              delay={idx * 100}
            >
              <div className="glass-card hover:glass-card-hover p-6 rounded-3xl flex flex-col justify-between w-full">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/25 text-brand-gold flex items-center justify-center">
                    {pil.icon}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-brand-light">{pil.title}</h3>
                  <p className="text-xs text-brand-light/60 font-sans leading-relaxed">{pil.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Menu Packages Subsection */}
        <div className="space-y-8 mb-16">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-serif font-bold text-brand-light">Signature Catering Packages</h3>
            <p className="text-xs text-brand-light/50 font-sans">Choose or combine packages to craft your customized event menu.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <ScrollReveal
                key={idx}
                className="flex h-full"
                delay={idx * 150}
              >
                <div className="bg-brand-darker border border-brand-gold/15 rounded-3xl p-8 flex flex-col justify-between relative hover:border-brand-gold/40 transition-colors group w-full">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-brand-gold font-bold font-sans block mb-1">{pkg.subtitle}</span>
                    <h4 className="text-xl font-serif font-bold text-brand-light mb-6 group-hover:text-brand-gold transition-colors">{pkg.title}</h4>
                    
                    <ul className="space-y-3.5 mb-8">
                      {pkg.items.map((item, i) => (
                        <li key={i} className="flex items-start space-x-3 text-xs text-brand-light/70 font-sans">
                          <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-brand-light/5 flex items-center justify-between">
                    <span className="text-xs text-brand-light/45 font-sans font-medium">Estimated Pricing</span>
                    <span className="text-lg font-serif font-bold text-brand-gold">{pkg.price}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Summary Banner & CTA */}
        <ScrollReveal className="glass-card rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6 border border-brand-gold/20 relative overflow-hidden" delay={100}>
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-brand-gold/5 rounded-full filter blur-xl" />
          
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-light">Let's Design Your Event Menu</h3>
          <p className="text-sm text-brand-light/70 max-w-2xl mx-auto font-sans leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/919847911116?text=Hello%20Hut%20Kitchen%2C%20I%20would%20like%20to%20inquire%20about%20your%20catering%20services%20for%20an%20upcoming%20event.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-brand-gold text-brand-dark font-bold text-sm tracking-wider uppercase hover:bg-brand-gold/90 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-brand-gold/10 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="px-8 py-4 rounded-full border border-brand-light/20 bg-brand-light/5 text-brand-light font-bold text-sm tracking-wider uppercase hover:border-brand-gold/40 hover:bg-brand-light/10 transition-all flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>Call Catering Manager</span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
