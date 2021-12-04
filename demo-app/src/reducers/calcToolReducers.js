import { combineReducers } from "redux";

import {
  ADD_ACTION, SUBTRACT_ACTION,
  MULTIPLY_ACTION, DIVIDE_ACTION,
  CLEAR_ACTION, DELETE_HISTORY_ENTRY_ACTION,
} from "../actions/calcToolActions";

const resultReducer = (/* state */ result = 0, action) => {

  switch (action.type) {
    case ADD_ACTION:
      return result + action.payload.value;
    case SUBTRACT_ACTION:
      return result - action.payload.value;
    case MULTIPLY_ACTION:
      return result * action.payload.value;
    case DIVIDE_ACTION:
      if (action.payload.value === 0) {
        return result;
      }
      return result / action.payload.value;
    case CLEAR_ACTION:
      return 0;
    default:
      return result;
  }


};

const historyReducer = (/* state */ history = [], action) => {

  if ([
    ADD_ACTION, SUBTRACT_ACTION,
    MULTIPLY_ACTION,DIVIDE_ACTION
  ].includes(action.type)) {

    if (action.type === DIVIDE_ACTION && action.payload.value === 0) {
      return history;
    }

    return [
      ...history,
      {
        id: Math.max(...history.map(entry => entry.id), 0) + 1,
        opName: action.type,
        opValue: action.payload.value,
      }
    ];
  }

  if (action.type === DELETE_HISTORY_ENTRY_ACTION) {
    return history.filter(entry => entry.id !== action.payload.entryId);
  }

  if (action.type === CLEAR_ACTION) {
    return [];
  }

  return history;


};

const errorMessageReducer = (errorMessage = "", action) => {

  if (action.type === DIVIDE_ACTION && action.payload.value === 0) {
    return "Cannot divide by zero.";
  }

  if ([
    ADD_ACTION, SUBTRACT_ACTION,
    MULTIPLY_ACTION,DIVIDE_ACTION
  ].includes(action.type)) {
    return "";
  }

  return errorMessage;

};


// export const calcToolReducer = (state = { }, action) => {

//   return {
//     ...state,
//     result: resultReducer(state.result, action),
//     history: historyReducer(state.history, action),
//   };
// };

export const calcToolReducer = combineReducers({
  result: resultReducer,
  history: historyReducer,
  errorMessage: errorMessageReducer,
});