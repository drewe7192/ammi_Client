import React from "react"
import styles from "./ModalComponent.module.scss"

const ModalComponent = (props: any) => {
  const {
    // buttonLabel,
    // className,
    toggle,
    isActive,
    menuItemsForHamburger,
  } = props;

  return (
    <>
      {isActive ? (
        <div id="myModal" className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>Modal Header</h2>
            </div>
            <div className={styles.modalBody}>
              <span onClick={toggle} className={styles.close}>
                &times;
              </span>
              <ul>
                {menuItemsForHamburger.map((i: any) => {
                  return <h2>{i}</h2>;
                })}
              </ul>
            </div>
            <div className={styles.modalFooter}>
              <h3>Modal Footer</h3>
            </div>
          </div>
        </div>
      ) : null}{" "}
    </>
  );
};

export default ModalComponent;
