export const BookTable = ({ books }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
        </tr>
      </thead>
      {books.map(book => <tr key={book.id}>
        <td>{book.title}</td>
        <td>{book.price}</td>
      </tr>)}
    </table>
  )
};