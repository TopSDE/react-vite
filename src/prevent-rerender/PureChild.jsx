// ------------------------------------------------------------------
// **IMP
// **PURE COMPONENT IN CBC
// /*

// pure CBC => "NO RE-RENDER"
import React, { Component, PureComponent } from 'react'

export default class PureChild extends PureComponent {
    render() {
        console.log("Pure Child is rendering");

        return (
        <>
            <h1>Pure Child -- {this.props.stu}</h1>
        </>
        )
    }
}
// */

// ---------------------------------
// **IMP
// **PURE COMPONENT IN FBC
/*

import React, { memo } from 'react'

const PureChild = (props) => {

    console.log("PureChild is rendering");

    return (
        <>
            <h1>PureChild -- {props.tech}</h1>
        </>
    )

}
export default memo(PureChild)

*/