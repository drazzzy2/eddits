import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';

const backgroundVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Glow Effects */}
      <AnimatePresence>
        <motion.div
          key="background"
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 overflow-hidden pointer-events-none"
        >
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[120px] animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/10 blur-[120px] animate-pulse"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10">
        <Navbar />
        <main className="relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
}