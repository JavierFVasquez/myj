import { Music, Heart, Play, Headphones } from 'lucide-react';

interface SpotifyProps {
  isNavySection?: boolean;
}

const Spotify = ({ isNavySection = false }: SpotifyProps) => {
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
            Nuestra Música
          </h2>
          <div className={`w-24 h-px ${accentBg} mx-auto opacity-80`} />
          <p className={`text-lg ${subtextColor} mt-4`}>
            Canciones que cuentan nuestra historia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Spotify Playlist */}
          <div className="space-y-6">
            <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
              <div className="flex items-center mb-4">
                <Music className={`w-6 h-6 ${accentColor} mr-3`} />
                <h3 className={`text-2xl font-bold ${textColor}`}>
                  Playlist de la Boda
                </h3>
              </div>
              
              {/* Spotify Embed Placeholder */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-8 text-center text-white">
                <Headphones className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <h4 className="text-xl font-bold mb-2">
                  Mary & Javi Wedding
                </h4>
                <p className="text-sm opacity-90 mb-4">
                  Nuestra playlist especial
                </p>
                <button className="bg-white text-green-600 px-6 py-2 rounded-full text-sm hover:bg-green-50 transition-colors flex items-center mx-auto">
                  <Play className="w-4 h-4 mr-2" />
                  Escuchar en Spotify
                </button>
              </div>
            </div>

            {/* Playlist Info */}
            <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
              <h4 className={`font-bold text-lg ${textColor} mb-3`}>
                Sobre nuestra playlist
              </h4>
              <p className={`text-sm ${subtextColor} leading-relaxed`}>
                Hemos seleccionado canciones especiales que han marcado momentos importantes 
                en nuestra relación. Desde nuestro primer baile hasta las canciones que nos 
                han acompañado en este camino.
              </p>
            </div>
          </div>

          {/* Song Categories */}
          <div className="space-y-6">
            <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
              <h3 className={`text-xl font-bold ${textColor} mb-4`}>
                Categorías Musicales
              </h3>
              
              <div className="space-y-4">
                <div className={`${innerCardBg} rounded-lg p-4`}>
                  <div className="flex items-center mb-2">
                    <Heart className={`w-4 h-4 ${accentColor} mr-2`} />
                    <h4 className={`font-bold ${textColor}`}>
                      Canciones Románticas
                    </h4>
                  </div>
                  <p className={`text-sm ${subtextColor}`}>
                    Nuestras canciones favoritas de amor
                  </p>
                </div>

                <div className={`${innerCardBg} rounded-lg p-4`}>
                  <div className="flex items-center mb-2">
                    <Play className={`w-4 h-4 ${accentColor} mr-2`} />
                    <h4 className={`font-bold ${textColor}`}>
                      Para Bailar
                    </h4>
                  </div>
                  <p className={`text-sm ${subtextColor}`}>
                    Ritmos para celebrar toda la noche
                  </p>
                </div>

                <div className={`${innerCardBg} rounded-lg p-4`}>
                  <div className="flex items-center mb-2">
                    <Music className={`w-4 h-4 ${accentColor} mr-2`} />
                    <h4 className={`font-bold ${textColor}`}>
                      Clásicos Colombianos
                    </h4>
                  </div>
                  <p className={`text-sm ${subtextColor}`}>
                    Música tradicional de nuestro país
                  </p>
                </div>

                <div className={`${innerCardBg} rounded-lg p-4`}>
                  <div className="flex items-center mb-2">
                    <Heart className={`w-4 h-4 ${accentColor} mr-2`} />
                    <h4 className={`font-bold ${textColor}`}>
                      Nuestras Canciones
                    </h4>
                  </div>
                  <p className={`text-sm ${subtextColor}`}>
                    Melodías que cuentan nuestra historia
                  </p>
                </div>
              </div>
            </div>

            {/* Request Songs */}
            <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
              <h4 className={`font-bold text-lg ${textColor} mb-3`}>
                ¿Tienes una canción especial?
              </h4>
              <p className={`text-sm ${subtextColor} mb-4`}>
                Si hay una canción que te gustaría escuchar en nuestra boda, 
                compártela con nosotros.
              </p>
              <button className={`${accentBg} text-white px-4 py-2 rounded-lg text-sm hover:bg-yellow-700 transition-colors`}>
                Sugerir Canción
              </button>
            </div>
          </div>
        </div>

        {/* Special Message */}
        <div className="mt-12 text-center">
          <p className={`text-sm ${subtextColor} italic`}>
            "La música es el lenguaje del amor"
          </p>
          <div className={`w-16 h-px ${accentBg} mx-auto mt-4 opacity-60`}></div>
        </div>
      </div>
    </div>
  );
};

export default Spotify; 