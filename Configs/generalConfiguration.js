'use strict'
require('dotenv').config({ path: './.env' })


module.exports = {
    hostAdress: process.env.HOST_ADDRESS,
    secretKey: process.env.JWT_SECRETKEY,
    expiresIn: process.env.JWT_EXPIRESIN,
    dbConnection: process.env.DB_CONNECTION,
    port : process.env.PORT,
}