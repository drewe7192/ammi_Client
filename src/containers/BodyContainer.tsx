import React, { useState } from "react";
import { MainGridBody } from "./../views/mainGrid/MainGridContainer";

import { DashboardGridBody } from "./../views/dashboardGrid/DashBoardGridContainer";

const whichGrid = (gridType: any) => {
  if ((gridType = "mainGrid")) {
    return (
      <>
        <MainGridBody />
      </>
    );
  } else if ((gridType = "dashBoardGrid")) {
    return (
      <>
        {" "}
        <DashboardGridBody />{" "}
      </>
    );
  }
};

const BodyContainer = (gridType: any) => {
  return <>{whichGrid(gridType)}</>;
};

export default BodyContainer;
