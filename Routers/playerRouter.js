const { Router } = require('express');
const { playerDBController } = require('../controllers/player.ctrl');
const playerRouter = new Router();

playerRouter.get('/', playerDBController.getPlayer);
playerRouter.post('/', playerDBController.addPlayer);
// userRouter.put('/:id', userDBController.updateUserOrAddToFavorites);
playerRouter.delete('/:id', playerDBController.removePlayer);

module.exports = { playerRouter };