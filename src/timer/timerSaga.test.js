import {delay} from 'redux-saga'
import {put, call, select} from 'redux-saga/effects'
import {
  incrementAsyncLoop,
  incrementAsync,
} from './timerSaga'
import {INCREMENT_TIMER} from './timerTypes'
import {getMinutes, getSeconds} from './timerSelector'

describe('Timer Saga', () => {
  it('incrementAsyncLoop success', () => {
    const gen = incrementAsyncLoop()

    expect(gen.next()).toEqual({done: false, value: select(getMinutes)})
    expect(gen.next(10)).toEqual({done: false, value: select(getSeconds)})
    expect(gen.next('00')).toEqual({done: true, value: true})
  })

  it('incrementAsyncLoop fail', () => {
    const gen = incrementAsyncLoop()

    expect(gen.next()).toEqual({done: false, value: select(getMinutes)})
    expect(gen.next('00')).toEqual({done: false, value: select(getSeconds)})
    expect(gen.next('00')).toEqual({done: true, value: false})
  })

  it('incrementAsync middle', () => {
    const gen = incrementAsync()

    expect(gen.next(true)).toEqual({done: false, value: call(incrementAsyncLoop)})
    expect(gen.next(true)).toEqual({done: false, value: put({type: INCREMENT_TIMER})})
    expect(gen.next(true)).toEqual({done: false, value: call(delay, 1000)})
  })
})