import React from 'react';
import { Award, Brain, Briefcase } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Certified Machine Learning - Specialty',
    icon: Award,
    description: 'Validate your expertise in designing and implementing ML solutions on AWS',
    link: 'https://aws.amazon.com/certification/certified-machine-learning-specialty/'
  },
  {
    title: 'AWS Certified AI Practitioner',
    icon: Brain,
    description: 'Demonstrate foundational knowledge of AI and ML concepts on AWS',
    link: 'https://aws.amazon.com/certification/certified-ai-practitioner/?ch=sec&sec=rmg&d=1'
  },
  {
    title: 'AWS Certified Machine Learning Engineer - Associate',
    icon: Briefcase,
    description: 'Showcase your ability to design, develop, and implement ML solutions on AWS',
    link: 'https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/?ch=sec&sec=rmg&d=1'
  }
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">AWS AI Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <a 
              key={index} 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 block"
            >
              <cert.icon className="w-12 h-12 text-[#ff9900] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600 mb-4">{cert.description}</p>
              <span className="text-[#ff9900] inline-block hover:underline">Learn more</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;