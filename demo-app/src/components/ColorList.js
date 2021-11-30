
const isEmpty = arr => !Array.isArray(arr) || arr.length === 0

export const ColorList = props => {

  return (
    <ul>
      {isEmpty(props.colors)
        ? <li>No colors</li>
        : props.colors.map(color =>
        <li key={color.id}>
          {color.name} {color.hexcode}
        </li>)}
    </ul>
  );

};

ColorList.defaultProps = {
  colors: [],
};