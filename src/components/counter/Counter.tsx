import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as counter from '@store/counter/counter.action'
import { Button } from 'antd'
import { RootState } from '@src/store/rootReducer'

const Counter: React.FC = () => {
  // const dispatch = useDispatch()
  // const { num, message } = useSelector((state: RootState) => state.counter)

  // const handleIncrease = (n: number, msg: string) => {
  //   dispatch(counter.increaseCount(n, msg))
  // }

  // const handleDecrease = (n: number, msg: string) => {
  //   dispatch(counter.decreaseCount(n, msg))
  // }

  return <div></div>
}

export default Counter
