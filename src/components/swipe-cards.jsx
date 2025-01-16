import { motion } from "motion/react";
import { useEffect, useState } from "react";
import useResizeObserver from "../hook/ResizeObserver";

export default function SwipeCards() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [activeCardRef, cardSize] = useResizeObserver();
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const cards = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    title: "Botox",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex, maiores nihil expedita magni quaerat aliquid voluptatum explicabo a consequatur repellendus praesentium laudantium nam, molestiae nesciunt cumque aperiam nemo dolorum?",
    imgPath: "...",
  }));

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    const offset = info.offset.x;

    if (Math.abs(offset) > swipeThreshold) {
      setActiveCardIndex((prev) => Math.min(Math.max(prev + (offset < 0 ? 1 : -1), 0), cards.length - 1));
    }
  };

  const getCardStyle = (index) => {
    const baseOffset = viewportWidth * 0.05;
    const xOffset = (index - activeCardIndex) * baseOffset;
    const scale = 1 - Math.abs(index - activeCardIndex) * 0.06;

    return {
      translateX: xOffset,
      scale,
      zIndex: cards.length - Math.abs(index - activeCardIndex),
    };
  };

  return (
    <div
      style={{ height: cardSize.height }}
      className="relative w-screen flex justify-center items-center overflow-hidden py-12 mx-4 box-content"
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
              absolute w-[75vw] sm:max-w-sm md:max-w-md 
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
