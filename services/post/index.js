'use strict'

const { hostname } = require('os')
const hyperid = require('hyperid')
const instance = hyperid()

module.exports = async function (fastify, opts) {
  fastify.route({
    method: 'POST',
    url: '/tweet',
    onRequest: fastify.basicAuth,
    handler: async (request, reply) => {
      const id = instance()
      const {name, topics} = request.user;
      const body = {
        id,
        user: name,
        topics,
        time: new Date(),
        text: request.body.text || 'watevr'
      }

      await fastify.elastic.index({
        index: `${hostname().replace(/[^-_A-Za-z0-9]/g, '_').toLowerCase()}-tweets`,
        refresh: 'wait_for',
        id,
        body

      })
      reply.code(201)
      return { id }
    }
  })
}
