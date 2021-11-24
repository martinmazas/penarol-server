const { writeBackLog } = require('../Logs/logs');
const Apertura = require('../Models/apertura21');
const Clausura = require('../Models/clausura21');

exports.aperturaDBController = {
    getTeams(req, res) {
        const tournament = req.route.path;
        console.log(tournament);
        tournament === '/apertura' ? Apertura.find({})
        .then(docs => {
            writeBackLog('Get apertura teams called');
            res.json(docs);
        })
        .catch(err => {
            writeBackLog(err);
        }) : Clausura.find({})
            .then(docs => {
                writeBackLog('Get clausura teams called');
                res.json(docs);
            })
            .catch(err => {
                writeBackLog(err);
            });
    },
    addTeamData(req, res) {
        const body = req.body;
        const tournament = req.route.path;
        const newTeam = tournament === '/apertura' ? new Apertura({
            team: body.team,
            pj: body.pj,
            pg: body.pg,
            pe: body.pe,
            pp: body.pp,
            gf: body.gf,
            gc: body.gc,
            df: Number(body.gf) - Number(body.gc),
            pt: Number(body.pg) * 3 + Number(body.pe)
        }) :
            new Clausura({
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