import { useState } from 'react';

import { useCalcToolStore } from '../hooks/useCalcToolStore';

export const CalcTool = () => {

  const {
    result, history,
    add, subtract, multiply, divide, clear } = useCalcToolStore();

  const [ numInput, setNumInput ] = useState(0);

  const doClear = () => {
    setNumInput(0);
    clear();
  }

  return (
    <div>
      <section>
        Result: {result}
      </section>
      <form>
        <label>
          Num: 
          <input type="number" value={numInput}
            onChange={({ target: { value } }) =>
              setNumInput(parseInt(value, 10))} />
        </label>
        <fieldset>
          <button type="button"
            onClick={() => add(numInput)}>+</button>
          <button type="button"
            onClick={() => subtract(numInput)}>-</button>
          <button type="button"
            onClick={() => multiply(numInput)}>*</button>
          <button type="button"
            onClick={() => divide(numInput)}>/</button>
          <button type="button"
            onClick={doClear}>C</button>
        </fieldset>
      </form>
      <ul>
        {history.map(entry => <li key={entry.id}>{entry.opName} {entry.opValue}</li>)}
      </ul>
    </div>
  )

};