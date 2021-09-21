const Player = require('../Models/player');

exports.playerDBController = {
    getPlayer(req, res) {
        Player.find({})
            .then(docs => {
                res.json(docs)
            })
            .catch(err => console.log(err));
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
            .then(docs => { res.send(`Player ${body.Name} successfully added`) })
            .catch(err => console.log(err));
    },
    removePlayer(req, res) {
        console.log(req.params.id);
        Player.findOneAndDelete({
            _id: req.params.id
        })
            .then(Player.find({})
                .then(docs => {
                    res.json(docs)
                })
                .catch(err => console.log(err)))
            .catch(err => console.log(`Cannot delete the player: ${err}`));
    }
}