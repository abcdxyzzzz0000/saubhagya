import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Zap, TrendingUp } from "lucide-react";
import { useTranslation } from "@/hooks/react-i18next";
import farmerPayment from "@/assets/farmer-payment.jpg";

export const SuccessStory = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-background mb-4">
            {t('successStory.title')}
          </h2>
          <p className="text-xl text-background/90">
            {t('successStory.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Success Story Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-warm">
              <img 
                src={farmerPayment} 
                alt="Happy farmer family receiving fair payment from Saubhagya program"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl"></div>
            
            {/* Stats Overlay */}
            <div className="grid grid-cols-2 gap-4 mt-6">
            <Card className="p-6 bg-background/95 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">{t('successStory.stats.farmers')}</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-background/95 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-8 h-8 text-secondary" />
                <div>
                  <div className="text-2xl font-bold text-foreground">5</div>
                  <div className="text-sm text-muted-foreground">{t('successStory.stats.villages')}</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-background/95 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold text-foreground">2000+</div>
                  <div className="text-sm text-muted-foreground">{t('successStory.stats.cbg')}</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-background/95 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-8 h-8 text-secondary" />
                <div>
                  <div className="text-2xl font-bold text-foreground">₹15L+</div>
                  <div className="text-sm text-muted-foreground">{t('successStory.stats.income')}</div>
                </div>
              </div>
            </Card>
            </div>
          </div>

          {/* Content */}
          <div className="text-background order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-6">
              {t('successStory.content.title')}
            </h3>
            <p className="text-lg text-background/90 mb-6 leading-relaxed">
              {t('successStory.content.description')}
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-background rounded-full"></div>
                <span>{t('successStory.content.point1')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-background rounded-full"></div>
                <span>{t('successStory.content.point2')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-background rounded-full"></div>
                <span>{t('successStory.content.point3')}</span>
              </div>
            </div>
            <Button variant="hero" size="lg">
              {t('successStory.content.button')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};