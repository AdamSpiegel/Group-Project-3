// match up with events and users in schemas
// https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        name: String
    }

    type Event {
        _id: ID
        name: String
        count: Int
        date: TODO
        time: Float
        description: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        findOldEvent: [OldEvent]
        findCurrentEvent: [CurrentEvent] 
        findUpcomingEvent: [UpcomingEvent]
        user: User
        TODO work on this
        checkout TODO with Stripe
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        login(email: String!, password: String!): Auth
        addEvent(name: String!, date: XXX, time: Float, description: String)
        modifyEvent(name: String!,)
        deleteEvent(name: String!)
    }

    type Checkout {
        session: ID
      }

    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
      }
`;

module.exports = typeDefs;

// added temp checkout and order for stripe stuff