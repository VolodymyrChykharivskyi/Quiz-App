import React from "react";
import styles from "./AnswerItem.module.css";

const AnswerItem = ({answer: description, setUserAnswer, userAnswer}) => {
  const cls = [styles.answerItem];

  if (userAnswer === description) {
    cls.push(styles["active"]);
  }

  return (
    <label htmlFor={description}>
      <div className={cls.join(" ")}>
        <input
          type="radio"
          id={description}
          name={1}
          onClick={() => setUserAnswer(description)}
        />
        {description}
      </div>
    </label>
  );
}

export default AnswerItem;
