import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface BurgerMenuProps {
  isOpen: boolean;
  toggle: () => void;
  variant?: 'slide' | 'fade';
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, toggle, variant = 'fade' }) => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  const menuItems = [
    { label: 'КАТАЛОГ', href: '/' },
    { label: 'О БРЕНДЕ', href: '/about' },
    { label: 'СВЯЗАТЬСЯ С НАМИ', href: '/contact' },
  ];

  const variants = {
    slide: {
      initial: { y: '-100%' },
      animate: { y: 0 },
      exit: { y: '-100%' },
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-[#556b2f] bg-opacity-80 backdrop-blur-sm z-40 bg-contain bg-bottom bg-no-repeat lg:bg-cover lg:bg-center [background-image:url('https://res.cloudinary.com/dhx2rvn4s/image/upload/v1746469479/montain_mobile_cvy0wt.png')] lg:[background-image:url('https://res.cloudinary.com/dhx2rvn4s/image/upload/v1746469478/montain_desctop_yi3hhw.png')]"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants[variant]}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-[#556b2f] bg-opacity-60 pointer-events-none z-[-1]" />
          <div className="h-full flex flex-col">
            <div className="h-[65px] flex-shrink-0" /> {/* Spacer for header */}
            
            <nav className="flex-1 flex flex-col justify-start pt-8">
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.href} className="text-center">
                    {item.subItems ? (
                      <div className="space-y-4">
                        <button
                          onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                          className="text-white text-sm font-mono font-medium tracking-wide hover:text-white/80 transition-colors flex items-center justify-center gap-2 mx-auto"
                        >
                          {item.label}
                          {isCatalogOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                        <AnimatePresence>
                          {isCatalogOpen && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="space-y-4 overflow-hidden"
                            >
                              {item.subItems.map((subItem) => (
                                <li key={subItem.href}>
                                  <a
                                    href={subItem.href}
                                    className="text-white/80 text-xs font-mono font-light tracking-wide hover:text-white transition-colors"
                                    onClick={toggle}
                                  >
                                    {subItem.label}
                                  </a>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="text-white text-sm font-mono font-medium tracking-wide hover:text-white/80 transition-colors"
                        onClick={toggle}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BurgerMenu;
