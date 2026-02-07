// ------------------------------------------------------------------
// **IMP
// **ROUTERS CONCEPT
// **Component-based routing
/*

import React from 'react'
import Navbar from './Navbar'

const Menu = () => {
    return (
        <>
            // <Navbar/>
            <h1>Menu</h1>
        </>
    )
}
export default Menu
*/

// ---------------------------------
// **IMP
// **
// **Object-based routing

// /*

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Menu = () => {

    const navigate = useNavigate()

    return (
        <>
            <h1>Menu</h1>
            <button onClick={() => {navigate("/")}}>GO-TO-HOME</button>
            <button onClick={() => {navigate("/setting")}}>GO-TO-SETTING</button>
            <button onClick={() => {navigate(-1)}}>GO-BACK</button>
        </>
    )
}
export default Menu

// useNavigate() --> hook --> navigate between webpages
// useNavigate() returns "func" --> "func" either it takes "path" or "delta" as value
// const func = useNavigate()

// */