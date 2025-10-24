import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/react-i18next";

export const AboutSaubhagya = () => {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

  return (
    <section className="bg-[#f9fafb] py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-8">
            <div className={`text-2xl sm:text-3xl md:text-4xl font-bold transition-all duration-300 ease-in-out ${!isHindi
                ? 'text-green-700 border-b-4 border-green-700 pb-2'
                : 'text-gray-500'
                }`}
            >
              {t('about.title')}
            </div>

            <div className="hidden sm:block text-2xl text-gray-400">|</div>

            <div className={`text-2xl sm:text-3xl md:text-4xl font-bold transition-all duration-300 ease-in-out ${isHindi
                ? 'text-green-700 border-b-4 border-green-700 pb-2'
                : 'text-gray-500'
                }`}
            >
              {t('about.subtitle')}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <motion.div
            key={isHindi ? 'hindi' : 'english'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {!isHindi ? (
              // English Content
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 items-center">
                {/* Left image section */}
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-green-100 to-yellow-100 rounded-2xl shadow-md w-full max-w-md h-80 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="text-6xl mb-4">🌱</div>
                      <p className="text-sm">Saubhagya Platform</p>
                      <p className="text-xs">Waste to Energy</p>
                    </div>
                  </div>
                </div>

                {/* Right content section */}
                <div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Saubhagya is India's agricultural waste-to-energy platform bridging rural farming communities with clean energy production.
                  </p>

                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🌿</span>
                      <div>
                        <strong className="text-gray-800">Empowering Farmers:</strong> Earn fair payments for cattle dung with IoT-based weighing and same-day payouts.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">⚙️</span>
                      <div>
                        <strong className="text-gray-800">Smart Collection System:</strong> Real-time GPS tracking ensures transparent and efficient operations.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🔋</span>
                      <div>
                        <strong className="text-gray-800">Clean Energy Conversion:</strong> Cattle waste converted into CBG — reducing emissions by up to 40%.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🌾</span>
                      <div>
                        <strong className="text-gray-800">Community Impact:</strong> Strengthening rural economies and promoting sustainable livelihoods.
                      </div>
                    </li>
                  </ul>

                  <p className="text-gray-700 mt-6 text-lg leading-relaxed">
                    Together, we're building a cleaner, more prosperous India — where innovation meets sustainability.
                  </p>
                </div>
              </div>
            ) : (
              // Hindi Content
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 items-center">
                {/* Left image section */}
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl shadow-md w-full max-w-md h-80 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="text-6xl mb-4">🌱</div>
                      <p className="text-sm">सौभाग्य प्लेटफॉर्म</p>
                      <p className="text-xs">अपशिष्ट से ऊर्जा</p>
                    </div>
                  </div>
                </div>

                {/* Right content section */}
                <div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed font-medium">
                    सौभाग्य भारत का कृषि अपशिष्ट-से-ऊर्जा प्लेटफॉर्म है जो ग्रामीण कृषि समुदायों को स्वच्छ ऊर्जा उत्पादन से जोड़ता है।
                  </p>

                  <ul className="space-y-4 text-gray-700 font-medium">
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🌿</span>
                      <div>
                        <strong className="text-gray-800">किसानों को सशक्त बनाना:</strong> IoT-आधारित तौल और उसी दिन भुगतान के साथ गोबर के लिए उचित भुगतान कमाएं।
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">⚙️</span>
                      <div>
                        <strong className="text-gray-800">स्मार्ट संग्रह प्रणाली:</strong> वास्तविक समय GPS ट्रैकिंग पारदर्शी और कुशल संचालन सुनिश्चित करती है।
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🔋</span>
                      <div>
                        <strong className="text-gray-800">स्वच्छ ऊर्जा रूपांतरण:</strong> गोबर को CBG में परिवर्तित करना — उत्सर्जन में 40% तक की कमी।
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🌾</span>
                      <div>
                        <strong className="text-gray-800">सामुदायिक प्रभाव:</strong> ग्रामीण अर्थव्यवस्था को मजबूत बनाना और टिकाऊ आजीविका को बढ़ावा देना।
                      </div>
                    </li>
                  </ul>

                  <p className="text-gray-700 mt-6 text-lg leading-relaxed font-medium">
                    साथ मिलकर, हम एक स्वच्छ, अधिक समृद्ध भारत का निर्माण कर रहे हैं — जहाँ नवाचार स्थिरता से मिलता है।
                  </p>
                </div>
              </div>
            )}
          </motion.div>

        {/* Core Values and Impact Section */}
        <div className="bg-gray-50 py-20 mt-16 -mx-6 lg:-mx-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-700 mb-4">
                {isHindi ? 'सौभाग्य प्लेटफॉर्म से जुड़ने के 3 सरल चरण' : 'Follow These 3 Simple Steps to'}
              </h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-700">
                {isHindi ? 'हमारे प्लेटफॉर्म से जुड़ें!' : 'Join Our Platform!'}
              </h3>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">

              {/* Left Side - Steps */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg mb-2">
                      {isHindi ? 'अपनी गौशाला पंजीकृत करें' : 'Register Your Gaushala'}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {isHindi
                        ? 'अपनी गौशाला का विवरण दें और हमारे फील्ड एक्जीक्यूटिव द्वारा सत्यापित हों'
                        : 'Sign up with your cattle shelter details and get verified by our field executives'
                      }
                    </p>
                  </div>
                </div>

                <div className="border-l-2 border-gray-300 ml-4 h-8"></div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg mb-2">
                      {isHindi ? 'संग्रह शेड्यूल करें' : 'Schedule Collection'}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {isHindi
                        ? 'हमारे ऐप के माध्यम से पिकअप स्लॉट बुक करें जिसमें रियल-टाइम GPS ट्रैकिंग और IoT तौल शामिल है'
                        : 'Book pickup slots through our app with real-time GPS tracking and IoT weighing'
                      }
                    </p>
                  </div>
                </div>

                <div className="border-l-2 border-gray-300 ml-4 h-8"></div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg mb-2">
                      {isHindi ? 'निष्पक्ष भुगतान प्राप्त करें' : 'Earn Fair Payments'}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {isHindi
                        ? 'सीधे अपने खाते में उसी दिन डिजिटल भुगतान के साथ ₹3-5/किग्रा प्राप्त करें'
                        : 'Receive ₹3-5/kg with same-day digital payments directly to your account'
                      }
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Center - Oval Image Frame */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  {/* Oval frame with border */}
                  <div className="w-80 h-96 bg-gradient-to-br from-[#3A845D] to-green-600 rounded-full border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden">
                    {/* Placeholder content */}
                    <div className="text-center text-white">
                      <div className="text-7xl mb-4">👨‍🌾</div>
                      <h4 className="font-bold text-xl mb-2">
                        {isHindi ? 'सौभाग्य किसान' : 'Saubhagya Farmer'}
                      </h4>
                      <p className="text-sm opacity-90">
                        {isHindi ? 'जीवन बदलना' : 'Transforming Lives'}
                      </p>
                      <p className="text-xs opacity-75 mt-1">
                        {isHindi ? 'अपशिष्ट → धन' : 'Waste → Wealth'}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Impact Statistics */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Stat 1 */}
                <div className="text-right">
                  <div className="text-5xl font-bold text-gray-700 mb-1">1000+</div>
                  <p className="text-gray-600 text-sm">
                    {isHindi ? 'सक्रिय किसान' : 'Active Farmers'}
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="text-right">
                  <div className="text-5xl font-bold text-gray-700 mb-1">50+</div>
                  <p className="text-gray-600 text-sm">
                    {isHindi ? 'जुड़े गांव' : 'Villages Connected'}
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="text-right">
                  <div className="text-4xl font-bold text-gray-700 mb-1">₹2 Cr+</div>
                  <p className="text-gray-600 text-sm">
                    {isHindi ? 'कुल किसान भुगतान' : 'Total Farmer Payouts'}
                  </p>
                </div>

                {/* Stat 4 */}
                <div className="text-right">
                  <div className="text-5xl font-bold text-gray-700 mb-1">40%</div>
                  <p className="text-gray-600 text-sm">
                    {isHindi ? 'उत्सर्जन में कमी' : 'Emission Reduction'}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            {t('aboutSaubhagya.languageNote')}
          </p>
        </div>
      </div>


    </section>
  );
};

export default AboutSaubhagya;