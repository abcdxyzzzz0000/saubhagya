import React from 'react';
import FAQCarousel from '../components/FAQCarousel';
import { getFAQData } from '../data/faqData';
import { useTranslation } from '../hooks/react-i18next';
import '../styles/faq-carousel.css';

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const faqData = getFAQData(t);

  return (
    <div className="faq-page">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {t('faq.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('faq.description')}
          </p>
        </div>

        <FAQCarousel
          faqs={faqData}
          autoRotate={false}
          showNavigation={true}
          className="faq-page__carousel"
        />

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            {t('faq.cantFind')}
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            {t('faq.contactSupport')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;