import React from "react";
import {clearScore} from "../../redux/quizReducer";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import style from "./Result.module.css";
import Button from "../UI/Button/Button";

const Result = ({clearScore, score, quizData}) => {

  const history = useHistory();

  const tryAgainButtonHandler = () => {
    clearScore();
    history.push("/")
  }

  const checkResultHandller = () => {
    return quizData ? (score * 100) / quizData.length : 0;
  }

  return (
    <div className={style.result}>
      <div className={style.info}>
        <h3>{`Ваш результат ${checkResultHandller()}%`}</h3>
        <Button buttonHandler={tryAgainButtonHandler}>Спробувати знову</Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    score: state.quiz.score,
    quizData: state.quiz.quizData
  }
}

export default connect(mapStateToProps, {clearScore})(Result);
