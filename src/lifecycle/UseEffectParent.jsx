// ------------------------------------------------------------------
// **IMP
// **SIDE EFFECT
/*

import React, { useEffect, useState } from 'react'
import UseEffectChild from './UseEffectChild'

const UseEffectParent = () => {

    const [institute, setInstitute] = useState("JSpiders")
    const [tech, setTech] = useState("Java")
    
    //?only function / no dependency_list
    //when we do "any changes" to "any part" of compo this executes 
    useEffect(() => {
        console.log("useeffect1 ---> Equal to componentDidMount & componentDidUpdate");
    })

    //?[]--> empty dependency_list
    //componentDidMount-->"executes once"
    useEffect(() => {
        console.log("useeffect2 ---> Equal to componentDidMount...");
    }, [])

    //?[value]-->dependency_list with val
    // do "any changes" only to "passed val" this executes
    useEffect(() => {
        console.log("useeffect3 ---> Equal to componentDidUpdate...");
    }, [institute])

    return (
        <>
            <h1>{institute}</h1>
            <h1>{tech}</h1>
            {institute === "JSpiders" ? <UseEffectChild/> : <> </>}
            <button onClick={() => {setInstitute("QSpiders")}}>CHANGE INSTITUTE</button> // INLINE FUNC
            <button onClick={() => {setTech("Python")}}>CANGE TECH</button> // INLINE FUNC
        </>
    )
}
export default UseEffectParent
// JS Implicit return : const varibale () => expression

*/

// ---------------------------------
// **IMP
// **LIFECYCLE -- UPDATING PHASE and UNMOUNTING PHASE
// /*

// Equal to both componentDidMount & componentDidUpdate
// target the title
import React, { useEffect, useState } from 'react'

const UseEffectParent = () => {

    const [count, setCount] = useState(0)

    // targetting the title ---> side-effect ---> useEffect
    useEffect(() => {
        document.title = `Count is ${count}`
        console.log("Title targeted ---> useEffect calling");  
    })

    return (
        <>
            <button onClick={() => {setCount(count+1)}}>INCREMENT</button>
        </>
    )
}
export default UseEffectParent

// */