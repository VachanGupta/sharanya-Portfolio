import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Education</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-lg p-6 mb-8 border-l-4 border-blue-500 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-blue-400">Bachelor of Technology</h3>
            <p className="text-xl text-gray-300 mt-2">Computer Science & Engineering</p>
            <p className="text-lg text-gray-400 mt-1">2024 - Present</p>
            <p className="text-gray-300 mt-4">
              Currently pursuing my degree with a focus on software development, algorithms, and data structures.
              Actively participating in coding competitions and hackathons to apply classroom knowledge to real-world problems.
            </p>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-6 mb-8 border-l-4 border-purple-500 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-purple-400">High School Diploma</h3>
            <p className="text-xl text-gray-300 mt-2">Science & Mathematics</p>
            <p className="text-lg text-gray-400 mt-1">2021 - 2023</p>
            <p className="text-gray-300 mt-4">
              Completed with distinction, focusing on Physics, Chemistry, and Mathematics.
              Developed a strong foundation in analytical thinking and problem-solving skills.
            </p>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-green-500 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-green-400">Online Courses & Certifications</h3>
            <p className="text-xl text-gray-300 mt-2">Web Development & Programming</p>
            <p className="text-lg text-gray-400 mt-1">2024 - Present</p>
            <p className="text-gray-300 mt-4">
              Continuously expanding my knowledge through online platforms like Coursera, Udemy, and freeCodeCamp.
              Completed courses in React, JavaScript, Python, and more to supplement my formal education.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;