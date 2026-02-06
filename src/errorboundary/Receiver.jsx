import React from 'react'

const Receiver = (props) => {
    console.log(props);
    let {money} = props

    if (money > 30000) {
        throw new Error("Limit Exceeded !!")
        // the above error is displayed in console
    }

    return (
        <>
            <h1>Transaction of Rs.{money}/-</h1>
        </>
    )
}
export default Receiver