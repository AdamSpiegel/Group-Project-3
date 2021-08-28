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

        date: Date
=======
        date: TODO

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

        addEvent(name: String!, date: Date, time: Float, description: String)
        modifyEvent(name: String!)
        deleteEvent(name: String!)
    }
    type Checkout {
        session: ID
      }

        addEvent(name: String!, date: XXX, time: Float, description: String)
        modifyEvent(name: String!,)
        deleteEvent(name: String!)
        updateSubscription(_id: ID!, price: priceId ): Subscription
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




