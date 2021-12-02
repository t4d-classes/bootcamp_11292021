
import { useColorToolStoreContext } from '../contexts/colorToolStoreContext';

import { ToolHeader } from "./ToolHeader";
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

export const ColorTool = () => {

  const store = useColorToolStoreContext();

  return (
    <>
      <ToolHeader headerText="Color Tool" />
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