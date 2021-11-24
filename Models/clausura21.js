const { Schema, model } = require('mongoose');
const uruguayanModel = require('./uruguayo');

const clausuraSchema = new Schema(uruguayanModel, { collection: 'Clausura21' });

const Clausura = model('Clausura', clausuraSchema);

module.exports = Clausura;