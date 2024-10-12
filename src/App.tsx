import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AIServices from './components/AIServices';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AIServices />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;