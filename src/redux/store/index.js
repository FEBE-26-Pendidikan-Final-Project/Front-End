import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import quizReducer from "../reducer/quizReducer";

const allReducer = combineReducers({
  quiz: quizReducer,
});

const store = createStore(allReducer, applyMiddleware(thunk));
export default store;
