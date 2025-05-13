import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import BurgerButton from './BurgerButton';
import BurgerMenu from './BurgerMenu';
import { X } from 'lucide-react';

const HeaderVariant3: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount] = useState(3);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCartClick = () => {
    navigate('/cart');
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
          <div className="flex items-center h-full">
            <Logo variant="minimal" />
          </div>
          
          <div className="flex items-center">
            <div className="bg-[#556b2f] flex">
              <button 
                className="relative w-10 h-10 flex items-center justify-center text-white hover:bg-[#445429] transition-colors rounded-l"
                aria-label="Shopping Cart"
                onClick={handleCartClick}
              >
                <img 
                  src="https://res.cloudinary.com/dhx2rvn4s/image/upload/v1746303410/ChatGPT_Image_4_%D0%BC%D0%B0%D1%8F_2025_%D0%B3._00_15_23-Photoroom_vqusvw.png"
                  alt="Cart"
                  className="w-7 h-7"
                />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#556b2f] text-white text-xs flex items-center justify-center font-semibold shadow-md">
                    {cartCount}
                  </span>
                )}
              </button>
              <div className="w-[1px] bg-white bg-opacity-20 self-stretch my-2" />
              <button 
                className="w-10 h-10 flex items-center justify-center text-white hover:bg-[#445429] transition-colors rounded-r"
                onClick={toggleMenu}
                aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
              >
                {isOpen ? (
                  <X size={20} strokeWidth={1} />
                ) : (
                  <img 
                    src="https://res.cloudinary.com/dhx2rvn4s/image/upload/v1746202381/icons8-menu-50_qadtr2.png"
                    alt="Menu"
                    className="w-4 h-4"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-[#445429] opacity-10" />
      </header>
      
      <BurgerMenu isOpen={isOpen} toggle={toggleMenu} variant="fade" />
    </>
  );
};

export default HeaderVariant3;