'use strict'

const fp = require('fastify-plugin')
const basicAuth = require('fastify-basic-auth')

const users = {
  arya: 'stark',
  jon: 'snow'
}

module.exports = fp(async function (fastify, opts) {
  fastify.register(basicAuth, { validate, authenticate: {realm: 'westeros'} })
  fastify.decorateRequest('user', null)

  async function validate (username, password, req, reply) {
    if (users[username] !== password) {
      throw new Error('sUBveRt ExPEctAtIoNs')
    }

    req.user = {
      name: username,
      topics: username === 'arya'
        ? ['sword', 'death', 'weapon']
        : ['sword', 'night', 'know']
    }
  }
})
