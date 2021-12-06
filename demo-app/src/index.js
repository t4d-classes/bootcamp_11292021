import { render } from 'react-dom';
import { Provider } from 'react-redux';

// import { App } from './components/App';
import { CalcTool as App } from './components/CalcTool';
import { calcToolStore } from './stores/calcToolStore';

import './index.css';

render(
  <Provider store={calcToolStore}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
