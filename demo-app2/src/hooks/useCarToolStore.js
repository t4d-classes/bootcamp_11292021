import { useState} from "react";

import { SORT_ASC, SORT_DESC, useSortedList } from "../hooks/useSortedList";


export const useCarToolStore = initialCars => {

  const [
    cars, appendCar, replaceCar, removeCar,
    sortCol, setSortCol, sortDir, setSortDir ] = useSortedList([ ...initialCars ]);

  const [ editCarId, setEditCarId ] = useState(-1);

  const addCar = newCar => {
    appendCar(newCar);
    setEditCarId(-1);
  };

  const saveCar = car => {
    replaceCar(car);
    setEditCarId(-1);
  };

  const deleteCar = carId => {
    removeCar(carId);
    setEditCarId(-1);
  };

  const editCar = carId => {
    setEditCarId(carId);
  };

  const cancelCar = () => {
    setEditCarId(-1);
  };

  const sortCars = (colName) => {
    if (colName !== sortCol) {
      setSortCol(colName);
      setSortDir(SORT_ASC);
    } else {
      setSortDir(sortDir === SORT_ASC ? SORT_DESC : SORT_ASC);
    }
  };

  return {
    cars,
    editCarId,
    sortCol,
    sortDir,
    editCar,
    deleteCar,
    sortCars,
    saveCar,
    cancelCar,
    addCar,
  };


};