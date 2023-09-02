import React, {useState} from 'react';
import cls from './Counter.module.scss'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increaseCount = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button className={cls.btn} onClick={increaseCount}>Increment</button>
        </div>
    );
};

export default Counter;
