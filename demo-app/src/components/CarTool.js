import { useState} from "react";

import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = (props) => {

  const [ cars, setCars ] = useState([ ...props.cars ]);

  const [ editCarId, setEditCarId ] = useState(-1);

  const addCar = newCar => {

    setCars([
      ...cars,
      {
        ...newCar,
        id: Math.max(...cars.map(c => c.id), 0) + 1,
      },
    ]);

  };

  const editCar = carId => {
    setEditCarId(carId);
  };

  const deleteCar = carId => {
    setCars(cars.filter(c => c.id !== carId));
  };


  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={editCar} onDeleteCar={deleteCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
      <ToolFooter companyName="A Cool Company, Inc." />
    </>
  );

};