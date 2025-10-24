import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, Leaf, Receipt, Award, BadgeCheck, CalendarCheck, Users as UsersIcon, Sprout, ChevronLeft, ChevronRight, Wallet, Scale, Truck, Sprout as Plant } from "lucide-react";
import farmerPayment from "@/assets/farmer-payment.jpg";
import farmersWorking from "@/assets/farmers-working.jpg";
import villageLife from "@/assets/village-life.jpg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "../hooks/react-i18next";

export const Benefits = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [rotation, setRotation] = useState(0);

  // Simplified main benefits with short, impactful content
  const mainBenefits = [
    {
      icon: DollarSign,
      title: t('benefits.mainBenefits.consistentIncome.title'),
      subtitle: t('benefits.mainBenefits.consistentIncome.subtitle'),
      quote: t('benefits.mainBenefits.consistentIncome.quote'),
      farmerName: t('benefits.mainBenefits.consistentIncome.farmerName'),
      gradient: "bg-gradient-to-br from-green-500 to-green-700",
      image: farmerPayment
    },
    {
      icon: TrendingUp,
      title: t('benefits.mainBenefits.incomeBoost.title'),
      subtitle: t('benefits.mainBenefits.incomeBoost.subtitle'),
      quote: t('benefits.mainBenefits.incomeBoost.quote'),
      farmerName: t('benefits.mainBenefits.incomeBoost.farmerName'),
      gradient: "bg-gradient-to-br from-orange-500 to-orange-700",
      image: farmersWorking
    },
    {
      icon: Leaf,
      title: t('benefits.mainBenefits.environmental.title'),
      subtitle: t('benefits.mainBenefits.environmental.subtitle'),
      quote: t('benefits.mainBenefits.environmental.quote'),
      farmerName: t('benefits.mainBenefits.environmental.farmerName'),
      gradient: "bg-gradient-to-br from-green-600 to-teal-700",
      image: villageLife
    }
  ];

  const additionalBenefits = [
    {
      icon: Receipt,
      title: t('benefits.additionalBenefits.transparentPricing.title'),
      description: t('benefits.additionalBenefits.transparentPricing.description'),
      gradient: "bg-gradient-to-br from-green-400 to-green-600"
    },
    {
      icon: Award,
      title: t('benefits.additionalBenefits.qualityRewards.title'),
      description: t('benefits.additionalBenefits.qualityRewards.description'),
      gradient: "bg-gradient-to-br from-yellow-400 to-orange-500"
    },
    {
      icon: BadgeCheck,
      title: t('benefits.additionalBenefits.guaranteedPayments.title'),
      description: t('benefits.additionalBenefits.guaranteedPayments.description'),
      gradient: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      icon: CalendarCheck,
      title: t('benefits.additionalBenefits.flexiblePickup.title'),
      description: t('benefits.additionalBenefits.flexiblePickup.description'),
      gradient: "bg-gradient-to-br from-purple-400 to-purple-600"
    },
    {
      icon: UsersIcon,
      title: t('benefits.additionalBenefits.communitySupport.title'),
      description: t('benefits.additionalBenefits.communitySupport.description'),
      gradient: "bg-gradient-to-br from-teal-400 to-teal-600"
    },
    {
      icon: Sprout,
      title: t('benefits.additionalBenefits.carbonCredits.title'),
      description: t('benefits.additionalBenefits.carbonCredits.description'),
      gradient: "bg-gradient-to-br from-green-500 to-emerald-600"
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    if (!isInteracting) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % additionalBenefits.length);
        setRotation((prev) => prev - 60);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isInteracting, additionalBenefits.length]);

  useEffect(() => {
    const targetRotation = currentIndex * -60;
    const currentRotation = rotation;
    const shortestRotation = ((targetRotation - currentRotation + 540) % 360) - 180;
    setRotation(currentRotation + shortestRotation);
  }, [currentIndex]);

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % additionalBenefits.length;
    setCurrentIndex(newIndex);
    setIsInteracting(true);
    setTimeout(() => setIsInteracting(false), 1000);
  };

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + additionalBenefits.length) % additionalBenefits.length;
    setCurrentIndex(newIndex);
    setIsInteracting(true);
    setTimeout(() => setIsInteracting(false), 1000);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsInteracting(true);
    setTimeout(() => setIsInteracting(false), 1000);
  };

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-transparent">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-green-800">
              {t('benefits.title')}
            </h1>
            <p className="text-2xl md:text-3xl mb-6 font-medium text-green-700">
              {t('benefits.subtitle')}
            </p>
            {/* NEW OPENING LINE */}
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700 leading-relaxed mt-3 mb-8">
              {t('benefits.newDescription')}
            </p>
          </div>
        </section>

        {/* NEW: Key Benefits at a Glance - Rewritten */}
        <section className="py-12 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold text-green-800 mb-8 text-center">{t('benefits.keyBenefitsTitle')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Benefit 1 */}
                <div className="bg-green-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">💵</div>
                    <div>
                      <p className="text-lg font-bold text-gray-800">{t('benefits.newKeyBenefits.dailyCash.title')}</p>
                      <p className="text-gray-600 text-sm mt-1">{t('benefits.newKeyBenefits.dailyCash.desc')}</p>
                    </div>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="bg-green-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">⚖️</div>
                    <div>
                      <p className="text-lg font-bold text-gray-800">{t('benefits.newKeyBenefits.fairWeighing.title')}</p>
                      <p className="text-gray-600 text-sm mt-1">{t('benefits.newKeyBenefits.fairWeighing.desc')}</p>
                    </div>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="bg-green-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🚚</div>
                    <div>
                      <p className="text-lg font-bold text-gray-800">{t('benefits.newKeyBenefits.noTransport.title')}</p>
                      <p className="text-gray-600 text-sm mt-1">{t('benefits.newKeyBenefits.noTransport.desc')}</p>
                    </div>
                  </div>
                </div>

                {/* Benefit 4 */}
                <div className="bg-green-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🌱</div>
                    <div>
                      <p className="text-lg font-bold text-gray-800">{t('benefits.newKeyBenefits.biogasEconomy.title')}</p>
                      <p className="text-gray-600 text-sm mt-1">{t('benefits.newKeyBenefits.biogasEconomy.desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Benefits - Redesigned with Short Content */}
        <section className="py-20 bg-white/10 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
                {t('benefits.mainBenefitsTitle')}
              </h2>
              <p className="text-xl text-gray-700">{t('benefits.mainBenefitsSubtitle')}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {mainBenefits.map((benefit, index) => (
                <Card key={index} className="bg-[#fafafa] shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className={`w-14 h-14 ${benefit.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                        <benefit.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-4 font-medium">
                      {benefit.subtitle}
                    </p>
                    <blockquote className="text-base text-gray-700 italic border-l-4 border-green-500 pl-4 mb-3">
                      "{benefit.quote}"
                    </blockquote>
                    <p className="text-sm text-gray-500">— {benefit.farmerName}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* NEW SECTION: Saubhagya by the Numbers */}
        <section className="py-20 bg-amber-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-2">
                {t('benefits.byTheNumbers.title')}
              </h2>
              <p className="text-xl text-gray-600">{t('benefits.byTheNumbers.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Stat 1 */}
              <div className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-all">
                <div className="text-5xl mb-4">🪣</div>
                <div className="text-4xl font-bold text-green-700 mb-2">{t('benefits.byTheNumbers.stat1.number')}</div>
                <p className="text-gray-600 font-medium">{t('benefits.byTheNumbers.stat1.label')}</p>
              </div>

              {/* Stat 2 */}
              <div className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-all">
                <div className="text-5xl mb-4">💰</div>
                <div className="text-4xl font-bold text-green-700 mb-2">{t('benefits.byTheNumbers.stat2.number')}</div>
                <p className="text-gray-600 font-medium">{t('benefits.byTheNumbers.stat2.label')}</p>
              </div>

              {/* Stat 3 */}
              <div className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-all">
                <div className="text-5xl mb-4">⚙️</div>
                <div className="text-4xl font-bold text-green-700 mb-2">{t('benefits.byTheNumbers.stat3.number')}</div>
                <p className="text-gray-600 font-medium">{t('benefits.byTheNumbers.stat3.label')}</p>
              </div>

              {/* Stat 4 */}
              <div className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-all">
                <div className="text-5xl mb-4">👨‍🌾</div>
                <div className="text-4xl font-bold text-green-700 mb-2">{t('benefits.byTheNumbers.stat4.number')}</div>
                <p className="text-gray-600 font-medium">{t('benefits.byTheNumbers.stat4.label')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Advantages Carousel */}
        <section className="py-24 bg-white/10 backdrop-blur-sm overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
                {t('benefits.additionalAdvantagesTitle')}
              </h2>
              <p className="text-xl text-gray-700 font-semibold">{t('benefits.additionalAdvantagesSubtitle')}</p>
            </div>

            <div
              className="relative h-[450px] flex items-center justify-center"
              style={{ perspective: '1000px' }}
            >
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-lg hover:bg-white/90 hover:scale-110 transition-all duration-300 group"
                aria-label="Previous benefit"
              >
                <ChevronLeft className="w-6 h-6 text-green-700 group-hover:text-green-800 transition-colors" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-lg hover:bg-white/90 hover:scale-110 transition-all duration-300 group"
                aria-label="Next benefit"
              >
                <ChevronRight className="w-6 h-6 text-green-700 group-hover:text-green-800 transition-colors" />
              </button>

              <motion.div
                className="relative w-full h-full"
                style={{
                  transformStyle: 'preserve-3d',
                  willChange: 'transform'
                }}
                animate={{
                  opacity: 1,
                  rotateY: rotation
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {additionalBenefits.map((benefit, index) => {
                  const angle = index * 60;
                  const normalizedIndex = ((Math.round(rotation / -60) % additionalBenefits.length) + additionalBenefits.length) % additionalBenefits.length;
                  const isActive = index === normalizedIndex;
                  const distanceFromCenter = Math.abs(index - normalizedIndex);
                  const normalizedDistance = Math.min(distanceFromCenter, additionalBenefits.length - distanceFromCenter);

                  return (
                    <motion.div
                      key={index}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(320px)`,
                        transformStyle: 'preserve-3d',
                        willChange: 'transform'
                      }}
                      onClick={() => handleDotClick(index)}
                    >
                      <Card
                        className="w-64 h-80 cursor-pointer bg-white/20 backdrop-blur-md border border-white/10 rounded-xl transition-all duration-700"
                        style={{
                          transform: isActive ? 'scale(1.1)' : `scale(${Math.max(0.85, 1 - normalizedDistance * 0.1)})`,
                          filter: isActive
                            ? 'brightness(1.2) blur(0px)'
                            : `brightness(${Math.max(0.7, 1 - normalizedDistance * 0.2)}) blur(${normalizedDistance * 1}px)`,
                          opacity: isActive ? 1 : Math.max(0.6, 1 - normalizedDistance * 0.15),
                          boxShadow: isActive
                            ? '0 25px 50px rgba(255,255,255,0.3), 0 0 30px rgba(34, 197, 94, 0.2)'
                            : '0 10px 20px rgba(0,0,0,0.1)'
                        }}
                      >
                        <div className="relative h-40 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center rounded-t-xl">
                          <motion.div
                            className={`w-16 h-16 ${benefit.gradient} rounded-2xl flex items-center justify-center shadow-xl`}
                            animate={{
                              scale: isActive ? 1.15 : 1,
                              boxShadow: isActive
                                ? '0 20px 40px rgba(0,0,0,0.3), 0 0 25px rgba(34, 197, 94, 0.4)'
                                : '0 10px 20px rgba(0,0,0,0.2)'
                            }}
                            transition={{ duration: 0.6 }}
                          >
                            <benefit.icon className="w-8 h-8 text-white" />
                          </motion.div>
                        </div>

                        <div className="p-5 text-center">
                          <h4 className={`${isActive ? 'text-xl' : 'text-lg'} font-bold text-gray-800 mb-3 transition-all duration-700`}>
                            {benefit.title}
                          </h4>
                          <p className={`${isActive ? 'text-sm' : 'text-xs'} text-gray-700 leading-relaxed font-medium transition-all duration-700`}>
                            {benefit.description}
                          </p>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>

              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
                {additionalBenefits.map((_, index) => {
                  const normalizedIndex = ((Math.round(rotation / -60) % additionalBenefits.length) + additionalBenefits.length) % additionalBenefits.length;
                  const isActive = index === normalizedIndex;

                  return (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${isActive
                        ? 'bg-green-600 shadow-lg shadow-green-600/30 scale-110'
                        : 'bg-gray-300 hover:bg-gray-400 shadow-sm'
                        }`}
                      aria-label={`Go to ${additionalBenefits[index].title}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-transparent">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white drop-shadow-lg">
              {t('benefits.readyToTransform')}
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto drop-shadow-md">
              {t('benefits.joinThousands')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="rounded-full px-12 py-6 text-xl font-semibold bg-green-600 hover:bg-green-700 text-white shadow-2xl hover:shadow-3xl transition-all">
                {t('benefits.joinNow')}
              </Button>
              <Button className="rounded-full px-12 py-6 text-xl font-semibold bg-yellow-500 hover:bg-yellow-600 text-white shadow-2xl hover:shadow-3xl transition-all">
                {t('benefits.learnMore')}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Benefits;
