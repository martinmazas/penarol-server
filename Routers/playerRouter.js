const { Router } = require('express');
const { playerDBController } = require('../controllers/player.ctrl');
const playerRouter = new Router();

playerRouter.get('/', playerDBController.getPlayer);
// userRouter.get('/:id', userDBController.getUser);
playerRouter.post('/', playerDBController.addPlayer);
// userRouter.post('/:email', userDBController.login);
// userRouter.put('/:id', userDBController.updateUserOrAddToFavorites);
playerRouter.delete('/:id', playerDBController.removePlayer);

module.exports = { playerRouter };