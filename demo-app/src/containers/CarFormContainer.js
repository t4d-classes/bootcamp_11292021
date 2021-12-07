
import { useCarToolReduxStore } from '../hooks/useCarToolReduxStore';
import { CarForm } from '../components/CarForm';

export const CarFormContainer = () => {

  const { addCar } = useCarToolReduxStore();

  return (
    <CarForm buttonText="Add Car" onSubmitCar={addCar} />
  );

};