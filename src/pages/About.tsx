import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import villageLife from "@/assets/village-life.jpg";
import farmersWorking from "@/assets/farmers-working.jpg";
import farmerPayment from "@/assets/farmer-payment.jpg";
import biogasFacility from "@/assets/biogas-facility.jpg";
import { useTranslation } from "../hooks/react-i18next";

export const About = () => {
  const { t } = useTranslation();
  
  // Timeline milestones
  const timeline = [
    {
      year: "2022",
      description: t('about.timeline.milestone1'),
      icon: "🌱"
    },
    {
      year: "2023",
      description: t('about.timeline.milestone2'),
      icon: "👨‍🌾"
    },
    {
      year: "2024",
      description: t('about.timeline.milestone3'),
      icon: "⚡"
    },
    {
      year: "2025",
      description: t('about.timeline.milestone4'),
      icon: "🚀"
    }
  ];

  // Core values with images
  const coreValues = [
    {
      title: t('about.coreValues.communityFirst.title'),
      subtitle: t('about.coreValues.communityFirst.subtitle'),
      description: t('about.coreValues.communityFirst.description'),
      image: villageLife,
      alt: "Village meeting scene showing community first approach"
    },
    {
      title: t('about.coreValues.transparency.title'),
      subtitle: t('about.coreValues.transparency.subtitle'),
      description: t('about.coreValues.transparency.description'),
      image: farmerPayment,
      alt: "Digital weighing scale with display showing transparency"
    },
    {
      title: t('about.coreValues.quality.title'),
      subtitle: t('about.coreValues.quality.subtitle'),
      description: t('about.coreValues.quality.description'),
      image: biogasFacility,
      alt: "CBG flame and gas purity lab check for quality assurance"
    },
    {
      title: t('about.coreValues.sustainability.title'),
      subtitle: t('about.coreValues.sustainability.subtitle'),
      description: t('about.coreValues.sustainability.description'),
      image: farmersWorking,
      alt: "Farmer planting saplings for sustainability"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-20 bg-transparent">
          <div className="container mx-auto px-6 text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t('about.hero.title')}
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl mb-6 font-medium text-white/95 max-w-5xl mx-auto leading-relaxed drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('about.hero.tagline')}
            </motion.p>
            <motion.p 
              className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 leading-relaxed drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('about.hero.subtext')}
            </motion.p>
          </div>
        </section>

        {/* Mission & Vision - Side by Side */}
        <section className="py-20 bg-white/10 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full bg-white/20 backdrop-blur-sm border-l-4 border-[#0A802B] shadow-xl hover:shadow-2xl transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#0A802B] rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800">
                      {t('about.missionVision.mission.title')}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('about.missionVision.mission.content')}
                  </p>
                </Card>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full bg-white/20 backdrop-blur-sm border-l-4 border-[#0A802B] shadow-xl hover:shadow-2xl transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#0A802B] rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🔮</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800">
                      {t('about.missionVision.vision.title')}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('about.missionVision.vision.content')}
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values - Photo Based */}
        <section className="py-24 bg-transparent">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                {t('about.coreValues.title')}
              </h2>
              <p className="text-xl text-white/90 drop-shadow-md">{t('about.coreValues.subtitle')}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm group">
                    {/* Photo */}
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={value.image}
                        alt={value.alt}
                        className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="text-xl font-bold text-white mb-1">
                          {value.title}
                        </h4>
                        <p className="text-sm text-white/90 font-medium">
                          {value.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="p-6">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-white/10 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                {t('about.timeline.title')}
              </h2>
              <p className="text-xl text-gray-600">{t('about.timeline.subtitle')}</p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                {timeline.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 text-center bg-white shadow-lg hover:shadow-xl transition-all">
                      {/* Icon */}
                      <div className="text-5xl mb-4">{milestone.icon}</div>
                      
                      {/* Year */}
                      <div className="text-3xl font-bold text-[#0A802B] mb-3">
                        {milestone.year}
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {milestone.description}
                      </p>
                    </Card>
                    
                    {/* Connector Line (hidden on last item) */}
                    {index < timeline.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#0A802B]/30"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mini Video Highlight Reel */}
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                {/* Video Placeholder - Replace with actual video */}
                <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
                  {/* Placeholder for video */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">🎬</div>
                      <p className="text-xl font-semibold mb-2">Video Coming Soon</p>
                      <p className="text-sm text-gray-400">
                        Cows being milked • Digital weighing • SMS payments • CBG production
                      </p>
                    </div>
                  </div>
                  
                  {/* Overlay Text */}
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white text-2xl font-bold drop-shadow-lg">
                      {t('about.videoReel.overlayText')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-transparent">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white drop-shadow-lg">
                {t('about.cta.title')}
              </h2>
              <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto drop-shadow-md">
                {t('about.cta.description')}
              </p>
              <Button className="rounded-full px-12 py-6 text-xl font-semibold bg-[#0A802B] hover:bg-[#086B24] text-white shadow-2xl hover:shadow-3xl transition-all active:scale-95">
                {t('about.cta.button')}
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
