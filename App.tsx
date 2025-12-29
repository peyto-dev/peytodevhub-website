import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ImpactPage from './pages/ImpactPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CompanyDisclosure from './pages/CompanyDisclosure';
import CookieConsent from './components/CookieConsent';
import { LanguageProvider } from './contexts/LanguageContext';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-peyto-bg text-peyto-textPrimary selection:bg-peyto-accent selection:text-white flex flex-col">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/impact" element={<ImpactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/disclosure" element={<CompanyDisclosure />} />
            </Routes>
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;