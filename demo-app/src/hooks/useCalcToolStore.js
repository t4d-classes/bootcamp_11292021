import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import {
  createAddAction, createSubtractAction,
  createMultiplyAction, createDivideAction,
  createClearAction,
} from '../actions/calcToolActions';

export const useCalcToolStore = () => {

  const result = useSelector(state => state.result);
  const history = useSelector(state => state.history);

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
  }, dispatch);

  return {
    result,
    history,
    ...boundActions,
  };

};