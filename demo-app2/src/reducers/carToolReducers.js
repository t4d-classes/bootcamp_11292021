import { combineReducers } from "redux";

import {
  REFRESH_CARS_DONE_ACTION, EDIT_CAR_ACTION, CANCEL_CAR_ACTION, SORT_CARS_ACTION,
} from "../actions/carToolActions";

const carList = [
  { id: 1, make: 'Ford', model: 'Fusion', year: 2018, color: 'blue', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 120000 },
];

export const carsReducer = (cars = carList, action) => {

  if (action.type === REFRESH_CARS_DONE_ACTION) {
    return action.payload.cars;
  }

  return cars;
};

export const editCarIdReducer = (editCarId = -1, action) => {

  if (action.type === EDIT_CAR_ACTION) {
    return action.payload.carId;
  }

  if ([
    REFRESH_CARS_DONE_ACTION, CANCEL_CAR_ACTION, SORT_CARS_ACTION
  ].includes(action.type)) {
    return -1;
  }
  
  return editCarId;
};

export const carsSortReducer = (
  carsSort = { col: 'id', dir: 'asc' }, action) => {

  if (action.type === SORT_CARS_ACTION) {

    if (carsSort.col === action.payload.col) {
      if (carsSort.dir === 'asc') {
        return { ...carsSort, dir: 'desc'};
      } else {
        return { ...carsSort, dir: 'asc'};
      }      
    } else {
      return { ...carsSort, col: action.payload.col, dir: 'asc'};
    }

  }

  return carsSort;
}

const isLoadingReducer = (isLoading = false, action) => {

  if (action.type.includes("REQUEST")) {
    return true;
  }

  if (action.type.includes("DONE")) {
    return false;
  }

  return isLoading;
};

export const carToolReducer = combineReducers({
  cars: carsReducer,
  editCarId: editCarIdReducer,
  carsSort: carsSortReducer,
  isLoading: isLoadingReducer,
})
