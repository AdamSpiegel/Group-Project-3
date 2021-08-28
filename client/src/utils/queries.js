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
    subscriptions {
        packageName
        priceId
        packagePrice
        packageDescription
      }
    }
  }
`;

export const OLD_EVENT = gql``;

export const CURRENT_EVENT = gql``;

export const UPCOMING_EVENT = gql``;


