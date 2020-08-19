export const INCREASE_COUNT = 'INCREASE_COUNT'
export const DECREAST_COUNT = 'DECREAST_COUNT'

export const increaseCount = (num: number, message: string) => ({
  type: INCREASE_COUNT,
  payload: {
    num: num,
    message: message,
  },
})

export const decreaseCount = (num: number, message: string) => ({
  type: DECREAST_COUNT,
  payload: {
    num: num,
    message: message,
  },
})
