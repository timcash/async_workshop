export const tokenDB = {
  'token1': {handle: 'timbretone'},
  'token2': {handle: 'carlmemaybe'},
  'token3': {handle: 'meghanbacon'},
  'token4': {handle: 'frankiestein'}
}

export const userDB = {
  'timbretone': {name: 'tim', color: 'red', sides: 6},
  'carlmemaybe': {name: 'carl', color: 'blue', sides: 8},
  'meghanbacon': {name: 'meg', color: 'green', sides: 5},
  'frankiestein': {name: 'frankie', color: 'grey', sides: 9}
}

export function getUserHandle (token, cb) {
  setTimeout(() => {
    if (tokenDB[token]) {
      console.log('getUserHandle', token)
      cb(null, tokenDB[token])
    } else {
      cb('token not in the database', undefined)
    }
  }, 100)
}

export function getUserData (handle, cb) {
  setTimeout(() => {
    if (userDB[handle]) {
      console.log('getUserData', handle)
      cb(null, userDB[handle])
    } else {
      cb('handle not in the database', undefined)
    }
  }, 100)
}
