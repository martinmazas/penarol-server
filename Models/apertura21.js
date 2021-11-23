const { Schema, model } = require('mongoose');

const aperturaSchema = new Schema({
    team: { type: String },
    pj: { type: String },
    pg: { type: String },
    pe: { type: String },
    pp: { type: String },
    gf: { type: String },
    gc: { type: String },
    df: { type: String },
    pt: { type: String }

}, { collection: 'Apertura21' });

const Apertura = model('Apertura', aperturaSchema);

module.exports = Apertura;