const { Schema, model } = require('mongoose');

const playerSchema = new Schema({
    name: { type: String },
    position: { type: String },
    born: { type: String },
    height: { type: String },
    picture: { type: String },
    country: { type: String },

}, { collection: 'players' });

const Player = model('Player', playerSchema);

module.exports = Player;