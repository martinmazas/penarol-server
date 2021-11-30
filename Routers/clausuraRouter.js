const { Router } = require('express');
const { tournamentsDBController } = require('../Controllers/tournaments.ctrl.js');
const clausuraRouter = new Router();

clausuraRouter.get('/clausura', tournamentsDBController.getTeams);
clausuraRouter.post('/clausura', tournamentsDBController.addTeamData);
clausuraRouter.put('/clausura', tournamentsDBController.updateTable);
// clausuraRouter.delete('/:id&:name', clausuraDBController.removePlayer);

module.exports = { clausuraRouter };