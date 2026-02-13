import { siteCopy } from '@/content/siteCopy';
import { CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    'Professional civil engineering expertise',
    'Cutting-edge 3D visualization',
    'Traditional Vastu principles',
    'Modern interior design',
    'End-to-end project management',
  ];

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              About Us
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {siteCopy.about.description}
              </p>
            </div>
            <div className="space-y-3 pt-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 p-8 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl md:text-7xl font-bold text-primary">15+</div>
                <div className="text-xl md:text-2xl font-semibold text-foreground">
                  Years of Excellence
                </div>
                <div className="text-base text-muted-foreground max-w-xs mx-auto">
                  Delivering quality construction and design solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
