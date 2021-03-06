import React, { useState } from "react";
import styles from "./../../utils/hamburger/MenuDropdownComponent.module.scss";
import { HamburgerSpring } from "react-animated-burgers";
import ModalComponent from "../modalComponent/ModalComponent";

const MenuDropdownComponent = (props) => {
  const { buttonLabel, className, menuItemsForHamburger } = props;
  const [isActive, setIsActive] = useState(false);

  const toggle = () => setIsActive(!isActive);

  return (
    <>
      <div className={styles.keyIWa}>
        <HamburgerSpring
          className={styles.gCByfN}
          isActive={isActive}
          toggleButton={toggle}
          buttonColor="  background: rgb(160, 83, 15);
          background: linear-gradient(
            0deg,
            rgba(160, 83, 15, 0.1) 100%,
            rgba(160, 83, 15, 0.1) 100%
          );
  outline: none;
  "
          barColor="white"
        />
      </div>
      <ModalComponent
        toggle={toggle}
        isActive={isActive}
        menuItemsForHamburger={menuItemsForHamburger}
      />
    </>
  );
};

export default MenuDropdownComponent;
