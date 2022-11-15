import { FETCH_START, SUCCESS_GET_QUIZ, SUCCESS_GET_QUIZ_BY_ID } from "../action/quizAction";

const initialState = {
  quizz: [],
  isLoading: false,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_GET_QUIZ_BY_ID:
      return {
        ...state,
        quizz: action.payload,
        isLoading: false,
      };
    case SUCCESS_GET_QUIZ:
      return {
        ...state,
        quizz: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default quizReducer;
