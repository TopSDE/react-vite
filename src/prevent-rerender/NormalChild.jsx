// ------------------------------------------------------------------
// **IMP
// **PURE COMPONENT IN CBC
/*

// normal / ordinary CBC => "RE-RENDER HAPPENS"
import React, { Component } from 'react'

export default class NormalChild extends Component {
    render() {
        console.log("Normal Child is rendering");

        return (
        <>
            <h1>Normal Child -- {this.props.stu}</h1>
        </>
        )
    }
}
*/

// ---------------------------------
// **IMP
// **PURE COMPONENT IN FBC
// /*

import React from 'react'

const NormalChild = (props) => {

    console.log("NormalChild is rendering");

    return (
        <>
            <h1>NormalChild -- {props.tech}</h1>
        </>
    )
}
export default NormalChild

// */