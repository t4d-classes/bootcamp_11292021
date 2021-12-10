export const all = async () => {

  const res = await fetch("http://localhost:3060/cars")
  const cars = await res.json();
  return cars;
};

export const one = async (carId) => {

  const res = await fetch(
    `http://localhost:3060/cars/${encodeURIComponent(carId)}`)
  const car = await res.json();
  return car;
};

export const append = async (car) => {

  const res = await fetch("http://localhost:3060/cars", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car),
  });
  const newCar = await res.json();
  return newCar;
};

export const replace = async (car) => {

  const res = await fetch(
    `http://localhost:3060/cars/${encodeURIComponent(car.id)}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    });
  const newCar = await res.json();
  return newCar;
};

export const remove = async (carId) => {

  return fetch(
    `http://localhost:3060/cars/${encodeURIComponent(carId)}`, {
      method: 'DELETE',
    });
};