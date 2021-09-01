import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser (firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token 
    user {
      _id
      username
    }
  }
}
`;

export const UPDATE_USER = gql`
mutation updateUser($firstName: String, $lastName: String, $email: String, $password: String) {
  updateUser (firstName: $firstName, lastName: $lastName, email: $email, password: $password){
    token 
    user {
      _id
      username
    }
  }
}
`;

export const LOGIN = gql`
mutation login($email: String!, $password: String!){
  login(email: $email, password: $password){
    token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_EVENT = gql`
mutation addEvent($name: String!, $date: String!, $time: String!, $description: String!){
  addEvent(name: $name, date: $date, time: $time, description: $description)
}
`;

export const MODIFY_EVENT = gql`
mutation modifyEvent($name: String!, $date: String!, $time: String!, $description: String!){
  modifyEvent(name: $name, date: $date, time: $time, description: $description)
}
`;

export const DELETE_EVENT = gql`
mutation deleteEvent($name: String!){
  deleteEvent(name: $name)
}
`;

export const UPDATE_SUBSCRIPTION = gql`
mutation updateSubscription($_id: ID!, $price: String){
  updateSubscriptions(id: $_id, price: $price)
}
`;



