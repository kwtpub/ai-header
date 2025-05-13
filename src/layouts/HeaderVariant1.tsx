import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import BurgerButton from '../components/BurgerButton';
import BurgerMenu from '../components/BurgerMenu';

const HeaderVariant1: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      <header className={`header ${scrolled ? 'shadow-md' : ''}`}>
        <div className="h-[2px] bg-[rgb(20,83,45)]" />
        <div className="max-w-[1920px] mx-auto px-4 h-16 flex items-center justify-between">
          <img 
            src="https://res.cloudinary.com/dhx2rvn4s/image/upload/v1746196923/deepseek_svg_20250503_4e8d62_ppjqr2.svg"
            alt="Menu"
            className="w-7 h-7 cursor-pointer hover:opacity-70 transition-opacity"
            onClick={toggleMenu}
          />
          
          <div className="absolute left-1/2 -translate-x-1/2 transform-gpu">
            <Logo variant="minimal" />
          </div>
          
          <div className="flex items-center">
            <button 
              className="relative w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity"
              aria-label="Shopping Cart"
            >
              <img 
                src="https://res.cloudinary.com/dhx2rvn4s/image/upload/v1746196669/deepseek_svg_20250503_31ba23_bfqqu8.svg"
                alt="Cart"
                className="w-[22px] h-[22px]"
              />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[rgb(20,83,45)] text-white text-[10px] rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
        <div className="h-[1px] bg-[rgb(20,83,45)] opacity-10" />
      </header>
      
      <BurgerMenu isOpen={isOpen} toggle={toggleMenu} variant="slide" />
    </>
  );
};

export default HeaderVariant1;