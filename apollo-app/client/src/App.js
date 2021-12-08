import { useQuery, gql, useMutation } from "@apollo/client";

import { AuthorList } from "./components/AuthorList";
import { BookTable } from "./components/BookTable";
import { AuthorForm } from "./components/AuthorForm";

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

function App() {
  const { loading, error, data } = useQuery(APP_QUERY);

  const [ mutateAppendAuthor ] = useMutation(APPEND_AUTHOR_MUTATION);

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

  return (
    <>
      <AuthorList authors={data.authors} />
      <AuthorForm buttonText="Add Author" onSubmitAuthor={addAuthor} />
      <BookTable books={data.books} />
    </>
  );
}

export default App;
