

import { ADD_ACTION, SUBTRACT_ACTION } from "../actions/calcToolActions";


export const calcToolReducer = (state = { result: 0 }, action) => {

  switch (action.type) {
    case ADD_ACTION:
      return {
        ...state,
        result: state.result + action.payload.value,
      };
    case SUBTRACT_ACTION:
      return {
        ...state,
        result: state.result - action.payload.value,
      };
    default:
      return state;
  }

};