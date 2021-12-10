import { useSortedList, SORT_ASC, SORT_DESC } from './useSortedList';


export const useColorToolStore = initialColors => {


  const [
    sortedColors, addColor,,deleteColor,
    sortCol, setSortCol, sortDir, setSortDir
  ] = useSortedList(initialColors, 'id', SORT_ASC);


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

  // one-time use, heavily specialized hook, particular to specific use,
  // return an object to have better defined properties
  return {
    // full syntax
    // sortedColors: sortedColors,
    // short-hand syntax
    sortedColors,
    sortCol,
    sortDir,
    addColor,
    deleteColor,
    sortColors,
  };

};

