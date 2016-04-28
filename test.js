import test from 'ava'
import * as wshop from './lib/index'
import * as api from './lib/api'

test('hello world', t => t.pass())

test.skip.cb('callbacker', t => {
  let token = 'token1'
  let expected = api.userDB['timbretone']
  let cb = (err, res) => {
    if (err) throw new Error(err)
    t.deepEqual(res, expected)
    t.end()
  }
  wshop.callbacker(token, cb)
})

test.skip('promiser', t => {
  let token = 'token2'
  let expected = api.userDB['carlmemaybe']
  return wshop.promiser(token)
  .then(res => t.deepEqual(res, expected))
})

test.skip('bar', function * (t) {
  let token = 'token3'
  let expected = api.userDB['meghanbacon']
  let res = yield wshop.yielder(token)
  t.deepEqual(res, expected)
})

test.skip('bilbo', async t => {
  let token = 'token4'
  let expected = api.userDB['frankiestein']
  let res = await wshop.asyncer(token)
  t.deepEqual(res, expected)
})
