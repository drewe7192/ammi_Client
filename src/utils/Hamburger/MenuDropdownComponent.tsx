import React, { useState } from "react";
import ModalComponent from './../modalComponent/ModalComponent'

// import styles from './MenuDropdownComponent.module.scss'
import './MenuDropdownComponent.module.scss'

// for some reason it was complaining about this one saying that it needs to be declared after ...
const Burger = require("react-animated-burgers")


interface IMenuDropdownComponent 
{
  buttonLabel?: string
  className?: string
  menuItemsForHamburger: Array<any>
}
const MenuDropdownComponent = (props: IMenuDropdownComponent) => {
  const { 
    // buttonLabel, className, 
    menuItemsForHamburger } = props;
  const [isActive, setIsActive] = useState(false);

  const toggle = () => setIsActive(!isActive);

  return (
    <>
      <div className={'keyIWa'}>
        <Burger.HamburgerSpring
          className={'gCByfN'}
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