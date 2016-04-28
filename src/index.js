// import R from 'ramda'
// import Rx from 'rxjs/Rx'
// import pfy from 'es6-promisify'
import * as api from './api'

export function callbacker (token, cb) {

}

export function promiser (token) {

}

export function * yielder (token) {

}

export async function asyncer (token) {

}

export function callbackerSum (tokens, cb) {

}

export function promiserSum (tokens) {

}

export async function asyncerSum (tokens) {

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
