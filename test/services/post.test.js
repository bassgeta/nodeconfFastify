'use strict'

const { test } = require('tap')
const { build } = require('../helper')

test('post goes through', async (t) => {
  const app = build(t)

  const res = await app.inject({
    method: 'POST',
    url: '/tweet',
    headers: {
      Authorization: 'Basic YXJ5YTpzdGFyaw=='
    },
    body: {
      text: "testonja3000"
    }
  })
  t.equal(res.statusCode, 201)
})

