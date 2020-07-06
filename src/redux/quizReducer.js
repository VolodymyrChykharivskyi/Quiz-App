const SET_QUIZ = "SET-QUIZ";
const SET_SCORE = "SET-SCORE";
const CLEAR_SCORE = "CLEAR-SCORE";

let initialState = {
  quizData: null,
  score: 0,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUIZ:
      return {
        ...state,
        quizData: action.quizData
      }
    case SET_SCORE:
      return {
        ...state,
        score: state.score + 1
      }
    case CLEAR_SCORE:
      return {
        ...state,
        score: 0,
      }
    default:
      return state;
  }
};

export const setQuiz = (quizData) => {
  return {
    type: SET_QUIZ,
    quizData
  }
};

export const setScore = () => {
  return {
    type: SET_SCORE
  }
}

export const clearScore = () => {
  return {
    type: CLEAR_SCORE
  }
}

export default quizReducer;
