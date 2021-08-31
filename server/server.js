import React from 'react';
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

import { makeExecutableSchema } from '@graphql-tools/schema';

import { DateTimeResolver, DateTimeTypeDefinition } from "graphql-scalars";
import { DateTimeResolver, DateTimeTypeDefinition } from "graphql-scalars"


const app = express();
const PORT = process.env.PORT || 3001;

let server;
async function startApollo() {
    server = new ApolloServer({
        typeDefs: [
            ...DateTimeTypeDefinition
        ],
        resolvers: {
            ...DateTimeResolver
        },

        context: authMiddleware,
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
        playground: true

    });

    await server.start();
    server.applyMiddleware({ app });

}

startApollo()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/public/index.html')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/public/index.html'));
    })
}

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`🌍 Now listening on localhost:${PORT}`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);

    });
});

