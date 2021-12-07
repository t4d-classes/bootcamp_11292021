
import { useCarToolReduxStore } from '../hooks/useCarToolReduxStore';
import { CarTable } from '../components/CarTable';

export const CarTableContainer = () => {

  const {
    cars, editCarId, sortCol, sortDir,
    editCar, deleteCar, sortCars,
    saveCar, cancelCar } = useCarToolReduxStore();

  return (
    <CarTable cars={cars} editCarId={editCarId}
      sortCol={sortCol} sortDir={sortDir}
      onEditCar={editCar} onDeleteCar={deleteCar}
      onSortCars={sortCars}
      onSaveCar={saveCar} onCancelCar={cancelCar} />
  );

};