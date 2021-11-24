const { Schema, model } = require('mongoose');
const uruguayanModel = require('./uruguayo');

const aperturaSchema = new Schema(uruguayanModel, { collection: 'Apertura21' });

const Apertura = model('Apertura', aperturaSchema);

module.exports = Apertura;