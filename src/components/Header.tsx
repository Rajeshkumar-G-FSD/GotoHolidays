import { Menu } from 'lucide-react';
import { View } from '../types';
import { IMAGES } from '../constants';

interface HeaderProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

export default function Header({ currentView, onNavigate }: HeaderProps) {
  const navItems: { label: string; view: View }[] = [
    { label: 'Home', view: 'home' },
    { label: 'Visas', view: 'visas' },
    { label: 'Flights', view: 'flights' },
    { label: 'Packages', view: 'packages' },
  ];

  const handleContactClick = () => {
    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 shadow-ambient font-display antialiased">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => onNavigate('home')}
            className="cursor-pointer"
          >
            <img src={IMAGES.logo} alt="Goto Holidays" className="h-10 object-contain" />
          </button>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate(item.view)}
                className={`transition-all duration-200 px-3 py-2 rounded-md font-semibold text-sm cursor-pointer ${
                  currentView === item.view
                    ? 'text-primary border-b-2 border-primary rounded-none pb-1'
                    : 'text-outline hover:text-primary hover:bg-surface-low'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="md:hidden text-outline hover:text-primary p-2 rounded-full hover:bg-surface-low transition-all duration-200 active:scale-95">
            <Menu size={24} />
          </button>
          <button 
            onClick={handleContactClick}
            className="hidden md:block bg-primary hover:bg-primary-light text-white font-bold px-6 py-2.5 rounded-full transition-all duration-200 active:scale-95 shadow-sm text-sm cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}

