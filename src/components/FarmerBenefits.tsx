import { Card } from "@/components/ui/card";
import { Clock, Shield, Briefcase } from "lucide-react";
import { useTranslation } from "@/hooks/react-i18next";

export const FarmerBenefits = () => {
  const { t } = useTranslation();
  const benefits = [
    {
      icon: Clock,
      titleKey: 'farmerBenefits.instantPayouts.title',
      subtitleKey: 'farmerBenefits.instantPayouts.subtitle',
      descriptionKey: 'farmerBenefits.instantPayouts.description',
      color: "text-secondary"
    },
    {
      icon: Shield,
      titleKey: 'farmerBenefits.zeroDisputes.title',
      subtitleKey: 'farmerBenefits.zeroDisputes.subtitle',
      descriptionKey: 'farmerBenefits.zeroDisputes.description',
      color: "text-primary"
    },
    {
      icon: Briefcase,
      titleKey: 'farmerBenefits.localJobs.title',
      subtitleKey: 'farmerBenefits.localJobs.subtitle',
      descriptionKey: 'farmerBenefits.localJobs.description',
      color: "text-secondary"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('benefits.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('benefits.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 hover:shadow-warm transition-smooth group bg-gradient-to-br from-background to-muted/30 hover:scale-105 transform">
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-xl ${index === 0 ? 'bg-gradient-warm' : index === 1 ? 'bg-gradient-hero' : 'bg-gradient-earth'} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {t(benefit.titleKey)}
                </h3>
                <p className="text-lg font-medium text-muted-foreground mb-4">
                  {t(benefit.subtitleKey)}
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t(benefit.descriptionKey)}
              </p>
              
              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};