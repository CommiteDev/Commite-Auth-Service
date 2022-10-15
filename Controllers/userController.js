'use strict'
const userServices = require('../Services/userServices')
const { v4: uuidv4} = require('uuid');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../Models/user')
const {responseMsg}= require('../Utils/responseMessage')
const { secretKey,expiresIn } = require('../Configs/generalConfiguration')

// ToDO: Error handling

exports.getUser = async (request, reply) => {
  try {
    const data = await userServices.getUserData(request.query.userid)
    return data ? responseMsg(200, 'OK', 'User found successfully', data) : responseMsg(404, 'Not found', 'User not found', data)
  } catch (err) {
    throw console.log(err)
  }
}

exports.getUserAll = async (request, reply) => {
  try {
    return await userServices.getUserAll()
  } catch (err) {
    throw console.log(err)
  }
}

exports.getUserById = async (request, reply) => {
  try {
    return await userServices.getUserById(request.params.id)
  } catch (err) {
    throw console.log(err)
  }
}

exports.createUser = async (request, reply) => {
  const { name,username, email, password,role} = request.body
  try {
    const usermailDB = await userServices.getUserByEmail(email)
    if(usermailDB){
      return responseMsg(400, 'Bad Request', 'Email already exists')
    }
    const usernameDB = await userServices.getUserByUsername(username)
    if(usernameDB){
      return responseMsg(400, 'Bad Request', 'Username already exists')
    }
    const userId = uuidv4()
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    const user = new User({ userid:userId, name, username, email, password: hashPassword, role })
    await userServices.createUser(user)

    const payload = {
      user: {
        id: userId,
      },
    }
    let token = jwt.sign({ payload }, secretKey, {
      expiresIn: expiresIn,
    });
    return responseMsg(200, 'OK', 'User created successfully', token)
  } catch (err) {
    throw console.log(err)
  }
}

exports.updateUser = async (request, reply) => {
  try {
    return await userServices.updateUser(request.params.id, request.body)
  } catch (err) {
    throw console.log(err)
  }
}

exports.deleteUser = async (request, reply) => {
  try {
    return await userServices.deleteUser(request.params.id)
  } catch (err) {
    throw console.log(err)
  }
}

exports.deleteUserAll = async (request, reply) => {
  try {
    return await userServices.deleteUserAll()
  } catch (err) {
    throw console.log(err)
  }
}

exports.loginUser = async (request, reply) => {
  try {
    const { email, password } = request.body
    const user = await userServices.getUserByEmail(email)
    if (!user) {
      return responseMsg(400, 'Bad Request', 'User not found')
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
      return responseMsg(400, 'Bad Request', 'Password is incorrect')
    }
    const payload = {
      user: {
        id: user.userid,
      },
    }
    let token = jwt.sign({ payload }, secretKey, {
      expiresIn: expiresIn,
    });
    return responseMsg(200, 'OK', 'User logged in successfully', token)
  } catch (err) {
    throw console.log(err)
  }
}

exports.logoutUser = async (request, reply) => {
  try {
    return await userServices.logoutUser(request.body)
  } catch (err) {
    throw console.log(err)
  }
}

exports.getUserByEmail = async (request, reply) => {
  try {
    return await userServices.getUserByEmail(request.params.email)
  } catch (err) {
    throw console.log(err)
  }
}



