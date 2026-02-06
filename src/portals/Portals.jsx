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