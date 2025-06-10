import React from 'react';
import { Download, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 bg-gray-800 rounded-full overflow-hidden flex items-center justify-center">
  <img 
    src="assets\krishna-profile.png" 
    alt="Profile" 
    className="w-full h-full object-cover"
  />
</div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Krishna Kumar Sah
          </h1>
          
          <h2 className="text-xl sm:text-2xl text-blue-600 font-medium">
           CLOUD DATA ENGINEER
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Research-oriented engineer with expertise in building microservices-based systems,
            real-time streaming platforms, and AI-driven applications using DevOps and cloud
            practices.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>Krishna1234shah@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+977 9862180592</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center gap-2">
              <Github size={16} />
              <Linkedin size={16} />
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
           <a
  href="assets\resume1.pdf"
  download
  className="inline-flex items-center gap-2 px-8 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors duration-300"
>
  <Download size={20} />
  Download Resume
</a>
            <button 
              onClick={scrollToContact}
              className="px-8 py-3 border border-gray-800 text-gray-800 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;