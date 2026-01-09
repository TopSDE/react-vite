// Components
    // components can be resuable
    // components used to create SPA
    // components are logical building blocks of codes

// 1) Class Based Component (CBC)
// render is mandatory
// this keyword => points to curr class => gives properties of curr class
// {Component} => it itself a component

import React, {Component} from "react"
// To make use of "react" library we use one variable => React
    // The name can be anything 

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
// import React from "react"

const App = () => {
    return <h1>FBC</h1>
}
export default App