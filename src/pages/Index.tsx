import { useState, useEffect } from 'react';
import WeddingInvitation from '@/components/WeddingInvitation';
import Location from '@/components/sections/Location';
import DressCode from '@/components/sections/DressCode';
import Itinerary from '@/components/sections/Itinerary';
import Spotify from '@/components/sections/Spotify';
import Photos from '@/components/sections/Photos';
import Gifts from '@/components/sections/Gifts';
import RSVP from '@/components/sections/RSVP';
import BottomNavigation from '@/components/BottomNavigation';
import SectionSeparator from '@/components/ui/SectionSeparator';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'location', 'dress-code', 'itinerary', 'spotify', 'photos', 'gifts', 'rsvp'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="relative">
        {/* Home Section - Navy background */}
        <section id="home" className="min-h-screen bg-navy">
          <WeddingInvitation />
        </section>

        {/* Separador 1: Navy → White (SVG wave) */}
        <SectionSeparator number={1} position="left" fromColor="navy" toColor="white" type="svg" />

        {/* Location Section - White background */}
        <section id="location" className="min-h-screen bg-white">
          <Location isNavySection={false} />
        </section>

        {/* Separador 2: White → Navy (Simple gradient) */}
        <SectionSeparator number={2} position="right" fromColor="white" toColor="navy" type="gradient" />

        {/* Dress Code Section - Navy background */}
        <section id="dress-code" className="min-h-screen bg-navy">
          <DressCode isNavySection={true} />
        </section>

        {/* Separador 3: Navy → White (SVG wave) */}
        <SectionSeparator number={3} position="left" fromColor="navy" toColor="white" type="svg" />

        {/* Itinerary Section - White background */}
        <section id="itinerary" className="min-h-screen bg-white">
          <Itinerary isNavySection={false} />
        </section>

        {/* Separador 4: White → Navy (Simple gradient) */}
        <SectionSeparator number={4} position="right" fromColor="white" toColor="navy" type="gradient" />

        {/* Spotify Section - Navy background */}
        <section id="spotify" className="min-h-screen bg-navy">
          <Spotify isNavySection={true} />
        </section>

        {/* Separador 1: Navy → White (SVG wave) */}
        <SectionSeparator number={1} position="left" fromColor="navy" toColor="white" type="svg" />

        {/* Photos Section - White background */}
        <section id="photos" className="min-h-screen bg-white">
          <Photos isNavySection={false} />
        </section>

        {/* Separador 2: White → Navy (Simple gradient) */}
        <SectionSeparator number={2} position="right" fromColor="white" toColor="navy" type="gradient" />

        {/* Gifts Section - Navy background */}
        <section id="gifts" className="min-h-screen bg-navy">
          <Gifts isNavySection={true} />
        </section>

        {/* Separador 3: Navy → White (SVG wave) */}
        <SectionSeparator number={3} position="left" fromColor="navy" toColor="white" type="svg" />

        {/* RSVP Section - White background */}
        <section id="rsvp" className="min-h-screen bg-white">
          <RSVP isNavySection={false} />
        </section>
      </div>
      {/* Fixed Bottom Navigation fuera del div principal */}
      <BottomNavigation 
        activeSection={activeSection} 
        onSectionChange={scrollToSection} 
      />
    </>
  );
};

export default Index;
