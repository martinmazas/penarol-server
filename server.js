const express = require('express')
const app = express();
const port = 8000;
const cors = require('cors');
const { playerRouter } = require("./Routers/playerRouter");

app.use(cors({ credentials: true, origin: 'http://localhost:3000', methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"], preflightContinue: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials: true');
    res.set('Content-Type', 'application/json');
    next();
});

app.get('/', (req, res) => {
    res.send({ express: 'Connect to react?' })
});

app.use('/api/player', playerRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});