'use strict'
const User = require('../Models/user')


exports.getUserByEmail = async (email) => {
  try {
    return await User.findOne({ email })
  } catch (err) {
    throw console.log(err)
  }
}

exports.getUserByUsername = async (username) => {
  try {
    return await User.findOne({ username })
  } catch (err) {
    throw console.log(err)
  }
}

exports.getUserData = async (userid) => {
  try {
    return await User.findOne({userid})
  } catch (err) {
    throw console.log(err)
  }
}

exports.createUser = async (data) => {
  try {
      return await User.create(data)
    } catch (err) {
      throw console.log(err)
    }
}
