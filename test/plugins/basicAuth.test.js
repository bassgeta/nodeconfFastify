'use strict'

const { test } = require('tap')
const { build } = require('../helper')

test('user test fail', async (t) => {
  const app = build(t)
  // Basic YXJ5YTpzdGFyaw==

  try {
    const res = await app.inject({
      url: '/user',
      headers: {
        Authorization: 'Basic badtoken21'
      }
    })
  } catch (err) {
    console.log(err);
    test.error(err);
  }
})
