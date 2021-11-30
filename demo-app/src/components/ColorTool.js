import { useState} from "react";

export const ColorTool = (props) => {

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

  console.log(colorForm);

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {props.colors.map(color =>
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
      </form>
    </>
  );

};