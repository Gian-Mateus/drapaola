import { motion } from "motion/react";
import { useState } from "react";

export default function SwipeCards() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const cards = [
    {
      id: 1,
      title: "Card 1",
      content: "Lorem ipsum dolor sit amet...",
    },
    {
      id: 2,
      title: "Card 2",
      content: "Consectetur adipiscing elit...",
    },
    {
      id: 3,
      title: "Card 3",
      content: "Consectetur adipiscing elit...",
    },
    {
      id: 4,
      title: "Card 4",
      content: "Consectetur adipiscing elit...",
    },
    {
      id: 5,
      title: "Card 5",
      content: "Consectetur adipiscing elit...",
    },
  ];

  return (
    <div className="relative w-full h-[500px] flex justify-center items-center">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              
            }}
            initial={{
              translateX: index === 0 ? 0 : -index * 100,
              scale: activeCardIndex ? 1 : 0.8,
              zIndex: index === 0 ? 10 : 1,
            }}
            animate={{
              x: 0,
              scale: 1,
              zIndex: index === activeCardIndex ? 10 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="absolute w-[300px] bg-white shadow-lg p-4 rounded-lg"
          >
            <h1>{index == 0 ? 0 : index * 100}</h1>
            <h3 className="text-xl font-bold">{card.title}</h3>
            <p>{card.content}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
