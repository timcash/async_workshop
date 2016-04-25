// import R from 'ramda'
import * as api from './api'

export function callbacker (token, cb) {
  api.getUserHandle(token, (err, data) => {
    if (err) throw new Error(err)
    api.getUserData(data.handle, (err, data) => {
      if (err) throw new Error(err)
      cb(null, data)
    })
  })
}

export function promiser (token) {
  return api.getUserHandleP(token)
  .then(result => api.getUserDataP(result.handle))
}

export function * yielder (token) {
  let r1 = yield api.getUserHandleP(token)
  let r2 = yield api.getUserDataP(r1.handle)
  return r2
}

export async function asyncer (token) {
  let r1 = await api.getUserHandleP(token)
  let r2 = await api.getUserDataP(r1.handle)
  return r2
}
