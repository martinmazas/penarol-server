const { Router } = require('express');
const { tournamentsDBController } = require('../Controllers/tournaments.ctrl.js');
const aperturaRouter = new Router();

aperturaRouter.get('/apertura', tournamentsDBController.getTeams);
aperturaRouter.post('/apertura', tournamentsDBController.addTeamData);
aperturaRouter.put('/apertura/:team1&:team2&:res1&:res2', tournamentsDBController.updateTable);
// aperturaRouter.put('/:id', tournamentsDBController.updatePlayer);
// aperturaRouter.delete('/:id&:name', tournamentsDBController.removePlayer);

module.exports = { aperturaRouter };