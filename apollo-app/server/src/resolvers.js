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
  Mutation: {
    // appendAuthor: (_, args) => {
    //   return fetch('http://localhost:5050/authors', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json'},
    //     body: JSON.stringify(args.author),
    //   }).then(res => res.json());
    // },
    appendAuthor: async (_, { author }) => {
      const res = await fetch('http://localhost:5050/authors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(author),
      });

      const newAuthor = await res.json();

      return newAuthor;
    },
    appendBook: async (_, { book }) => {
      const res = await fetch('http://localhost:5050/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(book),
      });

      const newBook = await res.json();

      return newBook;
    },
  }
};
