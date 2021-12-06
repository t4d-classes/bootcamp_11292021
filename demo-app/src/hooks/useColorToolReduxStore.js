import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import {
  createAddColorAction, createDeleteColorAction, createSortColorsAction
} from "../actions/colorToolActions";

import { sortedColorsSelector } from "../selectors/colorToolSelectors";

export const useColorToolReduxStore = () => {

  const sortedColors = useSelector(sortedColorsSelector);
  const { col: sortCol, dir: sortDir } = useSelector(
    state => state.colorsSort);

  const dispatch = useDispatch();

  const actions = bindActionCreators({
    addColor: createAddColorAction,
    deleteColor: createDeleteColorAction,
    sortColors: createSortColorsAction,
  }, dispatch);


  return {
    sortedColors,
    sortCol,
    sortDir,
    ...actions,
  };


};