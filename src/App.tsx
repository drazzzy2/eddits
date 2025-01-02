import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import { lazyLoad } from './utils/lazyLoad';

// Lazy load components
const Home = lazyLoad(() => import('./pages/Home'));
const Portfolio = lazyLoad(() => import('./pages/Portfolio'));
const Story = lazyLoad(() => import('./pages/Story'));
const Layout = lazyLoad(() => import('./components/Layout'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="story" element={<Story />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <AnimatedRoutes />
      </Suspense>
    </Router>
  );
}

export default App;