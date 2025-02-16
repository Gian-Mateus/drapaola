import { motion } from "motion/react";
import { Logo } from "../assets/logo";
import { Name } from "../assets/name";

export const Brand = ({ props, variants }) => {
    return (
        <motion.div
            variants={variants}
            className="min-w-[50%] py-4 -ml-2 md:p-4 flex items-center gap-3"
            {...props}
        >
            <Logo
                width="4rem"
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