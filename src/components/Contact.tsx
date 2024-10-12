import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input type="text" id="name" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input type="email" id="email" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea id="message" rows={4} className="w-full p-2 border rounded" required></textarea>
            </div>
            <button type="submit" className="w-full bg-[#ff9900] text-white py-2 px-4 rounded hover:bg-[#e68a00] transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;