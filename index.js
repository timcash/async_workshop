import fetch from 'isomorphic-fetch'

async function asyncer () {
  let b = await fetch()
  return b
}

asyncer()
