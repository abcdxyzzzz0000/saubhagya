import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, TruckIcon, Factory, Banknote, ShieldCheck, Navigation, Lock, CheckCircle } from "lucide-react";
import womenFarmer from "@/assets/Women.jpeg";
import smartTransport from "@/assets/smart-transport.jpg";
import biogasFacility from "@/assets/biogas-facility.jpg";
import farmerPayment from "@/assets/farmer-payment.jpg";
import { useState, useEffect } from "react";
import { useTranslation } from "../hooks/react-i18next";

export const HowItWorks = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const scrollToStep = (stepNumber: number) => {
    const element = document.getElementById(`step-${stepNumber}-detail`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const taglineKeys = [
    'farmerPower', 'cleanTomorrow', 'ruralEnergy', 'traditionMeetsTech', 'wasteToWealth',
    'ruralInnovation', 'farmerPartners', 'hardWorkCleanPower', 'empoweringHands', 'sustainableRoots',
    'dungToDream', 'smartLivelihoods', 'greenVillages', 'cleanOrigins', 'grownProgress',
    'ruralStory', 'drivingHope', 'farmerLeaders', 'fieldsToFuel', 'dignifiedEarning',
    'futureEnergy', 'balancedGrowth', 'pureProsperity', 'ruralStrength', 'villagePower'
  ];

  const [currentTaglineKey, setCurrentTaglineKey] = useState(taglineKeys[0]);

  useEffect(() => {
    // Select a random tagline on component mount
    const randomIndex = Math.floor(Math.random() * taglineKeys.length);
    setCurrentTaglineKey(taglineKeys[randomIndex]);
  }, []);

  const steps = [
    {
      icon: Scale,
      stepKey: 'step1',
      image: womenFarmer,
      gradient: "bg-gradient-hero"
    },
    {
      icon: TruckIcon,
      stepKey: 'step2',
      image: smartTransport,
      gradient: "bg-gradient-earth"
    },
    {
      icon: Factory,
      stepKey: 'step3',
      image: biogasFacility,
      gradient: "bg-gradient-warm"
    },
    {
      icon: Banknote,
      stepKey: 'step4',
      image: farmerPayment,
      gradient: "bg-primary"
    }
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      benefitKey: 'guaranteedQuality',
      gradient: "bg-gradient-hero"
    },
    {
      icon: Navigation,
      benefitKey: 'realTimeTracking',
      gradient: "bg-gradient-earth"
    },
    {
      icon: Lock,
      benefitKey: 'securePayments',
      gradient: "bg-gradient-warm"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <section className="pt-20 pb-20 bg-gradient-to-b from-primary/10 to-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
              {currentLanguage === 'hi' ? t(`howItWorks.taglines.${currentTaglineKey}`) : t(`howItWorks.taglines.${currentTaglineKey}`, currentTaglineKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()))}
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-medium text-primary">
              {currentLanguage === 'hi' ? t(`howItWorks.taglines.${currentTaglineKey}`) : t(`howItWorks.taglines.${currentTaglineKey}`)}
            </p>
            <div className="text-xl md:text-2xl max-w-4xl mx-auto text-muted-foreground leading-relaxed space-y-4">
              <p>
                {t('howItWorks.description.line1')}
              </p>
              <p>
                {t('howItWorks.description.line2')}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">{t('howItWorks.processOverview')}</h3>
                <p className="text-lg text-gray-600">{t('howItWorks.processDescription')}</p>
              </div>

              {/* Process Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {steps.map((step, index) => (
                  <Card
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 text-center cursor-pointer hover:border-primary/30"
                    onClick={() => scrollToStep(index + 1)}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-black mb-3">{t('common.step')} {index + 1}</h4>
                    <div className="border-t border-gray-100 pt-3">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(`howItWorks.steps.${step.stepKey}.shortDescription`)}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Finishing Line */}
              <div className="text-center">
                <p className="text-lg text-gray-600 italic">{t('howItWorks.empoweringFarmers')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            {steps.map((step, index) => (
              <div key={index} id={`step-${index + 1}-detail`} className={`mb-24 last:mb-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex items-stretch gap-16`}>
                <div className="lg:w-1/2 mb-10 lg:mb-0 flex">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 w-full flex flex-col">
                    <img
                      src={step.image}
                      alt={`${t(`howItWorks.steps.${step.stepKey}.title`)} process illustration`}
                      className="w-full flex-1 object-cover min-h-[400px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8">
                      <div className={`w-16 h-16 ${step.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                        <step.icon className="w-8 h-8 text-background" />
                      </div>
                      <div className="text-white text-3xl font-bold drop-shadow-lg">
                        {t('common.step')} {index + 1}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 flex">
                  <Card className="p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 w-full flex flex-col justify-between min-h-[400px]">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-foreground mb-3">
                          {t(`howItWorks.steps.${step.stepKey}.title`)}
                        </h3>
                        <p className="text-xl text-muted-foreground mb-4 font-medium">
                          {t(`howItWorks.steps.${step.stepKey}.subtitle`)}
                        </p>
                        <p className="text-lg text-primary font-semibold mb-6">
                          {t(`howItWorks.steps.${step.stepKey}.description`)}
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed mb-6">
                          {t(`howItWorks.steps.${step.stepKey}.details`)}
                        </p>
                      </div>

                      {/* Highlights Section */}
                      <div className={`rounded-xl p-4 shadow-sm ${index === 0 ? 'bg-green-50' :
                        index === 1 ? 'bg-blue-50' :
                          index === 2 ? 'bg-orange-50' :
                            'bg-yellow-50'
                        }`}>
                        <h4 className="text-sm font-semibold text-primary uppercase mb-3">{t('common.highlights')}</h4>
                        <div className="space-y-2">
                          {(t(`howItWorks.steps.${step.stepKey}.highlights`, { returnObjects: true }) as string[]).map((highlight: string, idx: number) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Why It Matters Section */}
                      <div className={`rounded-xl p-4 shadow-sm ${index === 0 ? 'bg-green-50' :
                        index === 1 ? 'bg-blue-50' :
                          index === 2 ? 'bg-orange-50' :
                            'bg-yellow-50'
                        }`}>
                        <h4 className="text-sm font-semibold text-primary uppercase mb-2">{t('common.whyItMatters')}</h4>
                        <p className="text-sm text-muted-foreground italic font-medium">
                          {t(`howItWorks.steps.${step.stepKey}.whyItMatters`)}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-primary/90 to-secondary/90 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                {t('howItWorks.benefitsTitle')}
              </h2>
              <p className="text-xl md:text-2xl text-white/95 drop-shadow-md">
                {currentLanguage === 'hi' ? t('howItWorks.benefitsTitle') : 'आपके लिए तैयार किए गए लाभ'}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-16">
              {benefits.map((benefit, index) => (
                <Card key={index} className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 bg-white/95 backdrop-blur-sm">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className={`w-20 h-20 ${benefit.gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
                      <benefit.icon className="w-10 h-10 text-background" />
                    </div>
                  </div>
                  <div className="p-8 text-center">
                    <h4 className="text-xl font-bold text-foreground mb-4">
                      {t(`howItWorks.benefits.${benefit.benefitKey}.title`)}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {t(`howItWorks.benefits.${benefit.benefitKey}.description`)}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="hero" size="lg" className="text-xl px-12 py-8 shadow-2xl hover:shadow-3xl">
                {t('howItWorks.joinToday')}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
