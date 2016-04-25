import test from 'ava'
import * as wshop from './lib/index'
import * as api from './lib/api'

test.cb('callbacker', t => {
  let token = 'token1'
  let expected = api.userDB['timbretone']
  let cb = (err, res) => {
    if (err) throw new Error(err)
    t.deepEqual(res, expected)
  }

  wshop.callbacker(token, cb)
})

// test('callbacker', async t => {
//   let r = await wshop.asyncer()
//   t.deepEqual(r, [0, 1, 2, 3, 4])
// })
//
// test('bar', async t => {
//   const bar = Promise.resolve('bar')
//   t.is(await bar, 'bar')
// })
//
// test('bilbo', t => {
//   let a = 3
//   t.is(a, 3)
//   t.pass()
// })
