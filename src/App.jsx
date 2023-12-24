import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import CompanyDescription from './components/CompanyDescription';
import ServicesPage from './components/ServicesPage';
import PortfolioPage from './components/PortfolioPage';
import BlogPage from './components/BlogPage';
import AboutUsPage from './components/AboutUsPage';
import ContactPage from './components/ContactPage';
import TestimonialsPage from './components/TestimonialsPage';
import FAQPage from './components/FAQPage';
import CareersPage from './components/CareersPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Error404Page from './components/Error404Page';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CompanyDescription />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;