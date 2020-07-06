import React from "react";
import styles from "./ActiveQuestion.module.css";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuestion = ({question, currentQuestionNumber, setUserAnswer, userAnswer}) => {

  return (
    <div className={styles.activeQuestion}>
      <div className={styles.info}>
        <div>Запитання №{currentQuestionNumber + 1}</div>
        <div>
          {question.question}
        </div>
      </div>
      <AnswersList
        answers={question.answers}
        currentQuestionNumber={currentQuestionNumber}
        setUserAnswer={setUserAnswer}
        userAnswer={userAnswer}/>
    </div>
  );
}

export default ActiveQuestion;
