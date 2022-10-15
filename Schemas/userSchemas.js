'use strict'
module.exports = {
  getUserSchema: {
    tags: ['Get User'],
    summary: 'Get User',
    description:
      'Get User',
    query: {
      type: 'object',
      additionalProperties: false,
      properties: {
        userid: {
          type: 'string',
        },
      },
      required: ['userid'],
    },
    response: {
      200: {
        type: 'object',
        description: 'Get User',
        properties: {
          status: { type: 'number', default: 200 },
          httpStatus: { type: 'string', default: 'OK' },
          message: {
            type: 'string',
            default: 'User successfully',
          },
          data: {
            type: 'object',
            additionalProperties: true,
            default: {
            },
          },
        },
      },
      404: {
        type: 'object',
        description: 'Response is failure',
        properties: {
          status: { type: 'number', default: '404' },
          httpStatus: { type: 'string', default: 'Not found' },
          message: { type: 'string', default: 'User not found' },
          data: {
            type: 'object',
            additionalProperties: true,
            default: {},
          },
        },
      },
    },
  },
  loginUser: {
    tags: ['Login User'],
    summary: 'Login User',
    description:
      'Login User',
    body: {
      type: 'object',
      additionalProperties: false,
      properties: {
        email: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
      },
      required: ['email', 'password'],
    },
    response: {
      200: {
        type: 'object',
        description: 'Response is success',
        properties: {
          status: { type: 'number', default: 200 },
          httpStatus: { type: 'string', default: 'OK' },
          message: {
            type: 'string',
            default: 'Login successfully',
          },
          data: {

          },
        },
      },
      404: {
        type: 'object',
        description: 'Response is failure',
        properties: {
          status: { type: 'number', default: '404' },
          httpStatus: { type: 'string', default: 'Not found' },
          message: { type: 'string', default: 'User not found' },
          data: {
            type: 'object',
            additionalProperties: true,
            default: {},
          },
        },
      },
    },
  },
  createUser: {
    tags: ['Create User'],
    summary: 'Create User',
    description:
      'Create User',
    body: {
      type: 'object',
      additionalProperties: false,
      properties: {
        name:{
          type: 'string',
        },
        username:{
          type: 'string',
        },
        email: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
        role: {
          type: 'string',
        },
      },
      required: ['name', 'username','email', 'password', 'role'],
    },
    response: {
      200: {
        type: 'object',
        description: 'Response is success',
        properties: {
          status: { type: 'number', default: 200 },
          httpStatus: { type: 'string', default: 'OK' },
          message: {
            type: 'string',
            default: 'Login successfully',
          },
          data:{

          }
        },
      },
      404: {
        type: 'object',
        description: 'Response is failure',
        properties: {
          status: { type: 'number', default: '404' },
          httpStatus: { type: 'string', default: 'Not found' },
          message: { type: 'string', default: 'User not found' },
          data: {
            type: 'object',
            additionalProperties: true,
            default: {},
          },
        },
      },
    },
  },
}
