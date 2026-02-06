import React from 'react'
import Receiver from './Receiver'
import ErrorBoundary from './ErrorBoundary'

const Sender = () => {
    return (
        <>
            <ErrorBoundary>
                <Receiver money={20000}/> {/* => Receiver acts as props children for ErrorBoundary */}
            </ErrorBoundary>

            <ErrorBoundary>
                <Receiver money={40000}/> {/* => Receiver acts as props children for ErrorBoundary */}
            </ErrorBoundary>

            <ErrorBoundary>
                <Receiver money={60000}/> {/* => Receiver acts as props children for ErrorBoundary */}
            </ErrorBoundary>          
        </>
    )
}
export default Sender