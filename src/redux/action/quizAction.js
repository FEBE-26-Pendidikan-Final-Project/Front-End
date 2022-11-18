import axios from "axios";

export const FETCH_START = "FETCH_START";
export const GET_QUIZ = "GET_QUIZ";
export const GET_QUIZ_BY_ID = "GET_QUIZ_BY_ID";
export const SUCCESS_GET_QUIZ = "SUCCESS_GET_QUIZ";
export const SUCCESS_GET_QUIZ_BY_ID = "SUCCESS_GET_QUIZ_BY_ID";
export const SUCCESS_GET_LITERATION = "SUCCESS_GET_LITERATION";

function fetchStart() {
  return {
    type: FETCH_START,
  };
}

function successGetQuiz(data) {
  return {
    type: SUCCESS_GET_QUIZ,
    payload: data,
  };
}
function successGetQuizByID(data) {
  return {
    type: SUCCESS_GET_QUIZ_BY_ID,
    payload: data,
  };
}

function successGetLiteration(data) {
  return {
    type: SUCCESS_GET_LITERATION,
    payload: data,
  };
}

export function getQuizById(id) {
  return async (dispatch) => {
    dispatch(fetchStart());
    const result = await axios.get(`https://634c0ee3317dc96a30906a1a.mockapi.io//literation/${id}`);
    // console.log(result);
    dispatch(successGetQuizByID(result.data));
  };
}

export function getQuiz(id) {
  return async (dispatch) => {
    dispatch(fetchStart());
    const result = await axios.get(`https://634c0ee3317dc96a30906a1a.mockapi.io//literation/${id}`);
    // console.log(result);
    dispatch(successGetQuiz(result.data));
  };
}

export function getLiteration() {
  return async (dispatch) => {
    dispatch(fetchStart());
    const result = await axios.get(`https://634c0ee3317dc96a30906a1a.mockapi.io//literation`);
    dispatch(successGetLiteration(result.data));
  };
}
