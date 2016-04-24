import test from 'ava'
import cb2 from './index'

test('foo', t => {
  t.pass()
})

test('bar', async t => {
  const bar = Promise.resolve('bar')
  t.is(await bar, 'bar')
})

test('bilbo', t => {
  t.pass()
})

test('bilbo', t => {
  let a = 3
  t.is(a, 3)
  t.pass()
})
