// ------------------------------------------------------------------
// **IMP
// **PORTALS
/*
import React from 'react'
import { createPortal } from 'react-dom'

const Portals = () => {
    return createPortal(<h1>I am Portal</h1>, document.getElementById("portal")) 
    // createPortal() method present in react-dom library
    // createPortal(content, container)
    // content => String, number, JSX, Component
    // Container => targetting newly created element
}
export default Portals
*/

// ---------------------------------
// **IMP
// **PORTALS TASK
// /*
import React from 'react'
import { createPortal } from 'react-dom'

const Portals = () => {
    const PopUp = () => {
        return (
            <>
                <section>
                    <aside>
                        <h1>Welcome to SIGN-UP Page</h1>
                    </aside>
                    <aside>
                        <div><input type='email' placeholder='Enter your email'/></div>
                        <div><input type='password' placeholder='Enter your password'/></div>
                    </aside>
                    <aside><button>SUBMIT</button></aside>
                </section>
            </>
        )
    }

    return createPortal(<PopUp/>, document.getElementById("portal"))

}
export default Portals

// */