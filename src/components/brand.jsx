import { motion } from "motion/react";
import { Logo } from "../assets/logo";
import { Name } from "../assets/name";

export const Brand = ({ props, animations, isMobile }) => {
    return (
        <motion.div
            variants={animations.logo}
            className="min-w-[50%] py-4 -ml-2 md:p-4 flex items-center gap-3"
            {...props}
        >
            <Logo
                width={isMobile ? "4rem" : "8rem"}
                height="auto"
                className="fill-yellow-50"
            />
            <Name
                width="12rem"
                height="auto"
                className="fill-yellow-50"
            />
        </motion.div>
    )
}