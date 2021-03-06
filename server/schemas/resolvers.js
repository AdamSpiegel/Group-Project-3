const { AuthenticationError } = require('apollo-server-express');
const { User, Event } = require('../models');
const { signToken } = require('../utils/auth');


// Sets the secret key for stripe 
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// make ONE Event model
// filter Events by comparing Date!

const dayjs = require('dayjs');
const { subscribe } = require('graphql');

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
            return await Event.find();
            // if (now < Event.date) {
            //     return
            // }
            // return await Event.isBefore(now);
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

        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;

            // below is modified for a subscription, not a cart session
            const session = await stripe.checkout.sessions.create({
                mode: 'subscription',
                payment_method_types: ['card'],
                line_items: [
                    {
                        price: args.price,
                        quantity: 1,
                    },

                ],
                // Sends user to successful checkout page, or re-directs to homepage, if checkout not completed
                success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${url}/`
            });

            return { session: session.id };
        },

        // Need to complete this functionality 
        getSubscriptions: async (parent) => {
            return [{ priceId: "price_1JSsU8LalsDifFnK73KG086o", name: "Gold Package", description: "Eventful offers a Gold Package to our customers which includes a Personalized Online Planning Assistance - Meet with an Eventful planning rep for 3 hours per week, Gain insight with our personalized webinars, and more!" }, { priceId: "price_1JSt2gLalsDifFnKmlMGliy4", name: "Diamond Package", description: "Eventful's exclusive Diamond Package which offers our customers a Eventful party planning specialist to meet with you personally to orchestrate your events for you! Gain valuable event planning insight with one of our professionals, one on one!" }]
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
        // updateSubscription: async (parent, events, context) => {
        //     if (context.user) {
        //         return await User.findByIdAndUpdate(context.user._id, args, { new: true });
        //     }
        // },
    },
}

module.exports = resolvers;