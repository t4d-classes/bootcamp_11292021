import { createStore } from 'redux';

import { calcToolReducer } from '../reducers/calcToolReducers';

export const calcToolStore = createStore(calcToolReducer);

// export const createStore = reducerFn => {

//   let currentState = undefined;
//   const subscribers = [];

//   // store object
//   const store = {
//     getState: () => currentState,
//     dispatch: action => {
//       const newState = reducerFn(currentState, action);
//       if (newState !== currentState) {
//         currentState = newState;
//         subscribers.forEach(fn => fn());
//       }
//     },
//     subscribe: fn => subscribers.push(fn), 
//   };

//   store.dispatch({ type: 'INIT' });

//   return store;
// };

// calcToolStore.subscribe(() => {
//   calcToolStore.getState()
// })