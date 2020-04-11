import React, { useState } from "react";
import "./ModalComponent.css";

const ModalComponent = (props: any) => {
  const { buttonLabel, className, toggle, isActive } = props;

  // const [modal, setModal] = useState(false);
  // const toggle = () => setModal(!modal);

  return (
    <>
      {/* <button onClick={toggle}>Open Modal</button> */}
      {isActive ? (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Modal Header</h2>
            </div>
            <div className="modal-body">
              <span onClick={toggle} className="close">
                &times;
              </span>
              <ul>
                <h2>Login</h2>
                <h2>Settings</h2>
                <h2>About</h2>
              </ul>
            </div>
            <div className="modal-footer">
              <h3>Modal Footer</h3>
            </div>
          </div>
        </div>
      ) : null}{" "}
    </>
  );
};

export default ModalComponent;
