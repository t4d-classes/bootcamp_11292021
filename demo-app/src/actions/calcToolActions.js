

export const ADD_ACTION = 'ADD';
export const SUBTRACT_ACTION = 'SUBTRACT';

export const createAddAction = value =>
  ({ type: ADD_ACTION, payload: { value } });
export const createSubtractAction = value =>
  ({ type: SUBTRACT_ACTION, payload: { value } });