import fetch from 'node-fetch';

export const resolvers = {
  Query: {
    message() {
      return 'Welcome to React and Apollo!';
    },
    colors: () => ([ 'red', 'green', 'blue' ]),
    quantity: () => 42,
    price: () => 2.34,
    person: () => ({
      id: 1,
      firstName: 'Bob',
      lastName: 'Smith',
      age: 42,
    }),
    authors: () => {
      return fetch('http://localhost:5050/authors')
        .then(res => res.json());
    },
    books: () => {
      return fetch('http://localhost:5050/books')
        .then(res => res.json());
    },
  },
};
