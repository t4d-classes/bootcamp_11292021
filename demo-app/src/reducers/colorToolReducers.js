import { combineReducers } from "redux";

import {
  ADD_COLOR_ACTION, DELETE_COLOR_ACTION, SORT_COLORS_ACTION
} from "../actions/colorToolActions";

const colorList = [
  { id: 1, name: 'red', hexcode: 'ff0000' },
  { id: 2, name: 'green', hexcode: '00ff00' },
  { id: 3, name: 'blue', hexcode: '0000ff' },
];

export const colorsReducer = (colors = colorList, action) => {

  if (action.type === ADD_COLOR_ACTION) {
    return [
      ...colors,
      {
        ...action.payload.color,
        id: Math.max(...colors.map(c => c.id), 0) + 1,
      },
    ];
  }

  if (action.type === DELETE_COLOR_ACTION) {
    return colors.filter(c => c.id !== action.payload.colorId);
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

export const colorToolReducer = combineReducers({
  colors: colorsReducer, // state.colors are the argument to the reducer
  colorsSort: colorsSortReducer,
})


// export const colorsReducer = (state = { colors: [], sortDir: 'asc' }, action) => {
// const store = createStore(colorsReducer)
