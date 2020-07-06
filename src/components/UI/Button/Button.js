import React from "react";
import styles from "./Button.module.css";

const Button = ({disabled, buttonHandler, children}) => {
  return (
    <button
      disabled={disabled}
      onClick={() => buttonHandler()}
      className={styles.button}
    >
      {children}
    </button>
  );
}

export default Button;
