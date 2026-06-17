// src/layouts/MainLayout.jsx
import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import ScrollStack from '../components/ScrollStack';
import GlobalTextReveal from '../components/GlobalTextReveal';
import QuickContactBar from '../components/QuickContactBar';
import SectionLoader from '../components/SectionLoader';

const Footer = lazy(() => import('../components/Footer'));

const MainLayout = () => (
  <>
    <Navbar />
    <ScrollToTop />
    <GlobalTextReveal />
    <QuickContactBar />
    <main style={{ paddingTop: '72px' }}>
      <ScrollStack>
        <Outlet />
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </ScrollStack>
    </main>
  </>
);

export default MainLayout;
