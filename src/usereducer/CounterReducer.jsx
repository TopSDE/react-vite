import React, { useReducer } from 'react'

// reducer => a func
// initialVal => value 
// BOTH ARE WRITTEN ABOVE component variable

const initialVal = 0

const reducer = (state, action) => {
    // within reducer func state stores initial value
    console.log("Initial value is", state);
    console.log("Current action is", action);
    
    switch (action) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "reset":
            return 0
    }

}

const CounterReducer = () => {
    // const [state, dispatch] = useResucer(reducer, initialVal)
    const [state, dispatch] = useReducer(reducer, initialVal)


    return (
        <>
            <h1>{state}</h1>
            {/* we can anything inside dispatch func */}
            {/* but based on action take the same name inside dispatch func */}
            <button onClick={() => {dispatch("increment")}}>INCREMENT</button>
            <button onClick={() => {dispatch("decrement")}}>DECREMENT</button>
            <button onClick={() => {dispatch("reset")}}>RESET</button>
        </>
    )
}
export default CounterReducer

// HOOKS AND THEIR FUNC
// useState => state property
// useEffect => handle side-effect
// useContext => handle context

// useReducer => to reduce complexity of state management
    // const [state, dispatch] = useResucer(reducer, initialVal)
    // dispatch ---> ACTION(+,-,reset) ---> reducer --> based on result --> reducer gives result

// **IMP
// IF LOGIC IS SIMPLE then we go for useState
// ELSE we go for useReducer