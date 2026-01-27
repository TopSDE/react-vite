import React, { useEffect } from 'react'

const UseEffectChild = () => {
    useEffect(() => {
        return () => {
            console.log("...Equal to ComponentWillUnmount...");
            
        }
    }, [])

    return (
        <>
            <h1>Unmounting Child</h1>
        </>
    )
}
export default UseEffectChild