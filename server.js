const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const logger = require('morgan');
const { playerRouter } = require("./Routers/playerRouter");
const { userRouter } = require('./Routers/userRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use(cors({ credentials: true, origin: 'http://localhost:3001', methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"], preflightContinue: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials: true');
    res.set('Content-Type', 'application/json');
    next();
});

app.set("trust proxy", 1);

app.use('/api/user/logout', function (req, res) {
    res.clearCookie('token');
    res.json('Successfully logout');
});
app.use('/api/player', playerRouter);
app.use('/api/user', userRouter);
app.get('*', (req, res) => { res.send('Welcome to Penarol heroku server'); });

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something is broken!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});