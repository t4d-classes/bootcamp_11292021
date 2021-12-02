
import { useCarToolStoreContext } from '../contexts/carToolStoreContext';
import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = () => {

  // const store = useCarToolStore([ ...props.cars ]);
  const {
    cars, editCarId, sortCol, sortDir,
    editCar, deleteCar, sortCars,
    saveCar, cancelCar, addCar } = useCarToolStoreContext();

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        sortCol={sortCol} sortDir={sortDir}
        onEditCar={editCar} onDeleteCar={deleteCar}
        onSortCars={sortCars}
        onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
      <ToolFooter companyName="A Cool Company, Inc." />
    </>
  );

};