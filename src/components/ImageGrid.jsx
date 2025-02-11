import { motion } from "motion/react";

export default function ImageGrid({ images }) {
  return (
    <motion.div className="mb-6 grid grid-cols-2 gap-2 max-w-md">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index}`}
          className={`${
            index === 0
              ? "rounded-t-full rounded-bl-full"
              : index === 1
              ? "rounded-t-full rounded-br-full"
              : index === 2
              ? "rounded-b-full rounded-tl-full"
              : "rounded-b-full rounded-tr-full"
          } object-cover ${
            index < 2 ? "self-end" : "self-start"
          }`}
        />
      ))}
    </motion.div>
  );
}
