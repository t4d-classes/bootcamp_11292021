
import { useCarTableReduxStore } from '../hooks/useCarTableReduxStore';
import { CarTable } from '../components/CarTable';

export const CarTableContainer = () => {

  const {
    cars, editCarId, sortCol, sortDir,
    editCar, deleteCar, sortCars,
    saveCar, cancelCar } = useCarTableReduxStore();

  return (
    <CarTable cars={cars} editCarId={editCarId}
      sortCol={sortCol} sortDir={sortDir}
      onEditCar={editCar} onDeleteCar={deleteCar}
      onSortCars={sortCars}
      onSaveCar={saveCar} onCancelCar={cancelCar} />
  );

};