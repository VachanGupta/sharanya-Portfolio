import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', level: 85, color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', level: 80, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', level: 75, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Tailwind CSS', level: 85, color: 'from-teal-400 to-teal-600' },
    { name: 'C++', level: 70, color: 'from-purple-400 to-purple-600' },
    { name: 'Python', level: 75, color: 'from-green-400 to-green-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Skills</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                <span className="text-gray-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div 
                  className={`h-4 rounded-full bg-gradient-to-r ${skill.color}`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Other Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Git', 'GitHub', 'VS Code', 'npm', 'Figma', 'Responsive Design', 'RESTful APIs'].map((tech, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;