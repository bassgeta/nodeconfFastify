'use strict'

module.exports = async function (fastify, opts) {
  fastify.route({
    method: 'GET',
    url: '/me',
    onRequest: fastify.basicAuth,
    handler: async (request, reply) => {
      return { user: request.user }
    }
  })
}
