const { Router } = require('express');
const { playerDBController } = require('../Controllers/player.ctrl');
const playerRouter = new Router();

playerRouter.get('/', playerDBController.getPlayer);
playerRouter.post('/', playerDBController.addPlayer);
playerRouter.put('/:id', playerDBController.updatePlayer);
playerRouter.delete('/:id&:name', playerDBController.removePlayer);

module.exports = { playerRouter };