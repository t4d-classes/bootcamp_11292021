import { combineReducers } from "redux";

import {
  SORT_COLORS_ACTION, REFRESH_COLORS_DONE_ACTION,
} from "../actions/colorToolActions";

export const colorsReducer = (colors = [], action) => {

  if (action.type === REFRESH_COLORS_DONE_ACTION) {
    return action.payload.colors;
  }

  return colors;

};

export const colorsSortReducer = (
  colorsSort = { col: 'id', dir: 'asc' }, action) => {

  if (action.type === SORT_COLORS_ACTION) {
    if (colorsSort.col === 'id') {
      return { ...colorsSort, col: 'name' };
    } else {
      if (colorsSort.dir === 'asc') {
        return { ...colorsSort, dir: 'desc'};
      } else {
        return { ...colorsSort, col: 'id', dir: 'asc'};
      }
    }
  }

  return colorsSort;
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

export const colorToolReducer = combineReducers({
  colors: colorsReducer, // state.colors are the argument to the reducer
  colorsSort: colorsSortReducer,
  isLoading: isLoadingReducer,
})


// export const colorsReducer = (state = { colors: [], sortDir: 'asc' }, action) => {
// const store = createStore(colorsReducer)
