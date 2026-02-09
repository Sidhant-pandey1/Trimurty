import React, { useState, useEffect } from 'react';
import Navbar from './components/Header';
import HeroSlider from './components/HeroSlider';
import StoreSection from './components/StoreSection';
import CollectionScroll from './components/CollectionScroll';
import BrandGrid from './components/BrandGrid';
import ShopByOccasion from './components/ShopByOccassion';
import SocialSync from './components/SocialSync';
import Footer from './components/Footer';
import "./App.css"

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeIndex={activeIndex} onCategoryClick={(i) => setActiveIndex(i)} />
      
      <main className="perspective-container">
        <HeroSlider activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        <StoreSection />
        <CollectionScroll />
        <BrandGrid />
        <ShopByOccasion />
        <SocialSync />
      </main>
      
      <Footer />
    </div>
  );
}