import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import { type ReactElement } from 'react'
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue'

export interface CounterProps {
    className?: string
}

export const Counter = (): ReactElement => {
    const dispatch = useDispatch()
    const value = useSelector(getCounterValue)

    const increment = (): void => {
        dispatch(counterActions.incremented())
    }

    const decrement = (): void => {
        dispatch(counterActions.decremented())
    }
    return (
        <div >
            <h1>{value}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}
