import React, { useState } from 'react';
import { ShieldCheck, Users, Flame, Utensils } from 'lucide-react';

const MEATS = [
  { id: 'chicken', name: 'Charcoal Chicken', basePrice: 190, icon: '🍗' },
  { id: 'beef', name: 'Slow-Cooked Beef', basePrice: 260, icon: '🥩' },
  { id: 'mutton', name: 'Royal Mutton Lamb', basePrice: 380, icon: '🍖' }
];

const PORTIONS = [
  { id: 'quarter', name: 'Quarter Platter', multiplier: 1.0, serves: '1 Person', desc: 'Single portion served with rice, salata, & garlic paste.' },
  { id: 'half', name: 'Half Platter', multiplier: 1.8, serves: '2 People', desc: 'Shareable mid-size platter, perfect for couples.' },
  { id: 'full', name: 'Full Feast Platter', multiplier: 3.4, serves: '4-5 People', desc: 'Huge banquet platter, perfect for family dinners.' }
];

const STYLES = [
  { id: 'mandi', name: 'Pit-Cooked (Classic)', spiceBonus: 0, spiceText: 'Mild aromatic', desc: 'Slow steamed in the deep pit.' },
  { id: 'alfaham', name: 'Al Faham (Normal)', spiceBonus: 10, spiceText: 'Medium herb grill', desc: 'Charcoal flame grilled with Arabic spices.' },
  { id: 'kanthaari', name: 'Kanthaari Chilli', spiceBonus: 30, spiceText: 'Spicy bird-eye grill', desc: 'Hot and fiery green chilli marinade.' }
];

