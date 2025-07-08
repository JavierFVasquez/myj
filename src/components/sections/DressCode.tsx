import { Sparkles, Heart, Star } from 'lucide-react';

interface DressCodeProps {
  isNavySection?: boolean;
}

const DressCode = ({ isNavySection = false }: DressCodeProps) => {
  const textColor = isNavySection ? 'text-white' : 'text-gray-900';
  const subtextColor = isNavySection ? 'text-gray-300' : 'text-gray-600';
  const cardBg = isNavySection ? 'bg-navy-800/50' : 'bg-gray-50';
  const innerCardBg = isNavySection ? 'bg-navy-700/30' : 'bg-white';
  const borderColor = isNavySection ? 'border-navy-600' : 'border-gray-200';
  const accentColor = isNavySection ? 'text-gold' : 'text-yellow-600';
  const accentBg = isNavySection ? 'bg-gold' : 'bg-yellow-600';

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pb-24">
      <div className="max-w-4xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold ${textColor} mb-4`}>
            Dress Code
          </h2>
          <div className={`w-24 h-px ${accentBg} mx-auto opacity-80`} />
          <p className={`text-lg ${subtextColor} mt-4`}>
            Formal Elegante
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* For Women */}
          <div className="space-y-6">
            <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
              <div className="flex items-center mb-4">
                <Sparkles className={`w-6 h-6 ${accentColor} mr-3`} />
                <h3 className={`text-2xl font-bold ${textColor}`}>
                  Para las Damas
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className={`${innerCardBg} rounded-lg p-4`}>
                  <h4 className={`font-bold ${textColor} mb-2`}>
                    Recomendado
                  </h4>
                  <ul className={`space-y-2 text-sm ${subtextColor}`}>
                    <li>• Vestidos largos o cocktail elegantes</li>
                    <li>• Colores: dorado, plateado, negro, blanco</li>
                    <li>• Accesorios dorados o plateados</li>
                    <li>• Zapatos de tacón o flats elegantes</li>
                  </ul>
                </div>

                <div className={`${innerCardBg} rounded-lg p-4`}>
                  <h4 className={`font-bold ${textColor} mb-2`}>
                    Evitar
                  </h4>
                  <ul className={`space-y-2 text-sm ${subtextColor}`}>
                    <li>• Colores muy llamativos o neón</li>
                    <li>• Ropa casual o deportiva</li>
                    <li>• Accesorios muy informales</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* For Men */}
          <div className="space-y-6">
            <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
              <div className="flex items-center mb-4">
                <Star className={`w-6 h-6 ${accentColor} mr-3`} />
                <h3 className={`text-2xl font-bold ${textColor}`}>
                  Para los Caballeros
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className={`${innerCardBg} rounded-lg p-4`}>
                  <h4 className={`font-bold ${textColor} mb-2`}>
                    Recomendado
                  </h4>
                  <ul className={`space-y-2 text-sm ${subtextColor}`}>
                    <li>• Traje completo o smoking</li>
                    <li>• Camisa blanca o de colores suaves</li>
                    <li>• Corbata o corbatín elegante</li>
                    <li>• Zapatos formales negros o marrones</li>
                  </ul>
                </div>

                <div className={`${innerCardBg} rounded-lg p-4`}>
                  <h4 className={`font-bold ${textColor} mb-2`}>
                    Evitar
                  </h4>
                  <ul className={`space-y-2 text-sm ${subtextColor}`}>
                    <li>• Jeans o ropa casual</li>
                    <li>• Camisetas o polos informales</li>
                    <li>• Zapatos deportivos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mt-12">
          <div className={`${cardBg} rounded-lg p-8 border ${borderColor}`}>
            <h3 className={`text-2xl font-bold ${textColor} text-center mb-6`}>
              Paleta de Colores
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full mx-auto mb-2 border-2 border-yellow-500"></div>
                <p className={`text-sm ${textColor}`}>Dorado</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 border-2 border-gray-400"></div>
                <p className={`text-sm ${textColor}`}>Plateado</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full mx-auto mb-2 border-2 border-gray-600"></div>
                <p className={`text-sm ${textColor}`}>Negro</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-2 border-2 border-gray-300"></div>
                <p className={`text-sm ${textColor}`}>Blanco</p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Note */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className={`w-6 h-6 ${accentColor} mr-2`} />
            <p className={`font-medium ${textColor}`}>
              Lo más importante es que te sientas cómodo y elegante
            </p>
          </div>
          <p className={`text-sm ${subtextColor} italic`}>
            "La elegancia está en los detalles"
          </p>
        </div>
      </div>
    </div>
  );
};

export default DressCode; 