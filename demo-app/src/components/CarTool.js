import { useState} from "react";

import { SORT_ASC, SORT_DESC, useSortedList } from "../hooks/useSortedList";

import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = (props) => {

  const [
    cars, appendCar, replaceCar, removeCar,
    sortCol, setSortCol, sortDir, setSortDir ] = useSortedList([ ...props.cars ]);

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

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        sortCol={sortCol} sortDir={sortDir}
        onEditCar={editCar} onDeleteCar={deleteCar} onSortCars={sortCars}
        onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
      <ToolFooter companyName="A Cool Company, Inc." />
    </>
  );

};