// ===============================================
//
//                    SETUP
//
// ===============================================
// import R from 'ramda'
import Rx from 'rxjs/Rx'
import pfy from 'es6-promisify'
import * as api from './api'

// dont use these yet
let userHandleP = pfy(api.getUserHandle)
let userDataP = pfy(api.getUserData)
const OfromP = Rx.Observable.fromPromise
const Ofrom  = Rx.Observable.from

// ===============================================
//
//            YOUR ASYNC FUNCTIONS
//
// ===============================================

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

// ===============================================
//
//             CRITICAL THINKING TIME
//
// ===============================================

function * call () {
  console.log('yielding')
  let data1 = yield yielder('token1')
  console.log('data1', data1)
}

//call()

// ===============================================
//
//                THE FUTURE !!!
//
// ===============================================

export function observerer(tokens) {
  let token$        = Ofrom(tokens)
  let handleObject$ = token$.flatMap(n => OfromP(userHandleP(n)))
  let handle$       = handleObject$.map(n => n.handle)
  let userObject$   = handle$.flatMap(n => OfromP(userDataP(n)))
  return userObject$
}

export function doTheFuture(tokens) {
  let d$    = observerer(tokens)
  let side$ = d$.map(n => n.sides)
  let sum$  = side$.scan((acc, x) => acc + x, 0)
  return sum$
}

// doTheFuture(['token1','token2','token3','token4'])
// .subscribe(console.log)
