import { all, append } from '../apis/colors';

export const REFRESH_COLORS_REQUEST_ACTION = 'REFRESH_COLORS_REQUEST';
export const REFRESH_COLORS_DONE_ACTION = 'REFRESH_COLORS_DONE';

export const ADD_COLOR_REQUEST_ACTION = 'ADD_COLOR_REQUEST';
export const ADD_COLOR_DONE_ACTION = 'ADD_COLOR_DONE';

export const DELETE_COLOR_ACTION = 'DELETE_COLOR';
export const SORT_COLORS_ACTION = 'SORT_COLORS';

export const createRefreshColorsRequestAction = () => ({ type: REFRESH_COLORS_REQUEST_ACTION });
export const createRefreshColorsDoneAction = colors => ({
  type: REFRESH_COLORS_DONE_ACTION, payload: { colors }
});


export const refreshColors = () => {

  // this function is the function action object
  // when the middleware invokes this function is passes in the store's
  // dispatch method
  return dispatch => {

    dispatch(createRefreshColorsRequestAction());
    return all().then(colors => {
      dispatch(createRefreshColorsDoneAction(colors));
    });
  };
};


export const createAddColorRequestAction = color =>
  ({ type: ADD_COLOR_REQUEST_ACTION, payload: { color } });

export const createAddColorDoneAction = color =>
  ({ type: ADD_COLOR_DONE_ACTION, payload: { color } });


export const addColor = color => {
  return dispatch => {
    dispatch(createAddColorRequestAction(color));
    append(color).then(() => dispatch(refreshColors()));
  };
};


export const createDeleteColorAction = colorId =>
  ({ type: DELETE_COLOR_ACTION, payload: { colorId } });
export const createSortColorsAction = () =>
  ({ type: SORT_COLORS_ACTION });    