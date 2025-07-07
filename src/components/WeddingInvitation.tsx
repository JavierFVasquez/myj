import { useEffect, useState } from 'react';
import floralFrame from '@/assets/wedding-floral-frame.jpg';
import goldOrnament from '@/assets/gold-ornament.png';

const WeddingInvitation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-elegant-white flex items-center justify-center p-4">
      <div 
        className={`relative max-w-md w-full mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Main Invitation Card */}
        <div className="relative bg-elegant-white rounded-lg shadow-luxury overflow-hidden">
          {/* Floral Frame Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{ backgroundImage: `url(${floralFrame})` }}
          />
          
          {/* Elegant Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-elegant-white/20 via-transparent to-elegant-white/30" />
          
          {/* Content Container */}
          <div className="relative z-10 px-8 py-12 text-center">
            {/* Top Ornamental Border */}
            <div className="mb-8">
              <img 
                src={goldOrnament} 
                alt="" 
                className="w-32 h-auto mx-auto opacity-80 animate-float"
              />
            </div>

            {/* Couple Names - Hero Typography */}
            <div className="mb-8">
              <h1 className="font-wedding-script text-6xl font-bold text-elegant-black mb-2 animate-fade-in-up">
                Mary
              </h1>
              <div className="flex items-center justify-center my-4">
                <div className="h-px bg-gold-primary w-12"></div>
                <span className="mx-4 text-gold-primary font-elegant-serif text-lg font-light">&</span>
                <div className="h-px bg-gold-primary w-12"></div>
              </div>
              <h1 className="font-wedding-script text-6xl font-bold text-elegant-black animate-fade-in-up">
                Javi
              </h1>
            </div>

            {/* Ornamental Divider */}
            <div className="mb-8">
              <img 
                src={goldOrnament} 
                alt="" 
                className="w-24 h-auto mx-auto opacity-60 rotate-180"
              />
            </div>

            {/* Event Details */}
            <div className="space-y-4 animate-fade-in-up">
              {/* Date */}
              <div className="mb-6">
                <p className="font-elegant-serif text-2xl font-medium text-elegant-black mb-2">
                  December 20, 2025
                </p>
              </div>

              {/* Venue */}
              <div className="mb-6">
                <p className="font-elegant-serif text-lg text-elegant-black leading-relaxed">
                  Hacienda Riojana
                </p>
                <p className="font-elegant-serif text-base text-elegant-black-muted">
                  Marinilla, Antioquia
                </p>
              </div>

              {/* Reception Notice */}
              <div className="mb-8">
                <p className="font-elegant-serif text-base text-elegant-black-muted italic">
                  Reception to follow
                </p>
              </div>

              {/* Time and RSVP Placeholder Areas */}
              <div className="space-y-4">
                <div className="bg-elegant-white-secondary/80 rounded-lg p-4 border border-gold-accent/30">
                  <p className="font-elegant-serif text-sm text-elegant-black-muted mb-1">
                    Ceremony Time
                  </p>
                  <p className="font-elegant-serif text-lg text-elegant-black">
                    [Time to be announced]
                  </p>
                </div>
                
                <div className="bg-elegant-white-secondary/80 rounded-lg p-4 border border-gold-accent/30">
                  <p className="font-elegant-serif text-sm text-elegant-black-muted mb-1">
                    RSVP Information
                  </p>
                  <p className="font-elegant-serif text-base text-elegant-black">
                    [Contact details to follow]
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Ornamental Border */}
            <div className="mt-8">
              <img 
                src={goldOrnament} 
                alt="" 
                className="w-32 h-auto mx-auto opacity-80 animate-float"
                style={{ animationDelay: '2s' }}
              />
            </div>
          </div>

          {/* Subtle Gold Sparkle Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gold-secondary rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-gold-secondary rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/6 w-0.5 h-0.5 bg-gold-accent rounded-full animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 right-1/6 w-0.5 h-0.5 bg-gold-accent rounded-full animate-pulse opacity-40" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>

        {/* Elegant Footer Message */}
        <div className="text-center mt-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <p className="font-elegant-serif text-sm text-elegant-black-muted italic">
            Save the Date
          </p>
          <div className="w-16 h-px bg-gold-primary mx-auto mt-2 opacity-60"></div>
        </div>
      </div>
    </div>
  );
};

export default WeddingInvitation;