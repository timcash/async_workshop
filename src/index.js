// import R from 'ramda'
// import Rx from 'rxjs/Rx'
import pfy from 'es6-promisify'
import * as api from './api'

let getUser = pfy(api.getUserHandle)
let getData = pfy(api.getUserData)

export function callbacker (token, cb) {

}

export function promiser (token) {

}

export function * yielder (token) {
  let u = yield getUser(token)
  let d = yield getData(u.handle)
  return d
}

export async function asyncer (token) {
  let u = await getUser(token)
  let d = await getData(u.handle)
  return d
}

// export function observer (token, done) {
//   let s$ = Rx.Observable.of(1, 2, 3).map(x => x + '!!!')
//   s$.subscribe(console.log, () => {}, () => {
//     done()
//   })
// }
//
// function * call () {
//   console.log('yielding')
//   let data1 = yield yielder('token1')
//   console.log('data1', data1)
// }

//call()
