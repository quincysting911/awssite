import React from 'react';
import { Brain, Image, MessageSquare, Mic, CloudLightning, Database } from 'lucide-react';

const aiServices = [
  { 
    title: 'Amazon SageMaker', 
    icon: Brain, 
    description: 'Build, train, and deploy machine learning models at scale',
    link: 'https://aws.amazon.com/sagemaker/'
  },
  { 
    title: 'Amazon Rekognition', 
    icon: Image, 
    description: 'Add image and video analysis to your applications',
    link: 'https://aws.amazon.com/rekognition/'
  },
  { 
    title: 'Amazon Lex', 
    icon: MessageSquare, 
    description: 'Build conversational interfaces using voice and text',
    link: 'https://aws.amazon.com/lex/'
  },
  {
    title: 'Amazon Polly',
    icon: Mic,
    description: 'Turn text into lifelike speech using deep learning',
    link: 'https://aws.amazon.com/polly/'
  },
  {
    title: 'Amazon Comprehend',
    icon: CloudLightning,
    description: 'Discover insights and relationships in text',
    link: 'https://aws.amazon.com/comprehend/'
  },
  {
    title: 'Amazon Forecast',
    icon: Database,
    description: 'Increase forecast accuracy using machine learning',
    link: 'https://aws.amazon.com/forecast/'
  }
];

const AIServices: React.FC = () => {
  return (
    <section id="ai-services" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">AWS AI Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <a 
              key={index} 
              href={service.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 block"
            >
              <service.icon className="w-12 h-12 text-[#ff9900] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <span className="text-[#ff9900] mt-2 inline-block hover:underline">Learn more</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIServices;