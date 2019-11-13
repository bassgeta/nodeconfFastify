'use strict'

const { hostname } = require('os')
const hyperid = require('hyperid')
const instance = hyperid()

module.exports = async function (fastify, opts) {
  fastify.route({
    method: 'GET',
    url: '/tweet/:tweetId',
    onRequest: fastify.basicAuth,
    handler: async (request, reply) => {
      const {tweetId} = request.params
      console.log("tviajti", tweetId)

      try {
        const tweet = await fastify.elastic.get({
          index: `${hostname().replace(/[^-_A-Za-z0-9]/g, '_').toLowerCase()}-tweets`,
          id: tweetId
        })

        return tweet.body._source 
      } catch (err) {
        reply.code(404)
        return { status: 'Not found' }
      }
    }
  })
}
