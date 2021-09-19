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
        const name = req.body.Name;
        const position = req.params.position;
        console.log(req);
        res.send({name, position});
    }
}