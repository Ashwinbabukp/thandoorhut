import React from 'react';
import { siteConfig } from '../config/site';
import { ArrowRight, Star, ShoppingBag, Clock, Flame, Utensils } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-gradient-to-b from-brand-dark to-brand-darker px-6 md:px-12 lg:px-24"
    >
      {/* Background Decorative Radial Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-blue/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-gold/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Huge Typographic Background Underlay */}
      <div className="absolute left-10 bottom-10 text-[10rem] md:text-[18rem] font-serif font-bold text-brand-gold/[0.02] select-none pointer-events-none tracking-widest leading-none uppercase z-0">
        Tandoor
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10 relative">
        
        {/* Left Column: Typography & CTAs (6 Cols) */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-4 md:space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-brand-accent/30 border border-brand-gold/20 px-4 py-1.5 rounded-full w-max">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold font-sans">
              Kolappuram, Kerala — Est. 2018
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-light leading-tight">
            Authentic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-500 font-serif italic">
              Indian &amp; Arabic
            </span> <br />
            Culinary Hub
          </h1>

          <p className="text-xs md:text-sm text-brand-light/70 max-w-xl font-sans leading-relaxed">
            {siteConfig.shortDesc} Experience fire-grilled meats, slow-cooked pit Mandi, and flaky Malabar porottas cooked by master chefs.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#menu"
              className="px-8 py-4 rounded-full bg-brand-gold text-brand-dark font-bold text-xs tracking-wider uppercase hover:bg-brand-gold/90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-2 group shadow-lg shadow-brand-gold/10"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#catering"
              className="px-8 py-4 rounded-full border border-brand-light/20 bg-brand-light/5 text-brand-light font-bold text-xs tracking-wider uppercase hover:border-brand-gold/40 hover:bg-brand-light/10 transition-all flex items-center space-x-2"
            >
              <span>Hut Kitchen Catering</span>
            </a>
          </div>

          {/* Key Stats Block */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-brand-light/10">
            {siteConfig.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="block text-xl md:text-2xl font-serif font-bold text-brand-gold">{stat.value}</span>
                <span className="block text-[10px] uppercase tracking-wider text-brand-light/50 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Premium Dual Overlapping Platter Collage (6 Cols) */}
        <div className="lg:col-span-6 relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center z-10 font-sans">
          
          {/* Spinning Dotted Accent Ring (Background) */}
          <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-brand-gold/10 border-dashed animate-spin-slow pointer-events-none z-0" />
          
          {/* Main Mandi Platter Wrapper (Centering Ring and Platter) */}
          <div className="absolute w-[260px] h-[260px] md:w-[420px] md:h-[420px] top-4 left-2 md:left-8 z-20 flex items-center justify-center">
            {/* Concentric Gold Halo Ring */}
            <div className="absolute w-full h-full rounded-full border-2 border-dashed border-brand-gold/30 animate-spin-slow pointer-events-none" />
            
            {/* Platter: Mandi */}
            <div className="w-[230px] h-[230px] md:w-[380px] md:h-[380px] rounded-full p-2.5 bg-gradient-to-tr from-brand-gold/20 to-brand-blue/20 shadow-2xl animate-float border border-brand-gold/20 overflow-hidden">
              <div className="w-full h-full rounded-full overflow-hidden bg-brand-darker flex items-center justify-center relative">
                <img
                  src="/assets/mandi.webp"
                  alt="Hotel Thandoor Hut Signature Mandi Platter"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div class="flex flex-col items-center justify-center p-6 text-center w-full h-full bg-gradient-to-tr from-brand-dark to-brand-accent">
                        <span class="text-5xl mb-2">🍗</span>
                        <h4 class="font-serif text-base font-bold text-brand-gold uppercase tracking-wider">Kuzhi Mandi</h4>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
          </div>

          {/* Secondary Porotta Platter Wrapper (Centering Ring and Platter) */}
          <div className="absolute w-[150px] h-[150px] md:w-[240px] md:h-[240px] bottom-4 right-2 md:right-4 z-30 flex items-center justify-center">
            {/* Concentric Gold Halo Ring (Reverse Spin) */}
            <div className="absolute w-full h-full rounded-full border-2 border-dotted border-brand-gold/40 pointer-events-none animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />

            {/* Platter: Porotta & Chicken Curry */}
            <div className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-full p-1.5 bg-gradient-to-tr from-brand-gold/30 to-brand-blue/30 shadow-2xl animate-float border-2 border-brand-gold relative overflow-hidden">
              <div className="w-full h-full rounded-full overflow-hidden bg-brand-darker flex items-center justify-center relative">
                <img
                  src="/assets/porata%20chicken%20cury.webp"
                  alt="Hotel Thandoor Hut Special Porotta & Chicken Curry"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div class="flex flex-col items-center justify-center p-4 text-center w-full h-full bg-gradient-to-tr from-brand-dark to-brand-accent">
                        <span class="text-2xl mb-1">🥘</span>
                        <h5 class="font-serif text-xs font-bold text-brand-gold uppercase tracking-wider">Malabar Curry</h5>
                      </div>
                    `;
                  }}
                />
              </div>
              {/* Local Favorite Badge */}
              <div className="absolute -bottom-2 -left-2 bg-brand-gold text-brand-dark text-[10px] font-bold font-sans px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                Local Favorite
              </div>
            </div>
          </div>

          {/* Floating Card 1: Ratings Badge (Top Right) */}
          <div className="absolute top-0 right-0 md:top-2 md:right-2 bg-brand-darker/90 backdrop-blur-md border border-brand-gold/30 rounded-2xl p-4 shadow-xl flex items-center space-x-3.5 z-30 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="p-2 rounded-xl bg-brand-gold/10 text-brand-gold">
              <Star className="w-5 h-5 fill-brand-gold" />
            </div>
            <div>
              <span className="block text-sm font-bold text-brand-light leading-tight">4.0 Google Rating</span>
              <span className="text-[10px] text-brand-light/45 leading-none">1,027+ Guest Reviews</span>
            </div>
          </div>

          {/* Floating Card 2: Late Night Badge (Bottom Left) */}
          <div className="absolute bottom-0 left-0 md:bottom-2 md:left-2 bg-brand-darker/90 backdrop-blur-md border border-brand-gold/30 rounded-2xl p-4 shadow-xl flex items-center space-x-3.5 z-30 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="p-2 rounded-xl bg-brand-gold/10 text-brand-gold">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-sm font-bold text-brand-light leading-tight">Open Late Night</span>
              <span className="text-[10px] text-brand-light/45 leading-none">Open Daily till 2:00 AM</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
