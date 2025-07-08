import { Home, MapPin, Shirt, Clock, Gift, Music, Image, CheckCircle } from 'lucide-react';

interface BottomNavigationProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const BottomNavigation = ({ activeSection, onSectionChange }: BottomNavigationProps) => {
  const navItems = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'location', label: 'Ubicación', icon: MapPin },
    { id: 'dress-code', label: 'Dress Code', icon: Shirt },
    { id: 'itinerary', label: 'Itinerario', icon: Clock },
    { id: 'spotify', label: 'Música', icon: Music },
    { id: 'photos', label: 'Fotos', icon: Image },
    { id: 'gifts', label: 'Regalos', icon: Gift },
    { id: 'rsvp', label: 'Confirmar', icon: CheckCircle },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-[999999] bg-navy border-t border-gold shadow-lg"
      style={{
        minHeight: 64,
        padding: '0 2px',
        boxShadow: '0 -4px 16px -2px #0006',
        WebkitBackdropFilter: 'blur(6px)',
        backdropFilter: 'blur(6px)',
      }}
    >
      <div className="flex justify-around items-center px-1 py-2 sm:py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`flex flex-col items-center justify-center flex-1 min-w-0 transition-all duration-300 ${
                isActive ? 'text-gold scale-110' : 'text-gold/70 hover:text-gold'
              }`}
              style={{ background: 'none', border: 'none', padding: 0, fontSize: 12 }}
            >
              <Icon
                size={22}
                className="mb-0.5"
                style={{ strokeWidth: isActive ? 2.2 : 1.5 }}
              />
              <span className="text-[10px] sm:text-xs mt-0.5 font-medium tracking-wide">
                {item.label}
              </span>
              {isActive && (
                <div className="w-1 h-1 bg-gold rounded-full mt-1 animate-pulse" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation; 