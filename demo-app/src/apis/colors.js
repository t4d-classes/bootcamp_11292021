

// export const all = () => {
//   return fetch("http://localhost:3060/colors")
//     .then(res => res.json());
// };

export const all = async () => {
  const res = await fetch("http://localhost:3060/colors")
  const colors = await res.json();
  return colors;
};


export const append = async (color) => {
  const res = await fetch("http://localhost:3060/colors", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(color),
  });

  const newColor = await res.json();

  return newColor;
};

// Short Lab Exercise

// Add the following methods:

// one(colorId: int) -> Promise<Color>
// replace(color: Color) -> Promise<void>
// delete(colorId: int) -> Promise<void>