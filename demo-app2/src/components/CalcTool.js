import { useState } from 'react';
import {
  ADD_ACTION, SUBTRACT_ACTION,
  MULTIPLY_ACTION, DIVIDE_ACTION } from '../actions/calcToolActions';

import { useCalcToolStore } from '../hooks/useCalcToolStore';

export const CalcTool = () => {

  const {
    result, history, errorMessage, opCounts,
    add, subtract, multiply, divide,
    clear, deleteHistoryEntry } = useCalcToolStore();

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
      <table>
        <thead>
          <tr>
            <th>Op Name</th>
            <th>Op Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Add</td>
            <td>{opCounts[ADD_ACTION]}</td>
          </tr>
          <tr>
            <td>Subtract</td>
            <td>{opCounts[SUBTRACT_ACTION]}</td>
          </tr>
          <tr>
            <td>Add</td>
            <td>{opCounts[MULTIPLY_ACTION]}</td>
          </tr>
          <tr>
            <td>Add</td>
            <td>{opCounts[DIVIDE_ACTION]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )

};