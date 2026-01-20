// ------------------------------------------------------------------
// **IMP
// **HOC
/*

import React from 'react'

const Hoc = (Wrapper) => {
    
    const NewComponent = () => {
        return <Wrapper tech="ReactJS"
        />
    }

    return NewComponent
}
export default Hoc
*/

// ---------------------------------
// **IMP
// **HOC
// /*

import React, { useState } from 'react'

const Hoc = (Wrapper) => {

    const NewComponent = () => {
        let [count, setCount] = useState(0)

        let increment = () => {
            setCount(count + 1)
        }

        return <Wrapper counter={{count, increment}}
        />
    
    }

    return NewComponent

}
export default Hoc


// */