import { motion } from "framer-motion";
import womenImage from "../assets/Women.jpeg";
import cowsTransport from "../assets/cowsTransport.jpeg";
import biogasImage from "../assets/Biogas.jpeg";
import farmerPayment from "../assets/farmer-payment.jpg";
import farmersWorking from "../assets/farmers-working.jpg";

export const GauSakhi = () => {
  const platforms = [
    {
      id: 1,
      title: "GauSakhi",
      subtitle: "For Gau-sewa workers and Gaushala staff",
      description: "For Gau-sewa workers and Gaushala staff who handle daily gobar collection and truck tracking.",
      details: "Just speak in Hindi, scan cow tags, and record work hands-free — even without internet.",
      image: womenImage,
      imageAlt: "Gau-sewa worker using GauSakhi app",
      buttonText: "Join Now",
      imageLeft: true
    },
    {
      id: 2,
      title: "UrjaVyapar",
      subtitle: "For Corporate Buyers & Energy Companies",
      description: "For CBG buyers from oil & gas companies, city gas distributors, and fleet operators.",
      details: "Built for procurement heads, sustainability teams, and distributors who buy Compressed Biogas in bulk. UrjaVyapar simplifies CBG sourcing with verified suppliers, real-time pricing, and PESO-compliant invoicing.",
      image: cowsTransport,
      imageAlt: "Cows transport for UrjaVyapar platform",
      buttonText: "Explore",
      imageLeft: false
    },
    {
      id: 3,
      title: "UrjaSanyojak",
      subtitle: "For Biogas Plant Owners & Entrepreneurs",
      description: "For people running or planning biogas plants — big or small.",
      details: "Designed for existing plant owners and clean-energy entrepreneurs who want to check their CBG potential, access subsidies, and connect with verified buyers — all from one map-based platform.",
      image: biogasImage,
      imageAlt: "Biogas facility for UrjaSanyojak platform",
      buttonText: "Explore",
      imageLeft: true
    },
    {
      id: 4,
      title: "SAUBHAGYA Command Center",
      subtitle: "For Mission Leaders & State Officers",
      description: "For state nodal officers, mission directors, and government teams managing CBG programs.",
      details: "Made for national and state-level administrators who oversee the SAUBHAGYA mission. Get a unified view of every Gaushala, sensor, and CBG plant — enabling real-time governance, audits, and decision-making.",
      image: farmerPayment,
      imageAlt: "Government officials using SAUBHAGYA Command Center",
      buttonText: "Explore",
      imageLeft: false
    },
    {
      id: 5,
      title: "ShuddhiDoot",
      subtitle: "For CBG Purification Plant Engineers",
      description: "For purification plant managers and operators ensuring CBG purity.",
      details: "Built for engineers, technicians, and CNG hub supervisors who monitor methane purity, pressure, and plant health. ShuddhiDoot ensures every CBG batch meets quality standards—automatically.",
      image: farmersWorking,
      imageAlt: "Engineers using ShuddhiDoot for CBG purification",
      buttonText: "Explore",
      imageLeft: true
    }
  ];

  return (
    <div className="bg-green-600/20">
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
                      {platform.title}
                    </h2>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-green-300 mb-6 drop-shadow-lg">
                      {platform.subtitle}
                    </h3>
                  </div>

                  {/* Description paragraph */}
                  <p className="text-lg text-white/90 leading-relaxed mb-6 drop-shadow-lg">
                    {platform.description}
                  </p>

                  {/* Details */}
                  <div className="mb-8">
                    <p className="text-xl text-white/95 leading-relaxed drop-shadow-lg">
                      {platform.details}
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