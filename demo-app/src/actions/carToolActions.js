

export const ADD_CAR_ACTION = 'ADD_CAR';
export const SAVE_CAR_ACTION = 'SAVE_CAR';
export const DELETE_CAR_ACTION = 'DELETE_CAR';
export const EDIT_CAR_ACTION = 'EDIT_CAR';
export const CANCEL_CAR_ACTION = 'CANCEL_CAR';
export const SORT_CARS_ACTION = 'SORT_CARS';

export const createAddCarAction = car =>
  ({ type: ADD_CAR_ACTION, payload: { car } });
export const createSaveCarAction = car =>
  ({ type: SAVE_CAR_ACTION, payload: { car } });
export const createDeleteCarAction = carId =>
  ({ type: DELETE_CAR_ACTION, payload: { carId } });
export const createEditCarAction = carId =>
  ({ type: EDIT_CAR_ACTION, payload: { carId } });
export const createCancelCarAction = () =>
  ({ type: CANCEL_CAR_ACTION });
export const createSortCarsAction = col =>
  ({ type: SORT_CARS_ACTION, payload: { col } });    