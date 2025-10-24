import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Truck, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-farming.jpg";
import { useTranslation } from "@/hooks/react-i18next";

export const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-background mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-background/90 mb-4 font-medium">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg text-background/80 mb-8 max-w-lg mx-auto lg:mx-0">
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 transition-all duration-300 ease-in-out">
                <Users className="w-5 h-5" />
                {t('hero.joinFarmer')}
              </Button>
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 transition-all duration-300 ease-in-out">
                <Truck className="w-5 h-5" />
                {t('hero.requestPickup')}
              </Button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="flex flex-col gap-6">
            <Card className="p-6 bg-background/95 backdrop-blur-sm shadow-warm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-earth rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-background" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">+30%</div>
                  <div className="text-sm text-muted-foreground">{t('hero.stats.incomeIncrease')}</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-background/95 backdrop-blur-sm shadow-warm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center">
                  <div className="text-lg font-bold text-foreground">⚡</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">&gt;90%</div>
                  <div className="text-sm text-muted-foreground">{t('hero.stats.cbgEfficiency')}</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-background/95 backdrop-blur-sm shadow-warm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <div className="text-lg font-bold text-background">🌱</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">40%</div>
                  <div className="text-sm text-muted-foreground">{t('hero.stats.methaneReduction')}</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};