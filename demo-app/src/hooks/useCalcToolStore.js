import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import {
  createAddAction, createSubtractAction,
  createMultiplyAction, createDivideAction,
  createClearAction, createDeleteHistoryEntryAction,
  ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION
} from '../actions/calcToolActions';

export const useCalcToolStore = () => {

  const result = useSelector(state => {

    let result = 0;

    state.history.forEach(entry => {

      switch (entry.opName) {
        case ADD_ACTION:
          result += entry.opValue;
          break;
        case SUBTRACT_ACTION:
          result -= entry.opValue;
          break;
        case MULTIPLY_ACTION:
          result *= entry.opValue;
          break;
        case DIVIDE_ACTION:
          result /= entry.opValue;
          break;
        default:
          break;
      }

    });

    return result;

  });
  const history = useSelector(state => state.history);
  const errorMessage = useSelector(state => state.errorMessage);

  const dispatch = useDispatch();

  // const add = (...values) => {
  //   const addAction = createAddAction(...values);
  //   dispatch(addAction);
  // };

  const boundActions = bindActionCreators({
    add: createAddAction,
    subtract: createSubtractAction,
    multiply: createMultiplyAction,
    divide: createDivideAction,
    clear: createClearAction,
    deleteHistoryEntry: createDeleteHistoryEntryAction,
  }, dispatch);

  return {
    result,
    history,
    errorMessage,
    ...boundActions,
  };

};