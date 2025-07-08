import { useEffect, useState } from 'react';
import bgLeaves from '@/assets/background.png';

const WeddingInvitation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy p-4 pb-32 sm:pb-24 transition-all duration-700">
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto flex items-center justify-center" style={{ minHeight: 420 }}>
        {/* Fondo de hojas doradas centrado, solo detrás de la invitación */}
        <div
          className="absolute inset-0 flex items-center justify-center z-0"
          style={{
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={bgLeaves}
            alt="Fondo hojas doradas"
            style={{
              width: '120%',
              height: '120%',
              maxWidth: 750,
              maxHeight: 750,
              minWidth: 750,
              minHeight: 750,
              objectFit: 'contain',
              margin: '0 auto',
              opacity: 0.97,
              filter: 'drop-shadow(0 2px 16px #0004)'
            }}
          />
        </div>
        {/* Marco blanco exterior */}
        <div className={`relative z-10 min-w-[300px]`}>
          <div className="bg-white" style={{ padding: 12, boxShadow: '0 8px 32px -8px #0006' }}>
            {/* Marco dorado interior */}
            <div style={{ border: '2px solid #d4af37', padding: '25px 5px 25px 5px' }}>
              {/* Contenido */}
              <div className="flex flex-col items-center text-center">
                <h1 className="text-7xl md:text-7xl text-navy mb-2 imperial-script-regular">
                  Mary
                </h1>
                <span className="block text-4xl text-gold my-1 font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>&amp;</span>
                <h1 className="text-7xl md:text-7xl text-navy mb-6 imperial-script-regular">
                  Javi
                </h1>
                {/* Fecha estilo referencia */}
                <div className="w-full flex flex-col items-center mb-6">
                  <div className="flex items-center justify-center w-full gap-2 md:gap-6">
                    {/* SÁBADO */}
                    <div className="flex flex-col items-center w-20">
                      <div className="w-full h-px bg-navy mb-1" />
                      <span className="block text-xs md:text-sm text-navy tracking-widest bodoni-moda-sc font-semibold uppercase">Sábado</span>
                      <div className="w-full h-px bg-navy mt-1" />
                    </div>
                    {/* Centro: Mes, Día, Hora */}
                    <div className="flex flex-col items-center justify-center min-w-[50px]">
                      <span className="block text-xs md:text-sm text-navy tracking-widest bodoni-moda-sc font-semibold mb-1" style={{ letterSpacing: '0.18em' }}>DIC</span>
                      <span className="block text-4xl md:text-5xl text-navy font-bold leading-none bodoni-moda-sc">20</span>
                      <span className="block text-md md:text-lg text-navy bodoni-moda-sc mt-1">2025</span>
                    </div>
                    {/* HORA */}
                    <div className="flex flex-col items-center w-20">
                      <div className="w-full h-px bg-navy mb-1" />
                      <span className="block text-xs md:text-sm text-navy tracking-widest bodoni-moda-sc font-semibold uppercase">3:00 P.M</span>
                      <div className="w-full h-px bg-navy mt-1" />
                    </div>
                  </div>
                </div>
                <p className="text-navy text-base bodoni-moda-sc mb-1">Hacienda Riojana</p>
                <p className="text-navy text-sm mb-2 bodoni-moda-sc">Marinilla, Antioquia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingInvitation; 