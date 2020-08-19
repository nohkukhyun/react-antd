import * as count from './counter.action'

interface CountState {
  id: number
  num: number
  message: string
}

const initialState: CountState = {
  id: 0,
  num: 0,
  message: '',
}

type CounterActions =
  | ReturnType<typeof count.increaseCount>
  | ReturnType<typeof count.decreaseCount>

let id = 0

function counter(state = initialState, action: CounterActions) {
  switch (action.type) {
    case count.INCREASE_COUNT: {
      return {
        ...state,
        id: id++,
        num: action.payload.num + 1,
        message: action.payload.message,
      }
    }

    case count.DECREAST_COUNT: {
      return {
        ...state,
        id: id++,
        num: action.payload.num - 1,
        message: action.payload.message,
      }
    }

    default:
      return state
  }
}

export default counter
