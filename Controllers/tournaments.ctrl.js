const { writeBackLog } = require('../Logs/logs');
const Apertura = require('../Models/apertura21');
const Clausura = require('../Models/clausura21');

exports.tournamentsDBController = {
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
    },
    updateTable(req, res) {
        //clausura || apertura
        const tournament = req.baseUrl.split('api/');

        const { team1, team2, res1, res2 } = req.query;
        // get the winner
        const winner = res1 > res2 ? team1 : res1 < res2 ? team2 : 'no';
        const loser = winner != 'no' ? winner === team1 ? team2 : team1 : 'no';
        const golWinner = res1 > res2 ? res1 : res1 < res2 ? res2 : 'no';
        const golLoser = res1 < res2 ? res1 : res1 > res2 ? res2 : 'no';
        if (tournament[1] === 'apertura21') {
            if (winner != 'no') {
                Apertura.updateOne({ team: winner }, { $inc: { pj: 1, pg: 1, gf: golWinner, gc: golLoser } }).then(docs => writeBackLog(`${team1} ${res1} - ${team2} ${res2} in apertura21 winner`));
                Apertura.updateOne({ team: loser }, { $inc: { pj: 1, pp: 1, gf: golLoser, gc: golWinner } }).then(docs => writeBackLog(`${team1} ${res1} - ${team2} ${res2} in apertura21 loser`));
            }
            else {
                Apertura.updateOne({ team: team1 }, { $inc: { pj: 1, pe: 1, gf: res1, gc: res2 } }).then(docs => writeBackLog(`${team1} ${res1} - ${team2} ${res2} in apertura21 draw`));
                Apertura.updateOne({ team: team2 }, { $inc: { pj: 1, pe: 1, gf: res2, gc: res1 } }).then(docs => writeBackLog(`${team1} ${res1} - ${team2} ${res2} in apertura21 draw`));
            }
        }
        else if (tournament[1] === 'clausura21') {
            if (winner != 'no') {
                Clausura.updateOne({ team: winner }, { $inc: { pj: 1, pg: 1, gf: golWinner, gc: golLoser, df: golWinner - golLoser, pt: 3 } }).then(docs => writeBackLog(`${team1} ${res1} - ${team2} ${res2} in clausura21 winner`));
                Clausura.updateOne({ team: loser }, { $inc: { pj: 1, pp: 1, gf: golLoser, gc: golWinner, df: golWinner - golLoser } }).then(docs => writeBackLog(`${team1} ${res1} - ${team2} ${res2} in clausura21 loser`));
            }
            else {
                Clausura.updateOne({ team: team1 }, { $inc: { pj: 1, pe: 1, gf: res1, gc: res2, pt: 1 } }).then(docs => writeBackLog(`${team1} ${res1} - ${team2} ${res2} in clausura21 draw`));
                Clausura.updateOne({ team: team2 }, { $inc: { pj: 1, pe: 1, gf: res2, gc: res1, pt: 1 } }).then(docs => writeBackLog(`${team1} ${res1} - ${team2} ${res2} in clausura21 draw`));
            }
        }
        res.send(`${team1} ${res1} - ${team2} ${res2}`);
    }
}