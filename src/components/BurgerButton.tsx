import React from 'react';
import { Menu, X } from 'lucide-react';

interface BurgerButtonProps {
  isOpen: boolean;
  toggle: () => void;
  variant?: 'default' | 'rounded' | 'minimal';
}

const BurgerButton: React.FC<BurgerButtonProps> = ({ 
  isOpen, 
  toggle, 
  variant = 'default' 
}) => {
  const baseClasses = 'flex items-center justify-center cursor-pointer transition-all duration-200';
  
  const variantClasses = {
    default: 'w-10 h-10 hover:bg-gray-100',
    rounded: 'w-10 h-10 rounded-full hover:bg-gray-100',
    minimal: 'w-8 h-8 hover:opacity-70'
  };

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]}`} 
      onClick={toggle}
      aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
    >
      {isOpen ? (
        <X size={20} strokeWidth={1} />
      ) : (
        <Menu size={20} strokeWidth={1} />
      )}
    </div>
  );
};

export default BurgerButton;