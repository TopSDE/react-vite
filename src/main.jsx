// "main.jsx" acts as javascript file
// ".jsx" => JS+XML => JavaScript XML => (extended/improved version of js)
// so we can write "HTML like Code" in the JS itself
// code is easier, syntax is simple, "faster" than normal JS


// entry file => under "src" folder "main.jsx" executes first
// import 2 Main Library of React => 1)react 2)react-dom
// Syntax: import variable from "library"


import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./global.css"

    // "/client" => It states that we r working on client side/front-end 
        // and not on server side/backend

    // React Library => To manage and maintain components and to handle events
    // ReactDOM Library => To show content in Browser/UI and also it attaches
    // content to container

// ReactDOM.createRoot(document.getElementById("root")).render(<h1>JSX</h1>)

    // ReactDOM.createRoot(container).render(content)
    // container => targeting root element
    // content => string, number, jsx, component

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)