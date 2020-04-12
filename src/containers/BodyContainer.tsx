import React, { useState } from "react";
import { MainGridBody } from "./../views/mainGrid/MainGridContainer";
import MenuDropdownComponent from "./../utils/modalComponent/ModalComponent";
import styles from "./.module.scss";

const whichGrid = (gridType: any) => {
  if ((gridType = "mainGrid")) {
    return (
      <>
        <MainGridBody />
      </>
    );
  }
};

const BodyContainer = (gridType: any) => {
  return <>{whichGrid(gridType)}</>;
};

export default BodyContainer;
