import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Leaf, Cog, Users, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "../hooks/react-i18next";
import GauSakhi from "@/components/GauSakhi";

import DignifiedEarning from "@/components/DignifiedEarning";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center overflow-hidden pt-20 relative bg-cover bg-center bg-fixed">
          <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center">
                {/* Main Headline */}
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
                  {t('hero.title')}
                </h1>
                
                {/* Bilingual Subheadline */}
                <div className="mt-2 mb-6">
                  <p className="text-lg md:text-xl text-white font-bold drop-shadow-lg mb-2">
                    गौशाला से रोज़ी — किसानों के लिए सच्चा और समय पर भुगतान
                  </p>
                  <p className="text-lg md:text-xl text-white/95 drop-shadow-lg">
                    Fair payments. Real income. Powered by your cows.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
                  <Button className="rounded-full px-6 py-3 text-lg font-semibold bg-green-600 hover:bg-green-700 text-white transition-all hover:shadow-lg active:scale-95">
                    Join as Farmer
                  </Button>
                  <Button className="rounded-full px-6 py-3 text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 text-white transition-all hover:shadow-lg active:scale-95">
                    Request Pickup
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Step Micro Explainer Section */}
        <section className="py-12 bg-white/10 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
                {/* Step 1: Collect Dung */}
                <div className="flex-1">
                  <div className="text-5xl mb-3">🐄</div>
                  <p className="text-white font-semibold text-sm md:text-base">{t('hero.processSteps.step1')}</p>
                </div>
                
                <div className="hidden md:block text-white text-2xl">→</div>
                
                {/* Step 2: Digital Weighing */}
                <div className="flex-1">
                  <div className="text-5xl mb-3">⚖️</div>
                  <p className="text-white font-semibold text-sm md:text-base">{t('hero.processSteps.step2')}</p>
                </div>
                
                <div className="hidden md:block text-white text-2xl">→</div>
                
                {/* Step 3: Instant Payout */}
                <div className="flex-1">
                  <div className="text-5xl mb-3">💰</div>
                  <p className="text-white font-semibold text-sm md:text-base">{t('hero.processSteps.step3')}</p>
                </div>
                
                <div className="hidden md:block text-white text-2xl">→</div>
                
                {/* Step 4: Biogas Made */}
                <div className="flex-1">
                  <div className="text-5xl mb-3">🔋</div>
                  <p className="text-white font-semibold text-sm md:text-base">{t('hero.processSteps.step4')}</p>
                </div>
              </div>
              
              {/* Caption */}
              <div className="text-center mt-6">
                <p className="text-white/90 text-sm md:text-base">
                  {t('hero.processSteps.caption')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <DignifiedEarning />

        <GauSakhi />

        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
                {t('empoweringSection.title')}
              </h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
                {t('empoweringSection.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {/* For Farmers Card */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 group rounded-2xl border-0 shadow-lg flex flex-col h-full bg-white/90 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-yellow-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 shadow-lg">
                    <Leaf className="w-10 h-10 text-white group-hover:drop-shadow-lg transition-all duration-300" />
                  </div>
                </div>
                <div className="p-6 text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-3">{t('cards.forFarmers.title')}</h3>
                  <p className="text-black mb-6 text-sm leading-relaxed flex-grow">
                    {t('cards.forFarmers.description')}
                  </p>
                  <Link to="/benefits">
                    <Button className="bg-green-600 hover:bg-green-700 text-white h-10 px-4 text-sm font-medium w-full rounded-lg transition-all duration-300 group/btn">
                      {t('cards.forFarmers.button')} <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* How It Works Card */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 group rounded-2xl border-0 shadow-lg flex flex-col h-full bg-white/90 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-yellow-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 shadow-lg">
                    <Cog className="w-10 h-10 text-white group-hover:drop-shadow-lg transition-all duration-300" />
                  </div>
                </div>
                <div className="p-6 text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-3">{t('cards.howItWorks.title')}</h3>
                  <p className="text-black mb-6 text-sm leading-relaxed flex-grow">
                    {t('cards.howItWorks.description')}
                  </p>
                  <Link to="/benefits">
                    <Button className="bg-green-600 hover:bg-green-700 text-white h-10 px-4 text-sm font-medium w-full rounded-lg transition-all duration-300 group/btn">
                      {t('cards.howItWorks.button')} <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Platform Users Card */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 group rounded-2xl border-0 shadow-lg flex flex-col h-full bg-white/90 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-yellow-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 shadow-lg">
                    <Users className="w-10 h-10 text-white group-hover:drop-shadow-lg transition-all duration-300" />
                  </div>
                </div>
                <div className="p-6 text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-3">{t('cards.platformUsers.title')}</h3>
                  <p className="text-black mb-6 text-sm leading-relaxed flex-grow">
                    {t('cards.platformUsers.description')}
                  </p>
                  <Link to="/user-types">
                    <Button className="bg-green-600 hover:bg-green-700 text-white h-10 px-4 text-sm font-medium w-full rounded-lg transition-all duration-300 group/btn">
                      {t('cards.platformUsers.button')} <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Get Started Card */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 group rounded-2xl border-0 shadow-lg flex flex-col h-full bg-white/90 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-emerald-50 to-green-50 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-yellow-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 shadow-lg">
                    <Rocket className="w-10 h-10 text-white group-hover:drop-shadow-lg transition-all duration-300" />
                  </div>
                </div>
                <div className="p-6 text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-3">{t('cards.getStarted.title')}</h3>
                  <p className="text-black mb-6 text-sm leading-relaxed flex-grow">
                    {t('cards.getStarted.description')}
                  </p>
                  <Link to="/contact">
                    <Button className="bg-green-600 hover:bg-green-700 text-white h-10 px-4 text-sm font-medium w-full rounded-lg transition-all duration-300 group/btn">
                      {t('cards.getStarted.button')} <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Home;
