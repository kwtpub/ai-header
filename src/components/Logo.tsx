import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'centered' | 'minimal';
}

const Logo: React.FC<LogoProps> = ({ variant = 'default' }) => {
  return (
    <Link 
      to="/" 
      className={`logo-text no-underline flex items-center h-full ${
        variant === 'centered' ? 'text-center' : ''
      } ${
        variant === 'minimal' ? 'text-sm' : 'text-xl'
      }`}
    >
      TYLER THOMPSON
    </Link>
  );
};

export default Logo;