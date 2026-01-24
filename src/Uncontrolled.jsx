// ------------------------------------------------------------------
// **IMP
// **UNCONTROLLED FORM
// /*

import React, { useRef } from 'react'

const Uncontrolled = () => {

    let nameRef = useRef()
    console.log(nameRef);
    
    let emailRef = useRef()

    // passing a parameter to a "func", that func if we pass it as a value to any event
        // in such case paramter holds => SBE (SYNTHETIC BASED EVENT) 
        // event => SBE

    let handleSubmit = (event) => {
        event.preventDefault() // STOPS THE AUTO-RELOADING OF FORM 
        console.log(event);
        
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>
                    UNCONTROLLED FORM
                </h1>
                <div>
                    <label htmlFor='uname'>USERNAME : </label>
                    <input type='text' id="uname" ref={nameRef}></input>
                </div>
                <div>
                    <label htmlFor='uemail'>UEMAIL : </label>
                    <input type='email' id="uemail" ref={emailRef}></input>
                </div>
                <div>
                    <button>SUBMIT</button>
                </div>
            </form>
        </>
    )
}
export default Uncontrolled

// default nature of form => auto reloading/auto refreshing on submitting the form
// PROBLEM => data will be vanished even before access it

// SYNTHETIC BASED EVENT => ANY EVENT WHICH IS PERFORMED ON BROWSER
    // onSubmit, onClick, onChange

// */
