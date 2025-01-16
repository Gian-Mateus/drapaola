import { useEffect, useRef, useState } from "react";

const useResizeObserver = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const elementRef = useRef();

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return [elementRef, size];
};

export default useResizeObserver;
