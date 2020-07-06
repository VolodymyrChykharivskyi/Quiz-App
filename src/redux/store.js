import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import quizReducer from "./quizReducer";

const reducers = combineReducers({
  quiz: quizReducer
});

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

window.store = store;

export default store;
