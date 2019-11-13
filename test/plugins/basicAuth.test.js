'use strict'

const { test } = require('tap')
const Fastify = require('fastify')
const BasicAuth = require('../../plugins/basicAuth')

test('basicAuth works standalone', async (t) => {
  const fastify = Fastify()
  fastify.register(BasicAuth)

  await fastify.ready()
})
