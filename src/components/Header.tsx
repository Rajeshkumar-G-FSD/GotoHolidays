import { Bell, User, Menu, ChevronRight } from 'lucide-react';
import { View } from '../types';

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

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 shadow-ambient font-display antialiased">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => onNavigate('home')}
            className="text-2xl font-extrabold tracking-tight text-primary cursor-pointer"
          >
            Goto Holidays
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
          <button className="hidden md:flex text-outline hover:text-primary p-2 rounded-full hover:bg-surface-low transition-all duration-200 active:scale-95">
            <Bell size={20} />
          </button>
          <button className="hidden md:flex text-outline hover:text-primary p-2 rounded-full hover:bg-surface-low transition-all duration-200 active:scale-95">
            <User size={20} />
          </button>
          <button 
            onClick={() => onNavigate('dashboard')}
            className="bg-primary hover:bg-primary-light text-white font-semibold px-5 py-2 rounded-lg transition-all duration-200 active:scale-95 shadow-sm"
          >
            Dashboard
          </button>
        </div>
      </div>
    </header>
  );
}

