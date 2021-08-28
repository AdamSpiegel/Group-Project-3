// make some fake events with ID, name, number of guests, date, time and description

const { Event } = require('../models/Event');

const eventData = [
    {
        _id: 1,
        name: "Bob's wedding",
        number_of_guests: "2",
        date: "2020-01-01",
        // time: "",
        description: "A wedding"
    },
    {
        _id: 2,
        name: "Bob's cookout",
        number_of_guests: "10",
        date: "2030-01-01",
        // time: "",
        description: "A cookout"
    },
    {
        _id: 3,
        name: "Bob's funeral",
        number_of_guests: "200",
        date: "2040-01-01",
        // time: "",
        description: "A funeral"
    },
];

const eventSeeds = () => Event.bulkCreate(eventData);

module.exports = eventSeeds;