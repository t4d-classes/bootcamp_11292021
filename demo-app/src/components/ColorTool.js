
import { useColorTool } from '../hooks/useColorTool';

import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

export const ColorTool = () => {

  const store = useColorTool(true);

  return (
    <>
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