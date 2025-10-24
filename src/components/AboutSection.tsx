import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Award, Globe } from "lucide-react";
import { useTranslation } from "@/hooks/react-i18next";
import villageLife from "@/assets/village-life.jpg";

export const AboutSection = () => {
  const { t } = useTranslation();
  const values = [
    {
      icon: Heart,
      titleKey: 'about.values.community.title',
      subtitleKey: 'about.values.community.subtitle',
      descriptionKey: 'about.values.community.description'
    },
    {
      icon: Target,
      titleKey: 'about.values.transparency.title',
      subtitleKey: 'about.values.transparency.subtitle',
      descriptionKey: 'about.values.transparency.description'
    },
    {
      icon: Award,
      titleKey: 'about.values.quality.title',
      subtitleKey: 'about.values.quality.subtitle',
      descriptionKey: 'about.values.quality.description'
    },
    {
      icon: Globe,
      titleKey: 'about.values.sustainability.title',
      subtitleKey: 'about.values.sustainability.subtitle',
      descriptionKey: 'about.values.sustainability.description'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
          {/* Image */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-warm">
              <img
                src={villageLife}
                alt="Rural village life with sustainable farming practices"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              {t('aboutSection.title')}
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t('aboutSection.description1')}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('aboutSection.description2')}
            </p>
            <Button variant="outline" size="lg" className="mr-4">
              {t('common.learnMore')}
            </Button>
            <Button variant="default" size="lg">
              {t('aboutSection.joinMission')}
            </Button>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-warm transition-smooth group bg-background">
              <div className={`w-12 h-12 mx-auto mb-4 rounded-lg ${index === 0 ? 'bg-gradient-hero' :
                index === 1 ? 'bg-gradient-earth' :
                  index === 2 ? 'bg-gradient-warm' : 'bg-primary'
                } flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                <value.icon className="w-6 h-6 text-background" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">
                {t(value.titleKey)}
              </h4>
              <p className="text-sm text-muted-foreground mb-3 font-medium">
                {t(value.subtitleKey)}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(value.descriptionKey)}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};