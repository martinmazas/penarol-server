const Player = require('../Models/player');

exports.playerDBController = {
    getPlayer(req, res) {
        Player.find({})
            .then(docs => {
                res.json(docs)
            })
            .catch(err => console.log(err));
    }
}