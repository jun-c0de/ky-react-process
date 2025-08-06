import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const increamentCount=()=>{
        setCount(count+1)
    }
    const minCount=()=>{
        setCount(count-1)
    }
    const resetCount=()=>{
        setCount(0)
    }

    return (
        <div>
            <h1>
            현재 Count : {count}
            </h1>
            <button onClick={minCount}>-</button>
            <button onClick={resetCount}>reset</button>
            <button onClick={increamentCount}>+</button>
        </div>
    )
}

export default Counter