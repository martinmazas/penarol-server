const { writeBackLog } = require('../Logs/logs');
const Player = require('../Models/player');

exports.playerDBController = {
    getPlayer(req, res) {
        Player.find({})
            .then(docs => {
                docs.sort(function (a, b) {
                    return ('' + a.name).localeCompare(b.name);
                })
                writeBackLog('Get players called');
                res.json(docs);
            })
            .catch(err => {
                writeBackLog(err);
            });
    },
    addPlayer(req, res) {
        const body = req.body;
        const newPlayer = new Player({
            name: body.Name,
            position: body.Position,
            born: body.Born,
            height: body.Height,
            picture: body.Picture,
            country: body.Country
        })
        newPlayer
            .save()
            .then(docs => {
                writeBackLog(`Player ${body.Name} successfully added`);
                res.send(`Player ${body.Name} successfully added`);
            })
            .catch(err => writeBackLog(err));
    },
    updatePlayer(req, res) {
        const body = req.body;
        Player.findByIdAndUpdate(body.Id, {
            name: body.Name,
            position: body.Position,
            born: body.Born,
            height: body.Height,
            picture: body.Picture,
            country: body.Country
        })
            .then(res.json(`Player ${body.Name} successfully modified`))
            .catch(err => console.log(`Cannot update the player: ${err}`));
    },
    removePlayer(req, res) {
        console.log('this');
        Player.deleteOne({
            _id: req.params.id
        })
            .then(writeBackLog(`Player ${req.params.name} successfully deleted`))
            .then(res.json("Successfully delete player"))
            .catch(err => writeBackLog(err));
    }
}