import React, { useState, useEffect } from "react";
import { SpinnerPageDesktop } from "./SpinnerPageDesktop";
import { SpinnerPageMobile } from "./SpinnerPageMobile";
import useViewport from "./../../utils/useViewPort";

const SpinnerPage = () => {
  const { width } = useViewport();
  const breakpoint = 766;

  return width < breakpoint ? <SpinnerPageMobile /> : <SpinnerPageDesktop />;
};

export default SpinnerPage;
