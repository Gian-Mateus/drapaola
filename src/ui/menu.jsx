
import { motion } from 'motion/react';

export const Menu = ({ isOpen, ...props }) => {
  return (
    <button 
      className="relative w-10 h-8 bg-transparent cursor-pointer block"
      {...props}
    >
      <motion.span
        className="block absolute h-1 w-full bg-black rounded-lg left-0"
        style={{ originX: 0 }}
        animate={{
          top: isOpen ? "0px" : "0px",
          left: isOpen ? "5px" : "0px",
          rotate: isOpen ? 45 : 0
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      />
      
      <motion.span
        className="block absolute h-1 w-full bg-black rounded-lg left-0 top-1/2"
        style={{ originX: 0 }}
        animate={{
          width: isOpen ? "0%" : "100%",
          opacity: isOpen ? 0 : 1,
          translateY: "-50%"
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      />
      
      <motion.span
        className="block absolute h-1 w-full bg-black rounded-lg left-0"
        style={{ originX: 0 }}
        animate={{
          top: isOpen ? "28px" : "100%",
          left: isOpen ? "5px" : "0px",
          rotate: isOpen ? -45 : 0,
          translateY: isOpen ? 0 : "-100%"
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      />
    </button>
  );
};
