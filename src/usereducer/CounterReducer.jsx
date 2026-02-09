// ------------------------------------------------------------------
// **IMP
// **USE-REDUCER CONCEPT
/*
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
            <button onClick={() => {dispatch("increment")}}>INCREMENT</button>
            <button onClick={() => {dispatch("decrement")}}>DECREMENT</button>
            <button onClick={() => {dispatch("reset")}}>RESET</button>
        </>
    )
}
export default CounterReducer
*/

// /*
import React, { useReducer } from 'react'

const initialVal = { count : 0 }

const reducer = (state, action) => {
    console.log("Curr state is", state);
    console.log("action", action);
    console.log("Type of action is", action.type, "How much val", action.value);

    switch (action.type) {
        case "increment":
            return { count : state.count + action.value }
                
        case "decrement":
            return { count : state.count - action.value }

        case "reset":
            return { count : action.value }
    }

}

const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialVal)
    
    return (
        <>
            <h1>{state.count}</h1>
            <button onClick={() => {dispatch({type:"increment", value:1})}}>INCREMENT VAL BY 1</button>
            {/* Here action hold {() => {dispatch("")}} this entire object */}
            {/* action = {type: action_type, value: data} */}
            <button onClick={() => {dispatch({type:"increment", value:5})}}>INCREMENT VAL BY 5</button>
            <button onClick={() => {dispatch({type:"decrement", value:1})}}>DECREMENT VAL BY 1</button>
            <button onClick={() => {dispatch({type:"decrement", value:5})}}>DECREMENT VAL BY 5</button>
            <button onClick={() => {dispatch({type:"reset", value:0})}}>RESET</button>
        </>
    )
}
export default CounterReducer
// */


// ADD THE BELOW POINTS UNDER LINE NO. 37
    // we can anything inside dispatch func
    // but based on action take the same name inside dispatch func

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