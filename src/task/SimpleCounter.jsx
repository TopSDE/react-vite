// ---------------------------------
// **IMP
// HOOKS => COUNTER
// /*

import React, { useState } from 'react'

const SimpleCounter = () => {

    let [counter, setCounter] = useState(0)

    // let func = (str) => {
    //     if (str == "inc") {
    //         setCounter(counter + 1)
    //     }

    //     else if (str == "dec" && counter > 0) {
    //         setCounter(counter - 1)
    //     }

    //     else {
    //         setCounter(0)
    //     }
    // }

    let increment = () => {
        setCounter(counter + 1)
    }

    let decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    let reset = () => {
        setCounter(0)
    }

    return (
        <>
            {counter}
            <br/>
            <button onClick={increment}>INCREMENT</button>
            <button onClick={decrement}>DECREMENT</button>
            <button onClick={reset}>RESET</button>
        </>
    )
}

export default SimpleCounter

// */