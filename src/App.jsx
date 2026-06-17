// src/App.jsx
import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import ScrollVideoCanvas from './components/ScrollVideoCanvas';
import SmoothScroll from './components/SmoothScroll';
import SectionLoader from './components/SectionLoader';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';
import ScrollStack from './components/ScrollStack';
import GlobalTextReveal from './components/GlobalTextReveal';
import QuickContactBar from './components/QuickContactBar';

// Lazy loaded below-the-fold components
const Company = lazy(() => import('./components/sections/Company'));
const Solutions = lazy(() => import('./components/sections/Solutions'));
const Products = lazy(() => import('./components/sections/Products'));
const TechnicalSection = lazy(() => import('./components/sections/TechnicalSection'));
const TrustedClients = lazy(() => import('./components/sections/TrustedClients'));
const Careers = lazy(() => import('./components/sections/Careers'));
const CTA = lazy(() => import('./components/sections/CTA'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  return (
    <>
      <SEO title="Home" description="Killis Bird — Precision Engineered UAV components. Built in India. Trusted Worldwide." />
      <ScrollToTop />
      <GlobalTextReveal />
      <QuickContactBar />
      
      {/* Above-the-fold content: loaded immediately */}
      <Navbar />
      
      <ScrollStack>
        <Hero />

        {/* Below-the-fold content: lazy loaded & smooth scroll wrapper */}
        <SmoothScroll>
          <Suspense fallback={<SectionLoader />}>
            <Company />
            <ScrollVideoCanvas />
            <Solutions />
            <Products />
            <TechnicalSection />
            <TrustedClients />
            <Careers />
            <CTA />
            <Footer />
          </Suspense>
        </SmoothScroll>
      </ScrollStack>
    </>
  );
};

export default App;
