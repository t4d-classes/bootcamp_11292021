import { useMemo } from 'react';
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

import {
  addCar
} from "../actions/carToolActions";

export const useCarFormReduxStore = () => {

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    addCar,
  }, dispatch), [dispatch]);

  return {
    ...actions,
  };

};