import test from 'ava';

test('foo', t => {
    t.pass();
});

test('bar', async t => {
    const bar = Promise.resolve('bar');

    t.is(await bar, 'bar');
});

test('bilbo', t  => {
    t.pass();
})

test('bilbo', t  => {
    let a = 1
    t.is(a, 1)
    t.pass()
})
