import { useForm } from '../hooks/useForm';

export const ColorForm = (props) => {

  const [ colorForm, change, resetColorForm ] = useForm({
    name: '',
    hexcode: '',
  });
  
  const submitColor = () => {
    props.onSubmitColor({ ...colorForm });
    resetColorForm();
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