import { siteCopy } from '@/content/siteCopy';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full">
      <div className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
        <img
          src="/assets/generated/patil-hero.dim_1920x800.png"
          alt="PATIL Construction - Modern residential and commercial construction"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        
        <div className="relative container h-full flex items-center">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              PATIL Construction
            </h1>
            <p className="text-xl md:text-2xl font-medium text-primary">
              Your vision, our precision
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              {siteCopy.hero.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="text-base font-semibold"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-base font-semibold"
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
