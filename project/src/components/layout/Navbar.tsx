import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navbarClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm py-4 shadow-md' : 'py-6'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container-custom flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold relative z-50 group"
        >
          <span className="text-primary">XYZ</span>
          <span className="text-neutral-800 dark:text-white"></span>
          <span className="relative ml-1 inline-block">
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out-expo"></span>
            Digital
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`text-lg link-underline ${
                    location.pathname === item.path
                      ? 'text-primary after:w-full'
                      : 'text-neutral-600 dark:text-neutral-300'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-300"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-white" />
            ) : (
              <Moon className="w-5 h-5 text-neutral-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-300"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-white" />
            ) : (
              <Moon className="w-5 h-5 text-neutral-800" />
            )}
          </button>
          
          <button
            onClick={toggleMenu}
            className="p-2 z-50 relative"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-800 dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ 
            x: isOpen ? 0 : '100%',
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 bg-primary z-40 flex flex-col justify-center p-8"
        >
          <ul className="flex flex-col space-y-8 items-center">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: isOpen ? 0 : 20, 
                  opacity: isOpen ? 1 : 0 
                }}
                transition={{ 
                  delay: isOpen ? index * 0.1 : 0,
                  duration: 0.4
                }}
              >
                <Link
                  to={item.path}
                  className={`text-3xl font-medium ${
                    location.pathname === item.path
                      ? 'text-white'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;