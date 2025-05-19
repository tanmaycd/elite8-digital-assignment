import { motion } from 'framer-motion';

const Loader = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.5,
        when: "afterChildren"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-neutral-900 z-[100]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex flex-col items-center">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-neutral-800 dark:text-white"
          variants={textVariants}
        >
          <span className="text-primary">Elite</span>
          <span>8</span>
          <span>Digital</span>
        </motion.h1>
        
        <div className="w-48 h-[2px] bg-neutral-200 dark:bg-neutral-700 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full w-full bg-primary origin-left"
            variants={lineVariants}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;