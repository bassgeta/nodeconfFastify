'use strict'

const { test } = require('tap')
const { build } = require('../helper')

test('me test fail', async (t) => {
  const app = build(t)

  const res = await app.inject({
    url: '/me',
    headers: {
      Authorization: 'Basic badtoken21'
    }
  })
  t.equal(res.statusCode, 401);
})

test('me test success', async t => {
  t.plan(2);
  const app = build(t)
  // Basic YXJ5YTpzdGFyaw==

  const res = await app.inject({
    url: '/me',
    headers: {
      Authorization: 'Basic YXJ5YTpzdGFyaw=='
    }
  })
  t.equal(res.statusCode, 200);
  t.deepEqual(JSON.parse(res.body), {user: {name: 'arya', topics: ['sword', 'death', 'weapon']}})
})
