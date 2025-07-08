import { Gift, Heart, Sparkles, CreditCard, Mail } from 'lucide-react';

interface GiftsProps {
  isNavySection?: boolean;
}

const Gifts = ({ isNavySection = false }: GiftsProps) => {
  const textColor = isNavySection ? 'text-white' : 'text-gray-900';
  const subtextColor = isNavySection ? 'text-gray-300' : 'text-gray-600';
  const cardBg = isNavySection ? 'bg-navy-800/50' : 'bg-gray-50';
  const borderColor = isNavySection ? 'border-navy-600' : 'border-gray-200';
  const accentColor = isNavySection ? 'text-gold' : 'text-yellow-600';
  const accentBg = isNavySection ? 'bg-gold' : 'bg-yellow-600';
  const gradientBg = isNavySection ? 'bg-gradient-to-r from-navy-700/80 to-navy-800/80' : 'bg-gradient-to-r from-yellow-50 to-yellow-100';
  const gradientBorder = isNavySection ? 'border-navy-600' : 'border-yellow-200';

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pb-24">
      <div className="max-w-4xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold ${textColor} mb-4`}>
            Regalos
          </h2>
          <div className={`w-24 h-px ${accentBg} mx-auto opacity-80`} />
          <p className={`text-lg ${subtextColor} mt-4`}>
            Su presencia es nuestro mejor regalo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Message */}
          <div className="space-y-6">
            <div className={`${cardBg} rounded-lg p-8 border ${borderColor} text-center`}>
              <Heart className={`w-12 h-12 ${accentColor} mx-auto mb-4`} />
              <h3 className={`text-2xl font-bold ${textColor} mb-4`}>
                Lluvia de Sobres
              </h3>
              <p className={`${subtextColor} leading-relaxed`}>
                Si desean hacernos un regalo, les agradecemos una contribución 
                para nuestra luna de miel y nuestro futuro hogar.
              </p>
            </div>

            {/* Gift Preferences */}
            <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
              <h4 className={`font-bold text-lg ${textColor} mb-4`}>
                Preferencias de Regalo
              </h4>
              <ul className={`space-y-3 text-sm ${subtextColor}`}>
                <li className="flex items-start space-x-2">
                  <Sparkles className={`w-4 h-4 ${accentColor} mt-0.5 flex-shrink-0`} />
                  <span>Contribución para luna de miel</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Sparkles className={`w-4 h-4 ${accentColor} mt-0.5 flex-shrink-0`} />
                  <span>Ayuda para nuestro primer hogar</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Sparkles className={`w-4 h-4 ${accentColor} mt-0.5 flex-shrink-0`} />
                  <span>Experiencias y memorias juntos</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="space-y-6">
            <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
              <h3 className={`text-xl font-bold ${textColor} mb-4`}>
                Formas de Contribuir
              </h3>
              
              <div className="space-y-4">
                <div className={`${cardBg} rounded-lg p-4 border ${borderColor}`}>
                  <div className="flex items-center mb-2">
                    <CreditCard className={`w-4 h-4 ${accentColor} mr-2`} />
                    <h4 className={`font-bold ${textColor}`}>
                      Transferencia Bancaria
                    </h4>
                  </div>
                  <p className={`text-sm ${subtextColor} mb-2`}>
                    Banco: Bancolombia
                  </p>
                  <p className={`text-sm ${subtextColor}`}>
                    Cuenta: 123-456-789
                  </p>
                </div>

                <div className={`${cardBg} rounded-lg p-4 border ${borderColor}`}>
                  <div className="flex items-center mb-2">
                    <Mail className={`w-4 h-4 ${accentColor} mr-2`} />
                    <h4 className={`font-bold ${textColor}`}>
                      Nequi/Daviplata
                    </h4>
                  </div>
                  <p className={`text-sm ${subtextColor}`}>
                    +57 300 123 4567
                  </p>
                </div>

                <div className={`${cardBg} rounded-lg p-4 border ${borderColor}`}>
                  <div className="flex items-center mb-2">
                    <Gift className={`w-4 h-4 ${accentColor} mr-2`} />
                    <h4 className={`font-bold ${textColor}`}>
                      En Efectivo
                    </h4>
                  </div>
                  <p className={`text-sm ${subtextColor}`}>
                    Caja de sobres disponible en la recepción
                  </p>
                </div>
              </div>
            </div>

            <div className={`${cardBg} rounded-lg p-6 border ${borderColor} text-center`}>
              <Gift className={`w-8 h-8 ${accentColor} mx-auto mb-3`} />
              <h4 className={`font-bold ${textColor} mb-2`}>
                Caja de Sobres
              </h4>
              <p className={`text-sm ${subtextColor}`}>
                Habrá una caja elegante disponible durante la recepción 
                para depositar sus sobres.
              </p>
            </div>
          </div>
        </div>

        {/* Special Message */}
        <div className="mt-12">
          <div className={`${gradientBg} rounded-lg p-8 border ${gradientBorder} text-center`}>
            <h3 className={`text-2xl font-bold ${textColor} mb-4`}>
              Un Mensaje Especial
            </h3>
            <p className={`${subtextColor} leading-relaxed max-w-2xl mx-auto`}>
              "Su presencia en nuestro día especial es el regalo más valioso que podemos recibir. 
              Si desean contribuir a nuestro futuro, cualquier cantidad será recibida con gratitud 
              y amor. Gracias por ser parte de nuestra historia."
            </p>
            <div className="flex items-center justify-center mt-6">
              <Heart className={`w-6 h-6 ${accentColor} mr-2`} />
              <span className={`font-bold ${textColor}`}>
                Mary & Javi
              </span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className={`text-sm ${subtextColor}`}>
            Para consultas sobre regalos: +57 300 123 4567
          </p>
          <div className={`w-16 h-px ${accentBg} mx-auto mt-4 opacity-60`}></div>
        </div>
      </div>
    </div>
  );
};

export default Gifts; 