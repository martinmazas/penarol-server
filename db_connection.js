const mongoose = require('mongoose');
const consts = require('./constants');

const { DB_USER, DB_PASS, DB_HOST } = consts;

const url = DB_HOST;
const options = {
    useNewUrlParser: true, // For deprecation warnings
    // useCreateIndex: true, // For deprecation warnings
    useUnifiedTopology: true, // For deprecation warnings
    // useFindAndModify: false, // For deprecation warnings
    username: DB_USER,
    password: DB_PASS
};

mongoose
    .connect(url, options)
    .then(() => console.log('connected to DB'))
    .catch(err => console.log(`connection error: ${err}`));
