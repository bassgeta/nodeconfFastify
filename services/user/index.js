'use strict'

module.exports = async function (fastify, opts) {
  fastify.route({
    method: 'GET',
    url: '/user',
    onRequest: fastify.basicAuth,
    handler: async (request, reply) => {
      return { status: 'okej' }
    }
  })
}
