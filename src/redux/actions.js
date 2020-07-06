import {setQuiz} from "./quizReducer";

export function fetchQuiz() {
  return async dispatch => {
    try {
      const data = await fetch("./data.json").then(response => response.json());
      const quiz = [];

      for (let dataKey in data) {
        quiz.push(data[dataKey]);
      }

      dispatch(setQuiz(quiz));
    } catch (e) {
      console.log(e)
    }

  }
}
