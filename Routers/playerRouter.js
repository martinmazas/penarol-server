const { Router } = require('express');
const { playerDBController } = require('../controllers/player.ctrl');
const playerRouter = new Router();

playerRouter.get('/', playerDBController.getPlayer);
// userRouter.get('/:id', userDBController.getUser);
// userRouter.post('/', userDBController.addUser);
// userRouter.post('/:email', userDBController.login);
// userRouter.put('/:id', userDBController.updateUserOrAddToFavorites);
// userRouter.delete('/:id', userDBController.deleteUserOrFavoritePlant);

module.exports = { playerRouter };