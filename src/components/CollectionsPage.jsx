import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronRight, ShoppingBag, Sparkles, Home, Tag, Award, MapPin } from 'lucide-react';
import Navbar from './Header';
import Footer from './Footer';

// Import images
import sareesImg from '../assets/Sarees.png';
import mensWearImg from '../assets/MensWear.png';
import ladiesWearImg from '../assets/WomenWear.png';
import kidsWearImg from '../assets/KidsWear.png';
import weddingImg from '../assets/wedding.png';
import furnishingImg from '../assets/furnishing.png';
import accessoriesImg from '../assets/accessories.png';

const categoriesData = [
  {
    id: "sarees",
    title: "SAREES",
    description: "Discover elegant saree collections in Kesinga & Bhawanipatna, from traditional Sambalpuri styles to modern festive and wedding sarees for every occasion.",
    items: [
      "Fancy Saree",
      "Sambalpuri Saree",
      "Path Saree",
      "Cotton Saree",
      "Silk Saree",
      "Banarasi Saree",
      "Kanjivaram's",
      "Bandhej Sarees",
      "Supernet",
      "Dulhan Saree",
      "Dulhan Lehenga"
    ],
    image: sareesImg,
    color: "from-pink-500 to-rose-600"
  },
  {
    id: "mens-wear",
    title: "Mens Wear",
    description: "From everyday essentials to premium wedding and festive outfits, discover modern mens wear collections with the latest fashion trends at Trimurti.",
    items: [
      "Shirt",
      "Tshirt",
      "Jeans",
      "Trouser",
      "Cargo",
      "Blazer & Suit",
      "Kurta Pajama",
      "Modi Jacket",
      "Jodhpuri",
      "Groom Sherwani",
      "Athlesuire",
      "Suiting & Shirting",
      "Winter Jackets",
      "Hoodies",
      "Cap & Gloves",
      "Shawls",
      "Thermal"
    ],
    image: mensWearImg,
    color: "from-blue-600 to-indigo-700"
  },
  {
    id: "ladies-wear",
    title: "Ladies Wear",
    description: "Explore trendy ladies wear in Kalahandi with stylish ethnic, casual, festive, and western fashion designed for comfort, confidence, and everyday elegance.",
    items: [
      "Kurtis",
      "Jeans",
      "Top",
      "Gowns",
      "Lehengas",
      "Shararas",
      "Patialas",
      "Co-ord Sets",
      "Athlesuire",
      "Anarkalis",
      "Bridal Gowns",
      "Gowns",
      "Winter Jackets",
      "Hoodies",
      "Cap & Gloves",
      "Purse/ Hand Bags",
      "Middy"
    ],
    image: ladiesWearImg,
    color: "from-purple-500 to-fuchsia-600"
  },
  {
    id: "kids-wear",
    title: "Kids Wear",
    description: "Shop fun, comfortable, and fashionable kids wear for every age — perfect for festivals, family functions, casual outings, and daily wear in Kesinga & Bhawanipatna.",
    subcategories: [
      {
        title: "Boys Wear",
        items: ["Shirt", "Tshirt", "Jeans", "Suits", "Ethnic Wear", "Athlesuire"]
      },
      {
        title: "Girls Wear",
        items: ["Tops & Tees", "Jeans - pant", "Gowns", "Patiyala", "Shararas", "Ethnic Wear", "Athlesuire", "Winter Jackets", "Hoodies"]
      }
    ],
    image: kidsWearImg,
    color: "from-yellow-400 to-amber-500"
  },
  {
    id: "wedding-collection",
    title: "Wedding Collection",
    description: "Discover premium wedding collections for brides, grooms, family, and friends — featuring elegant ethnic wear, designer sarees, festive outfits, suits, and celebration fashion for every special occasion at Trimurti.",
    items: [
      "Dulhan Saree",
      "Dulhan Lehenga",
      "Blazer & Suit",
      "Kurta Pajama",
      "Modi Jacket",
      "Jodhpuri",
      "Groom Sherwani",
      "Tie, Bow, Pocket Square",
      "Safa, Jutti, Bandana",
      "Christian Wedding"
    ],
    image: weddingImg,
    color: "from-amber-600 to-red-700"
  },
  {
    id: "furnishing",
    title: "Furnishing",
    description: "Upgrade your home with quality furnishing collections including bedsheets, curtains, blankets, and home essentials designed for comfort and style.",
    items: [
      "Bedsheets",
      "Blankets",
      "Comforters",
      "Bed Sets",
      "Window- Door Curtains",
      "Door Mats",
      "Rugs",
      "Carpets",
      "Pillow",
      "Sofa Covers"
    ],
    image: furnishingImg,
    color: "from-teal-500 to-emerald-600"
  },
  {
    id: "accessories",
    title: "Accessories",
    description: "Complete your look with stylish fashion accessories including handbags, wallets, belts, jewellery, and more for every occasion and personality.",
    items: [
      "Perfumes/Deo",
      "Suitcase",
      "Duffle Bag",
      "Sunglasses",
      "Belt",
      "Wallet",
      "Kids School Bag",
      "College Bag",
      "Travel Bag"
    ],
    image: accessoriesImg,
    color: "from-gray-700 to-slate-900"
  }
];

