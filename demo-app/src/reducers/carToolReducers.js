import { combineReducers } from "redux";

import {
  ADD_CAR_ACTION, SAVE_CAR_ACTION, DELETE_CAR_ACTION, EDIT_CAR_ACTION, CANCEL_CAR_ACTION, SORT_CARS_ACTION
} from "../actions/carToolActions";

const carList = [
  { id: 1, make: 'Ford', model: 'Fusion', year: 2018, color: 'blue', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 120000 },
];

export const carsReducer = (cars = carList, action) => {

  if (action.type === ADD_CAR_ACTION) {
    return [
      ...cars,
      {
        ...action.payload.car,
        id: Math.max(...cars.map(c => c.id), 0) + 1,
      },
    ];
  }

  if (action.type === SAVE_CAR_ACTION) {
    const carIndex = cars.findIndex(c => c.id === action.payload.car.id);
    const newCars = [...cars];
    newCars[carIndex] = action.payload.car;
    return newCars;
  }

  if (action.type === DELETE_CAR_ACTION) {
    return cars.filter(c => c.id !== action.payload.carId);
  }

  return cars;

};

export const editCarIdReducer = (editCarId = -1, action) => {

  if (action.type === EDIT_CAR_ACTION) {
    return action.payload.carId;
  }

  if ([
    ADD_CAR_ACTION, SAVE_CAR_ACTION, DELETE_CAR_ACTION, CANCEL_CAR_ACTION, SORT_CARS_ACTION
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

export const carToolReducer = combineReducers({
  cars: carsReducer, // state.cars are the argument to the reducer
  editCarId: editCarIdReducer,
  carsSort: carsSortReducer,
})


// export const carsReducer = (state = { cars: [], sortDir: 'asc' }, action) => {
// const store = createStore(carsReducer)
