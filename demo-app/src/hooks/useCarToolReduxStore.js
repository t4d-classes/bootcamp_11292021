import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import {
  createAddCarAction, createSaveCarAction, createDeleteCarAction,
  createEditCarAction, createCancelCarAction, createSortCarsAction,
} from "../actions/carToolActions";

import { sortedCarsSelector } from "../selectors/carToolSelectors";

export const useCarToolReduxStore = () => {

  const cars = useSelector(sortedCarsSelector);
  const editCarId = useSelector(state => state.editCarId);
  const { col: sortCol, dir: sortDir } = useSelector(
    state => state.carsSort);

  const dispatch = useDispatch();

  const actions = bindActionCreators({
    addCar: createAddCarAction,
    saveCar: createSaveCarAction,
    deleteCar: createDeleteCarAction,
    editCar: createEditCarAction,
    cancelCar: createCancelCarAction,
    sortCars: createSortCarsAction,
  }, dispatch);


  return {
    cars,
    editCarId,
    sortCol,
    sortDir,
    ...actions,
  };


};