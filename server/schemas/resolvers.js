const { AuthenticationError } = require('apollo-server-express');
const { User, Event } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
// make ONE Event model
// filter Events by comparing Date!
var dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()

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
            // must be logged in, follow lines 27-29 for login checkin DONE
            // event.create
            // use args or {args} to do so
            // like regular mongoose
            // create and return new created event
            // create a button to link to?
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
            onclick.Event.create
            return Event
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