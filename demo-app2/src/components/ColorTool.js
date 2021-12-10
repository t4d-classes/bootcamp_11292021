
import { useColorToolReduxStore } from '../hooks/useColorToolReduxStore';

import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

export const ColorTool = () => {

  const store = useColorToolReduxStore();

  console.log(store);

  return (
    <>
      <div>
        Sort Direction:
        <span style={{fontWeight: store.sortDir === 'asc' ? 'bold' : 'normal'}}>ASC</span>
        <span style={{fontWeight: store.sortDir === 'desc' ? 'bold' : 'normal'}}>DESC</span>
      </div>

      <button type="button" onClick={store.sortColors}>
        Current Sort: {store.sortCol}-{store.sortDir}</button>
      <ColorList colors={store.sortedColors} onDeleteColor={store.deleteColor} />
      <ColorForm buttonText="Add Color" onSubmitColor={store.addColor} />
    </>
  );

};


ColorTool.defaultProps = {
  colors: [],
};