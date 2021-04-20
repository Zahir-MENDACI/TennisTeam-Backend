const mongoose = require('mongoose');
const moment = require('moment')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // Account informations
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: String,
    isAdmin:{
        type: Boolean,
        default: false 
    },
    // User informations
    lastName: {
        type: String,
        lowercase: true
    },
    firstName: {
        type: String,
        lowercase: true
    },
    birthDate: {
        type: Date,
        min: '1950-01-01',
        max: moment().format('YYYY-MM-DD')
    },
    address: String,
    phone: String
})

module.exports = mongoose.model('User', userSchema);