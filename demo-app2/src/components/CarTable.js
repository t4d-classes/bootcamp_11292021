import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';

const cols = [
  [ 'Id', 'id' ],
  [ 'Make', 'make' ],
  [ 'Model', 'model' ],
  [ 'Year', 'year' ],
  [ 'Color', 'color' ],
  [ 'Price', 'price' ],
];

export const CarTable = props => {

  const sortDirectionIndicator = (sortCol) => {
    if (sortCol === props.sortCol) {
      return props.sortDir === 'asc' ? ' v' : ' ^';
    }
    return '';
  };


  return (
    <table>
      <thead>
        <tr>
          {cols.map(([ header, field ]) => <th key={field}>
            <button type="button" onClick={() => props.onSortCars(field)}>
              {header}{sortDirectionIndicator(field)}
            </button>
          </th>)}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.cars.map(car =>
          props.editCarId === car.id
            ? <CarEditRow key={car.id} car={car}
                onSaveCar={props.onSaveCar} onCancelCar={props.onCancelCar} />
            : <CarViewRow key={car.id} car={car}
                onEditCar={props.onEditCar} onDeleteCar={props.onDeleteCar} />)}
      </tbody>
    </table>

  );

};