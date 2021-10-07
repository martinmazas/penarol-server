const { Router } = require('express');
const { userDBController } = require('../Controllers/user.ctrl');
const userRouter = new Router();

userRouter.get('/', userDBController.getUsers);
userRouter.post('/', userDBController.addUser);
userRouter.post('/:email', userDBController.login);
// userRouter.put('/:id', userDBController.updatePlayer);
// userRouter.delete('/:id', userDBController.removePlayer);

module.exports = { userRouter }