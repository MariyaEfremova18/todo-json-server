import React from "react";
import styles from "./ModalWindow.module.css";

const ModalWindow = ({ errorMessage, setErrorMessage }) => {
  return (
    <div
      autoFocus
      className={errorMessage ? `${styles.modalActive}` : `${styles.modal}`}
    >
      <p className={styles.message}>
        {errorMessage}
        <button
          onClick={() => {
            setErrorMessage("");
          }}
        ></button>
      </p>
    </div>
  );
};

export default ModalWindow;
