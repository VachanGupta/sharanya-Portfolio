import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    let animationFrameId;
    
    const mouseMove = (e) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });
      });
    };

    window.addEventListener('mousemove', mouseMove);

    // Add event listeners for cursor variants
    const handleLinkHover = () => setCursorVariant('link');
    const handleLinkLeave = () => setCursorVariant('default');

    // Apply to all links and buttons
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  // Cursor variants
  const variants = {
    default: {
      transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(100, 108, 255, 0.3)',
      mixBlendMode: 'difference'
    },
    link: {
      transform: `translate(${mousePosition.x - 24}px, ${mousePosition.y - 24}px)`,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(100, 108, 255, 0.6)',
      mixBlendMode: 'difference'
    }
  };

  // Hide default cursor with CSS
  useEffect(() => {
    document.body.style.cursor = 'none';
    
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 rounded-full pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: 'tween',
        duration: 0.1,
        ease: 'linear'
      }}
    />
  );
};

export default CustomCursor;