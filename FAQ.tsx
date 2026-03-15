import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

const faqs = [
  {
    category: "Orders & Shipping",
    questions: [
      { q: "How long will it take to receive my order?", a: "Standard shipping typically takes 3-5 business days within the US. International shipping can take 7-14 business days depending on the destination. You will receive a tracking number once your order ships." },
      { q: "Do you ship internationally?", a: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location and will be calculated at checkout." },
      { q: "Can I change or cancel my order?", a: "We process orders quickly, but if you contact us within 1 hour of placing your order, we will do our best to accommodate changes or cancellations." }
    ]
  },
  {
    category: "Returns & Exchanges",
    questions: [
      { q: "What is your return policy?", a: "We accept returns within 30 days of delivery. Items must be unworn, unwashed, and have original tags attached. Final sale items cannot be returned." },
      { q: "How do I initiate a return?", a: "Log into your account, go to Order History, select the item you wish to return, and print the prepaid return label. If you checked out as a guest, visit our Returns Portal." },
      { q: "How long does it take to process a refund?", a: "Once we receive your return, please allow 5-7 business days for processing. The refund will automatically be issued to your original payment method." }
    ]
  },
  {
    category: "Product & Sizing",
    questions: [
      { q: "How do I know what size to order?", a: "We provide a detailed Size Guide on every product page. If you are between sizes, we generally recommend sizing up for a more relaxed fit, or contacting our styling team for advice." },
      { q: "Are your materials sustainable?", a: "Yes, sustainability is at our core. Over 80% of our collection is made from organic, recycled, or responsibly sourced materials. Read more on our About page." }
    ]
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  const toggleAccordion = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-zinc-50 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-500 text-lg">Everything you need to know about our products, shipping, and returns.</p>
          </div>

          <div className="space-y-12">
            {faqs.map((section, sIdx) => (
              <div key={sIdx}>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">{section.category}</h2>
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                  {section.questions.map((faq, qIdx) => {
                    const index = `${sIdx}-${qIdx}`;
                    const isOpen = openIndex === index;
                    return (
                      <div key={qIdx} className="border-b border-gray-100 last:border-0">
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-gray-900 pr-8">{faq.q}</span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-gray-400 shrink-0"
                          >
                            <ChevronDown size={20} />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-serif font-bold mb-2">Still have questions?</h3>
            <p className="text-gray-500 mb-6">Our customer care team is here to help.</p>
            <a href="/contact" className="inline-block bg-black text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
