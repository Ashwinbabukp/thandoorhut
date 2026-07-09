import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { Star, PhoneCall, Heart } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('mandi');

  const filteredItems = siteConfig.menu.items.filter(item => item.category === activeCategory);

  const getSpiceRating = (level) => {
    if (level === 0) return null;
    return (
      <span className="flex items-center space-x-0.5 text-xs bg-red-500/10 border border-red-500/20 text-red-400 px-2.5 py-0.5 rounded-full font-sans font-bold">
        <span>🌶️</span>
        <span>{level === 1 ? 'Mild' : level === 2 ? 'Medium' : 'Hot'}</span>
      </span>
    );
  };

  return (
    <section id="menu" className="relative bg-brand-dark px-6 md:px-12 lg:px-24 section-padding">
      <div className="max-w-7xl mx-auto w-full z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-sm uppercase tracking-widest text-brand-gold font-bold">
            Curated Culinary Offerings
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-light">
            Explore Our Premium Menu
          </h2>
          <div className="w-16 h-1 bg-brand-gold rounded mx-auto" />
          <p className="text-sm text-brand-light/60 font-sans leading-relaxed">
            Savor authentic Arabian recipes prepared in wood-fired clay pits. Filter by categories to explore our slow-cooked specialties.
          </p>
        </div>

        {/* Yellow Segmented Toggle (Forced Single Row Grid on Mobile) */}
        <div className="flex justify-center mb-12 px-4 w-full">
          <div className="grid grid-cols-4 p-1 bg-brand-darker border border-brand-gold/30 rounded-full w-full max-w-md shadow-lg shadow-brand-gold/5">
            {siteConfig.menu.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`py-2.5 px-1 rounded-full text-[10px] xs:text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 font-sans cursor-pointer text-center truncate ${
                  activeCategory === cat.id
                    ? 'bg-brand-gold text-brand-dark shadow-md shadow-brand-gold/15'
                    : 'text-brand-gold hover:text-brand-light hover:bg-brand-gold/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-card hover:glass-card-hover rounded-3xl rounded-tr-none rounded-bl-none p-6 flex flex-col justify-between group overflow-hidden relative"
            >
              {/* Card Header Info */}
              <div>
                <div className="flex justify-between items-start mb-4">
                  {/* Badge */}
                  {item.badge ? (
                    <span className="text-[10px] uppercase tracking-wider font-bold bg-brand-gold/10 border border-brand-gold/30 text-brand-gold px-3 py-1 rounded-full font-sans">
                      {item.badge}
                    </span>
                  ) : (
                    <div />
                  )}
                  {/* Spice Level */}
                  {getSpiceRating(item.spicyLevel)}
                </div>

                {/* Name */}
                <h3 className="text-2xl font-serif font-bold text-brand-light mb-2 group-hover:text-brand-gold transition-colors">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-brand-light/60 font-sans leading-relaxed mb-6 line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Card Footer Info */}
              <div className="pt-4 border-t border-brand-light/10 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-brand-light/40 font-medium">Price</span>
                  <span className="text-2xl font-serif font-bold text-brand-gold">{item.price}</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1 text-brand-gold bg-brand-gold/5 px-2.5 py-1 rounded-lg border border-brand-gold/10">
                    <Star className="w-3.5 h-3.5 fill-brand-gold" />
                    <span className="text-xs font-bold font-sans">{item.rating}</span>
                  </div>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="p-3 rounded-full bg-brand-accent/40 border border-brand-gold/20 text-brand-light hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 shadow-md group/btn"
                    title="Order by Phone"
                  >
                    <PhoneCall className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-brand-gold/5 rounded-full filter blur-xl group-hover:bg-brand-gold/10 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
