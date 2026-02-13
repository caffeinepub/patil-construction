import { SiteHeader } from './components/SiteHeader';
import { HeroSection } from './components/Sections/HeroSection';
import { ServicesSection } from './components/Sections/ServicesSection';
import { AboutSection } from './components/Sections/AboutSection';
import { ContactSection } from './components/Sections/ContactSection';
import { SiteFooter } from './components/SiteFooter';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