export default function MandiCustomizer() {
  const [selectedMeat, setSelectedMeat] = useState('chicken');
  const [selectedPortion, setSelectedPortion] = useState('quarter');
  const [selectedStyle, setSelectedStyle] = useState('mandi');

  // Calculations
  const meatObj = MEATS.find(m => m.id === selectedMeat);
  const portionObj = PORTIONS.find(p => p.id === selectedPortion);
  const styleObj = STYLES.find(s => s.id === selectedStyle);

  const calculatedPrice = Math.round(
    (meatObj.basePrice * portionObj.multiplier) + styleObj.spiceBonus
  );

  return (
    <section id="customizer" className="relative bg-brand-darker px-6 md:px-12 lg:px-24 section-padding">
      {/* Glow decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-gold/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-blue/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-sm uppercase tracking-widest text-brand-gold font-bold">
            Interactive Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-light">
            Build Your Perfect Mandi
          </h2>
          <div className="w-16 h-1 bg-brand-gold rounded mx-auto" />
          <p className="text-sm text-brand-light/60 font-sans leading-relaxed">
            Customize your Arabian platter in real-time. Choose your meat type, serving size, and marinade grill style to view your gourmet breakdown.
          </p>
        </div>

        {/* Builder Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Customizer Selections (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Step 1: Meat */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-xs font-bold text-brand-gold font-sans">1</span>
                <h3 className="text-xl font-serif font-bold text-brand-light">Select Your Protein</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {MEATS.map((meat) => (
                  <button
                    key={meat.id}
                    onClick={() => setSelectedMeat(meat.id)}
                    className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      selectedMeat === meat.id
                        ? 'bg-brand-blue/15 border-brand-gold text-brand-light shadow-md shadow-brand-gold/5'
                        : 'bg-brand-dark/45 border-brand-light/5 text-brand-light/60 hover:border-brand-gold/45'
                    }`}
                  >
                    <span className="text-3xl block mb-2">{meat.icon}</span>
                    <span className="block font-serif text-lg font-bold text-brand-light">{meat.name}</span>
                    <span className="block text-xs text-brand-gold mt-1 font-sans">Base price: ₹{meat.basePrice}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Portion */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-xs font-bold text-brand-gold font-sans">2</span>
                <h3 className="text-xl font-serif font-bold text-brand-light">Choose Serving Portion</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PORTIONS.map((portion) => (
                  <button
                    key={portion.id}
                    onClick={() => setSelectedPortion(portion.id)}
                    className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      selectedPortion === portion.id
                        ? 'bg-brand-blue/15 border-brand-gold text-brand-light'
                        : 'bg-brand-dark/45 border-brand-light/5 text-brand-light/60 hover:border-brand-gold/45'
                    }`}
                  >
                    <span className="block font-serif text-lg font-bold text-brand-light mb-1">{portion.name}</span>
                    <span className="inline-flex items-center space-x-1.5 text-xs text-brand-gold font-sans bg-brand-gold/5 px-2 py-0.5 rounded border border-brand-gold/10 font-semibold mb-2">
                      <Users className="w-3.5 h-3.5" />
                      <span>Serves {portion.serves}</span>
                    </span>
                    <span className="block text-xs text-brand-light/50 font-sans leading-relaxed">{portion.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Grill Style */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-xs font-bold text-brand-gold font-sans">3</span>
                <h3 className="text-xl font-serif font-bold text-brand-light">Select Marinated Grill Style</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {STYLES.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      selectedStyle === style.id
                        ? 'bg-brand-blue/15 border-brand-gold text-brand-light'
                        : 'bg-brand-dark/45 border-brand-light/5 text-brand-light/60 hover:border-brand-gold/45'
                    }`}
                  >
                    <span className="block font-serif text-lg font-bold text-brand-light mb-1">{style.name}</span>
                    <span className="inline-flex items-center space-x-1.5 text-xs text-red-400 font-sans bg-red-500/5 px-2 py-0.5 rounded border border-red-500/10 font-semibold mb-2">
                      <Flame className="w-3.5 h-3.5" />
                      <span>{style.spiceText}</span>
                    </span>
                    <span className="block text-xs text-brand-light/50 font-sans leading-relaxed">{style.desc}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Real-time Order Invoice Panel (4 Cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 bg-brand-dark border border-brand-gold/20 rounded-3xl p-8 shadow-xl">
            <h3 className="text-xl font-serif font-bold text-brand-gold border-b border-brand-light/10 pb-4 mb-6">
              Your Platter Formula
            </h3>

            {/* Recipe Spec Sheet */}
            <div className="space-y-5 mb-8">
              <div className="flex justify-between items-center text-sm font-sans">
                <span className="text-brand-light/50 flex items-center"><Utensils className="w-4 h-4 mr-2 text-brand-gold" /> Protein</span>
                <span className="text-brand-light font-bold">{meatObj.name}</span>
              </div>
              <div className="flex justify-between items-center text-sm font-sans">
                <span className="text-brand-light/50 flex items-center"><Users className="w-4 h-4 mr-2 text-brand-gold" /> Portion Size</span>
                <span className="text-brand-light font-bold">{portionObj.name} ({portionObj.serves})</span>
              </div>
              <div className="flex justify-between items-center text-sm font-sans">
                <span className="text-brand-light/50 flex items-center"><Flame className="w-4 h-4 mr-2 text-brand-gold" /> Marinade Style</span>
                <span className="text-brand-light font-bold">{styleObj.name}</span>
              </div>
              <div className="flex justify-between items-center text-sm font-sans">
                <span className="text-brand-light/50 flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-brand-gold" /> Accompaniments</span>
                <span className="text-brand-light font-bold">Included</span>
              </div>
            </div>

            {/* Taste Profile Gauges */}
            <div className="space-y-4 mb-8 border-t border-brand-light/10 pt-6">
              <span className="text-xs uppercase tracking-wider text-brand-gold font-bold font-sans block mb-2">Flavor Profile Estimate</span>
              
              {/* Smokiness */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-sans">
                  <span className="text-brand-light/60">Smokiness</span>
                  <span className="text-brand-light font-bold">{selectedStyle === 'mandi' ? '95%' : selectedStyle === 'alfaham' ? '75%' : '70%'}</span>
                </div>
                <div className="bg-brand-light/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-brand-gold h-full transition-all duration-500" style={{ width: selectedStyle === 'mandi' ? '95%' : selectedStyle === 'alfaham' ? '75%' : '70%' }} />
                </div>
              </div>

              {/* Spiciness */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-sans">
                  <span className="text-brand-light/60">Spiciness</span>
                  <span className="text-brand-light font-bold">{selectedStyle === 'mandi' ? '20%' : selectedStyle === 'alfaham' ? '65%' : '98%'}</span>
                </div>
                <div className="bg-brand-light/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-brand-gold h-full transition-all duration-500" style={{ width: selectedStyle === 'mandi' ? '20%' : selectedStyle === 'alfaham' ? '65%' : '98%' }} />
                </div>
              </div>

              {/* Tenderness */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-sans">
                  <span className="text-brand-light/60">Tenderness</span>
                  <span className="text-brand-light font-bold">{selectedMeat === 'mutton' ? '98%' : selectedMeat === 'beef' ? '88%' : '80%'}</span>
                </div>
                <div className="bg-brand-light/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-brand-gold h-full transition-all duration-500" style={{ width: selectedMeat === 'mutton' ? '98%' : selectedMeat === 'beef' ? '88%' : '80%' }} />
                </div>
              </div>
            </div>

            {/* Total Price Section */}
            <div className="bg-brand-darker border border-brand-gold/10 rounded-2xl p-5 mb-8 text-center">
              <span className="text-xs uppercase tracking-wider text-brand-light/40 font-medium block mb-1">
                Estimated Price
              </span>
              <span className="text-4xl font-serif font-bold text-brand-gold">
                ₹{calculatedPrice}
              </span>
              <span className="text-[10px] text-brand-light/40 block mt-1">
                (Inclusive of GST & packaging)
              </span>
            </div>

            {/* CTA action */}
            <a
              href={`https://wa.me/919061996688?text=Hello%20Thandoor%20Hut%2C%20I%20would%20like%20to%20order%20the%20following%20customized%20platter%3A%20${meatObj.name}%20(${portionObj.name}%2C%20serves%20${portionObj.serves})%20with%20${styleObj.name}%20grill.%20`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 rounded-full bg-brand-gold text-brand-dark text-center font-bold text-sm tracking-wider uppercase hover:bg-brand-gold/90 transition-colors shadow-lg shadow-brand-gold/10"
            >
              Order Via WhatsApp
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
