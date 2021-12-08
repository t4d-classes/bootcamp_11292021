import { useQuery, gql } from "@apollo/client";

import { AuthorList } from "./components/AuthorList";

const APP_QUERY = gql`
  query App {
    authors {
      id
      lastName
      firstName
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(APP_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <AuthorList authors={data.authors} />
  );
}

export default App;
