import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CulinaryProcess from './components/CulinaryProcess';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Catering from './components/Catering';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#0b2936] text-[#fcfbf7] min-h-screen relative selection:bg-brand-gold selection:text-brand-dark">
      {/* Premium Sticky Navigation */}
      <Navbar />

      {/* Landing Sections */}
      <main>
        <Hero />
        <About />
        <CulinaryProcess />
        <Menu />
        <Reviews />
        <Catering />
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
