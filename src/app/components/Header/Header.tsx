'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typographie } from '../Typographie';

const navItems = ['Accueil', 'Projets', 'À propos', 'Contact'];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="relative z-50">
      {/* HEADER */}
      <div className="absolute top-10 z-50 w-full h-[100px] flex items-center justify-around rounded-lg px-6 bg-white/70 backdrop-blur-sm ">
        <Typographie variant="h3" component="span">
          EC
        </Typographie>
        <button
          className="font-archivo text-lg relative overflow-hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 top-0"
              >
                Close
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 top-0"
              >
                Menu
              </motion.span>
            )}
          </AnimatePresence>
          {/* Sert à fixer la hauteur du bouton */}
          <span className="invisible">Close</span>
        </button>
      </div>

      {/* MENU FULLSCREEN */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center gap-10 "
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-archivo text-3xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.3,
                  delay: 0.2 + i * 0.1, // décalage progressif
                }}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
