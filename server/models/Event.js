const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
// JWT too 
const dayjs = require('dayjs');

// Day.js stuff here
// dayjs().format()
// var now = dayjs()

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    guestCount: {
        type: Number,
    },
    date: {
        type: String,
        required: true,
        // enforce the format using a match
    },
    time: {
        type: String,
        required: true,
        // look into time formatting
        // not a number or a float, could be a string
        // time bundled with date! can, not should
        // look into calendar drop down
    },
    description: {
        type: String,
    },
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const Event = model('Event', eventSchema);

module.exports = Event;