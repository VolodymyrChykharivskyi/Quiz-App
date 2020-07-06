import React from "react";
import styles from "./AnswersList.module.css";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = ({answers, currentQuestionNumber, setUserAnswer, userAnswer}) => {
  return (
    <div className={styles.answerList}>
      {
        answers.map((answer, idx) => {
          return (
            <AnswerItem
              answer={answer}
              key={`${idx}${answer}${currentQuestionNumber}`}
              setUserAnswer={setUserAnswer}
              userAnswer={userAnswer}
            />
          );
        })
      }
    </div>
  );
}

export default AnswersList;
