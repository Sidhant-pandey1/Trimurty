import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Header';
import HeroSlider from './components/HeroSlider';
import StoreSection from './components/StoreSection';
import CollectionScroll from './components/CollectionScroll';
import BrandGrid from './components/BrandGrid';
import ShopByOccasion from './components/ShopByOccassion';
import SocialSync from './components/SocialSync';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import CollectionsPage from './components/CollectionsPage';
import "./App.css";

function HomePage({ activeIndex, setActiveIndex, onCategoryClick }) {
  const location = useLocation();

  useEffect(() => {
    // Handle scrolling to section when navigating from another page
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      // Clean history state so refreshes don't re-trigger scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeIndex={activeIndex} onCategoryClick={onCategoryClick} />
      
      <main className="perspective-container">
        <section id="home">
          <HeroSlider activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </section>
        <section id="stores">
          <StoreSection />
        </section>
        <section id="collections">
          <CollectionScroll />
        </section>
        <section id="brands">
          <BrandGrid />
        </section>
        <section id="occasions">
          <ShopByOccasion />
        </section>
        <section id="social">
          <SocialSync />
        </section>
      </main>
      
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  // Auto-slide HeroSlider every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleCategoryClick = (i) => {
    setActiveIndex(i);
    // If user is on /about page, redirect to home page and scroll to hero
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'home' } });
    } else {
      const element = document.getElementById('home');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage activeIndex={activeIndex} setActiveIndex={setActiveIndex} onCategoryClick={handleCategoryClick} />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/collections" element={<CollectionsPage />} />
    </Routes>
  );
}