import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    // if i want to declare state in CBC then i want to do it inside constructor
    constructor() {
        super()
        this.state = {
            haserror : false // false indicates initially there is no error
            // we can take any key but
            // since we are talking about error boundary so we take key name as "haserror"
        }
    }

    // captures "JS ERRORS"
    // Based on Situation it returns updated state in the form of "obj"
    static getDerivedStateFromError() {
        return {
            haserror: true // here true indicates there is an ERROR
        }
    }


    render() {
        console.log(this);
        if (this.state.haserror === true) {
            return <h1>Limit Exceeded!! Kindly Check</h1>
        } else {
            return this.props.children // return Receiver
            // Whatever activities happening in Receiver right
            // those things we can access in props key
        }


    }
}
