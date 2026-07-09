import React from 'react';
import { siteConfig } from '../config/site';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-brand-dark px-6 md:px-12 lg:px-24 section-padding">
      <div className="max-w-7xl mx-auto w-full z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-sm uppercase tracking-widest text-brand-gold font-bold">
            Guest Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-light">
            Loved By Mandi Enthusiasts
          </h2>
          <div className="w-16 h-1 bg-brand-gold rounded mx-auto" />
          <p className="text-sm text-brand-light/60 font-sans leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Reviews Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Summary Box (4 Cols) */}
          <div className="lg:col-span-4 bg-brand-darker border border-brand-gold/10 rounded-3xl p-8 text-center space-y-6">
            <h3 className="text-xl font-serif font-bold text-brand-light">Google Reviews</h3>
            <div>
              <span className="text-6xl font-serif font-bold text-brand-gold block">4.5</span>
              <div className="flex justify-center space-x-1.5 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <span className="text-xs text-brand-light/50 block mt-2">Based on 350+ verified reviews</span>
            </div>

            <div className="border-t border-brand-light/10 pt-6 space-y-3.5">
              <div className="flex items-center justify-between text-xs font-sans">
                <span className="text-brand-light/60">Food Quality</span>
                <div className="w-24 bg-brand-light/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-brand-gold h-full w-[95%]" />
                </div>
              </div>
              <div className="flex items-center justify-between text-xs font-sans">
                <span className="text-brand-light/60">Spice Marinade</span>
                <div className="w-24 bg-brand-light/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-brand-gold h-full w-[90%]" />
                </div>
              </div>
              <div className="flex items-center justify-between text-xs font-sans">
                <span className="text-brand-light/60">Ambiance</span>
                <div className="w-24 bg-brand-light/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-brand-gold h-full w-[85%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Testimonial Feed (8 Cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteConfig.reviews.map((rev) => (
              <div
                key={rev.id}
                className="glass-card hover:glass-card-hover p-8 rounded-3xl relative flex flex-col justify-between"
              >
                <div>
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-gold/10" />
                  
                  {/* Rating Stars */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                    ))}
                    {[...Array(5 - rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-brand-light/20" />
                    ))}
                  </div>

                  <p className="text-sm text-brand-light/75 font-sans leading-relaxed italic mb-6">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-brand-light/5 text-xs">
                  <span className="font-sans font-bold text-brand-light">{rev.name}</span>
                  <span className="text-brand-light/40">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
