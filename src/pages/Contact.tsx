import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, MessageSquare, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "../hooks/react-i18next";
import { motion } from "framer-motion";
import villageLife from "@/assets/village-life.jpg";
// Note: Save your QR code image as src/assets/whatsapp-qr.png
// import whatsappQR from "@/assets/whatsapp-qr.png";

export const Contact = () => {
  const { t } = useTranslation();
  const [showQR, setShowQR] = useState(false);

  // Simplified contact methods
  const contactMethods = [
    {
      icon: Phone,
      title: t('contact.simple.call.title'),
      details: t('contact.simple.call.details')
    },
    {
      icon: MessageSquare,
      title: t('contact.simple.whatsapp.title'),
      details: t('contact.simple.whatsapp.details')
    },
    {
      icon: Mail,
      title: t('contact.simple.email.title'),
      details: t('contact.simple.email.details')
    },
    {
      icon: MapPin,
      title: t('contact.simple.visit.title'),
      details: t('contact.simple.visit.details')
    }
  ];

  // Field team members
  const fieldTeam = [
    {
      name: t('contact.fieldTeam.member1.name'),
      role: t('contact.fieldTeam.member1.role'),
      image: villageLife
    },
    {
      name: t('contact.fieldTeam.member2.name'),
      role: t('contact.fieldTeam.member2.role'),
      image: villageLife
    },
    {
      name: t('contact.fieldTeam.member3.name'),
      role: t('contact.fieldTeam.member3.role'),
      image: villageLife
    }
  ];

  const faqs = t('contact.faqs', { returnObjects: true }) as Array<{question: string, answer: string}>;

  return (
    <div className="min-h-screen relative font-['Inter',sans-serif]">
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-transparent">
          <div className="container mx-auto px-6 text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 text-[#2E5B3A]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t('contact.hero.title')}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('contact.hero.subtitle')}
            </motion.p>
          </div>
        </section>

        {/* Simplified Contact Cards - 2x2 Grid */}
        <section className="py-10 px-6 bg-transparent">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-[#F1F8F4] rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 border-0">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#2E5B3A] rounded-full flex items-center justify-center flex-shrink-0">
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          {method.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {method.details}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Field Team */}
        <section className="py-10 px-6 bg-[#FDFBF8]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {t('contact.fieldTeam.title')}
              </h2>
              <p className="text-gray-600">{t('contact.fieldTeam.subtitle')}</p>
            </motion.div>

            <div className="flex gap-6 overflow-x-auto pb-4 max-w-5xl mx-auto scrollbar-hide">
              {fieldTeam.map((member, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all w-64 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#2E5B3A]">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-1">
                      {member.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {member.role}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Field Office Photo with Overlay */}
        <section className="py-10 px-6 bg-transparent">
          <div className="container mx-auto">
            <motion.div 
              className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={villageLife} 
                alt="Our field office where every farmer's voice matters"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-xl md:text-2xl font-semibold drop-shadow-lg">
                  {t('contact.fieldOffice.caption')}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form + FAQ */}
        <section className="py-10 px-6 bg-transparent">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Send us a Message Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl border-0">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {t('contact.form.title')}
                  </h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-1 block">
                          {t('contact.form.firstName')}
                        </Label>
                        <Input
                          id="firstName"
                          placeholder={t('contact.form.firstName')}
                          className="h-11 bg-gray-50 border-gray-300 rounded-lg focus:border-[#2E5B3A] focus:ring-[#2E5B3A]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-1 block">
                          {t('contact.form.lastName')}
                        </Label>
                        <Input
                          id="lastName"
                          placeholder={t('contact.form.lastName')}
                          className="h-11 bg-gray-50 border-gray-300 rounded-lg focus:border-[#2E5B3A] focus:ring-[#2E5B3A]"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1 block">
                        {t('contact.form.phone')}
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+91 XXXXX XXXXX"
                        className="h-11 bg-gray-50 border-gray-300 rounded-lg focus:border-[#2E5B3A] focus:ring-[#2E5B3A]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">
                        {t('contact.form.email')}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="h-11 bg-gray-50 border-gray-300 rounded-lg focus:border-[#2E5B3A] focus:ring-[#2E5B3A]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1 block">
                        {t('contact.form.message')}
                      </Label>
                      <Textarea
                        id="message"
                        placeholder={t('contact.form.message')}
                        className="h-32 bg-gray-50 border-gray-300 rounded-lg focus:border-[#2E5B3A] focus:ring-[#2E5B3A] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-[#2E5B3A] hover:bg-[#234528] text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
                    >
                      {t('contact.form.sendMessage')}
                    </Button>
                  </form>
                </Card>
              </motion.div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {t('contact.faq.title')}
                  </h3>
                  {faqs && faqs.map((faq, index) => (
                    <Card key={index} className="p-6 bg-white/90 backdrop-blur-sm shadow-md rounded-2xl border-0 hover:shadow-lg transition-all">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">
                        {faq.question}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Floating WhatsApp Button with QR Modal */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* QR Code Modal - Shows on click */}
        {showQR && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowQR(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl p-8 w-[90%] max-w-md z-50"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowQR(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
              
              <div className="text-center">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {t('contact.whatsappQR.title')}
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  {t('contact.whatsappQR.caption')}
                </p>
                
                {/* QR Code Image - Full Size */}
                <div className="w-full max-w-xs mx-auto mb-6 bg-white rounded-2xl p-4 border-4 border-[#25D366]">
                  {/* Replace this with your actual QR code image */}
                  {/* Make sure to save your QR code as: src/assets/whatsapp-qr.png */}
                  <img 
                    src="/whatsapp-qr.png" 
                    alt="WhatsApp QR Code" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback if image not found
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback SVG if image not found */}
                  <svg viewBox="0 0 29 29" className="w-full h-full hidden">
                    <rect width="29" height="29" fill="white"/>
                    <rect x="0" y="0" width="7" height="7" fill="black"/>
                    <rect x="1" y="1" width="5" height="5" fill="white"/>
                    <rect x="2" y="2" width="3" height="3" fill="black"/>
                    <rect x="22" y="0" width="7" height="7" fill="black"/>
                    <rect x="23" y="1" width="5" height="5" fill="white"/>
                    <rect x="24" y="2" width="3" height="3" fill="black"/>
                    <rect x="0" y="22" width="7" height="7" fill="black"/>
                    <rect x="1" y="23" width="5" height="5" fill="white"/>
                    <rect x="2" y="24" width="3" height="3" fill="black"/>
                    <rect x="10" y="10" width="9" height="9" fill="black"/>
                    <rect x="11" y="11" width="7" height="7" fill="white"/>
                    <rect x="12" y="12" width="5" height="5" fill="black"/>
                    <rect x="13" y="13" width="3" height="3" fill="white"/>
                    <rect x="14" y="14" width="1" height="1" fill="black"/>
                  </svg>
                </div>
                
                {/* WhatsApp Link Button */}
                <Button
                  onClick={() => {
                    window.open('https://wa.me/919876543210', '_blank');
                    setShowQR(false);
                  }}
                  className="w-full h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span>{t('contact.whatsappQR.openWhatsApp')}</span>
                </Button>
                
                <p className="text-xs text-gray-500 mt-4">
                  {t('contact.whatsappQR.instruction')}
                </p>
              </div>
            </motion.div>
          </>
        )}
        
        {/* Floating Button - Click to open modal */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowQR(true)}
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all relative"
          title="Scan to Chat with Us"
        >
          <MessageSquare className="w-8 h-8 text-white" />
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        </motion.button>
      </div>
    </div>
  );
};

export default Contact;
