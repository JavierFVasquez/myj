# Separadores Modernos para Invitación de Boda

Este conjunto de componentes proporciona separadores elegantes y modernos para crear transiciones suaves entre secciones de la invitación de boda.

## Componentes Disponibles

### 1. SectionWave
Separador SVG de onda simple para transiciones suaves.

```jsx
import SectionWave from './ui/SectionWave';

// Onda hacia sección blanca
<SectionWave color="#fff" />

// Onda hacia sección navy (invertida)
<SectionWave color="#1b2a46" flip />
```

**Props:**
- `color`: Color del separador (default: "#1b2a46")
- `flip`: Invertir la onda (default: false)
- `height`: Altura del separador (default: "60px")

### 2. GoldBranchSeparator
Separador decorativo usando el PNG de rama dorada.

```jsx
import GoldBranchSeparator from './ui/GoldBranchSeparator';

<GoldBranchSeparator size={100} />
```

**Props:**
- `size`: Tamaño en píxeles (default: 120)
- `className`: Clases CSS adicionales
- `style`: Estilos inline adicionales

### 3. ModernSeparators
Separadores SVG con diferentes variantes modernas.

```jsx
import ModernSeparators from './ui/ModernSeparators';

// Variantes disponibles: 'wave', 'curve', 'zigzag', 'dots', 'floral'
<ModernSeparators variant="curve" color="#fff" />
<ModernSeparators variant="dots" color="#1b2a46" />
<ModernSeparators variant="floral" color="#fff" />
```

**Props:**
- `variant`: Tipo de separador (default: 'wave')
- `color`: Color de fondo (default: "#1b2a46")
- `height`: Altura del separador (default: "60px")
- `flip`: Invertir el separador (default: false)

### 4. GradientSection
Contenedor de sección con degradados sutiles.

```jsx
import GradientSection from './ui/GradientSection';

<GradientSection variant="navy" withTopGradient withBottomGradient>
  {/* Contenido de la sección */}
</GradientSection>
```

**Props:**
- `variant`: 'navy' | 'white' (default: 'navy')
- `withTopGradient`: Agregar degradado superior (default: false)
- `withBottomGradient`: Agregar degradado inferior (default: false)
- `className`: Clases CSS adicionales

## Patrones de Uso Recomendados

### Patrón 1: Alternancia Simple
```jsx
<GradientSection variant="navy">
  {/* Sección navy */}
</GradientSection>
<SectionWave color="#fff" />
<GradientSection variant="white">
  {/* Sección blanca */}
</GradientSection>
<SectionWave color="#1b2a46" flip />
```

### Patrón 2: Con Rama Decorativa
```jsx
<GradientSection variant="navy">
  {/* Contenido */}
  <GoldBranchSeparator />
</GradientSection>
<SectionWave color="#fff" />
<GradientSection variant="white">
  {/* Contenido */}
</GradientSection>
```

### Patrón 3: Variedad de Separadores
```jsx
<GradientSection variant="navy">
  {/* Sección importante */}
</GradientSection>
<ModernSeparators variant="floral" color="#fff" />
<GradientSection variant="white">
  {/* Sección con acento floral */}
</GradientSection>
<ModernSeparators variant="curve" color="#1b2a46" />
<GradientSection variant="navy">
  {/* Otra sección */}
</GradientSection>
```

## Colores del Tema

- **Navy**: `#1b2a46` (fondo principal)
- **Gold**: `#d4af37` (acentos dorados)
- **White**: `#ffffff` (fondo alternativo)

## Responsive

Todos los separadores son completamente responsivos y se adaptan automáticamente al ancho de la pantalla.

## Ejemplos Completos

Ver `SeparatorExamples.tsx` para ejemplos de todos los separadores en acción. 