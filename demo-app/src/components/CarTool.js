
import { useCarToolStore } from '../hooks/useCarToolStore';
import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = (props) => {

  const store = useCarToolStore([ ...props.cars ]);


  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={store.cars} editCarId={store.editCarId}
        sortCol={store.sortCol} sortDir={store.sortDir}
        onEditCar={store.editCar} onDeleteCar={store.deleteCar}
        onSortCars={store.sortCars}
        onSaveCar={store.saveCar} onCancelCar={store.cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={store.addCar} />
      <ToolFooter companyName="A Cool Company, Inc." />
    </>
  );

};