import { Button } from "@/components/ui/button";
import { Leaf, Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "../hooks/react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative z-20 bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="text-2xl font-bold">{t('footer.companyName')}</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <Button variant="secondary" size="lg" className="transition-all duration-300 ease-in-out">
                {t('footer.joinFarmer')}
              </Button>
              <Button variant="secondary" size="lg" className="transition-all duration-300 ease-in-out">
                {t('footer.requestPickup')}
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.quickLinks')}</h4>
            <div className="space-y-3">
              <a href="#home" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                {t('footer.home')}
              </a>
              <a href="#how-it-works" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                {t('footer.howItWorks')}
              </a>
              <a href="#benefits" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                {t('footer.farmerBenefits')}
              </a>
              <a href="#about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                {t('footer.aboutUs')}
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.contactUs')}</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80">{t('footer.phone')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80">{t('footer.email')}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80">{t('footer.address')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">
              {t('footer.privacyPolicy')}
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">
              {t('footer.termsOfService')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};