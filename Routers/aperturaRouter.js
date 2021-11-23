const { Router } = require('express');
const { aperturaDBController } = require('../Controllers/apertura.ctrl.js');
const aperturaRouter = new Router();

aperturaRouter.get('/', aperturaDBController.getTeams);
aperturaRouter.post('/', aperturaDBController.addTeamData);
// aperturaRouter.put('/:id', aperturaDBController.updatePlayer);
// aperturaRouter.delete('/:id&:name', aperturaDBController.removePlayer);

module.exports = { aperturaRouter };