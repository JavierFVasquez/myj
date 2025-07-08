import { useState } from 'react';
import { CheckCircle, Heart, Phone, Mail, Calendar } from 'lucide-react';

interface RSVPProps {
  isNavySection?: boolean;
}

const RSVP = ({ isNavySection = false }: RSVPProps) => {
  const textColor = isNavySection ? 'text-white' : 'text-gray-900';
  const subtextColor = isNavySection ? 'text-gray-300' : 'text-gray-600';
  const cardBg = isNavySection ? 'bg-navy-800/50' : 'bg-gray-50';
  const borderColor = isNavySection ? 'border-navy-600' : 'border-gray-200';
  const accentColor = isNavySection ? 'text-gold' : 'text-yellow-600';
  const accentBg = isNavySection ? 'bg-gold' : 'bg-yellow-600';
  const gradientBg = isNavySection ? 'bg-gradient-to-r from-navy-700/80 to-navy-800/80' : 'bg-gradient-to-r from-yellow-50 to-yellow-100';
  const gradientBorder = isNavySection ? 'border-navy-600' : 'border-yellow-200';
  const inputBg = isNavySection ? 'bg-navy-700/50' : 'bg-white';
  const inputBorder = isNavySection ? 'border-navy-600' : 'border-gray-300';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 1,
    attending: 'yes',
    dietaryRestrictions: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('RSVP submitted:', formData);
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 pb-24">
        <div className="max-w-md w-full mx-auto text-center">
          <div className={`${cardBg} rounded-lg p-8 border ${borderColor}`}>
            <CheckCircle className={`w-16 h-16 ${accentColor} mx-auto mb-4`} />
            <h2 className={`text-3xl font-bold ${textColor} mb-4`}>
              ¡Gracias!
            </h2>
            <p className={`${subtextColor} mb-6`}>
              Tu confirmación ha sido recibida. Nos emociona celebrar contigo.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className={`${accentBg} text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors`}
            >
              Confirmar Otro Invitado
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pb-24">
      <div className="max-w-4xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold ${textColor} mb-4`}>
            Confirma tu Asistencia
          </h2>
          <div className={`w-24 h-px ${accentBg} mx-auto opacity-80`} />
          <p className={`text-lg ${subtextColor} mt-4`}>
            Nos encantaría celebrar contigo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* RSVP Form */}
          <div className="space-y-6">
            <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
              <div className="flex items-center mb-6">
                <CheckCircle className={`w-6 h-6 ${accentColor} mr-3`} />
                <h3 className={`text-2xl font-bold ${textColor}`}>
                  Formulario de Confirmación
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium ${textColor} mb-2`}>
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-3 py-2 ${inputBg} border ${inputBorder} rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${textColor}`}
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium ${textColor} mb-2`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-3 py-2 ${inputBg} border ${inputBorder} rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${textColor}`}
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium ${textColor} mb-2`}>
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 ${inputBg} border ${inputBorder} rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${textColor}`}
                    placeholder="+57 300 123 4567"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium ${textColor} mb-2`}>
                    ¿Asistirás? *
                  </label>
                  <select
                    name="attending"
                    value={formData.attending}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-3 py-2 ${inputBg} border ${inputBorder} rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${textColor}`}
                  >
                    <option value="yes">Sí, asistiré</option>
                    <option value="no">No podré asistir</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-sm font-medium ${textColor} mb-2`}>
                    Número de Invitados
                  </label>
                  <input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    min="1"
                    max="4"
                    className={`w-full px-3 py-2 ${inputBg} border ${inputBorder} rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${textColor}`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium ${textColor} mb-2`}>
                    Restricciones Alimentarias
                  </label>
                  <input
                    type="text"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 ${inputBg} border ${inputBorder} rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${textColor}`}
                    placeholder="Vegetariano, vegano, alergias..."
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium ${textColor} mb-2`}>
                    Mensaje Especial
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full px-3 py-2 ${inputBg} border ${inputBorder} rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${textColor}`}
                    placeholder="Déjanos un mensaje especial..."
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full ${accentBg} text-white py-3 rounded-lg hover:bg-yellow-700 transition-colors font-medium`}
                >
                  Confirmar Asistencia
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
              <h3 className={`text-xl font-bold ${textColor} mb-4`}>
                Información de Contacto
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className={`w-5 h-5 ${accentColor}`} />
                  <div>
                    <p className={`font-medium ${textColor}`}>
                      Teléfono
                    </p>
                    <p className={`text-sm ${subtextColor}`}>
                      +57 300 123 4567
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className={`w-5 h-5 ${accentColor}`} />
                  <div>
                    <p className={`font-medium ${textColor}`}>
                      Email
                    </p>
                    <p className={`text-sm ${subtextColor}`}>
                      mary.javi.wedding@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
              <h4 className={`font-bold text-lg ${textColor} mb-3`}>
                Fechas Importantes
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className={`w-4 h-4 ${accentColor}`} />
                  <div>
                    <p className={`text-sm ${textColor}`}>
                      Confirmación: 15 de Noviembre
                    </p>
                    <p className={`text-xs ${subtextColor}`}>
                      Último día para confirmar
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className={`w-4 h-4 ${accentColor}`} />
                  <div>
                    <p className={`text-sm ${textColor}`}>
                      Boda: 20 de Diciembre
                    </p>
                    <p className={`text-xs ${subtextColor}`}>
                      Nuestro día especial
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Message */}
            <div className={`${gradientBg} rounded-lg p-6 border ${gradientBorder} text-center`}>
              <Heart className={`w-8 h-8 ${accentColor} mx-auto mb-3`} />
              <p className={`text-sm ${subtextColor}`}>
                "Tu presencia es el regalo más valioso que podemos recibir"
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className={`text-sm ${subtextColor}`}>
            Si tienes alguna pregunta, no dudes en contactarnos
          </p>
          <div className={`w-16 h-px ${accentBg} mx-auto mt-4 opacity-60`}></div>
        </div>
      </div>
    </div>
  );
};

export default RSVP; 