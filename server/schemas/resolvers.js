const { AuthenticationError } = require('apollo-server-express');
const { User, Event } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const dayjs = require('dayjs');

let now = dayjs('YYYY-MM-DD');
// beware of what current time is
// maybe just do year, month, day to avoid wonky time stuff
// ability to modify time
// .find is used for arrays
// make an array of Events
// dayjs().format()

const resolvers = {
    Query: {
        findOldEvent: async () => {
            return await Event.isBefore(now);
            // return await Event.find(Date);
            // .filter by isBefore(now)

            // if Date < now
            // maybe nest the whole thing under findEvent, find allthe events first then target the old ones/new ones using if statements
            // if Event.Date < now then its old, just have to compare it
        },
        findCurrentEvent: async () => {
            return await Event.isSame(now);
            // return await Event.find();
            // .filter by isSame
        },
        findUpcomingEvent: async () => {
            return await Event.isAfter(now);
            // return await Event.find();
            //  .filter by isAfter
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
            // must be logged in, follow lines 27-29 for login checkin
            // event.create
            // use args or {args} to do so
            // like regular mongoose
            // create and return new created event

            // create a button to link to?
            if (context.user) {
                const event = new Event({ events });
                await User.findByIdAndUpdate(context.user._id, { $push: { events: event } });
                return event;
            }
            onclick.Event.create

            // return Event

            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }

        },
        modifyEvent: async (parent, { events }, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }

        },
        deleteEvent: async (parent, { events }, context) => {
            if (context.user) {
                // const event = Event({ events });
                await Event.findByIdAndUpdate(context.Event._id, { $pull: { events: event } });
                // return event;
            }
            onclick.Event.destroy;

        },
    },
}

module.exports = resolvers;