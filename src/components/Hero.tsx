import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-[#ff9900] text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Master AWS AI Services</h1>
        <p className="text-xl mb-8">Comprehensive preparation for AWS AI certifications and services</p>
        <a href="#" className="bg-[#232f3e] text-white px-6 py-3 rounded-full hover:bg-[#1a242f] transition duration-300">
          Explore AI Services
        </a>
      </div>
    </div>
  );
};

export default Hero;