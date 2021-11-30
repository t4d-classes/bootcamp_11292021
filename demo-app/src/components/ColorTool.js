import { useState} from "react";

export const ColorTool = (props) => {

  const [ colors, setColors ] = useState([ ...props.colors ]);

  const [ colorForm, setColorForm ] = useState({
    name: '',
    hexcode: '',
  });

  const change = e => {

    setColorForm({
      // object spread operator
      ...colorForm,
      // computed property
      [ e.target.name ]: e.target.value,
    });

  };

  const addColor = () => {
    setColors([
      ...colors,
      {
        ...colorForm,
        id: Math.max(...colors.map(c => c.id), 0) + 1,
      }
    ]);

    setColorForm({
      name: '', hexcode: ''
    });
  };

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colors.map(color =>
          <li key={color.id}>
            {color.name} {color.hexcode}
          </li>)}
      </ul>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={colorForm.name} onChange={change} />
        </label>
        <label>
          Hexcode:
          <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
        </label>
        <button type="button" onClick={addColor}>Add Color</button>
      </form>
    </>
  );

};