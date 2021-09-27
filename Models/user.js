const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String },
    mail: { type: String },
    password: { type: String },
}, { collection: 'users' });

const User = model('User', userSchema);

module.exports = User;