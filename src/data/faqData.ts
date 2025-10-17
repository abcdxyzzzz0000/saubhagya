import { FAQItem } from '../types/faq';

// FAQ data with translation keys
export const getFAQData = (t: (key: string, options?: any) => any): FAQItem[] => {
  const faqItems = t('faq.items', { returnObjects: true });
  
  if (Array.isArray(faqItems)) {
    return faqItems.map((item, index) => ({
      id: `faq-${index + 1}`,
      question: item.question,
      answer: item.answer
    }));
  }
  
  // Fallback data if translation fails
  return [
    {
      id: 'faq-1',
      question: 'What is the Saubhagya scheme?',
      answer: 'The Saubhagya scheme is a government initiative aimed at providing electricity connections to all households in rural and urban areas.'
    },
    {
      id: 'faq-2',
      question: 'How can I apply for a new electricity connection?',
      answer: 'You can apply through our online portal, mobile app, or by visiting the nearest electricity board office.'
    },
    {
      id: 'faq-3',
      question: 'What documents are required for connection?',
      answer: 'Required documents include Aadhaar card, address proof, property documents, and photographs.'
    }
  ];
};