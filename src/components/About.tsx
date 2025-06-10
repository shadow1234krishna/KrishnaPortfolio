import React from 'react';
import { Code, Brain, Cloud } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            About Me
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate about leveraging AI and cloud technologies to solve complex problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              I’m a Cloud Data Engineer with a strong foundation in both software engineering and data infrastructure.
               My passion lies in building reliable, scalable data systems that empower organizations to make smarter, 
               data-driven decisions. With hands-on experience in ETL pipeline development, cloud deployments,
                and DevOps automation, I specialize in delivering efficient solutions for complex data challenges.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              I’ve worked extensively with cloud platforms like AWS, databases like PostgreSQL and Snowflake, and orchestration tools like Docker and Kubernetes. My approach blends practical engineering skills with a research-driven mindset, enabling me to innovate while maintaining production-grade reliability.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">AI Application</h3>
                <p className="text-gray-600 text-sm">Machine learning & AI applications</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="text-green-600" size={24} />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">DevOps</h3>
                <p className="text-gray-600 text-sm">Cloud infrastructure & automation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="text-purple-600" size={24} />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">Development</h3>
                <p className="text-gray-600 text-sm">Database & microservices</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                            <div className="w-32 h-32 bg-gray-800 rounded-full overflow-hidden flex items-center justify-center">
  <img 
    src="assets\profile1.png" 
    alt="Profile" 
    className="w-full h-full object-cover"
  />
</div>
                <p className="text-gray-600">Cloud Data Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;