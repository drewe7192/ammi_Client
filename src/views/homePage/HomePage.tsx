import React, { useState, useEffect } from "react";
import { HomePageDesktop } from "./HomePageDesktop";
import { HomePageMobile } from "./HomePageMobile";
import useViewport from "./../../utils/useViewPort";

const HomePage = () => {
  const { width } = useViewport();
  const breakpoint = 766;

  return width < breakpoint ? <HomePageMobile /> : <HomePageDesktop />;
};

export default HomePage;
