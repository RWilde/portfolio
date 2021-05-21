import { useRef, useState, useEffect, RefObject } from "react";

export default (ref: any) => {
  const [isVisible, setVisible] = useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setVisible(entry.isIntersecting)
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return [isVisible];
};
