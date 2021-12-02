
import { useCarToolStoreContext } from '../contexts/carToolStoreContext';
import { CarForm } from '../components/CarForm';

export const CarFormContainer = () => {

  const { addCar } = useCarToolStoreContext();

  return (
    <CarForm buttonText="Add Car" onSubmitCar={addCar} />
  );

};