import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#232f3e] text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} IAN QIN - AWS AI Expert. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-[#ff9900] hover:underline mx-2">Privacy Policy</a>
          <a href="#" className="text-[#ff9900] hover:underline mx-2">Terms of Service</a>
          <a href="#" className="text-[#ff9900] hover:underline mx-2">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;