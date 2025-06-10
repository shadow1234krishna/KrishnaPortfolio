import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Premium® Technologies',
      location: 'Kathmandu, Nepal',
      period: '2024 – Present',
      description: 'Building scalable AI workflows and deploying cloud-native applications for financial systems.',
      achievements: [
        'Designed scalable AI workflows using Python, SQL, and cloud platforms',
        'Achieved 30% increase in query performance via optimized database solutions',
        'Developed CI/CD pipelines for ML model integration and deployment',
        'Managed large datasets using MongoDB and Snowflake',
        'Set up Ubuntu servers with Docker/Kubernetes to host AI microservices',
        'Automated deployments using Ansible, Jenkins, and AWS',
        'Deployed a core banking project with ASP.NET Core microservices for client delivery'
      ]
    },
    {
      title: 'Data Engineer',
      company: 'Pioneer Associate Nepal',
      location: 'Lalitpur, Nepal',
      period: '2023 – 2024',
      description: 'Focused on data integration, pipeline development, and supporting AI-driven business intelligence.',
      achievements: [
        'Built ETL pipelines for large-scale data migration and integration',
        'Conducted QA for AI-driven system data integrity',
        'Optimized databases using advanced SQL techniques',
        'Supported business intelligence through ML model implementation'
      ]
    },
    {
      title: 'Junior Cloud Engineer',
      company: 'Aegis Software Pvt. Ltd.',
      location: 'Kathmandu, Nepal',
      period: '2022 – 2023',
      description: 'Maintained cloud infrastructure and supported deployment of AI and microservice applications.',
      achievements: [
        'Managed AWS infrastructure for software and AI projects',
        'Automated DevOps workflows using Jenkins, Docker, and Kubernetes',
        'Maintained AI-driven applications in Python and Java',
        'Deployed microservices using NGINX reverse proxy and Docker containers'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Professional Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My journey in building cloud-native data systems and deploying scalable solutions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 mb-4">
                    <span className="font-medium text-blue-600">{exp.company}</span>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{exp.description}</p>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-gray-700 flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
