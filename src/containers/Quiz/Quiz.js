import React, {useEffect, useState} from "react";
import style from "./Quiz.module.css";
import ActiveQuestion from "../../components/ActiveQuestion/ActiveQuestion";
import {connect} from "react-redux";
import {fetchQuiz} from "../../redux/actions";
import {setScore} from "../../redux/quizReducer";
import Loader from "../../components/UI/Loader/Loader";
import {useHistory} from "react-router-dom";
import Button from "../../components/UI/Button/Button";

const Quiz = ({fetchQuiz, quizData, setScore}) => {
  useEffect(() => {
    fetchQuiz();
  }, []);

  const [isFinish, setIsFinish] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);

  let history = useHistory();

  const checkAnswerHandler = () => {
    if (quizData[currentQuestionNumber]['correct_answers'].join() === userAnswer) {
      setScore();
    }
  }

  const nextButtonHandler = () => {
    checkAnswerHandler();
    setUserAnswer(null);
    setCurrentQuestionNumber(currentQuestionNumber + 1);
  }

  const finishButtonHandler = () => {
    checkAnswerHandler();
    setIsFinish(true);
  }

  if (isFinish) {
    history.push("/result");
  }

  return (
    <div className={style.quiz}>
      <h1>Наскільки ти кіберспортивний експерт</h1>
      {
        quizData ?
          <>
            <div className={style.counter}>
              {`${currentQuestionNumber + 1} / ${quizData.length}`}
            </div>
            <ActiveQuestion
              question={quizData[currentQuestionNumber]}
              currentQuestionNumber={currentQuestionNumber}
              setUserAnswer={setUserAnswer}
              userAnswer={userAnswer}
            />
            {
              currentQuestionNumber < quizData.length - 1
                ? <Button
                  buttonHandler={nextButtonHandler}
                  disabled={!userAnswer}
                >
                  Продовжити
                </Button>
                : <Button
                  buttonHandler={finishButtonHandler}
                  disabled={!userAnswer}
                >
                  Завершити
                </Button>
            }
          </>
          : <Loader/>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    quizData: state.quiz.quizData,
    score: state.quiz.score,
  }
}

export default connect(mapStateToProps, {fetchQuiz, setScore})(Quiz);
