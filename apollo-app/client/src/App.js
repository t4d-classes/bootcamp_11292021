import { useQuery, gql, useMutation } from "@apollo/client";

import { AuthorList } from "./components/AuthorList";
import { BookTable } from "./components/BookTable";
import { AuthorForm } from "./components/AuthorForm";
import { BookForm } from "./components/BookForm";

const APP_QUERY = gql`
  query App {
    authors {
      id
      lastName
      firstName
    }
    books {
      id
      title
      price
    }
  }
`;

const APPEND_AUTHOR_MUTATION = gql`
  mutation AppendAuthor($newAuthor: NewAuthor) {
    appendAuthor(author: $newAuthor) {
      id
      firstName
      lastName
      phoneNumber
    }
  }
`;

const APPEND_BOOK_MUTATION = gql`
mutation AppendBook($newBook: NewBook) {
  appendBook(book: $newBook) {
    id
    title
  }
}
`;

const REMOVE_BOOK_MUTATION = gql`
  mutation RemoveBook($bookId: ID) {
    removeBook(bookId: $bookId) {
      id
      title
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(APP_QUERY);

  const [ mutateAppendAuthor ] = useMutation(APPEND_AUTHOR_MUTATION);
  const [ mutateAppendBook ] = useMutation(APPEND_BOOK_MUTATION);
  const [ mutateRemoveBook ] = useMutation(REMOVE_BOOK_MUTATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const addAuthor = (newAuthor) => {

    return mutateAppendAuthor({
      variables: {
        newAuthor,
      },
      refetchQueries: [ { query: APP_QUERY } ],
    });

  };

  const addBook = (newBook) => {

    return mutateAppendBook({
      variables: {
        newBook,
      },
      refetchQueries: [ { query: APP_QUERY } ],
    });

  };

  const deleteBook = bookId => {
    return mutateRemoveBook({
      variables: {
        bookId,
      },
      refetchQueries: [ { query: APP_QUERY } ],
    })
  }


  return (
    <>
      <AuthorList authors={data.authors} />
      <AuthorForm buttonText="Add Author" onSubmitAuthor={addAuthor} />
      <BookTable books={data.books} onDeleteBook={deleteBook} />
      <BookForm buttonText="Add Book" onSubmitBook={addBook} />
    </>
  );
}

export default App;
