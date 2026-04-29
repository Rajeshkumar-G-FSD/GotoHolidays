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
      <section className="relative min-h-[85vh] flex flex-col justify-center px-6">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/gotoholidays_tripvideo.mp4" type="video/mp4" />
            <img 
              src={IMAGES.tropicalCoast} 
              alt="Fallback Background" 
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/60"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center pb-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest border border-white/20">
              Premium Travel Experiences
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-lg font-black leading-[1.1] tracking-tight"
          >
            Discover the World <br /> <span className="text-secondary">With Confidence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg md:text-2xl text-white/90 mb-12 max-w-3xl drop-shadow-sm font-medium leading-relaxed"
          >
            Expert visa processing, curated holiday packages, and seamless flight bookings tailored specifically for your next adventure.
          </motion.p>
        </div>

        {/* Overlapping Search Card */}
        <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 z-30 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-2 md:p-4 w-full border border-outline-variant/10"
            >
              <div className="p-4 md:px-8">
                <div className="flex space-x-8 border-b border-outline-variant/10 mb-6 pb-2">
                  <button 
                    onClick={() => onNavigate('flights')}
                    className="flex items-center space-x-2 text-primary border-b-2 border-primary pb-3 -mb-[11px] font-bold text-sm cursor-pointer transition-all"
                  >
                    <Plane size={20} />
                    <span>Flights</span>
                  </button>
                  <button 
                    onClick={() => onNavigate('packages')}
                    className="flex items-center space-x-2 text-outline hover:text-primary transition-all pb-3 font-bold text-sm cursor-pointer group"
                  >
                    <Luggage size={20} className="group-hover:translate-y-[-2px] transition-transform" />
                    <span>Packages</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4">
                  <div className="md:col-span-1 lg:col-span-2 group">
                    <label className="block text-[10px] font-bold text-outline/70 uppercase tracking-wider mb-2 ml-1 text-left group-focus-within:text-primary transition-colors">From</label>
                    <div className="flex items-center border border-outline-variant/20 rounded-2xl px-4 py-3 bg-surface-low focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/5 transition-all cursor-text" onClick={(e) => (e.currentTarget.querySelector('input') as HTMLInputElement).focus()}>
                      <MapPin size={20} className="text-outline group-focus-within:text-primary transition-colors mr-3" />
                      <input className="w-full bg-transparent border-none p-0 focus:ring-0 text-base font-medium placeholder-outline/40" placeholder="Origin city" />
                    </div>
                  </div>
                  <div className="md:col-span-1 lg:col-span-2 group">
                    <label className="block text-[10px] font-bold text-outline/70 uppercase tracking-wider mb-2 ml-1 text-left group-focus-within:text-primary transition-colors">To</label>
                    <div className="flex items-center border border-outline-variant/20 rounded-2xl px-4 py-3 bg-surface-low focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/5 transition-all cursor-text" onClick={(e) => (e.currentTarget.querySelector('input') as HTMLInputElement).focus()}>
                      <MapPin size={20} className="text-outline group-focus-within:text-primary transition-colors mr-3" />
                      <input className="w-full bg-transparent border-none p-0 focus:ring-0 text-base font-medium placeholder-outline/40" placeholder="Destination" />
                    </div>
                  </div>
                  <div className="md:col-span-1 lg:col-span-2 group">
                    <label className="block text-[10px] font-bold text-outline/70 uppercase tracking-wider mb-2 ml-1 text-left group-focus-within:text-primary transition-colors">Dates</label>
                    <div className="flex items-center border border-outline-variant/20 rounded-2xl px-4 py-3 bg-surface-low focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/5 transition-all cursor-text" onClick={(e) => (e.currentTarget.querySelector('input') as HTMLInputElement).focus()}>
                      <Calendar size={20} className="text-outline group-focus-within:text-primary transition-colors mr-3" />
                      <input className="w-full bg-transparent border-none p-0 focus:ring-0 text-base font-medium placeholder-outline/40" placeholder="Add dates" />
                    </div>
                  </div>
                  <div className="md:col-span-1 lg:col-span-1 flex items-end">
                    <button 
                      onClick={handleSearch}
                      disabled={isSearching}
                      className="w-full bg-secondary hover:bg-secondary-dark text-white transition-all py-3.5 rounded-2xl font-bold flex justify-center items-center h-[52px] shadow-lg shadow-secondary/20 active:scale-[0.98] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed text-base"
                    >
                      {isSearching ? (
                        <>
                          <Loader2 size={24} className="mr-2 animate-spin" />
                        </>
                      ) : (
                        <>
                          <Search size={24} className="mr-2" />
                          <span className="hidden lg:inline">Search</span>
                          <span className="lg:hidden">Find</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spacer for overlapping search - Increased to accommodate the card half-overlap */}
      <div className="h-24 md:h-32 lg:h-36"></div>

      {/* Banner Section */}
      <section className="max-w-7xl mx-auto px-6 relative z-20 mb-20">
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

