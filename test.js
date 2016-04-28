import test from 'ava'
import * as wshop from './lib/index'
import * as api from './lib/api'

test('hello world', t => t.pass())

test.cb.skip('callbacker', t => {
  let token = 'token1'
  let expected = api.userDB['timbretone']
  let cb = (err, res) => {
    if (err) throw new Error(err)
    t.deepEqual(res, expected)
    t.end()
  }
  wshop.callbacker(token, cb)
})

test.cb.skip('callbacker error', t => {
  let token = 'token5'
  let expected = 'handle not in the database'
  let cb = (err, res) => {
    t.deepEqual(err, expected)
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

test.skip('promiser error', t => {
  let token = 'token5'
  let expected = 'handle not in the database'
  return wshop.promiser(token)
  .then(res => t.deepEqual(res, expected))
})

test.skip('yielder', function * (t) {
  let token = 'token3'
  let expected = api.userDB['meghanbacon']
  let res = yield wshop.yielder(token)
  t.deepEqual(res, expected)
})

test.skip('asyncer', async t => {
  let token = 'token4'
  let expected = api.userDB['frankiestein']
  let res = await wshop.asyncer(token)
  t.deepEqual(res, expected)
})

test.skip('asyncer error', async t => {
  let token = 'token5'
  let expected = 'handle not in the database'
  let res = await wshop.asyncer(token)
  t.deepEqual(res, expected)
})

test.cb.skip('callbackerSum', t => {
  let tokens = ['token1','token2','token3','token4']
  let expected = 6 + 8 + 5 + 9
  let cb = (err, res) => {
    if (err) throw new Error(err)
    t.deepEqual(res, expected)
    t.end()
  }
  wshop.callbackerSum(tokens, cb)
})

test.skip('promiserSum', t => {
  let tokens = ['token1','token2','token3','token4']
  let expected = 6 + 8 + 5 + 9
  return wshop.promiserSum(tokens)
  .then(res => t.deepEqual(res, expected))
})

test.skip('asyncerSum', async t => {
  let tokens = ['token1','token2','token3','token4']
  let expected = 6 + 8 + 5 + 9
  let res = await wshop.asyncerSum(tokens)
  t.deepEqual(res, expected)
})
