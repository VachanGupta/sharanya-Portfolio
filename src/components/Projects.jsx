import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website built with React and Tailwind CSS to showcase my skills and projects.',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      image: 'portfolio',
      link: 'https://personal-portfolio-vachan.vercel.app/',
    },
    {
      title: 'Weather App',
      description: 'A web application that provides real-time weather information for any location using a weather API.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'API Integration'],
      image: 'weather',
      link: 'https://weather-app-vachan.vercel.app/',
    },
    {
      title: 'To Do app',
      description: 'A full-stack application for managing daily tasks with features like task creation, completion, and categorization.',
      technologies: ['React'],
      image: 'task',
      link: 'https://to-do-app-ten-sepia.vercel.app/',
    },
    {
      title: 'Xo Berry',
      description: 'Founded XoBerry; Crafted innovative berry-vanilla desserts, shakes, boba, bingsu',
      technologies: ['React', 'Tailwind CSS'],
      image: 'algorithm',
      link: 'https://xo-berry.vercel.app/',
    },
    {
      title: 'Admin Dashboard',
      description: 'Admin dashboard with charts, user table, dark mode, responsive design',
      technologies: ['React', 'Tailwind CSS', 'Recharts'],
      image: 'algorithm',
      link: 'https://admin-dashboard-vachan.vercel.app/',
    },
    {
      title: 'Youtube Clone',
      description: 'A static clone for the landing page of Youtube.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'algorithm',
      link: 'https://ytclonevachangupta.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a 
                  href={project.link} 
                  className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;