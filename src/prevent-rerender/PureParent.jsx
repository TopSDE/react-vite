// ------------------------------------------------------------------
// **IMP
// **PURE COMPONENT IN CBC
// /*

// normal / ordinary CBC => "RE-RENDER HAPPENS"
import React, { Component } from 'react'
import NormalChild from './NormalChild'
import PureChild from './PureChild'

export default class PureParent extends Component {

    constructor() {
        super()
        this.state = {
            student : "Sharmila"
        }
    }

    ChangeStu = () => {
        this.setState({ student : "Soorya"})
    }

    render() {
        console.log("PureParent is rendering");
        
        return (
            <>
                <h1>PureParent -- {this.state.student}</h1>
                    <NormalChild stu={this.state.student} />
                        <PureChild stu={this.state.student} />
                <button onClick={this.ChangeStu}>CHANGE</button>
            </>
        )
    }
}
// */

// ---------------------------------
// **IMP
// **PURE COMPONENT IN FBC
/*

import React, { useState } from 'react'
import NormalChild from './NormalChild';
import PureChild from './PureChild';

const PureParent = () => {

    const [tech, setTech] = useState({
        tname: "webtech"
    })

    console.log("PureParent is rendering");
    
    return (
        <>
            <h1>PureParent -- {tech.tname}</h1>
                <NormalChild tech={tech.tname} />
                <PureChild tech={tech.tname} />
            <button onClick={ ()  => {
                setTech({ tname: "ReactJS" })
            }}>CHANGE</button>
        </>
    )
}
export default PureParent

*/