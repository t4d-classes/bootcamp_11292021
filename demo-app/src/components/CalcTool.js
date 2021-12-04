import { useState } from 'react';

import { useCalcToolStore } from '../hooks/useCalcToolStore';

export const CalcTool = () => {

  const {
    result, history, errorMessage,
    add, subtract, multiply, divide,
    clear, deleteHistoryEntry } = useCalcToolStore();

  const [ numInput, setNumInput ] = useState(0);

  const doClear = () => {
    setNumInput(0);
    clear();
  }

  const junk = "<script>alert(0);</script>";

  return (
    <div>
      {junk}
      <section>
        Result: {result}
      </section>
      <form>
        {errorMessage && <div style={{ color: 'red', fontWeight: 'bold' }}>{errorMessage}</div>}
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
        {history.map(entry => <li key={entry.id}>
          {entry.opName} {entry.opValue}
          <button type="button" onClick={() => deleteHistoryEntry(entry.id)}>X</button>
        </li>)}
      </ul>
    </div>
  )

};