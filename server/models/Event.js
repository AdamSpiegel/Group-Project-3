const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
// JWT too 
var dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    guestCount: {
        type: Number,
        // how to make it a range or an estimate?
        // not required
    },
    date: {
        type: Date,
        // https://mongoosejs.com/docs/schematypes.html#dates
        // unix timestamp
        // can format date in display side
        required: true,
    },
    time: {
        type: Number,
        // 
        required: true,
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