export default function CollectionsPage() {
  const [activeTab, setActiveTab] = useState(categoriesData[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const topRef = useRef(null);

  // Sync state if navigation target was passed (e.g. from footer click)
  useEffect(() => {
    if (location.state?.selectedCategory) {
      const targetCat = categoriesData.find(c => c.id === location.state.selectedCategory);
      if (targetCat) {
        setActiveTab(targetCat.id);
        // Clear history state
        window.history.replaceState({}, document.title);
      }
    }
    // Scroll to top on load
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const handleCategoryClick = () => {
    navigate('/', { state: { scrollTo: 'home' } });
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSearchQuery(""); // Clear search when switching tabs
  };

  // Perform search across all categories
  const getSearchResults = () => {
    if (!searchQuery.trim()) return [];
    
    const results = [];
    const query = searchQuery.toLowerCase();

    categoriesData.forEach(cat => {
      const matchedItems = [];
      
      // Standard items
      if (cat.items) {
        cat.items.forEach(item => {
          if (item.toLowerCase().includes(query)) {
            matchedItems.push({ name: item, group: null });
          }
        });
      }
      
      // Subcategory items (Kids Wear)
      if (cat.subcategories) {
        cat.subcategories.forEach(sub => {
          sub.items.forEach(item => {
            if (item.toLowerCase().includes(query)) {
              matchedItems.push({ name: item, group: sub.title });
            }
          });
        });
      }

      if (matchedItems.length > 0 || cat.title.toLowerCase().includes(query)) {
        results.push({
          ...cat,
          matchedItems
        });
      }
    });

    return results;
  };

  const searchResults = getSearchResults();
  const currentCategory = categoriesData.find(c => c.id === activeTab);

  return (
    <div ref={topRef} className="flex flex-col min-h-screen bg-slate-50/50 text-gray-800">
      <Navbar activeIndex={-1} onCategoryClick={handleCategoryClick} />

      {/* Main Content Area */}
      <main className="flex-grow pb-20">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#104297] to-[#0f3460] py-16 md:py-24 text-white text-center px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#537ec5,transparent_60%)] opacity-30"></div>
          <div className="container mx-auto max-w-4xl relative z-10 space-y-6">
            
            {/* Breadcrumbs */}
            <div className="flex justify-center items-center gap-2 text-xs text-blue-200 uppercase tracking-widest">
              <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
                <Home className="w-3 h-3" /> Home
              </Link>
              <ChevronRight className="w-3 h-3 text-blue-300" />
              <span className="font-bold text-white">Collections</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-wide">
              Our Collections
            </h1>
            <p className="text-blue-100 max-w-2xl mx-auto font-light text-sm md:text-base leading-relaxed">
              Explore Kalahandi's most loved fashion destination. From heritage Sambalpuri handlooms and wedding couture to home furnishing and premium accessories.
            </p>

            {/* Premium Search Bar */}
            <div className="max-w-xl mx-auto pt-4 relative">
              <div className="relative flex items-center bg-white text-gray-800 rounded-2xl shadow-xl overflow-hidden border border-white/10 group focus-within:ring-2 focus-within:ring-[#537ec5] transition-all">
                <div className="pl-5 text-[#104297]">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="Search collections (e.g. Sambalpuri, Sherwani, Bedsheets...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-4 px-4 bg-transparent text-sm focus:outline-none placeholder-gray-400 font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="pr-5 text-gray-400 hover:text-[#104297] text-xs font-bold uppercase transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

          </div>
        </section>

        {/* Dynamic Navigation/Tabs Bar */}
        {!searchQuery && (
          <div className="sticky top-[130px] z-30 bg-white/90 backdrop-blur-md border-b border-gray-200/80 shadow-sm">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="flex gap-2 overflow-x-auto no-scrollbar py-4 scroll-smooth">
                {categoriesData.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleTabChange(cat.id)}
                    className={`relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap outline-none cursor-pointer ${
                      activeTab === cat.id
                        ? "text-white bg-[#104297] shadow-lg shadow-blue-900/10"
                        : "text-gray-500 hover:text-[#104297] hover:bg-gray-50"
                    }`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Collections Display Grid & Content */}
        <div className="container mx-auto px-6 max-w-6xl mt-10">
          <AnimatePresence mode="wait">
            {searchQuery ? (
              // Search Results Page
              <motion.div
                key="search-results"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-12"
              >
                <div className="border-b border-gray-200 pb-4 flex justify-between items-center">
                  <h3 className="text-lg font-serif font-bold text-[#104297]">
                    Search Results for "{searchQuery}"
                  </h3>
                  <span className="text-xs bg-[#104297]/10 text-[#104297] px-3 py-1 rounded-full font-bold">
                    {searchResults.reduce((acc, curr) => acc + (curr.matchedItems.length || 1), 0)} Matches
                  </span>
                </div>

                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {searchResults.map((result) => (
                      <div
                        key={result.id}
                        className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group"
                      >
                        {/* Header Banner */}
                        <div className="h-40 relative overflow-hidden">
                          <img
                            src={result.image}
                            alt={result.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-5">
                            <span className="text-[10px] tracking-widest font-bold text-yellow-500 uppercase">Category</span>
                            <h4 className="text-lg font-serif font-bold text-white uppercase">{result.title}</h4>
                          </div>
                        </div>

                        {/* Matched Items */}
                        <div className="p-6">
                          <p className="text-xs text-gray-500 font-light mb-6 leading-relaxed">
                            {result.description}
                          </p>

                          <div className="space-y-4">
                            <h5 className="text-xs font-bold text-[#104297] uppercase tracking-wider">Matching Topics:</h5>
                            <div className="flex flex-wrap gap-2">
                              {result.matchedItems.length > 0 ? (
                                result.matchedItems.map((item, idx) => (
                                  <div
                                    key={idx}
                                    className="px-4 py-2 bg-gray-50 border border-gray-200/60 rounded-2xl text-xs font-semibold text-gray-700 flex items-center gap-2"
                                  >
                                    <Tag className="w-3.5 h-3.5 text-[#104297]" />
                                    <span>
                                      {item.group && <span className="text-gray-400 font-normal mr-1">{item.group}:</span>}
                                      {item.name}
                                    </span>
                                  </div>
                                ))
                              ) : (
                                <span className="text-xs text-gray-400 italic">Entire Category Matched</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                    <p className="text-gray-400 font-light mb-4">No categories or items matching your search query.</p>
                    <button
                      onClick={() => setSearchQuery("")}
                      className="px-6 py-2 bg-[#104297] hover:bg-[#0f3460] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md"
                    >
                      Clear Search
                    </button>
                  </div>
                )}
              </motion.div>
            ) : (
              // Tab Content View
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                {/* Category Showcase Header Card */}
                <div className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-xl flex flex-col lg:flex-row">
                  {/* Left Side: Text Details */}
                  <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center space-y-6">
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-8 bg-[#104297] rounded-full"></div>
                      <span className="text-xs uppercase tracking-[0.3em] font-bold text-yellow-600">Premium Range</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#104297] uppercase tracking-wide">
                      {currentCategory.title}
                    </h2>
                    
                    <p className="text-gray-600 font-light text-sm md:text-base leading-relaxed">
                      {currentCategory.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 bg-gray-50 p-4 rounded-2xl border border-gray-100/50">
                      <div className="flex items-center gap-1.5 text-[#104297]">
                        <Award className="w-4 h-4" />
                        <span>Premium Fabrics</span>
                      </div>
                      <div className="h-4 w-px bg-gray-200"></div>
                      <div className="flex items-center gap-1.5 text-[#104297]">
                        <MapPin className="w-4 h-4" />
                        <span>Kesinga & Bhawanipatna</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Showcase Image */}
                  <div className="lg:w-1/2 h-72 lg:h-[450px] relative overflow-hidden">
                    <img
                      src={currentCategory.image}
                      alt={currentCategory.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/25 to-transparent"></div>
                  </div>
                </div>

                {/* Subcategory Details / Items Lists */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-gray-200/80 pb-4">
                    <ShoppingBag className="w-5 h-5 text-[#104297]" />
                    <h3 className="text-lg font-serif font-bold text-gray-800 uppercase tracking-wider">
                      Product Catalogue
                    </h3>
                  </div>

                  {/* Kids Wear Custom Subcategory Render */}
                  {currentCategory.subcategories ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {currentCategory.subcategories.map((sub, index) => (
                        <div 
                          key={index} 
                          className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-shadow"
                        >
                          <div className="flex items-center gap-2 mb-6">
                            <Sparkles className="w-4 h-4 text-[#104297]" />
                            <h4 className="text-lg font-serif font-bold text-[#104297] border-b-2 border-[#104297]/15 pb-1">
                              {sub.title}
                            </h4>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {sub.items.map((item, idx) => (
                              <div
                                key={idx}
                                className="group px-4 py-3 rounded-2xl border border-gray-100 hover:border-[#104297]/40 hover:bg-blue-50/20 transition-all duration-300 flex items-center justify-between"
                              >
                                <span className="text-xs font-semibold text-gray-700 group-hover:text-[#104297] transition-colors">
                                  {item}
                                </span>
                                <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#104297] group-hover:translate-x-0.5 transition-all" />
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Default Grid Layout for Items
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {currentCategory.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="group bg-white p-5 rounded-2xl border border-gray-100/80 shadow-sm hover:shadow-md hover:border-[#104297]/40 hover:bg-blue-50/20 transition-all duration-300 flex items-center justify-between cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-[#104297] transition-colors"></div>
                            <span className="text-xs font-semibold text-gray-700 group-hover:text-[#104297] transition-colors">
                              {item}
                            </span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#104297] group-hover:translate-x-0.5 transition-all" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </main>

      <Footer />
    </div>
  );
}
