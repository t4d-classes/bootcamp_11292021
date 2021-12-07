import { useEffect, useMemo } from 'react';
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import {
  createAddColorAction, createDeleteColorAction, createSortColorsAction,
  refreshColors
} from "../actions/colorToolActions";

import { sortedColorsSelector } from "../selectors/colorToolSelectors";

export const useColorToolReduxStore = () => {


  const sortedColors = useSelector(sortedColorsSelector);
  const { col: sortCol, dir: sortDir } = useSelector(
    state => state.colorsSort);

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    refreshColors,
    addColor: createAddColorAction,
    deleteColor: createDeleteColorAction,
    sortColors: createSortColorsAction,
  }, dispatch), [dispatch]);

  useEffect(() => {
    actions.refreshColors();
  }, [actions]);


  return {
    sortedColors,
    sortCol,
    sortDir,
    ...actions,
  };


};