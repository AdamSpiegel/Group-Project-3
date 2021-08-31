import { gql } from '@apollo/client';

export const QUERY_CHECKOUT = gql`
query getCheckout($priceId: String!) {
    checkout (priceId: $priceId) {
        session
    }
}
`;

export const QUERY_ALL_SUBSCRIPTIONS = gql`
  {
    getSubscriptions {
        packageName
        description
        priceId
        price
      }
  }
`;

export const OLD_EVENT = gql`
{
    findOldEvent {
      _id
      name
      count
      date
      time
      description
    }
}
`;

export const CURRENT_EVENT = gql`
{
  findCurrentEvent {
    _id
    name
    count
    date
    time 
    description
  }
}
`;

export const UPCOMING_EVENT = gql`
{
  findUpcomingEvent {
    _id
    name
    count
    date
    time 
    description
  }
}
`;


