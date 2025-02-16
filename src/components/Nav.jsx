import React from "react";
import { motion } from "motion/react";

export const Nav = ({ props, variants, children }) => {
    return (
        <motion.nav
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed right-0 top-0 bg-amber-900 pt-24 z-20 overflow-hidden"
            {...props}
        >
            {children}
        </motion.nav>
    )
}