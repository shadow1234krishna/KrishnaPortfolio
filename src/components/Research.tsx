import React from 'react';
import { FileText, Download, Calendar } from 'lucide-react';

const Research = () => {
  const researchProjects = [
    {
      title: '360° Sports Streaming Microservices App using DevOps',
      description: 'Designed real-time distributed streaming with Docker and Kubernetes. CI/CD pipelines via Jenkins integrated with AWS. Incorporating AI-optimized service routing and benchmarks.',
      year: '2024',
      paperUrl: '#'
    }
  ];

  const researchAreas = [
    {
      title: 'Artificial Intelligence',
      description: 'Machine learning, deep learning, and AI applications in enterprise systems'
    },
    {
      title: 'Cloud Computing',
      description: 'Scalable architectures, microservices, and distributed systems'
    },
    {
      title: 'DevOps & Automation',
      description: 'CI/CD pipelines, infrastructure as code, and automated deployment'
    },
    {
      title: 'Data Engineering',
      description: 'Real-time data processing, streaming platforms, and big data analytics'
    }
  ];

  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Research & Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contributing to the advancement of AI, cloud computing, and software engineering
          </p>
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">Research Areas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="font-bold text-gray-900 mb-3">{area.title}</h4>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">Research Projects</h3>
          <div className="space-y-6">
            {researchProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h4>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <Calendar size={16} />
                      <span>{project.year}</span>
                    </div>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                  </div>
                  <div className="flex gap-3">
                   <a 
  href="assets\resume.pdf" 
  download 
  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
>
  <Download size={16} />
  <span className="text-sm">Download Resume</span>
</a>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;