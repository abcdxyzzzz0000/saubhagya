import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Eye, ShieldCheck, Sprout } from "lucide-react";
import villageLife from "@/assets/village-life.jpg";
import farmersWorking from "@/assets/farmers-working.jpg";
import { useTranslation } from "../hooks/react-i18next";

export const About = () => {
  const { t } = useTranslation();
  
  const values = [
    {
      icon: Users,
      valueKey: "community"
    },
    {
      icon: Eye,
      valueKey: "transparency"
    },
    {
      icon: ShieldCheck,
      valueKey: "quality"
    },
    {
      icon: Sprout,
      valueKey: "sustainability"
    }
  ];

  const stats = [
    { statKey: "farmers" },
    { statKey: "villages" },
    { statKey: "payouts" },
    { statKey: "emissions" }
  ];

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <section className="pt-20 pb-20 bg-gradient-to-b from-primary/10 to-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground">
              {t('about.title')}
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-medium text-foreground">
              {t('about.subtitle')}
            </p>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-muted-foreground leading-relaxed">
              {t('about.description')}
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-l-4 border-primary">
                <h3 className="text-2xl font-bold text-foreground mb-6">{t('about.aboutGlance')}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">{t('about.glancePoints.mission')}</strong> {t('about.glancePoints.missionDesc')}</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">{t('about.glancePoints.impact')}</strong> {t('about.glancePoints.impactDesc')}</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">{t('about.glancePoints.technology')}</strong> {t('about.glancePoints.technologyDesc')}</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">{t('about.glancePoints.promise')}</strong> {t('about.glancePoints.promiseDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-24">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={villageLife} 
                    alt="Rural community life"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  {t('about.mission')}
                </h2>
                <p className="text-xl text-muted-foreground mb-4 font-medium">
                  {t('about.missionSubtitle')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t('about.missionDescription')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.missionDescription2')}
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto lg:flex-row-reverse">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  {t('about.vision')}
                </h2>
                <p className="text-xl text-muted-foreground mb-4 font-medium">
                  {t('about.visionSubtitle')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t('about.visionDescription')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.visionDescription2')}
                </p>
              </div>
              <div className="relative order-first lg:order-last">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={farmersWorking} 
                    alt="Farmers at work"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t('about.coreValues')}
              </h2>
              <p className="text-xl text-primary font-semibold">{t('about.coreValuesSubtitle')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-primary/20 bg-gradient-to-br from-white to-primary/5">
                  <div className={`w-20 h-20 ${
                    index === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 
                    index === 1 ? 'bg-gradient-to-br from-green-500 to-green-600' : 
                    index === 2 ? 'bg-gradient-to-br from-purple-500 to-purple-600' : 'bg-gradient-to-br from-orange-500 to-orange-600'
                  } rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-3">
                    {t(`about.values.${value.valueKey}.title`)}
                  </h4>
                  <p className="text-base text-primary mb-4 font-semibold">
                    {t(`about.values.${value.valueKey}.subtitle`)}
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {t(`about.values.${value.valueKey}.description`)}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-primary/90 to-secondary/90 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                {t('about.impact')}
              </h2>
              <p className="text-xl text-white/95 drop-shadow-md">{t('about.impactSubtitle')}</p>
            </div>

            <div className="grid md:grid-cols-4 gap-10 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <Card key={index} className="p-8 text-center shadow-2xl bg-white/95 backdrop-blur-sm">
                  <div className="text-5xl font-bold text-primary mb-3">
                    {t(`about.stats.${stat.statKey}.number`)}
                  </div>
                  <div className="text-base font-semibold text-foreground mb-2">
                    {t(`about.stats.${stat.statKey}.label`)}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {t(`about.stats.${stat.statKey}.subtitle`)}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-primary/90 to-secondary/90 backdrop-blur-sm">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white drop-shadow-lg">
              {t('about.joinMission')}
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto drop-shadow-md">
              {t('about.joinMissionDesc')}
            </p>
            <Button variant="hero" size="lg" className="text-xl px-12 py-8 shadow-2xl hover:shadow-3xl">
              {t('about.getStartedToday')}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
