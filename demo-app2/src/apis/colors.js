export const all = async () => {
  try {
    const res = await fetch("http://localhost:3060/colors")
    const colors = await res.json();
    return colors;
  } catch(err) {
    console.log(err);
  }
};

export const one = async (colorId) => {

  const res = await fetch(
    `http://localhost:3060/colors/${encodeURIComponent(colorId)}`)
  const color = await res.json();
  return color;
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

export const replace = async (color) => {

  const res = await fetch(
    `http://localhost:3060/colors/${encodeURIComponent(color.id)}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(color),
    });
  const newColor = await res.json();
  return newColor;
};

export const remove = async (colorId) => {

  return fetch(
    `http://localhost:3060/colors/${encodeURIComponent(colorId)}`, {
      method: 'DELETE',
    });
};