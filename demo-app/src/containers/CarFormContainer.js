
import { useCarFormReduxStore } from '../hooks/useCarFormReduxStore';
import { CarForm } from '../components/CarForm';

export const CarFormContainer = () => {

  const { addCar } = useCarFormReduxStore();

  return (
    <CarForm buttonText="Add Car" onSubmitCar={addCar} />
  );

};