'use strict'
const userController = require('../../Controllers/Usercontroller')
const userSchema = require('../../Schemas/userSchemas')

exports.userRoutes = [
  {
    method: 'GET',
    url: '/api/user',
    schema: userSchema.getUserSchema,
    handler: userController.getUser,
    prehandler: {},
  },
  {
    method: 'POST',
    url: '/api/account/login',
    schema: userSchema.loginUser,
    handler: userController.loginUser,
    prehandler: {},
  },
  {
    method: 'POST',
    url: '/api/account/register',
    schema: userSchema.createUser,
    handler: userController.createUser,
    prehandler: {},
  },
];
