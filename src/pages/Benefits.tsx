import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, Leaf, Receipt, Award, BadgeCheck, CalendarCheck, Users as UsersIcon, Sprout, ChevronLeft, ChevronRight } from "lucide-react";
import farmerPayment from "@/assets/farmer-payment.jpg";
import farmersWorking from "@/assets/farmers-working.jpg";
import villageLife from "@/assets/village-life.jpg";
import benefitsDemo from "@/assets/benefits-demo.mp4";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const Benefits = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [rotation, setRotation] = useState(0);

  const mainBenefits = [
    {
      icon: DollarSign,
      title: "Consistent Daily Income",
      subtitle: "दैनिक आय",
      description: "Transform waste into reliable, year-round income stream",
      details: "Earn ₹3-5 per kilogram of cattle dung with flexible daily collection schedules that fit your routine. Unlike seasonal crops, this income source remains consistent throughout the year regardless of weather or harvest cycles. A farmer with 25 cattle producing 250kg of dung daily can earn ₹750-1,250 per day, translating to ₹22,500-37,500 monthly. No upfront investment required - start earning from day one. The material you previously had to dispose of now becomes a valuable commodity with guaranteed buyers.",
      gradient: "bg-gradient-hero",
      image: farmerPayment,
      video: benefitsDemo,
      hasVideo: true
    },
    {
      icon: TrendingUp,
      title: "Significant Income Boost",
      subtitle: "बढ़ा हुआ मुनाफा",
      description: "30-50% increase in overall household income",
      details: "Our transparent, market-linked pricing ensures you receive competitive rates with quality bonuses for superior materials. This additional income stream requires minimal extra labor - you're already managing cattle, now you're monetizing their waste. For typical farming families earning ₹25,000-40,000 monthly from agriculture, Saubhagya adds ₹12,000-18,000 in supplementary income - a 30-50% boost. This extra income helps families afford better education for children, improved healthcare, agricultural investments, and emergency savings without taking loans.",
      gradient: "bg-gradient-earth",
      image: farmersWorking
    },
    {
      icon: Leaf,
      title: "Environmental & Community Benefits",
      subtitle: "पर्यावरणीय प्रभाव",
      description: "Reduce emissions by 40% while improving community health",
      details: "By properly processing cattle dung through anaerobic digestion, you prevent uncontrolled methane release - a greenhouse gas 25 times more potent than CO₂. Each ton of dung you supply prevents approximately 25kg of methane emissions, equivalent to taking 1.5 cars off roads for a year. This also eliminates groundwater contamination, reduces fly and mosquito breeding, and improves village sanitation. The CBG produced replaces fossil fuels, supporting India's renewable energy targets. The digestate byproduct returned to you is nutrient-rich organic fertilizer, reducing chemical fertilizer costs by 20-30% while improving soil health for better crop yields.",
      gradient: "bg-gradient-warm",
      image: villageLife
    }
  ];

  const additionalBenefits = [
    {
      icon: Receipt,
      title: "Transparent Pricing",
      description: "Real-time market rates with no hidden charges",
      gradient: "bg-gradient-hero"
    },
    {
      icon: Award,
      title: "Quality Rewards",
      description: "Bonus payments for high-quality materials",
      gradient: "bg-gradient-earth"
    },
    {
      icon: BadgeCheck,
      title: "Guaranteed Payments",
      description: "Secure and timely payments every time",
      gradient: "bg-gradient-warm"
    },
    {
      icon: CalendarCheck,
      title: "Flexible Pickup",
      description: "Convenient scheduling that fits your routine",
      gradient: "bg-primary"
    },
    {
      icon: UsersIcon,
      title: "Community Support",
      description: "Join a network of successful farmers",
      gradient: "bg-gradient-hero"
    },
    {
      icon: Sprout,
      title: "Carbon Credits",
      description: "Earn additional income from carbon offset programs",
      gradient: "bg-gradient-earth"
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    if (!isInteracting) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % additionalBenefits.length);
        setRotation((prev) => prev - 60); // Smooth rotation increment
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isInteracting, additionalBenefits.length]);

  // Update rotation when currentIndex changes
  useEffect(() => {
    const targetRotation = currentIndex * -60;
    const currentRotation = rotation;

    // Calculate shortest path to avoid overshooting
    const shortestRotation = ((targetRotation - currentRotation + 540) % 360) - 180;
    setRotation(currentRotation + shortestRotation);
  }, [currentIndex]);

  const handleDragEnd = (event: any, info: any) => {
    const dragToRotation = info.offset.x / 6; // Adjust sensitivity
    const newRotation = rotation + dragToRotation;

    // Snap to nearest 60° step
    const snappedRotation = Math.round(newRotation / 60) * 60;
    setRotation(snappedRotation);

    // Update active index based on snapped rotation
    const normalizedIndex = ((Math.round(snappedRotation / -60) % additionalBenefits.length) + additionalBenefits.length) % additionalBenefits.length;
    setCurrentIndex(normalizedIndex);

    setIsDragging(false);
    setIsInteracting(false);
  };

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
    setIsInteracting(true);
    setTimeout(() => setIsInteracting(false), 1000); // Resume auto-rotation after animation
  };

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + additionalBenefits.length) % additionalBenefits.length;
    setCurrentIndex(newIndex);
    setIsInteracting(true);
    setTimeout(() => setIsInteracting(false), 1000);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % additionalBenefits.length;
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
        <section className="pt-20 pb-20 bg-gradient-to-b from-primary/10 to-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground">
              Farmer Benefits
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-medium text-foreground">
              किसान लाभ
            </p>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-muted-foreground leading-relaxed">
              Discover how Saubhagya transforms agricultural waste into sustainable income
              for farming communities across India.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-l-4 border-primary">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Benefits at a Glance</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Fair Pricing:</strong> ₹3-5 per kg with transparent IoT-verified weighing at every collection</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Quick Payments:</strong> Same-day payouts directly to your bank account or mobile wallet</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Steady Income:</strong> Earn ₹12,000-18,000 extra per month with 20-30 cattle</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Environmental Impact:</strong> Reduce methane emissions by 40% while earning income</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Main Benefits
              </h2>
              <p className="text-xl text-muted-foreground">मुख्य लाभ</p>
            </div>

            {mainBenefits.map((benefit, index) => (
              <div key={index} className={`mb-24 last:mb-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex items-center gap-16`}>
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
                    {benefit.hasVideo ? (
                      <video
                        src={benefit.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-96 object-cover"
                        aria-label={`${benefit.title} demonstration video`}
                      />
                    ) : (
                      <img
                        src={benefit.image}
                        alt={`${benefit.title} illustration`}
                        className="w-full h-96 object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8">
                      <div className={`w-16 h-16 ${benefit.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                        <benefit.icon className="w-8 h-8 text-background" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <Card className="p-10 shadow-2xl hover:shadow-3xl transition-all duration-300">
                    <h3 className="text-3xl font-bold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-xl text-muted-foreground mb-4 font-medium">
                      {benefit.subtitle}
                    </p>
                    <p className="text-lg text-primary font-semibold mb-6">
                      {benefit.description}
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {benefit.details}
                    </p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-white/95 backdrop-blur-sm overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Additional Advantages
              </h2>
              <p className="text-xl text-primary font-semibold">अतिरिक्त लाभ</p>
            </div>

            {/* 3D Circular Carousel */}
            <div
              className="relative h-[450px] flex items-center justify-center"
              style={{ perspective: '1000px' }}
            >
              {/* Left Arrow Button */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-lg hover:bg-white/90 hover:scale-110 transition-all duration-300 group"
                aria-label="Previous benefit"
              >
                <ChevronLeft className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-lg hover:bg-white/90 hover:scale-110 transition-all duration-300 group"
                aria-label="Next benefit"
              >
                <ChevronRight className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
              </button>
              <motion.div
                className="relative w-full h-full"
                style={{
                  transformStyle: 'preserve-3d',
                  willChange: 'transform'
                }}
                onDragStart={() => {
                  setIsDragging(true);
                  setIsInteracting(true);
                }}
                onDragEnd={handleDragEnd}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                initial={{ opacity: 0, rotateY: 0 }}
                animate={{
                  opacity: 1,
                  rotateY: rotation
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {additionalBenefits.map((benefit, index) => {
                  const angle = index * 60; // 360° / 6 cards = 60° per card

                  // Calculate which card is currently active based on rotation
                  const normalizedIndex = ((Math.round(rotation / -60) % additionalBenefits.length) + additionalBenefits.length) % additionalBenefits.length;
                  const isActive = index === normalizedIndex;

                  // Calculate distance from center for depth effects
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
                      onClick={() => handleCardClick(index)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
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
                        <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center rounded-t-xl">
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
                            <benefit.icon className="w-8 h-8 text-background" />
                          </motion.div>

                          {/* Enhanced glow effect for active card */}
                          {isActive && (
                            <>
                              <motion.div
                                className="absolute inset-0 rounded-t-xl"
                                style={{
                                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(59, 130, 246, 0.15), rgba(168, 85, 247, 0.1))',
                                  filter: 'blur(20px)',
                                }}
                                animate={{
                                  opacity: [0.4, 0.8, 0.4],
                                  scale: [1, 1.05, 1],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-t-xl"></div>
                            </>
                          )}
                        </div>

                        <div className="p-5 text-center">
                          <h4 className={`${isActive ? 'text-xl' : 'text-lg'} font-bold text-foreground mb-3 transition-all duration-700`}>
                            {benefit.title}
                          </h4>
                          <p className={`${isActive ? 'text-sm' : 'text-xs'} text-muted-foreground leading-relaxed font-medium transition-all duration-700`}>
                            {benefit.description}
                          </p>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Dot Navigation Indicators */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
                {additionalBenefits.map((_, index) => {
                  const normalizedIndex = ((Math.round(rotation / -60) % additionalBenefits.length) + additionalBenefits.length) % additionalBenefits.length;
                  const isActive = index === normalizedIndex;

                  return (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${isActive
                        ? 'bg-primary shadow-lg shadow-primary/30 scale-110'
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

        <section className="py-24 bg-gradient-to-r from-primary/90 to-secondary/90 backdrop-blur-sm">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white drop-shadow-lg">
              Ready to Transform Your Income?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto drop-shadow-md">
              Join thousands of farmers who have already benefited from Saubhagya
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="hero" size="lg" className="text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out">
                Join Now / अभी शामिल हों
              </Button>
              <Button variant="hero" size="lg" className="text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out">
                Learn More / और जानें
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Benefits;
