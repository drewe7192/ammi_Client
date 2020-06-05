import React, { useState, useEffect } from "react";
import { NewsPageDesktop } from "./NewsPageDesktop";
import { NewsPageMobile } from "./NewsPageMobile";

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width };
};

const NewsPage = () => {
  const { width } = useViewport();
  const breakpoint = 766;

  return width < breakpoint ? <NewsPageMobile /> : <NewsPageDesktop />;
};

export default NewsPage;
