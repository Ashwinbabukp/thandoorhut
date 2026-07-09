import React from 'react';
import { Flame, Compass, HelpCircle, Layers, Droplets } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const PROCESS_STEPS = [
  {
    phase: "Phase 01",
    title: "Hardwood Sourcing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    icon: <Compass className="w-5 h-5" />,
    badge: "The Foundation"
  },
  {
    phase: "Phase 02",
    title: "24-Hour Spice Bath",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
    icon: <Droplets className="w-5 h-5" />,
    badge: "The Flavor"
  },
  {
    phase: "Phase 03",
    title: "Sealed Clay Pit (Kuzhi)",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    icon: <Flame className="w-5 h-5" />,
    badge: "The Cooking"
  },
  {
    phase: "Phase 04",
    title: "Saffron Smoke Infusion",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <Layers className="w-5 h-5" />,
    badge: "The Finish"
  }
];

export default function CulinaryProcess() {
  return (
    <section id="process" className="relative bg-brand-dark px-6 md:px-12 lg:px-24 section-padding overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-blue/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-brand-gold/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="text-sm uppercase tracking-widest text-brand-gold font-bold">
            The Magic Behind The Pit
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-light">
            Our Traditional Pit Craft
          </h2>
          <div className="w-16 h-1 bg-brand-gold rounded mx-auto" />
          <p className="text-sm text-brand-light/60 font-sans leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-brand-gold/20 max-w-4xl mx-auto pl-8 md:pl-12 space-y-16">
          {PROCESS_STEPS.map((step, idx) => (
            <ScrollReveal key={idx} className="relative group" delay={idx * 150}>
              {/* Timeline marker */}
              <div className="absolute -left-[48px] md:-left-[64px] top-0 w-8 h-8 rounded-full bg-brand-darker border border-brand-gold flex items-center justify-center text-brand-gold group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-300 shadow-md">
                {step.icon}
              </div>

              {/* Step Card Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Step Info Left (4 cols) */}
                <div className="md:col-span-4 space-y-2">
                  <span className="text-xs uppercase tracking-widest font-sans font-bold text-brand-gold/60 block">
                    {step.phase}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-light group-hover:text-brand-gold transition-colors">
                    {step.title}
                  </h3>
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider bg-brand-light/5 border border-brand-light/10 text-brand-light/75 px-3 py-1 rounded-full font-sans">
                    {step.badge}
                  </span>
                </div>

                {/* Step Description Right (8 cols) */}
                <div className="md:col-span-8">
                  <p className="text-sm text-brand-light/60 leading-relaxed font-sans group-hover:text-brand-light/95 transition-colors">
                    {step.desc}
                  </p>
                </div>

              </div>

              {/* Subtle line connection */}
              <div className="absolute left-[-8px] bottom-0 w-4 h-[1px] bg-brand-gold/10 group-hover:bg-brand-gold/30 transition-colors" />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
