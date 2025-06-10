import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'ETL Data Migration and Optimization',
      description: 'Migrated data to Snowflake and PostgreSQL using custom ETL flows. Enhanced performance with optimized queries and indexing.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Snowflake', 'PostgreSQL', 'ETL', 'SQL']
    },
    {
      title: 'AI-Powered LLM Dashboard for Business Insights',
      description: 'Built full pipelines using Python, MongoDB, and React.js. Used LLMs to auto-generate dashboards, summaries, and insights. Applied ML models for anomaly detection and trend analysis.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'MongoDB', 'React.js', 'LLM', 'ML']
    },
    {
      title: 'Ubuntu Server Setup for AI/ML and SaaS Deployments',
      description: 'Configured Dockerized AI microservices on Ubuntu with Kubernetes. Integrated GitHub Actions/Jenkins with AWS infrastructure. Monitored with Grafana + Prometheus + LLM-based alerts. Deployed SaaS (Nextcloud) and PostgreSQL replication server.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Ubuntu', 'Docker', 'Kubernetes', 'AWS', 'Grafana', 'Prometheus']
    },
    {
      title: 'ASP.NET Core Banking Microservices Deployment',
      description: 'Delivered ASP.NET microservices for core banking clients. Integrated with SQL Server, RabbitMQ, and Docker Swarm. Automated builds and deployments using Jenkins pipelines.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['ASP.NET Core', 'SQL Server', 'RabbitMQ', 'Docker Swarm', 'Jenkins']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work in AI, DevOps, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;