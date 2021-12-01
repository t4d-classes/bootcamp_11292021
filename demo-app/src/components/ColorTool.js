import { useSortedList, SORT_ASC, SORT_DESC } from '../hooks/useSortedList';

import { ToolHeader } from "./ToolHeader";
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

export const ColorTool = (props) => {

  const [
    sortedColors, addColor,,deleteColor,
    sortCol, setSortCol, sortDir, setSortDir
  ] = useSortedList([ ...props.colors ], 'id', SORT_ASC);


  const sortColors = () => {

    if (sortCol === 'name' && sortDir === SORT_DESC) {
      setSortCol('id');
      setSortDir(SORT_ASC);
    } else if (sortCol === 'id') {
      setSortCol('name');
    } else {
      setSortDir(SORT_DESC);
    }

  };

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <button type="button" onClick={sortColors}>
        Current Sort: {sortCol}-{sortDir}</button>
      <ColorList colors={sortedColors} onDeleteColor={deleteColor} />
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );

};


ColorTool.defaultProps = {
  colors: [],
};