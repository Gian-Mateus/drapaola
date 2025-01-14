import { useEffect, useRef, useState } from "react";

const useResizeObserver = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const elementRef = useRef();

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return [elementRef, size];
};

export default useResizeObserver;
