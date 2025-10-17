import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageSquare, UserPlus, Headphones, Briefcase, HelpCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export const Contact = () => {
  const [activeHelpIndex, setActiveHelpIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      subtitle: "हमें कॉल करें",
      details: "+91 98765 43210 (Mon-Sat, 9 AM - 6 PM)",
      description: "Talk directly with our dedicated support team in Hindi, English, Marathi, Gujarati. Avg. 2-min wait time. Available for registration, payments, and queries.",
      gradient: "bg-gradient-to-br from-green-700 to-green-900"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Support",
      subtitle: "व्हाट्सऐप सहायता",
      details: "+91 98765 43211 (24x7 Support)",
      description: "Quick support for all queries. Send photos/videos. Track pickup, payment status, and get instant answers to common questions. Join our Farmer Group.",
      gradient: "bg-gradient-to-br from-green-400 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      subtitle: "ईमेल सहायता",
      details: "support@saubhagya.com",
      description: "For detailed queries, technical issues, or documentation requests. Guaranteed response within 24 hours. Includes farmer group invitations and documentation.",
      gradient: "bg-gradient-to-br from-yellow-300 to-orange-400"
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      subtitle: "कार्यालय आएं",
      details: "Sector 14, Gurgaon, Haryana",
      description: "Schedule a personal meeting. Farmer orientation sessions every Wednesday. Bring Aadhar, bank passbook for instant registration.",
      gradient: "bg-gradient-to-br from-blue-600 to-green-700"
    }
  ];

  const supportTypes = [
    {
      icon: UserPlus,
      title: "New Farmer Registration",
      description: "Get started with Saubhagya and begin earning",
      action: "Register Now",
      gradient: "bg-gradient-to-br from-green-500 to-orange-400"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Help with app, weighing, or payment issues",
      action: "Get Help",
      gradient: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      icon: Briefcase,
      title: "Business Inquiries",
      description: "Partnership and business development",
      action: "Connect",
      gradient: "bg-gradient-to-br from-purple-400 to-purple-600"
    },
    {
      icon: HelpCircle,
      title: "General Questions",
      description: "Any other questions about our services",
      action: "Ask Us",
      gradient: "bg-gradient-to-br from-teal-400 to-teal-600"
    }
  ];

  // Auto-rotate carousel every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveHelpIndex((prev) => (prev + 1) % supportTypes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, supportTypes.length]);

  // Navigation functions
  const goToNext = () => {
    setActiveHelpIndex((prev) => (prev + 1) % supportTypes.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setActiveHelpIndex((prev) => (prev - 1 + supportTypes.length) % supportTypes.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setActiveHelpIndex(index);
    setIsAutoPlaying(false);
  };

  const faqs = [
    {
      question: "How quickly will I receive payment?",
      answer: "Payments are processed within 24 hours of material verification and directly transferred to your registered bank account."
    },
    {
      question: "What is the minimum quantity for pickup?",
      answer: "We collect minimum 50kg of cattle dung. For smaller quantities, you can accumulate and request pickup when ready."
    },
    {
      question: "How do you ensure fair weighing?",
      answer: "We use IoT-enabled digital weighing scales with real-time data recording. You receive SMS confirmation of weights immediately."
    },
    {
      question: "What are the quality requirements?",
      answer: "Fresh cattle dung with minimal contamination. Our team will guide you on proper storage and preparation methods."
    },
    {
      question: "Is there any registration fee?",
      answer: "No registration fees. Joining Saubhagya is completely free for farmers. We only earn when you earn."
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Emergency Support Only" }
  ];

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <section className="pt-20 pb-20 bg-gradient-to-b from-gray-100 to-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Contact Us
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-medium text-gray-700">
              संपर्क करें
            </p>
            <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Ready to start earning from your cattle dung and transform waste into wealth? Have
              questions about our process, pricing, or technology? Our dedicated multilingual
              support team is available to assist you every step of the way - from initial registration
              to your first payment and beyond.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-l-4 border-primary">
                <h3 className="text-2xl font-bold text-foreground mb-6">Quick Contact Guide</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Phone Support:</strong> Call +91 98765 43210 for immediate assistance. Available in Hindi, English, Marathi, and Gujarati. Average wait time under 2 minutes. Available for registration, payments, and technical support.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">WhatsApp:</strong> Quick support via +91 98765 43211. Send photos, videos, or voice messages. Track pickup status, check payment history, and get instant answers to common questions. Join our farmer community group for tips and updates.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Email:</strong> support@saubhagya.com for detailed queries, technical issues, or documentation requests. Guaranteed response within 24 hours. Include farmer group invitations and documentation.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Office Hours:</strong> Mon-Fri 9AM-6PM, Sat 9AM-2PM for in-person support. Emergency pickup requests and payment issues available 24/7. Farmer orientation sessions every Wednesday. Bring Aadhar and bank passbook for instant registration.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Get In Touch
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                संपर्क में रहें
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactMethods.map((method, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/95 backdrop-blur-sm">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className={`w-20 h-20 ${method.gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
                      <method.icon className="w-10 h-10 text-background" />
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {method.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 font-medium">
                      {method.subtitle}
                    </p>
                    <p className="text-lg font-semibold text-primary mb-3">
                      {method.details}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
              {/* Send us a Message Form */}
              <Card className="p-6 bg-white shadow-md rounded-xl border border-gray-200 h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-5">
                  Send us a Message
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-gray-600 mb-1 block">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="First Name"
                        className="h-10 bg-gray-50 border-gray-300 rounded-md text-sm focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-gray-600 mb-1 block">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Last Name"
                        className="h-10 bg-gray-50 border-gray-300 rounded-md text-sm focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-600 mb-1 block">Phone Number *</Label>
                    <Input
                      id="phone"
                      placeholder="+91 XXXXX XXXXX"
                      className="h-10 bg-gray-50 border-gray-300 rounded-md text-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-600 mb-1 block">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="h-10 bg-gray-50 border-gray-300 rounded-md text-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="location" className="text-sm font-medium text-gray-600 mb-1 block">Village/Location *</Label>
                    <Input
                      id="location"
                      placeholder="Village/Location"
                      className="h-10 bg-gray-50 border-gray-300 rounded-md text-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="cattle" className="text-sm font-medium text-gray-600 mb-1 block">Number of Cattle</Label>
                    <Input
                      id="cattle"
                      placeholder="Number of Cattle"
                      className="h-10 bg-gray-50 border-gray-300 rounded-md text-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-600 mb-1 block">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Message"
                      className="h-24 bg-gray-50 border-gray-300 rounded-md text-sm focus:border-green-500 focus:ring-green-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11 bg-green-700 hover:bg-green-800 text-white font-medium rounded-md transition-colors text-sm shadow-sm"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Right Column */}
              <div className="h-full flex flex-col">
                {/* Office Hours */}
                <Card className="p-6 bg-white shadow-md rounded-xl border border-gray-200 flex-1 mb-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-orange-400 rounded-lg flex items-center justify-center shadow-sm">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Office Hours
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-1">
                        <span className="text-gray-700 font-medium text-sm">{schedule.day}</span>
                        <span className="text-gray-600 text-sm">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Visit Our Office */}
                <Card className="p-6 bg-white shadow-md rounded-xl border border-gray-200 flex-1">
                  <div className="flex flex-col items-center text-center h-full justify-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-orange-400 rounded-xl flex items-center justify-center shadow-sm mb-4">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Visit Our Office</h4>
                    <p className="text-gray-600 text-sm mb-3">Sector 14, Gurgaon, Haryana</p>
                    <p className="text-green-600 text-xs font-medium cursor-pointer hover:text-green-700">
                      Click to view contact details →
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                How Can We Help?
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                हम कैसे मदद कर सकते हैं?
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportTypes.map((support, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/95 backdrop-blur-sm">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className={`w-20 h-20 ${support.gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
                      <support.icon className="w-10 h-10 text-background" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-foreground mb-4">
                      {support.title}
                    </h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {support.description}
                    </p>
                    <Button variant="outline" className="w-full h-12 text-base font-semibold">
                      {support.action}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                अक्सर पूछे जाने वाले प्रश्न
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm">
                  <h4 className="text-xl font-bold text-foreground mb-4">
                    {faq.question}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-primary/90 to-secondary/90 backdrop-blur-sm">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white drop-shadow-lg">
              Need Immediate Help?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto drop-shadow-md">
              For urgent pickup requests or payment issues, contact our 24/7 support team
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all">
                <Phone className="w-6 h-6 mr-3" />
                Call Emergency Support
              </Button>
              <Button variant="hero" size="lg" className="text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all">
                <MessageSquare className="w-6 h-6 mr-3" />
                WhatsApp Support
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
