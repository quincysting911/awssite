import React from 'react';
import { Brain } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <Brain className="w-8 h-8 text-[#ff9900]" />
      <div className="flex flex-col">
        <span className="text-xl font-bold">IAN QIN</span>
        <span className="text-xs text-[#ff9900]">AWS AI Expert</span>
      </div>
    </div>
  );
};

export default Logo;