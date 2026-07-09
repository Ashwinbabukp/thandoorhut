import React from 'react';
import { siteConfig } from '../config/site';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-brand-darker px-6 md:px-12 lg:px-24 section-padding">
      <div className="max-w-7xl mx-auto w-full z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-sm uppercase tracking-widest text-brand-gold font-bold">
            Visit Our Restaurant
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-light">
            Location &amp; Hours
          </h2>
          <div className="w-16 h-1 bg-brand-gold rounded mx-auto" />
          <p className="text-sm text-brand-light/60 font-sans leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column (5 Cols) */}
          <ScrollReveal className="lg:col-span-5 bg-brand-darker border border-brand-gold/15 rounded-3xl p-8 md:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-brand-light">Restaurant Details</h3>
              
              <div className="space-y-4 font-sans text-sm">
                {/* Address */}
                <div className="flex items-start space-x-4 p-5 rounded-2xl bg-brand-dark border border-brand-light/5 hover:border-brand-gold/10 transition-colors">
                  <div className="p-3 rounded-xl bg-brand-gold/15 text-brand-gold border border-brand-gold/10 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-brand-light">Our Address</span>
                    <span className="text-brand-light/60 leading-relaxed block mt-0.5">{siteConfig.address}</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 p-5 rounded-2xl bg-brand-dark border border-brand-light/5 hover:border-brand-gold/10 transition-colors">
                  <div className="p-3 rounded-xl bg-brand-gold/15 text-brand-gold border border-brand-gold/10 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-brand-light">Restaurant &amp; Delivery</span>
                    <a href={`tel:${siteConfig.phoneRaw}`} className="text-brand-gold hover:underline block mt-0.5">{siteConfig.phone}</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 p-5 rounded-2xl bg-brand-dark border border-brand-light/5 hover:border-brand-gold/10 transition-colors">
                  <div className="p-3 rounded-xl bg-brand-gold/15 text-brand-gold border border-brand-gold/10 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-brand-light">Email Support</span>
                    <a href={`mailto:${siteConfig.emailRaw}`} className="text-brand-light/60 hover:text-brand-gold block mt-0.5">{siteConfig.email}</a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4 p-5 rounded-2xl bg-brand-dark border border-brand-light/5 hover:border-brand-gold/10 transition-colors">
                  <div className="p-3 rounded-xl bg-brand-gold/15 text-brand-gold border border-brand-gold/10 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-brand-light">Dining Timing</span>
                    <span className="text-brand-light/60 block mt-0.5">{siteConfig.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Custom Interactive Vector Road Map (7 Cols) */}
          <ScrollReveal className="lg:col-span-7 rounded-3xl overflow-hidden border border-brand-gold/15 bg-brand-dark relative shadow-xl min-h-[350px] flex flex-col justify-end" delay={200}>
            <svg className="w-full h-full opacity-40 absolute inset-0" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              {/* Simulated roads */}
              <path d="M -50,100 Q 200,90 450,100" fill="none" stroke="#2596be" strokeWidth="6" />
              <path d="M 120,-50 L 120,250" fill="none" stroke="#2596be" strokeWidth="4" />
              <path d="M 280,-50 Q 250,100 280,250" fill="none" stroke="#2596be" strokeWidth="3" strokeDasharray="4 4" />
              {/* NH 66 highway representation */}
              <path d="M -50,25 Q 100,50 200,20 Q 300,5 450,30" fill="none" stroke="#1b6d8b" strokeWidth="15" opacity="0.5" />
              
              {/* Landmark tags */}
              <text x="50" y="20" fill="#fcfbf7" fontSize="8" fontFamily="sans-serif" opacity="0.5">National Highway 66 (NH 66)</text>
              <text x="135" y="45" fill="#fcfbf7" fontSize="8" fontFamily="sans-serif" opacity="0.4">Calicut University Campus</text>
              <text x="290" y="160" fill="#fcfbf7" fontSize="8" fontFamily="sans-serif" opacity="0.4">Kolappuram Junction</text>
            </svg>
            
            {/* Restaurant marker pin */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
              <span className="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-brand-gold opacity-50" />
              <div className="relative bg-brand-darker border border-brand-gold text-brand-gold px-4 py-1.5 rounded-full text-sm font-bold font-sans shadow-lg flex items-center justify-center">
                <span>Hotel Thandoor Hut</span>
              </div>
            </div>

            {/* Bottom address banner */}
            <div className="bg-brand-darker/95 backdrop-blur-md border-t border-brand-light/5 px-6 py-4 relative z-10 w-full text-center">
              <span className="text-xs text-brand-light/70 font-sans block">Athanikal, Kolappuram, Kerala (opposite bypass).</span>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
