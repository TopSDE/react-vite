import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h1>Home</h1>
        </>
    )
}
export default Home

//!Shared Routing-->Along with the url Parent Route component, "content" also shared
//NOTE : Always <Outlet/> should be written inside every "parent route component"
//!PROBLEM--> Along with the content of individual webpage,
// !the content of Parent Route como is also displaying..
//? SOLUTION --> Index routing /Index Props

//!Index routing /Index Props
//? 1)Create a new component i.e Layout.jsx[Supportive compo for Home.jsx]
//? 2)Seperate the "landing page content"(<h1>HOME</h1>)
// ?and (<Outlet/> & common logic) among Home.jsx and Layout.jsx
// Way1 : If we write "landing page content"(<h1>HOME</h1>) in "Layout.jsx"
// "then write <Outlet/> & <NavBar/> in "Home.jsx"

// *****OR****

// WAY2 : If we write "landing page content"(<h1>HOME</h1>) in Home.jsx
// write (<Outlet/> & <NavBar/>) in Layout.jsx
//? 3) Make the component as a "Parent Route" which is contating "<Outlet/>",
// ? then make the remaining compo which is having the "landing page content (<h1>HOME..."
// ? as a "immediate Child route". Give "same path" for both "Parent" and "immediate..."
//!NOTE : Insted of repeating the path="/", in "immediate child route" mention "index"