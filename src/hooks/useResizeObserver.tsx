import React, { useState, useEffect } from "react";

const useResizeObserver = (ref: React.RefObject<HTMLDivElement>) => {
  const [dimensions, setDimensions] = useState<DOMRectReadOnly | null>(null);

  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setDimensions(entry.contentRect);
      });
    });
    resizeObserver.observe(observeTarget!);

    return () => {
      resizeObserver.unobserve(observeTarget!);
    };
  }, [ref]);

  return dimensions;
};

export default useResizeObserver;
