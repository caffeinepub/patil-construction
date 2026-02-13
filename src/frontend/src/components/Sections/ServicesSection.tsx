import { siteCopy } from '@/content/siteCopy';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Building2, Layers, Compass, Palette, Home, KeyRound, HelpCircle } from 'lucide-react';

const serviceIcons = {
  realEstateServices: KeyRound,
  civilEngineering: Building2,
  elevation3D: Layers,
  vastuConsulting: Compass,
  interior: Palette,
  construction: Home,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive construction and design solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {siteCopy.services.map((service) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || HelpCircle;
            return (
              <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 border-2">
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
