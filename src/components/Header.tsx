import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="bg-[#232f3e] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-[#ff9900]">Home</a></li>
            <li><a href="#ai-services" className="hover:text-[#ff9900]">AI Services</a></li>
            <li><a href="#certifications" className="hover:text-[#ff9900]">Certifications</a></li>
            <li><a href="#contact" className="hover:text-[#ff9900]">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;