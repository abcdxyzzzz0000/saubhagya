import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/react-i18next";
import womenImage from "../assets/Women.jpeg";
import cowsTransport from "../assets/cowsTransport.jpeg";
import biogasImage from "../assets/Biogas.jpeg";
import farmerPayment from "../assets/farmer-payment.jpg";
import farmersWorking from "../assets/farmers-working.jpg";

export const GauSakhi = () => {
  const { t } = useTranslation();
  const platforms = [
    {
      id: 1,
      titleKey: 'users.gauSakhi.title',
      subtitleKey: 'users.gauSakhi.subtitle',
      descriptionKey: 'users.gauSakhi.description',
      detailsKey: 'users.gauSakhi.details',
      image: womenImage,
      imageAlt: "Gau-sewa worker using GauSakhi app",
      buttonText: t('common.learnMore'),
      imageLeft: true
    },
    {
      id: 2,
      titleKey: 'users.urjaVyapar.title',
      subtitleKey: 'users.urjaVyapar.subtitle',
      descriptionKey: 'users.urjaVyapar.description',
      detailsKey: 'users.urjaVyapar.details',
      image: cowsTransport,
      imageAlt: "Cows transport for UrjaVyapar platform",
      buttonText: t('common.learnMore'),
      imageLeft: false
    },
    {
      id: 3,
      titleKey: 'users.urjaSanyojak.title',
      subtitleKey: 'users.urjaSanyojak.subtitle',
      descriptionKey: 'users.urjaSanyojak.description',
      detailsKey: 'users.urjaSanyojak.details',
      image: biogasImage,
      imageAlt: "Biogas facility for UrjaSanyojak platform",
      buttonText: t('common.learnMore'),
      imageLeft: true
    },
    {
      id: 4,
      titleKey: 'users.commandCenter.title',
      subtitleKey: 'users.commandCenter.subtitle',
      descriptionKey: 'users.commandCenter.description',
      detailsKey: 'users.commandCenter.details',
      image: farmerPayment,
      imageAlt: "Government officials using SAUBHAGYA Command Center",
      buttonText: t('common.learnMore'),
      imageLeft: false
    },
    {
      id: 5,
      titleKey: 'users.shuddhiDoot.title',
      subtitleKey: 'users.shuddhiDoot.subtitle',
      descriptionKey: 'users.shuddhiDoot.description',
      detailsKey: 'users.shuddhiDoot.details',
      image: farmersWorking,
      imageAlt: "Engineers using ShuddhiDoot for CBG purification",
      buttonText: t('common.learnMore'),
      imageLeft: true
    }
  ];

  return (
    <div className="bg-transparent">
      {platforms.map((platform, index) => (
        <section key={platform.id} className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              {/* Two-column layout with alternating sides */}
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!platform.imageLeft ? 'lg:grid-flow-col-dense' : ''}`}>

                {/* Image Side */}
                <motion.div
                  className={`${platform.imageLeft ? 'order-2 lg:order-1' : 'order-2 lg:order-2'} flex justify-center`}
                  initial={{ opacity: 0, x: platform.imageLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <img
                      src={platform.image}
                      alt={platform.imageAlt}
                      className="w-full max-w-md h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                      style={{
                        filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))'
                      }}
                    />

                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  className={`${platform.imageLeft ? 'order-1 lg:order-2' : 'order-1 lg:order-1'} space-y-6`}
                  initial={{ opacity: 0, x: platform.imageLeft ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Main heading */}
                  <div>
                    <h2 className="text-5xl lg:text-6xl font-bold text-white mb-3 drop-shadow-2xl">
                      {t(platform.titleKey)}
                    </h2>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-green-300 mb-6 drop-shadow-lg">
                      {t(platform.subtitleKey)}
                    </h3>
                  </div>

                  {/* Description paragraph */}
                  <p className="text-lg text-white/90 leading-relaxed mb-6 drop-shadow-lg">
                    {t(platform.descriptionKey)}
                  </p>

                  {/* Details */}
                  <div className="mb-8">
                    <p className="text-xl text-white/95 leading-relaxed drop-shadow-lg">
                      {t(platform.detailsKey)}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div>
                    <motion.button
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {platform.buttonText}
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default GauSakhi;