import SectionWave from './ui/SectionWave';
import ModernSeparators from './ui/ModernSeparators';
import GoldBranchSeparator from './ui/GoldBranchSeparator';
import GradientSection from './ui/GradientSection';

const SeparatorExamples = () => {
  return (
    <div className="min-h-screen bg-navy">
      {/* Ejemplo 1: Onda simple */}
      <GradientSection variant="navy" withBottomGradient>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Separador: Onda Simple</h2>
          <p className="text-white">Transición suave con SectionWave</p>
        </div>
      </GradientSection>
      <SectionWave color="#fff" />

      {/* Ejemplo 2: Rama dorada */}
      <GradientSection variant="white" withTopGradient>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-navy">Separador: Rama Dorada</h2>
          <p className="text-navy mb-4">Decorativo con PNG de rama</p>
          <GoldBranchSeparator size={80} />
        </div>
      </GradientSection>

      {/* Ejemplo 3: Curva moderna */}
      <ModernSeparators variant="curve" color="#1b2a46" />
      <GradientSection variant="navy" withTopGradient>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Separador: Curva Moderna</h2>
          <p className="text-white">Transición curva elegante</p>
        </div>
      </GradientSection>

      {/* Ejemplo 4: Zigzag */}
      <ModernSeparators variant="zigzag" color="#fff" />
      <GradientSection variant="white" withTopGradient>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-navy">Separador: Zigzag</h2>
          <p className="text-navy">Patrón geométrico moderno</p>
        </div>
      </GradientSection>

      {/* Ejemplo 5: Puntos decorativos */}
      <ModernSeparators variant="dots" color="#1b2a46" />
      <GradientSection variant="navy" withTopGradient>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Separador: Puntos Dorados</h2>
          <p className="text-white">Círculos decorativos con acentos dorados</p>
        </div>
      </GradientSection>

      {/* Ejemplo 6: Floral */}
      <ModernSeparators variant="floral" color="#fff" />
      <GradientSection variant="white" withTopGradient>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-navy">Separador: Floral</h2>
          <p className="text-navy">Patrón floral con acentos dorados</p>
        </div>
      </GradientSection>

      {/* Ejemplo 7: Combinación */}
      <ModernSeparators variant="wave" color="#1b2a46" />
      <GradientSection variant="navy" withTopGradient>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Combinación: Onda + Rama</h2>
          <p className="text-white mb-4">Separador SVG + decorativo PNG</p>
          <GoldBranchSeparator size={60} />
        </div>
      </GradientSection>
    </div>
  );
};

export default SeparatorExamples; 