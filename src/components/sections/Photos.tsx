import { Image, Camera, Heart, ExternalLink, Download, Share2 } from 'lucide-react';

interface PhotosProps {
  isNavySection?: boolean;
}

const Photos = ({ isNavySection = false }: PhotosProps) => {
  const textColor = isNavySection ? 'text-white' : 'text-gray-900';
  const subtextColor = isNavySection ? 'text-gray-300' : 'text-gray-600';
  const cardBg = isNavySection ? 'bg-navy-800/50' : 'bg-gray-50';
  const borderColor = isNavySection ? 'border-navy-600' : 'border-gray-200';
  const accentColor = isNavySection ? 'text-gold' : 'text-yellow-600';
  const accentBg = isNavySection ? 'bg-gold' : 'bg-yellow-600';
  const innerCardBg = isNavySection ? 'bg-navy-700/30' : 'bg-white';

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pb-24">
      <div className="max-w-4xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold ${textColor} mb-4`}>
            Nuestras Fotos
          </h2>
          <div className={`w-24 h-px ${accentBg} mx-auto opacity-80`} />
          <p className={`text-lg ${subtextColor} mt-4`}>
            Momentos especiales de nuestro amor
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Photo Album Link */}
          <div className="space-y-6">
            <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
              <div className="flex items-center mb-4">
                <Camera className={`w-6 h-6 ${accentColor} mr-3`} />
                <h3 className={`text-2xl font-bold ${textColor}`}>
                  Álbum de Fotos
                </h3>
              </div>
              
              {/* Photo Album Placeholder */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-center text-white">
                <Image className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <h4 className="text-xl font-bold mb-2">
                  Mary & Javi Wedding
                </h4>
                <p className="text-sm opacity-90 mb-4">
                  Álbum digital compartido
                </p>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-full text-sm hover:bg-blue-50 transition-colors flex items-center mx-auto">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver Álbum Completo
                </button>
              </div>
            </div>

            {/* Album Info */}
            <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
              <h4 className={`font-bold text-lg ${textColor} mb-3`}>
                Sobre nuestro álbum
              </h4>
              <p className={`text-sm ${subtextColor} leading-relaxed`}>
                Compartiremos todas las fotos de nuestra boda en este álbum digital. 
                Podrás descargar las fotos que más te gusten y compartir tus momentos 
                favoritos con nosotros.
              </p>
            </div>
          </div>

          {/* Photo Categories */}
          <div className="space-y-6">
            <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
              <h3 className={`text-xl font-bold ${textColor} mb-4`}>
                Categorías de Fotos
              </h3>
              
              <div className="space-y-4">
                <div className={`${innerCardBg} rounded-lg p-4`}>
                  <div className="flex items-center mb-2">
                    <Heart className={`w-4 h-4 ${accentColor} mr-2`} />
                    <h4 className={`font-bold ${textColor}`}>
                      Ceremonia
                    </h4>
                  </div>
                  <p className={`text-sm ${subtextColor}`}>
                    Momentos especiales del "Sí, quiero"
                  </p>
                </div>

                <div className={`${innerCardBg} rounded-lg p-4`}>
                  <div className="flex items-center mb-2">
                    <Camera className={`w-4 h-4 ${accentColor} mr-2`} />
                    <h4 className={`font-bold ${textColor}`}>
                      Recepción
                    </h4>
                  </div>
                  <p className={`text-sm ${subtextColor}`}>
                    Celebración y fiesta con familia y amigos
                  </p>
                </div>

                <div className={`${innerCardBg} rounded-lg p-4`}>
                  <div className="flex items-center mb-2">
                    <Image className={`w-4 h-4 ${accentColor} mr-2`} />
                    <h4 className={`font-bold ${textColor}`}>
                      Fotos de Familia
                    </h4>
                  </div>
                  <p className={`text-sm ${subtextColor}`}>
                    Retratos con nuestros seres queridos
                  </p>
                </div>

                <div className={`${innerCardBg} rounded-lg p-4`}>
                  <div className="flex items-center mb-2">
                    <Heart className={`w-4 h-4 ${accentColor} mr-2`} />
                    <h4 className={`font-bold ${textColor}`}>
                      Detalles
                    </h4>
                  </div>
                  <p className={`text-sm ${subtextColor}`}>
                    Decoración y momentos especiales
                  </p>
                </div>
              </div>
            </div>

            {/* Photo Sharing */}
            <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
              <h4 className={`font-bold text-lg ${textColor} mb-3`}>
                Comparte tus fotos
              </h4>
              <p className={`text-sm ${subtextColor} mb-4`}>
                Si tomas fotos durante la boda, compártelas con nosotros 
                usando el hashtag #MaryJaviWedding
              </p>
              <div className="flex space-x-2">
                <button className={`${accentBg} text-white px-4 py-2 rounded-lg text-sm hover:bg-yellow-700 transition-colors flex items-center`}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartir
                </button>
                <button className={`${innerCardBg} ${textColor} px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors border ${borderColor} flex items-center`}>
                  <Download className="w-4 h-4 mr-2" />
                  Descargar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery Preview */}
        <div className="mt-12">
          <div className={`${cardBg} rounded-lg p-8 border ${borderColor}`}>
            <h3 className={`text-2xl font-bold ${textColor} text-center mb-6`}>
              Vista Previa
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="aspect-square bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg flex items-center justify-center border border-yellow-400">
                  <Camera className={`w-8 h-8 ${accentColor} opacity-60`} />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <p className={`text-sm ${subtextColor}`}>
                Las fotos estarán disponibles después de la boda
              </p>
            </div>
          </div>
        </div>

        {/* Special Message */}
        <div className="mt-12 text-center">
          <p className={`text-sm ${subtextColor} italic`}>
            "Cada foto cuenta una historia de amor"
          </p>
          <div className={`w-16 h-px ${accentBg} mx-auto mt-4 opacity-60`}></div>
        </div>
      </div>
    </div>
  );
};

export default Photos; 