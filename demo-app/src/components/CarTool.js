import { useState} from "react";

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';

export const CarTool = (props) => {

  const [ cars, setCars ] = useState([ ...props.cars ]);

  const [ carForm, setCarForm ] = useState({
    make: '',
    model: '',
    year: 1900,
    color: '',
    price: 0,
  });

  const change = e => {

    setCarForm({
      // object spread operator
      ...carForm,
      // computed property
      [ e.target.name ]: e.target.type === 'number'
        ? parseInt(e.target.value, 10) : e.target.value,
    });

  };

  console.log(carForm);

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} />
      <form>
        <label>
          Make:
          <input type="text" name="make" value={carForm.make} onChange={change} />
        </label>
        <label>
          Model:
          <input type="text" name="model" value={carForm.model} onChange={change} />
        </label>
        <label>
          Year:
          <input type="number" name="year" value={carForm.year} onChange={change} />
        </label>
        <label>
          Color:
          <input type="text" name="color" value={carForm.color} onChange={change} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={carForm.price} onChange={change} />
        </label>
      </form>
    </>
  );

};