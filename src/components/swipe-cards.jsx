import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useResizeObserver from "../hook/ResizeObserver"; // Importando hook personalizado

export default function SwipeCards() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [activeCardRef, cardSize] = useResizeObserver(); // Usando hook de resize
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const cards = [
    {
      id: 1,
      title: "Botox",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex, maiores nihil expedita magni quaerat aliquid voluptatum explicabo a consequatur repellendus praesentium laudantium nam, molestiae nesciunt cumque aperiam nemo dolorum?",
      imgPath: "...",
    },
    {
      id: 2,
      title: "Botox",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex, maiores nihil expedita magni quaerat aliquid voluptatum explicabo a consequatur repellendus praesentium laudantium nam, molestiae nesciunt cumque aperiam nemo dolorum?",
      imgPath: "...",
    },
    {
      id: 3,
      title: "Botox",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex, maiores nihil expedita magni quaerat aliquid voluptatum explicabo a consequatur repellendus praesentium laudantium nam, molestiae nesciunt cumque aperiam nemo dolorum?",
      imgPath: "...",
    },
    {
      id: 4,
      title: "Botox",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex, maiores nihil expedita magni quaerat aliquid voluptatum explicabo a consequatur repellendus praesentium laudantium nam, molestiae nesciunt cumque aperiam nemo dolorum?",
      imgPath: "...",
    },
    {
      id: 5,
      title: "Botox",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex, maiores nihil expedita magni quaerat aliquid voluptatum explicabo a consequatur repellendus praesentium laudantium nam, molestiae nesciunt cumque aperiam nemo dolorum?",
      imgPath: "...",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup do listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    const offset = info.offset.x;

    if (Math.abs(offset) > swipeThreshold) {
      if (offset < 0 && activeCardIndex < cards.length - 1) {
        setActiveCardIndex((prev) => prev + 1);
      } else if (offset > 0 && activeCardIndex > 0) {
        setActiveCardIndex((prev) => prev - 1);
      }
    }
  };

  function getCardStyle(index) {
    // Usa a largura total do viewport para calcular o offset
    const baseOffset = viewportWidth * 0.05;
    const isAfterActive = index > activeCardIndex;
    const isBeforeActive = index < activeCardIndex;
    let xOffset = 0;
    let scale = 1;

    if (isAfterActive) {
      xOffset = (index - activeCardIndex) * baseOffset;
      scale = 1 - (index - activeCardIndex) * 0.06;
    } else if (isBeforeActive) {
      xOffset = (index - activeCardIndex) * baseOffset;
      scale = 1 - (activeCardIndex - index) * 0.06;
    }

    return {
      translateX: xOffset,
      scale,
      zIndex: cards.length - Math.abs(index - activeCardIndex),
    };
  }
  return (
    <div
      style={{
        height: cardSize.height, // Usando altura dinâmica
      }}
      className="relative w-full flex justify-center items-center overflow-hidden py-12 mx-4 box-content"
    >
      {cards.map((card, index) => {
        const style = getCardStyle(index);

        return (
          <motion.div
            ref={index === activeCardIndex ? activeCardRef : null}
            key={card.id}
            drag={index === activeCardIndex ? "x" : false}
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
            className={`
              ${activeCardIndex === index ? "active-card" : ""} 
              absolute w-[60vw] sm:max-w-sm md:max-w-md 
              bg-amber-50 shadow-lg rounded-lg 
              overflow-hidden flex flex-col
            `}
          >
            <div className="w-full min-h-72 aspect-ratio-[2/3] bg-zinc-300"></div>
            <div className="border-t-2 border-t-amber-700 p-4 flex flex-col">
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p>{card.content}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
