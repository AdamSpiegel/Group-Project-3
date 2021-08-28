const { AuthenticationError } = require('apollo-server-express');
const { User, Event } = require('../models');
const { signToken } = require('../utils/auth');

// Sets the secret key for stripe 
const stripe = require('stripe')('sk_test_51JSq1lLalsDifFnKDRlCSy7uP5HOXsVfEqYKk8xfWFWBcFIsQuOHLv3X81cGtZICQ9ECqoeHQ9Gcu50gBNsQeNlu00HdZ7ILmv');
const priceId = '{{PRICE_ID}}';
const express = require("express");
const app = express();
const path = require('path');

// make ONE Event model
// filter Events by comparing Date!
const resolvers = {
    Query: {
        findOldEvent: async () => {
            return await Event.find();
        },
        findCurrentEvent: async () => {
            return await Event.find();
        },
        fincUpcomingEvent: async () => {
            return await Event.find();
        },
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'orders.products',
                    populate: 'category'
                });

                user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

                return user;
            }

            throw new AuthenticationError('Not logged in');
        },
        // Query necessary to run stripe checkout process - AS - 8.27.21
        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;

            // below is modified for a subscription, not a cart session
            const session = await stripe.checkout.sessions.create({
                mode: 'subscription',
                payment_method_types: ['card'],
                customer: '',
                line_items: [
                    {
                        // Gold package priceId
                        price: args.price,
                        quantity: 1,
                    },

                ],
                success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${url}/`
            });

            return { session: session.id };
        }
    },

    Mutation: {
        // user
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
            throw new AuthenticationError('Not logged in');
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('No admittance except on party business.');
            }
            const correctPassword = await user.isCorrectPassword(password);

            if (!correctPassword) {
                throw new AuthenticationError('No admittance except on party business.');
            }
            const token = signToken(user);

            return { token, user };
        },
        // event
        addEvent: async (parent, { events }, context) => {
            // must be logged in, follow lines 27-29 for login checkin
            // event.create
            // use args or {args} to do so
            // like regular mongoose
            // create and return new created event
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
        },
        modifyEvent: async (parent, events, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }

        },
        deleteEvent: async (parent, events, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }

        },
    },
}

module.exports = resolvers;