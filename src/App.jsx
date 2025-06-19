import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import './App.css';

function App() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      
      <motion.section 
        className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div 
          className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-56 h-56 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-lg"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute left-10 md:left-20 top-1/3 text-blue-500/30 text-xl md:text-3xl font-mono"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          &lt;div&gt;
        </motion.div>
        <motion.div 
          className="absolute right-10 md:right-20 bottom-1/3 text-purple-500/30 text-xl md:text-3xl font-mono"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          &lt;/div&gt;
        </motion.div>
        
        <div className="text-center px-4 z-10 relative">
          <motion.div 
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1"
              animate={{
                boxShadow: ['0 0 20px rgba(59, 130, 246, 0.5)', '0 0 40px rgba(139, 92, 246, 0.7)', '0 0 20px rgba(59, 130, 246, 0.5)'],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center relative overflow-hidden">
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
                
                <motion.div 
                  className="text-white text-3xl md:text-4xl font-bold z-10"
                  animate={{
                    textShadow: ['0 0 8px rgba(255,255,255,0.5)', '0 0 16px rgba(255,255,255,0.8)', '0 0 8px rgba(255,255,255,0.5)'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  SS
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="relative inline-block">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Sharanya Singhal</span>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-30 -z-10"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            First-year Engineering Student & Web Developer
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {['React', 'JavaScript', 'Tailwind CSS', 'Node.js'].map((skill, index) => (
              <motion.span 
                key={index}
                className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + (index * 0.1) }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.a 
              href="#contact" 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 relative overflow-hidden group shadow-lg shadow-blue-500/20"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Contact Me</span>
              <motion.span 
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700 to-purple-700 -z-0"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a 
              href="#projects" 
              className="px-8 py-3 bg-transparent border border-white/30 text-white rounded-md hover:bg-white/10 transition-all duration-300 backdrop-blur-sm shadow-lg shadow-purple-500/10"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
          

        </div>
      </motion.section>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideUp}
      >
        <About />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideUp}
      >
        <Education />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideUp}
      >
        <Skills />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideUp}
      >
        <Projects />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideUp}
      >
        <Contact />
      </motion.div>
      
      <Footer />
    </div>
  )
}

export default App
