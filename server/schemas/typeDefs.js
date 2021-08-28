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
<<<<<<< HEAD
        date: Date
=======

        date: Date
=======
        date: TODO

>>>>>>> 459b94a4002bd7ca9482d537bd10fe20fd855b00
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
        checkout TODO with Stripe
    }
    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        login(email: String!, password: String!): Auth
<<<<<<< HEAD
        addEvent(name: String!, date: Date, time: Float, description: String)
        modifyEvent(name: String!)
=======

        addEvent(name: String!, date: Date, time: Float, description: String)
        modifyEvent(name: String!)
        deleteEvent(name: String!)
    }
    type Checkout {
        session: ID
      }

        addEvent(name: String!, date: XXX, time: Float, description: String)
        modifyEvent(name: String!,)
>>>>>>> 459b94a4002bd7ca9482d537bd10fe20fd855b00
        deleteEvent(name: String!)
    }
    type Checkout {
        session: ID
      }
        addEvent(name: String!, date: Date, time: Float, description: String)
        modifyEvent(name: String!,)
        deleteEvent(name: String!)
    }


    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
      }
`;

module.exports = typeDefs;

// added temp checkout and order for stripe stuff