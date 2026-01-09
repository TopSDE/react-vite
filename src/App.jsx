// Components
    // components can be resuable
    // components used to create SPA
    // components are logical building blocks of codes

// 1) Class Based Component (CBC)
    // render is mandatory
    // this keyword => points to curr class => gives properties of curr class
    // {Component} => it itself a component

import React, {Component} from "react"
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

const App = () => {
    console.dir(App)
    return <h1>FBC</h1>
}
export default App