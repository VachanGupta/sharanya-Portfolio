import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const controls = useAnimation();
  
  // Trigger animations when in view
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-lg"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 relative inline-block"
          variants={titleVariants}
          initial="hidden"
          animate={controls}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 pb-2">About Me</span>
          <motion.span 
            className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.h2>
        
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div 
            className="w-full md:w-1/3 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative w-72 h-72">
              {/* Animated avatar with glowing effects */}
              <motion.div 
                className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1"
                animate={{
                  boxShadow: ['0 0 20px rgba(59, 130, 246, 0.5)', '0 0 40px rgba(139, 92, 246, 0.7)', '0 0 20px rgba(59, 130, 246, 0.5)'],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center relative overflow-hidden">
                  {/* Animated background for the avatar */}
                  <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: 'radial-gradient(circle, rgba(139,92,246,0.8) 0%, rgba(30,27,75,0.2) 100%)'
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Orbiting particles */}
                  {[...Array(3)].map((_, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-4 h-4 rounded-full bg-blue-400"
                      style={{ filter: 'blur(2px)' }}
                      animate={{
                        x: [0, Math.cos(index * Math.PI/1.5) * 80, 0],
                        y: [0, Math.sin(index * Math.PI/1.5) * 80, 0],
                        opacity: [0.6, 1, 0.6],
                        scale: [1, 1.5, 1]
                      }}
                      transition={{ 
                        duration: 5 + index * 2, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    />
                  ))}
                  
                  {/* Initials */}
                  <motion.div 
                    className="text-white text-6xl font-bold z-10"
                    animate={{
                      textShadow: ['0 0 8px rgba(255,255,255,0.5)', '0 0 16px rgba(255,255,255,0.8)', '0 0 8px rgba(255,255,255,0.5)'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    SS
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Decorative rings */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-2 border-purple-500/30"
                animate={{
                  rotate: 360,
                  boxShadow: ['0 0 15px rgba(139, 92, 246, 0.3)', '0 0 30px rgba(139, 92, 246, 0.6)', '0 0 15px rgba(139, 92, 246, 0.3)'],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-blue-500/20"
                animate={{
                  rotate: -360,
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
          
          <div className="w-full md:w-2/3">
            <motion.div 
              className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 shadow-xl"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)' }}
            >
              <motion.p 
                className="text-xl text-gray-200 mb-6 leading-relaxed"
                variants={itemVariants}
              >
                <span className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 inline-block mb-2">Hello!</span> I'm Sharanya Singhal, a first-year engineering student with a passion for coding and web development. 
                I love building beautiful, functional websites and applications that solve real-world problems.
              </motion.p>
              
              <motion.p 
                className="text-xl text-gray-200 mb-6 leading-relaxed"
                variants={itemVariants}
              >
                When I'm not coding, you can find me reading books on technology, science fiction, or personal development. 
                I believe in continuous learning and pushing my boundaries to grow both personally and professionally.
              </motion.p>
              
              <motion.p 
                className="text-xl text-gray-200 leading-relaxed"
                variants={itemVariants}
              >
                I'm excited about the possibilities that technology brings and am constantly exploring new frameworks, 
                languages, and tools to expand my skill set and create better digital experiences.
              </motion.p>
              
              <motion.div 
                className="mt-8 flex flex-wrap gap-3"
                variants={itemVariants}
              >
                {['Creative', 'Problem Solver', 'Tech Enthusiast', 'Continuous Learner'].map((tag, index) => (
                  <motion.span 
                    key={index}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;