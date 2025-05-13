import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavigationProps {
  variant?: 'default' | 'centered' | 'minimal';
}

const Navigation: React.FC<NavigationProps> = ({ variant = 'default' }) => {
  const links = [
    { name: 'New In', path: '/new' },
    { name: 'Collection', path: '/collection' },
    { name: 'Accessories', path: '/accessories' },
    { name: 'About', path: '/about' }
  ];

  return (
    <nav className={`
      flex ${variant === 'centered' ? 'justify-center' : 'justify-end'}
      ${variant === 'minimal' ? 'text-sm' : 'text-base'}
    `}>
      <ul className="flex space-x-8 list-none m-0 p-0">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink 
              to={link.path}
              className={({ isActive }) => 
                `${isActive ? 'text-[rgb(20,83,45)]' : 'text-black'} 
                no-underline hover:text-[rgb(20,83,45)] transition-colors duration-200 uppercase tracking-wide`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation