import React from 'react';
import { Brain, Image, MessageSquare } from 'lucide-react';

const aiServices = [
  { 
    title: 'Amazon SageMaker', 
    icon: Brain, 
    description: 'Build, train, and deploy machine learning models at scale'
  },
  { 
    title: 'Amazon Rekognition', 
    icon: Image, 
    description: 'Add image and video analysis to your applications'
  },
  { 
    title: 'Amazon Lex', 
    icon: MessageSquare, 
    description: 'Build conversational interfaces using voice and text'
  },
];

const ExamLevels: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">AWS AI Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <service.icon className="w-12 h-12 text-[#ff9900] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamLevels;