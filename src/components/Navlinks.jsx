import { motion } from "motion/react"

const links = [
  { name: "Home", href: "#home", key: 1 },
  { name: "Sobre", href: "#sobre", key: 2 },
  { name: "Contato", href: "#contato", key: 3 }
]

export const Navlinks = ({ props, variants }) => {
  return (
    <motion.ul
      className="mx-auto px-4 text-center font-title sm:flex sm:gap-12"
      {...props}
    >
      {links.map((e) => (
        <motion.li
          key={e.key}
          variants={variants?.navItem}
          className="relative mb-6 sm:mb-0"
        >
          <motion.a
            href={`#${e.href.toLowerCase()}`}
            className="relative text-2xl sm:text-lg"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            {e.name}
            <motion.div
              className="absolute -bottom-0.5 left-1/2 h-1 rounded-full bg-yellow-50"
              style={{
                transform: "translateX(-50%)",
                width: "0%"
              }}
              variants={{
                rest: { width: "0%" },
                hover: { width: "100%" }
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut"
              }}
            />
          </motion.a>
        </motion.li>
      ))}
    </motion.ul>
  )
}