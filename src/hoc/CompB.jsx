// ------------------------------------------------------------------
// **IMP
// **HOC
/*

import React from 'react'
import Hoc from './Hoc'

const CompB = (props) => {
    console.log(props);

    return (
        <>
            <h1>CompB -- {props.tech} is in CompB</h1>
        </>
    )
}
export default Hoc(CompB)
*/

// ---------------------------------
// **IMP
// **HOC
// /*

import React from 'react'
import Hoc from './Hoc'

const CompB = (props) => {
    console.log(props);
    
    let {counter: {count, increment}} = props

    return (
        <>
            <h1>This is CompB -- {count}</h1>
            <button onMouseMove={increment}>COMPB BUTTON</button>
        </>
    )
}
export default Hoc(CompB)

// */