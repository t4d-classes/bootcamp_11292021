import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    message: String
    colors: [String]
    quantity: Int
    price: Float
    person: Person
    authors: [Author]
  }

  type Person {
    id: ID
    firstName: String
    lastName: String
    age: Int
  }

  type Author {
    id: ID
    firstName: String
    lastName: String
    phoneNumber: String
  }

`;
