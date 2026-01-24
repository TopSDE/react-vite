// ------------------------------------------------------------------
// **IMP
// **LIFECYCLE -- MOUNTING PHASE
/*

import React, { Component } from 'react'

export default class LifeCycleParent extends Component {
    constructor() {
        super()
        this.state = {
            student: "Punith"
        }
        console.log("Constructor is calling...");
        
    }

    static getDerivedStateFromProps() {
        console.log("Static getDerivedStateFromProps is calling...");
        return null
    }

    componentDidMount() {
        console.log("componentDidMount is calling...");     
    }

    render() {
        // console.log(this);
        console.log("render is executing...");
        
        return (
            <>
                <h1>{this.state.student}</h1>
            </>
        )
    }
}
*/

// ---------------------------------
// **IMP
// **LIFECYCLE -- UPDATING PHASE and UNMOUNTING PHASE
// /*

import React, { Component } from 'react'
import LifeCycleChild from './LifeCycleChild';

export default class LifeCycleParent extends Component {
    constructor() {
        super()
        this.state = {
            student: "Punith"
        }
        console.log("Constructor is calling...");
        
    }

    static getDerivedStateFromProps() {
        // console.log("------------------------");
        
        console.log("Static getDerivedStateFromProps is calling...");
        return null
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate is executing....");
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate is executing");
        return null
    }

    componentDidMount() {
        console.log("componentDidMount is calling...");     
    }

    componentDidUpdate() {
        console.log("componentDidUpdate is calling...");
    }

    changeState = () => {
        this.setState({student : "XYZ"})
    }

    render() {
        // console.log(this); current CBC
        console.log("render is executing...");
        
        return (
            <>
                <h1>{this.state.student}</h1>
                {this.state.student === "Punith" ? <LifeCycleChild/> : <></>}
                <button onClick={this.changeState}>CHANGE</button>
            </>
        )
    }
}
// CBC has builtin property => 1)state  2)setState

// */