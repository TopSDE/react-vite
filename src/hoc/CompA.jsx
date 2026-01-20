// ------------------------------------------------------------------
// **IMP
// **HOC
/*

import React from 'react'
import Hoc from './Hoc'

const CompA = (props) => {
    console.log(props);

    return (
        <>
            <h1>CompA -- {props.tech} is in CompA</h1>
        </>
    )
}
export default Hoc(CompA)
*/

// ---------------------------------
// **IMP
// **HOC
// /*

import React from 'react'
import Hoc from './Hoc'

const CompA = (props) => {
    console.log(props);

    let {counter: {count, increment}} = props

    return (
        <>
            <h1>This is CompA -- {count}</h1>
            <button onClick={increment}>COMPA BUTTON</button>
        </>
    )
}
export default Hoc(CompA)

// */
