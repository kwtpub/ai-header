import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import BurgerButton from '../components/BurgerButton';
import BurgerMenu from '../components/BurgerMenu';
import Navigation from '../components/Navigation';

const HeaderVariant2: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle header appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header flex items-center justify-center ${scrolled ? 'shadow-md' : ''}`}>
        <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between">
          <div className="absolute left-4 md:static">
            <BurgerButton isOpen={isOpen} toggle={toggleMenu} variant="rounded" />
          </div>
          
          <div className="py-4 md:py-0">
            <Logo variant="centered" />
          </div>
          
          <div className="hidden md:block">
            <Navigation variant="centered" />
          </div>
        </div>
      </header>
      
      <BurgerMenu isOpen={isOpen} toggle={toggleMenu} variant="slide" />
    </>
  );
};

export default HeaderVariant2;