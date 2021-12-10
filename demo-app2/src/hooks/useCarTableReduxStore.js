import { useEffect, useMemo } from 'react';
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import {
  saveCar, deleteCar, refreshCars,
  createEditCarAction, createCancelCarAction, createSortCarsAction,
} from "../actions/carToolActions";

import { sortedCarsSelector } from "../selectors/carToolSelectors";

export const useCarTableReduxStore = () => {

  const cars = useSelector(sortedCarsSelector);
  const editCarId = useSelector(state => state.editCarId);
  const { col: sortCol, dir: sortDir } = useSelector(
    state => state.carsSort);

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    refreshCars,
    saveCar,
    deleteCar,
    editCar: createEditCarAction,
    cancelCar: createCancelCarAction,
    sortCars: createSortCarsAction,
  }, dispatch), [dispatch]);

  useEffect(() => {
    actions.refreshCars();
  }, [actions]);  

  return {
    cars,
    editCarId,
    sortCol,
    sortDir,
    ...actions,
  };


};