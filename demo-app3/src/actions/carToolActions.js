import { all, append, replace, remove } from '../apis/cars';

export const REFRESH_CARS_REQUEST_ACTION = 'REFRESH_CARS_REQUEST';
export const REFRESH_CARS_DONE_ACTION = 'REFRESH_CARS_DONE';
export const ADD_CAR_REQUEST_ACTION = 'ADD_CAR_REQUEST';
export const ADD_CAR_DONE_ACTION = 'ADD_CAR_DONE';
export const SAVE_CAR_REQUEST_ACTION = 'SAVE_CAR_REQUEST';
export const SAVE_CAR_DONE_ACTION = 'SAVE_CAR_DONE';
export const DELETE_CAR_REQUEST_ACTION = 'DELETE_CAR_REQUEST';
export const DELETE_CAR_DONE_ACTION = 'DELETE_CAR_DONE';
export const EDIT_CAR_ACTION = 'EDIT_CAR';
export const CANCEL_CAR_ACTION = 'CANCEL_CAR';
export const SORT_CARS_ACTION = 'SORT_CARS';

export const createRefreshCarsRequestAction = () => ({ type: REFRESH_CARS_REQUEST_ACTION });
export const createRefreshCarsDoneAction = cars => ({
  type: REFRESH_CARS_DONE_ACTION, payload: { cars }
});


export const refreshCars = () => {

  // this function is the function action object
  // when the middleware invokes this function is passes in the store's
  // dispatch method
  return dispatch => {

    dispatch(createRefreshCarsRequestAction());
    return all().then(cars => {
      dispatch(createRefreshCarsDoneAction(cars));
    });
  };
};


export const createAddCarRequestAction = car =>
  ({ type: ADD_CAR_REQUEST_ACTION, payload: { car } });

export const createAddCarDoneAction = car =>
  ({ type: ADD_CAR_DONE_ACTION, payload: { car } });


export const addCar = car => {
  return dispatch => {
    dispatch(createAddCarRequestAction(car));
    append(car).then(() => dispatch(refreshCars()));
  };
};

export const createSaveCarRequestAction = car =>
  ({ type: SAVE_CAR_REQUEST_ACTION, payload: { car } });

export const createSaveCarDoneAction = car =>
  ({ type: SAVE_CAR_DONE_ACTION, payload: { car } });


export const saveCar = car => {
  return dispatch => {
    dispatch(createSaveCarRequestAction(car));
    replace(car).then(() => dispatch(refreshCars()));
  };
};


export const createDeleteCarRequestAction = carId =>
  ({ type: DELETE_CAR_REQUEST_ACTION, payload: { carId } });

export const createDeleteCarDoneAction = carId =>
  ({ type: DELETE_CAR_DONE_ACTION, payload: { carId } });

export const deleteCar = carId => {
  return dispatch => {
    dispatch(createDeleteCarRequestAction(carId));
    remove(carId).then(() => dispatch(refreshCars()));
  };
};


export const createEditCarAction = carId =>
  ({ type: EDIT_CAR_ACTION, payload: { carId } });
export const createCancelCarAction = () =>
  ({ type: CANCEL_CAR_ACTION });
export const createSortCarsAction = col =>
  ({ type: SORT_CARS_ACTION, payload: { col } });    