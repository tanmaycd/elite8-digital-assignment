import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverStart = () => setHoveredLink(true);
    const handleLinkHoverEnd = () => setHoveredLink(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Touch devices should hide custom cursor
    window.addEventListener('touchstart', () => setVisible(false));

    // Add event listeners to all links and buttons
    const links = document.querySelectorAll('a, button');
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkHoverStart);
      link.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHoverStart);
        link.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, []);

  // Hide custom cursor on mobile devices
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      setVisible(false);
      document.documentElement.style.cursor = 'auto';
    } else {
      document.documentElement.style.cursor = 'none';
    }
  }, []);

  useEffect(() => {
    // Add event listeners to all links and buttons after DOM updates
    const links = document.querySelectorAll('a, button');
    const handleLinkHoverStart = () => setHoveredLink(true);
    const handleLinkHoverEnd = () => setHoveredLink(false);
    
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkHoverStart);
      link.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHoverStart);
        link.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  });

  return (
    <div className={`${visible ? 'block' : 'hidden'} md:block pointer-events-none fixed z-[9999]`}>
      <motion.div
        className="fixed top-0 left-0 rounded-full mix-blend-difference z-50"
        style={{
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          x: position.x,
          y: position.y,
          scale: clicked ? 0.8 : hoveredLink ? 1.5 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 28, stiffness: 900 }}
      >
        <div 
          className={`
            bg-white w-5 h-5 rounded-full
            ${hoveredLink ? 'w-10 h-10' : 'w-5 h-5'}
            ${clicked ? 'opacity-70' : 'opacity-100'}
          `}
        />
      </motion.div>
    </div>
  );
};

export default Cursor;