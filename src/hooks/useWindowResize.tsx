import React from "react";
import { useEffect } from "react";

export default () => {
  const [isSmallSize, setIsSmallSize] = React.useState(window.innerWidth < 800);

  useEffect(() => {
    const handleWindowResize = () => setIsSmallSize(window.innerWidth < 800);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return [isSmallSize];
};
