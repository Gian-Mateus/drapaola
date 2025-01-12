import { motion } from "framer-motion";
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

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50; // quantidade mínima de movimento para trocar card
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    // Determina a direção do swipe baseado na velocidade e offset
    if (Math.abs(offset) > swipeThreshold) {
      if (offset < 0 && activeCardIndex < cards.length - 1) {
        // Swipe para esquerda
        setActiveCardIndex(prev => prev + 1);
      } else if (offset > 0 && activeCardIndex > 0) {
        // Swipe para direita
        setActiveCardIndex(prev => prev - 1);
      }
    }
  };

  const getCardStyle = (index) => {
    const isAfterActive = index > activeCardIndex;
    const isBeforeActive = index < activeCardIndex;
    const baseOffset = 16; // espaçamento base entre cards
    
    let xOffset = 0;
    let scale = 1;
    
    if (isAfterActive) {
      // Cards após o ativo
      xOffset = (index - activeCardIndex) * baseOffset;
      scale = 1 - (index - activeCardIndex) * 0.1;
    } else if (isBeforeActive) {
      // Cards antes do ativo
      xOffset = (index - activeCardIndex) * baseOffset;
      scale = 1 - (activeCardIndex - index) * 0.1;
    }

    return {
      translateX: xOffset,
      scale,
      zIndex: cards.length - Math.abs(index - activeCardIndex),
    };
  };

  return (
    <div className="relative w-full h-[500px] flex justify-center items-center">
      {cards.map((card, index) => {
        const style = getCardStyle(index);

        return (
          <motion.div
            key={card.id}
            drag={index === activeCardIndex ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            initial={false}
            animate={{
              x: style.translateX,
              scale: style.scale,
              zIndex: style.zIndex,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="absolute w-[200px] h-[300px] bg-white shadow-lg p-4 rounded-lg cursor-grab active:cursor-grabbing"
          >
            <h3 className="text-xl font-bold">{card.title}</h3>
            <p>{card.content}</p>
          </motion.div>
        );
      })}
    </div>
  );
}