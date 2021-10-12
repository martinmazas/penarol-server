const Player = require('../Models/player');

exports.playerDBController = {
    getPlayer(req, res) {
        Player.find({})
            .then(docs => {
                docs.sort(function (a, b) {
                    return ('' + a.name).localeCompare(b.name);
                })
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
        Player.deleteOne({
            _id: req.params.id
        })
            .then(res.json("Successfully delete player"))
            // .then(Player.find({})
            //     .then(docs => {
            //         docs.sort(function (a, b) {
            //             return ('' + a.name).localeCompare(b.name);
            //         })
            //         res.json(docs)
            //     })
            //     .catch(err => console.log(err)))
            .catch(err => console.log(`Cannot delete the player: ${err}`));
    }
}