'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  //<img src="/placeholder.svg?height=40&width=40" alt="Logo" className="h-10 w-10 mr-2" />

  return (
    <>
      <nav className="bg-white bg-opacity-90 backdrop-blur-md fixed w-full z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <MountainIcon className="h-6 w-6 text-purple-500" />
              <span className="font-bold text-xl px-2">
                <span className="text-purple-500">SEO Ai</span>gency
              </span>
            </div>
            <div className="hidden md:flex space-x-4 font-medium">
              {/* <a href="#" className="text-gray-800 hover:text-gray-600">
                Services
              </a> */}
              {/* <a href="#" className="text-gray-800 hover:text-gray-600">
                Über uns
              </a> */}
              <a href="mailto:hello@seo-aigency.com" className="text-gray-800 hover:text-gray-600">
                Get in touch
              </a>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-20 pt-20"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="container mx-auto px-4">
              <button
                className="absolute top-4 right-4 text-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={24} />
              </button>
              <motion.div className="flex flex-col items-center space-y-4">
                <motion.a
                  href="#"
                  className="text-gray-800 text-xl"
                  variants={menuItemVariants}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-800 text-xl"
                  variants={menuItemVariants}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About us
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-800 text-xl"
                  variants={menuItemVariants}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get in touch
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
