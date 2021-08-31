// match up with events and users in schemas
// https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/
// https://hasura.io/blog/working-with-dates-time-timezones-graphql-postgresql/
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
        date: String
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
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        login(email: String!, password: String!): Auth
        addEvent(name: String!, date: String, time: Float, description: String): User
        modifyEvent(name: String!): User

        addEvent(name: String!, date: String, time: Float, description: String): User
        modifyEvent(name: String!): User
        deleteEvent(name: String!): User
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