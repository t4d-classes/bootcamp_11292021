import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import {
  createAddAction, createSubtractAction
} from '../actions/calcToolActions';

export const useCalcToolStore = () => {

  const result = useSelector(state => state.result);

  const dispatch = useDispatch();

  // const add = (...values) => {
  //   const addAction = createAddAction(...values);
  //   dispatch(addAction);
  // };

  const boundActions = bindActionCreators({
    add: createAddAction,
    subtract: createSubtractAction,
  }, dispatch);

  return {
    result,
    ...boundActions,
  };

};