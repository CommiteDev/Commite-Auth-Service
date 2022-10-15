const mongoose = require('mongoose')
const fastify = require('fastify')({
  trustProxy: true,
  logger: true,
})
const { dbConnection,port} = require('./Configs/generalConfiguration')

const SwaggerOptions = require('./Configs/swagger');


fastify.register(require('@fastify/swagger'),SwaggerOptions)
fastify.register(require('@fastify/helmet'))
fastify.register(require('@fastify/formbody'))


fastify.register(require('@fastify/rate-limit'),{
  max: 1,
  timeWindow: '600000',
  hook: 'preHandler',
})


fastify.register(require('@fastify/cors'), {
  origin: '*',
  methods: ['GET', 'DELETE', 'PUT', 'POST'],
})

const routes = require('./Routes')

routes.map((allRoutes) => {
  Object.keys(allRoutes).map((index) => {
    allRoutes[index].map((route) => {
      fastify.route(route);
    })
  })
})

mongoose.connect(
  dbConnection,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('connected to db')
  }
)

const start = async () => {
  try {
    await fastify.listen({ port: port })
    fastify.swagger()
  } catch (err) {
    console.log(err)
    fastify.log.error(err)
    process.exit(1)
  }

}
start()