import { useState} from "react";

export const ColorForm = (props) => {

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
  
  const submitColor = () => {

    props.onSubmitColor({ ...colorForm });

    setColorForm({
      name: '', hexcode: ''
    });
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" value={colorForm.name} onChange={change} />
      </label>
      <label>
        Hexcode:
        <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
      </label>
      <button type="button" onClick={submitColor}>{props.buttonText}</button>
    </form>
  );


};