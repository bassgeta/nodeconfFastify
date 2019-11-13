'use strict'

module.exports = async function (fastify, opts, next) {
  fastify.get('/status', async function (request, reply) {
    return { status: 'ok' }
  })
}
