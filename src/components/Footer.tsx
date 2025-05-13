import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const footerLinks = [
    { label: 'КАТАЛОГ', href: '/' },
    { label: 'О БРЕНДЕ', href: '/shop' },
    { label: 'СВЯЗАТЬСЯ С НАМИ', href: '/contact' },
  ];

  return (
    <footer className="relative bg-[#556b2f] bg-opacity-80 backdrop-blur-sm bg-contain bg-bottom bg-no-repeat lg:bg-cover lg:bg-center [background-image:url('https://res.cloudinary.com/dhx2rvn4s/image/upload/v1746469479/montain_mobile_cvy0wt.png')] lg:[background-image:url('https://res.cloudinary.com/dhx2rvn4s/image/upload/v1746469478/montain_desctop_yi3hhw.png')]">
      <div className="absolute inset-0 bg-[#556b2f] bg-opacity-60 pointer-events-none z-[-1]" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-mono font-medium tracking-wide mb-4">НАВИГАЦИЯ</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white text-sm font-mono font-light tracking-wide hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-mono font-medium tracking-wide mb-4">КОНТАКТЫ</h3>
            <ul className="space-y-2">
             
              <li>
                <a href="mailto:fighter@tylerthompson.ru" className="text-white text-sm font-mono font-light tracking-wide hover:text-white/80 transition-colors">
                fighter@tylerthompson.ru
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-mono font-medium tracking-wide mb-4">СОЦИАЛЬНЫЕ СЕТИ</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white text-sm font-mono font-light tracking-wide hover:text-white/80 transition-colors">
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-sm font-mono font-light tracking-wide hover:text-white/80 transition-colors">
                  TELEGRAM
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white text-xs font-mono font-light tracking-wide text-center">
            © {new Date().getFullYear()} Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 