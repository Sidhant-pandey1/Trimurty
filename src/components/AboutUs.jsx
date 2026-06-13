import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Header';
import Footer from './Footer';
import { Users, Star, Award, ShoppingBag } from 'lucide-react';

function AnimatedCounter({ target, duration = 2000, isDecimal = false }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const end = parseFloat(target);
    if (isNaN(end)) return;

    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing out cubic for elegant deceleration
      const easeOutCubic = 1 - Math.pow(1 - percentage, 3);
      
      setCount(Math.floor(easeOutCubic * end));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration]);

  const displayValue = isDecimal ? (count / 10).toFixed(1) : count.toLocaleString();
  return <span>{displayValue}</span>;
}

export default function AboutUs() {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate('/', { state: { scrollTo: 'home' } });
  };

  const metrics = [
    {
      id: 1,
      icon: <Users className="w-8 h-8 text-[#104297]" />,
      target: 25000,
      suffix: "+",
      label: "Satisfied Customers",
      desc: "Delivering smiles and building relationships across generations."
    },
    {
      id: 2,
      icon: <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />,
      target: 48,
      suffix: "/5",
      isDecimal: true,
      label: "Customer Rating",
      desc: "Consistently rated for outstanding fabric and customer care."
    },
    {
      id: 3,
      icon: <Award className="w-8 h-8 text-orange-500" />,
      target: 28,
      suffix: "+",
      label: "Years of Trust",
      desc: "Proudly serving family fashion and wedding needs since 1998."
    },
    {
      id: 4,
      icon: <ShoppingBag className="w-8 h-8 text-emerald-500" />,
      target: 150000,
      suffix: "+",
      label: "Outfits Delivered",
      desc: "Premium quality ethnic and wedding wears stitched with love."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Navbar activeIndex={-1} onCategoryClick={handleCategoryClick} />
      
      <main className="flex-grow container mx-auto px-6 py-16 max-w-5xl">
        {/* Main Heading */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-yellow-600 block">About Us</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#104297]">
            Trimurti Cloth Store
          </h2>
          <p className="text-gray-500 font-light max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            For over two decades, we have defined elegance and family fashion in Kesinga. Here are a few milestones we are proud of.
          </p>
        </div>

        {/* 4 Metrics Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {metrics.map((m) => (
            <div 
              key={m.id} 
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100/80 transition-all duration-300 transform hover:-translate-y-1 flex gap-6 items-start"
            >
              <div className="p-4 bg-gray-50 rounded-2xl shrink-0">
                {m.icon}
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-serif font-bold text-[#104297]">
                  <AnimatedCounter target={m.target} isDecimal={m.isDecimal} />
                  <span className="text-yellow-600 ml-1">{m.suffix}</span>
                </div>
                <h4 className="font-bold text-base text-gray-800">{m.label}</h4>
                <p className="text-xs text-gray-500 font-light leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
