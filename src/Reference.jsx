// ---------------------------------------------------------------------------
// **IMP
// **REFERENCE
// /*

import React, { useRef } from 'react'

const Reference = () => {

    // Step 1: Create a Reference-Variable
    const inputRef = useRef() // object
    console.log(inputRef);
    

    let handleInput = () => {
        inputRef.current.placeholder = "Enter your name..."
        inputRef.current.style.background = "yellow"
        inputRef.current.style.padding = "10px"
        inputRef.current.focus()
    }
    
    // Step 2: Connect "reference-variable" and "particular element" => (Targeting the particular element)
    return (
        <>
            <input type='text' ref={inputRef}></input>
            <button onClick={handleInput}>CHANGE</button>
        </>
    )
}
export default Reference

// */