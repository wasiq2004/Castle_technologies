/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Navbar, Footer } from './Layout';
import { Home } from './Home';
import { About } from './About';
import { Services } from './Services';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Legal } from './Legal';

const GradientWaves = lazy(() =>
  import('./components/gradient-waves').then((module) => ({ default: module.GradientWaves })),
);

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default function App() {
  const eventSource = useRef<HTMLDivElement>(null);
  const [showWaves, setShowWaves] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileQuery = window.matchMedia('(max-width: 767px)');

    const updatePreferences = () => {
      setShowWaves(!motionQuery.matches);
      setIsMobile(mobileQuery.matches);
    };

    updatePreferences();
    motionQuery.addEventListener('change', updatePreferences);
    mobileQuery.addEventListener('change', updatePreferences);

    return () => {
      motionQuery.removeEventListener('change', updatePreferences);
      mobileQuery.removeEventListener('change', updatePreferences);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div ref={eventSource} className="app-shell min-h-screen bg-bg-deep selection:bg-primary/30 selection:text-white">
        {showWaves ? (
          <Suspense fallback={null}>
            <GradientWaves eventSource={eventSource} isMobile={isMobile} />
          </Suspense>
        ) : null}
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/legal" element={<Legal />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
