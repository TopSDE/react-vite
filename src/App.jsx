// Components
    // components can be resuable
    // components used to create SPA
    // components are logical building blocks of codes

// 1) Class Based Component (CBC)
    // render is mandatory
    // this keyword => points to curr class => gives properties of curr class
    // {Component} => it itself a component

//import React, {Component} from "react"
//import Child from "./Child"
    // To make use of "react" library we have to take one variable nd then,
    // we need to use it. Since, i can take any variable name then "i can use default export"
    // cz for "default export" we can take variable name as anything right?
    // now for "default export" we should not use "{}" right?
    // So, thats why we are not using "{}" here

/*
    class App extends Component {
        render() {
            console.log(this)
            return <h1>CBC</h1>
        }
    }
    export default App
*/

// 2) Functional Based Component (CBC)
    // render is not used here, we directly return
    // Since, we are not using class here we cant use "this" keyword
    // So, to get to know what is present inside App we can use => console.dir(App)

/*
    const App = () => {
        console.dir(App)
        return <h1>FBC</h1>
    }
    export default App
*/

// -------------------------------------------------------
/* MAIN <- APP <- CHILD
    const App = () => {
        return <Child/>
    }
    export default App
*/

// -------------------------------------------------------
// RULES :
    // 1) ADJACENT
    // 2) SELF CLOSING TAG
    // 3) DATA {}
    // 4) CAMELCASE

/*
    import { Fragment } from "react"
    const App = () => {
        let firstName = "Punith"
        let lastName = "L"

        return (
        <>
            <h1>This is H1</h1>
            <h2>This is H2</h2>
            <h1>
                {firstName} {lastName}
            </h1>
            <hr/>
            <label htmlFor="uname">User : </label>
            <input id="uname" />
        </>
        )
    }
    export default App
*/

// -------------------------------------------------------

/*
// INLINE CSS
import { Fragment } from "react"
const App = () => {
    // { {} = Object } => Expression
    let btn = {
        height: "50px",
        width: "200px",
        borderRadius: "10px",
        background: "yellow"
    }

    return (
        <>
        <p style={{color:"red", textAlign:"center"}}>INLINE CSS</p>
        <button style={btn}>Color Me</button>
        </>
    )
}
export default App
*/

const App = () => {
    return (
        <>
        <h1 id="head">GLOBAL CSS</h1>
        <div className="circle"></div>
        </>
    )
}
export default App