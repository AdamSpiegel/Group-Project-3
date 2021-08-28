import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

// Add all mutations in typeDefs below

export const UPDATE_USER = gql`
mutation updateUser(
    $firstName: String
    $lastName: String
    $email: String
    $password: String
)
`;

export const ADD_EVENT = gql`
mutation addEvent(
    $name: String!
    $date: String!
    $time: String!
    $description: String!
)
`;

