// const { MongoClient } = require('mongodb');
// async function main() {
//     const uri = 'mongodb+srv://martinmazas:mm401602@cluster0.f2wkg.mongodb.net/penarol-app?retryWrites=true&w=majority';
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();
//         await listDatabases(client);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }
// main().catch(console.error);

// async function listDatabases(client) {
//     const databasesList = await client.db().admin().listDatabases();

//     databasesList.databases.forEach(db => { console.log(db.name); })
// }

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
