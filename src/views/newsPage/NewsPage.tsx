import React, { useState, useEffect } from "react";
import { NewsPageDesktop } from "./NewsPageDesktop";
import { NewsPageMobile } from "./NewsPageMobile";
import useViewport from "./../../utils/useViewPort";

const NewsPage = () => {
  const { width } = useViewport();
  const breakpoint = 766;

  return width < breakpoint ? <NewsPageMobile /> : <NewsPageDesktop />;
};

export default NewsPage;
