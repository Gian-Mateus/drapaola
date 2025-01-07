import { motion } from "motion/react";
// eslint-disable-next-line react/prop-types
export const MenuButtonSVG = ({ isOpen }) => {
  return (
    <motion.svg
      viewBox="0 0 32 32"
      className="h-12"
      animate={{ rotate: isOpen ? -45 : 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.path
        className="stroke-yellow-50 stroke-[3] fill-none"
        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
        initial={{ strokeDasharray: "12 63", strokeDashoffset: 0 }}
        animate={{
          strokeDasharray: isOpen ? "20 300" : "12 63",
          strokeDashoffset: isOpen ? -32.42 : 0,
        }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      />
      <motion.path
        className="stroke-yellow-50 stroke-[3] fill-none"
        d="M7 16 27 16"
      />
    </motion.svg>
  );
};
