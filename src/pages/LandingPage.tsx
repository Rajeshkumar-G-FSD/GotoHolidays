import { useState } from 'react';
import { Search, MapPin, Calendar, Plane, Luggage, ArrowRight, Loader2 } from 'lucide-react';
import { IMAGES } from '../constants';
import { motion } from 'motion/react';
import { View } from '../types';

interface LandingPageProps {
  onNavigate: (view: View) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 2000);
  };
  return (
    <div className="w-full relative">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center pt-12 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.tropicalCoast} 
            alt="Tropical Coastline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1c1e]/40 via-[#1a1c1e]/20 to-background"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl text-white mb-6 drop-shadow-md font-bold leading-tight"
          >
            Discover the World with Confidence
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white mb-12 max-w-2xl drop-shadow-sm font-medium"
          >
            Expert visa processing, curated holiday packages, and seamless flight bookings all in one place.
          </motion.p>
          
          {/* Bento Search Widget */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-float p-6 w-full max-w-4xl border border-outline-variant/30"
          >
            <div className="flex space-x-6 border-b border-outline-variant/20 mb-6 pb-2">
              <button 
                onClick={() => onNavigate('flights')}
                className="flex items-center space-x-2 text-primary border-b-2 border-primary pb-2 -mb-[9px] font-semibold text-sm cursor-pointer"
              >
                <Plane size={18} />
                <span>Flights</span>
              </button>
              <button 
                onClick={() => onNavigate('packages')}
                className="flex items-center space-x-2 text-outline hover:text-primary transition-colors pb-2 font-semibold text-sm cursor-pointer"
              >
                <Luggage size={18} />
                <span>Packages</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative col-span-1 group">
                <label className="block text-xs font-semibold text-outline mb-1 ml-1 text-left group-focus-within:text-primary transition-colors">From</label>
                <div className="flex items-center border border-outline-variant rounded-lg px-3 py-2.5 bg-surface focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all cursor-text" onClick={(e) => (e.currentTarget.querySelector('input') as HTMLInputElement).focus()}>
                  <MapPin size={18} className="text-outline group-focus-within:text-primary transition-colors mr-2" />
                  <input className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm placeholder-outline/60" placeholder="Origin city" />
                </div>
              </div>
              <div className="relative col-span-1 group">
                <label className="block text-xs font-semibold text-outline mb-1 ml-1 text-left group-focus-within:text-primary transition-colors">To</label>
                <div className="flex items-center border border-outline-variant rounded-lg px-3 py-2.5 bg-surface focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all cursor-text" onClick={(e) => (e.currentTarget.querySelector('input') as HTMLInputElement).focus()}>
                  <MapPin size={18} className="text-outline group-focus-within:text-primary transition-colors mr-2" />
                  <input className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm placeholder-outline/60" placeholder="Destination" />
                </div>
              </div>
              <div className="relative col-span-1 group">
                <label className="block text-xs font-semibold text-outline mb-1 ml-1 text-left group-focus-within:text-primary transition-colors">Dates</label>
                <div className="flex items-center border border-outline-variant rounded-lg px-3 py-2.5 bg-surface focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all cursor-text" onClick={(e) => (e.currentTarget.querySelector('input') as HTMLInputElement).focus()}>
                  <Calendar size={18} className="text-outline group-focus-within:text-primary transition-colors mr-2" />
                  <input className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm placeholder-outline/60" placeholder="Add dates" />
                </div>
              </div>
              <div className="flex items-end">
                <button 
                  onClick={handleSearch}
                  disabled={isSearching}
                  className="w-full bg-secondary hover:bg-secondary-dark text-white transition-all py-3 rounded-lg font-bold flex justify-center items-center h-[46px] shadow-sm active:scale-95 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSearching ? (
                    <>
                      <Loader2 size={18} className="mr-2 animate-spin" />
                      In progress...
                    </>
                  ) : (
                    <>
                      <Search size={18} className="mr-2" />
                      Search
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 mb-20">
        <div className="bg-white rounded-2xl shadow-card border border-outline-variant/30 p-8 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="flex items-center space-x-6 mb-6 md:mb-0 relative z-10">
            <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
              <Luggage size={32} className="text-primary" />
            </div>
            <div className="text-left">
              <h2 className="text-xl font-bold text-on-surface mb-1">Visa Simplified</h2>
              <p className="text-sm text-outline max-w-md">Navigate global visa requirements with our expert guidance. Check your eligibility and apply seamlessly.</p>
            </div>
          </div>
          <div className="flex gap-4 relative z-10 w-full md:w-auto">
            <button 
              onClick={() => onNavigate('visas')}
              className="flex-1 md:flex-none px-6 py-3 border border-primary text-primary hover:bg-primary/5 rounded-full font-bold text-sm transition-all whitespace-nowrap cursor-pointer"
            >
              Check Requirements
            </button>
            <button 
              onClick={() => onNavigate('visas')}
              className="flex-1 md:flex-none px-6 py-3 bg-primary text-white hover:bg-primary-light rounded-full font-bold text-sm transition-all shadow-sm flex items-center justify-center cursor-pointer"
            >
              Start Application <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

