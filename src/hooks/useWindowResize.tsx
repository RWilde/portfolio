import React from "react";
import { useEffect } from "react";

export default () => {
  const [isSmallSize, setIsSmallSize] = React.useState(window.innerWidth < 575);

  useEffect(() => {
    const handleWindowResize = () => setIsSmallSize(window.innerWidth < 575);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return [isSmallSize];
};
