import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import FaqAvatar from '../../faq.svg';
import Footer from './Footer'; // Adjust the import path as necessary


const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      question: 'What is WebOpMatics?',
      answer: 'WebOpMatics is a digital solutions company specializing in web development, IT consulting, and hosting services.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can reach our customer support team by visiting our Contact Us page or sending an email to support@webopmatics.com.',
    },
    {
      question: 'Do you offer custom web development services?',
      answer: 'Yes, we provide custom web development solutions tailored to your unique business needs.',
    },
    {
      question: 'Can I request a quote for my project?',
      answer: 'Absolutely! Please visit our Request a Quote page and provide us with details about your project. We will get back to you with a customized quote.',
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We have expertise in a wide range of technologies, including but not limited to React, Node.js, Python, and more.',
    },
    {
      question: 'Is WebOpMatics a global company?',
      answer: 'Yes, WebOpMatics serves clients worldwide. We have a global presence and work with businesses from various regions and industries.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const filteredFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-gray-800">
      <Helmet>
        <title>FAQ - WebOpMatics</title>
      </Helmet>
      <main className="w-full max-w-4xl p-8 mx-auto">
        <div className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 absolute top-0 left-0 w-full h-1/2 rounded-lg"></div>
        <div className="text-center relative z-10">
          <motion.img
            src={FaqAvatar}
            alt="FAQ Assistant"
            className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h1>
        </div>
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden p-6 space-y-6 relative z-10">
          <AnimatePresence>
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'bg-blue-100 shadow-lg' : 'bg-gray-50'
                } p-5 rounded-lg cursor-pointer hover:bg-blue-200`}
                onClick={() => toggleAccordion(index)}
              >
                <motion.h2
                  className="text-lg font-semibold text-gray-800 flex justify-between items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.question}
                  <motion.button
                    aria-expanded={activeIndex === index ? 'true' : 'false'}
                    className="focus:outline-none transform transition-transform"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeIndex === index ? (
                      <IoIosArrowDropup className="h-6 w-6" />
                    ) : (
                      <IoIosArrowDropdown className="h-6 w-6" />
                    )}
                  </motion.button>
                </motion.h2>
                <motion.p
                  className={`text-gray-700 text-lg transition-max-height duration-700 ease-in-out ${
                    activeIndex === index ? 'max-h-96' : 'max-h-0'
                  } overflow-hidden`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {faq.answer}
                </motion.p>
              </motion.div>
            ))}
          </AnimatePresence>
          {!showAll && (
            <motion.button
              className="bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none transform transition-transform py-2 px-4 rounded"
              onClick={handleShowAll}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Show All FAQs
            </motion.button>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;