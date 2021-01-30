import { useState } from 'react';

export const useCounter = (initState) => {
    const [counter, setCounter] = useState(initState = 10);

    const reset = () => {
        setCounter(initState);
    }

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }

}