import { MapPin, Phone, Calendar } from 'lucide-react';

interface LocationProps {
  isNavySection?: boolean;
}

const Location = ({ isNavySection = false }: LocationProps) => {
  const textColor = isNavySection ? 'text-white' : 'text-gray-900';
  const subtextColor = isNavySection ? 'text-gray-300' : 'text-gray-600';
  const cardBg = isNavySection ? 'bg-navy-800/50' : 'bg-gray-50';
  const borderColor = isNavySection ? 'border-navy-600' : 'border-gray-200';
  const accentColor = isNavySection ? 'text-gold' : 'text-yellow-600';
  const accentBg = isNavySection ? 'bg-gold' : 'bg-yellow-600';

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pb-24">
      <div className="max-w-4xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold ${textColor} mb-4`}>
            Ubicación
          </h2>
          <div className={`w-24 h-px ${accentBg} mx-auto opacity-80`} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Venue Details */}
          <div className="space-y-6">
            <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
              <h3 className={`text-2xl font-bold ${textColor} mb-4`}>
                Hacienda Riojana
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className={`w-5 h-5 ${accentColor} mt-1 flex-shrink-0`} />
                  <div>
                    <p className={`font-medium ${textColor}`}>
                      Dirección
                    </p>
                    <p className={`text-sm ${subtextColor}`}>
                      Km 2 Vía Marinilla - El Peñol<br />
                      Marinilla, Antioquia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className={`w-5 h-5 ${accentColor} mt-1 flex-shrink-0`} />
                  <div>
                    <p className={`font-medium ${textColor}`}>
                      Contacto
                    </p>
                    <p className={`text-sm ${subtextColor}`}>
                      +57 (4) 548 2020
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Calendar className={`w-5 h-5 ${accentColor} mt-1 flex-shrink-0`} />
                  <div>
                    <p className={`font-medium ${textColor}`}>
                      Fecha & Hora
                    </p>
                    <p className={`text-sm ${subtextColor}`}>
                      Sábado, 20 de Diciembre 2025<br />
                      3:00 PM - 12:00 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
              <h4 className={`font-bold text-lg ${textColor} mb-3`}>
                Cómo llegar
              </h4>
              <ul className={`space-y-2 text-sm ${subtextColor}`}>
                <li>• Transporte privado desde Medellín disponible</li>
                <li>• Estacionamiento gratuito en el lugar</li>
                <li>• Coordenadas GPS: 6.1749° N, 75.3412° W</li>
              </ul>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className={`${cardBg} rounded-lg p-8 border ${borderColor} min-h-80 flex items-center justify-center`}>
            <div className="text-center">
              <MapPin className={`w-16 h-16 ${accentColor} mx-auto mb-4 opacity-60`} />
              <p className={`font-medium ${textColor}`}>
                Mapa interactivo
              </p>
              <p className={`text-sm ${subtextColor} mt-2`}>
                Hacienda Riojana, Marinilla
              </p>
              <div className={`w-32 h-px ${accentBg} mx-auto mt-4 opacity-40`} />
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className={`text-sm ${subtextColor} italic`}>
            "Un lugar mágico para celebrar nuestro amor"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location; 