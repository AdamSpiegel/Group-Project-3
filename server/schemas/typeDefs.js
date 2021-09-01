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


    type Subscription {
        name: String
        description: String
        priceId: String
        price: Int
    }

    type Auth {
        token: ID
        user: User
    }

    type Checkout {
        session: ID
      }

    type Query {

        findOldEvent: [Event]
        findCurrentEvent: [Event] 
        findUpcomingEvent: [Event]
        checkout(priceId: String!): Checkout
        getSubscriptions: [Subscription]


    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        login(email: String!, password: String!): Auth
        addEvent(name: String!, date: String, time: Float, description: String): User
        modifyEvent(name: String!): User
        deleteEvent(name: String!): User
    }

    type Checkout {
        session: ID

        addEvent(name: String!, date: String!, time: String!, description: String!): User
        modifyEvent(name: String!, date: String, time: Float, description: String): User
        deleteEvent(name: String!): User
        updateSubscription(_id: ID!, priceId: String): User 

    }

`;

module.exports = typeDefs;




