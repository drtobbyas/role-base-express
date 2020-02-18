const express = require('express')
const userController = require('./user.controller')

const userRouter = express.Router()

userRouter.post('/signUp', userController.signUp)

userRouter.post('/signIn', userController.signIn)


userRouter.get('/:userId', userController.allowIfLoggedin, userController.getUser);

userRouter.get('/getUsers', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'), userController.getUsers);

userRouter.put('/:userId', userController.allowIfLoggedin, userController.grantAccess('updateAny', 'profile'), userController.updateUser);

userRouter.delete('/:userId', userController.allowIfLoggedin, userController.grantAccess('deleteAny', 'profile'), userController.deleteUser);

module.exports = userRouter;
