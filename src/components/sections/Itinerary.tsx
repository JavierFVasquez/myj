import { Clock, Heart, Music, Utensils, Camera, Sparkles } from 'lucide-react';

interface ItineraryProps {
  isNavySection?: boolean;
}

const Itinerary = ({ isNavySection = false }: ItineraryProps) => {
  const textColor = isNavySection ? 'text-white' : 'text-gray-900';
  const subtextColor = isNavySection ? 'text-gray-300' : 'text-gray-600';
  const cardBg = isNavySection ? 'bg-navy-800/50' : 'bg-gray-50';
  const borderColor = isNavySection ? 'border-navy-600' : 'border-gray-200';
  const accentColor = isNavySection ? 'text-gold' : 'text-yellow-600';
  const accentBg = isNavySection ? 'bg-gold' : 'bg-yellow-600';

  const timeline = [
    {
      time: '2:30 PM',
      title: 'Llegada de Invitados',
      description: 'Recepción y bienvenida con cócteles',
      icon: Heart,
      color: accentBg
    },
    {
      time: '3:00 PM',
      title: 'Ceremonia Religiosa',
      description: 'Celebración del matrimonio',
      icon: Sparkles,
      color: accentBg
    },
    {
      time: '4:00 PM',
      title: 'Cóctel de Bienvenida',
      description: 'Brindis y aperitivos',
      icon: Music,
      color: accentBg
    },
    {
      time: '5:00 PM',
      title: 'Fotos de Familia',
      description: 'Sesión fotográfica oficial',
      icon: Camera,
      color: accentBg
    },
    {
      time: '6:00 PM',
      title: 'Cena de Gala',
      description: 'Menú especial de la hacienda',
      icon: Utensils,
      color: accentBg
    },
    {
      time: '7:30 PM',
      title: 'Primer Baile',
      description: 'Mary & Javi abren el baile',
      icon: Heart,
      color: accentBg
    },
    {
      time: '8:00 PM',
      title: 'Fiesta',
      description: 'Música y celebración hasta el amanecer',
      icon: Music,
      color: accentBg
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pb-24">
      <div className="max-w-4xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold ${textColor} mb-4`}>
            Itinerario
          </h2>
          <div className={`w-24 h-px ${accentBg} mx-auto opacity-80`} />
          <p className={`text-lg ${subtextColor} mt-4`}>
            Sábado 20 de Diciembre, 2025
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-yellow-300 transform md:-translate-x-1/2`}></div>

          <div className="space-y-8">
            {timeline.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline Dot */}
                  <div className={`absolute left-8 md:left-1/2 w-4 h-4 ${event.color} rounded-full border-2 border-white shadow-lg transform md:-translate-x-1/2 z-10`}>
                    <Icon className="w-2 h-2 text-white mx-auto mt-0.5" />
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className={`${cardBg} rounded-lg p-6 border ${borderColor} hover:shadow-lg transition-all duration-300`}>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-sm ${accentColor} font-semibold`}>
                          {event.time}
                        </span>
                        <div className={`w-3 h-3 ${event.color} rounded-full`}></div>
                      </div>
                      
                      <h3 className={`text-xl font-bold ${textColor} mb-2`}>
                        {event.title}
                      </h3>
                      
                      <p className={`text-sm ${subtextColor}`}>
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Special Notes */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
            <h3 className={`font-bold text-lg ${textColor} mb-3`}>
              Información Importante
            </h3>
            <ul className={`space-y-2 text-sm ${subtextColor}`}>
              <li>• Llegada recomendada: 2:30 PM</li>
              <li>• Ceremonia puntual a las 3:00 PM</li>
              <li>• Estacionamiento disponible</li>
              <li>• Cócteles y aperitivos incluidos</li>
            </ul>
          </div>

          <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
            <h3 className={`font-bold text-lg ${textColor} mb-3`}>
              Lo que Incluye
            </h3>
            <ul className={`space-y-2 text-sm ${subtextColor}`}>
              <li>• Cóctel de bienvenida</li>
              <li>• Cena de gala completa</li>
              <li>• Bar abierto durante la fiesta</li>
              <li>• Música y entretenimiento</li>
            </ul>
          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-12 text-center">
          <p className={`text-sm ${subtextColor} italic`}>
            "Un día perfecto para celebrar nuestro amor eterno"
          </p>
          <div className={`w-16 h-px ${accentBg} mx-auto mt-4 opacity-60`}></div>
        </div>
      </div>
    </div>
  );
};

export default Itinerary; 