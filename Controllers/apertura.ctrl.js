const { writeBackLog } = require('../Logs/logs');
const Apertura = require('../Models/apertura21');

exports.aperturaDBController = {
    getTeams(req, res) {
        Apertura.find({})
            .then(docs => {
                writeBackLog('Get players called');
                res.json(docs);
            })
            .catch(err => {
                writeBackLog(err);
            });
    },
    addTeamData(req, res) {
        console.log("here");
        const body = req.body;
        const newTeam = new Apertura({
            team: body.team,
            pj: body.pj,
            pg: body.pg,
            pe: body.pe,
            pp: body.pp,
            gf: body.gf,
            gc: body.gc,
            df: Number(body.gf) - Number(body.gc),
            pt: Number(body.pg) * 3 + Number(body.pe)
        })
        newTeam
            .save()
            .then(docs => {
                writeBackLog(`Team ${body.team} successfully added`);
                res.send(`Team ${body.team} successfully added`);
            })
            .catch(err => writeBackLog(err));
    }
}