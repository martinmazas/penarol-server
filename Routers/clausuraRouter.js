const { Router } = require('express');
const { aperturaDBController } = require('../Controllers/apertura.ctrl.js');
const clausuraRouter = new Router();

clausuraRouter.get('/clausura', aperturaDBController.getTeams);
clausuraRouter.post('/clausura', aperturaDBController.addTeamData);
// clausuraRouter.put('/:id', clausuraDBController.updatePlayer);
// clausuraRouter.delete('/:id&:name', clausuraDBController.removePlayer);

module.exports = { clausuraRouter };