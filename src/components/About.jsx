import React from 'react';
import { ChefHat, Flame, ShieldAlert, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function About() {
  const tickerItems = [
    "AUTHENTIC KUZHI MANDI",
    "AL FAHAM CHARCOAL GRILLS",
    "SLOW SMOKED BASMATI RICE",
    "SIGNATURE GARLIC TOUM",
    "HANDPICKED ARABIC SPICES",
    "TRADITIONAL CLAY PIT COOKING",
  ];

  const features = [
    {
      icon: <Flame className="w-6 h-6 text-brand-gold" />,
      title: "Traditional Clay Pit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: <ChefHat className="w-6 h-6 text-brand-gold" />,
      title: "Master Chefs",
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-brand-gold" />,
      title: "Aromatic Saffron Rice",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];

  return (
    <section id="about" className="relative bg-brand-darker overflow-hidden">
      
      {/* Ticker Row */}
      <div className="w-full bg-brand-gold py-4 overflow-hidden border-y border-brand-gold/20 shadow-md">
        <div className="flex w-[200%] animate-scroll whitespace-nowrap">
          {/* Double array to create seamless loop */}
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="text-sm font-sans font-bold tracking-widest text-brand-dark uppercase">
                {item}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-brand-dark ml-8" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Detail */}
          <ScrollReveal className="lg:col-span-6 space-y-6">
            <span className="text-sm uppercase tracking-widest text-brand-gold font-bold">
              Our Culinary Heritage
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-light leading-tight">
              Where Fire Meets Centuries-Old Tradition
            </h2>
            <div className="w-20 h-1 bg-brand-gold rounded" />
            
            <p className="text-brand-light/70 font-sans leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-brand-light/70 font-sans leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="pt-4">
              <div className="p-4 rounded-xl border border-brand-gold/20 bg-brand-blue/5 flex items-start space-x-3.5">
                <span className="text-2xl mt-1">✨</span>
                <div>
                  <h4 className="font-serif text-brand-gold font-bold text-base">Authentic Spices Only</h4>
                  <p className="text-xs text-brand-light/60 mt-1 font-sans">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Highlights Grid */}
          <ScrollReveal className="lg:col-span-6 grid grid-cols-1 gap-6" delay={200}>
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="glass-card hover:glass-card-hover p-6 rounded-2xl flex items-start space-x-5"
              >
                <div className="p-3 bg-brand-gold/10 border border-brand-gold/25 rounded-xl shrink-0">
                  {feat.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-serif text-brand-light font-bold">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-brand-light/60 font-sans leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
