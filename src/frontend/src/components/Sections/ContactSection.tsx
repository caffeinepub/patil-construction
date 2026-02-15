import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, Mail, Phone, MapPin, Clock } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', message: '' });
      setErrors({});
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '9844629571',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'mahaveercivil@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Athani, Raybag, Chinchali',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your project? Contact us today for a consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{info.label}</div>
                        <div className="text-muted-foreground">{info.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border-2 border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-lg">Business Hours</h4>
              </div>
              <div className="text-base font-medium text-foreground">
                Always Open
              </div>
            </div>
          </div>

          <div>
            {isSubmitted ? (
              <Alert className="bg-primary/10 border-primary/20">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <AlertDescription className="text-base">
                  Thank you for your inquiry! We'll get back to you shortly.
                </AlertDescription>
              </Alert>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={errors.name ? 'border-destructive' : ''}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={errors.phone ? 'border-destructive' : ''}
                    placeholder="+91 XXX XXX XXXX"
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={errors.message ? 'border-destructive' : ''}
                    placeholder="Tell us about your project..."
                    rows={6}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full text-base font-semibold">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
