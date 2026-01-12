/*

    // 1) if-else way
    import React from 'react'

    const ConditionalRendering = () => {
        let age = 20
        if (age >= 18) {
            return <h1>Eligible for Voting</h1>
        } else {
            return <h1>Not Eligible for Voting</h1>
        }
    }
    export default ConditionalRendering

*/

/*

    // 2) Ternary-Operator Way
    const ConditionalRendering = () => {
        let mood= "happy"

        return (
            <>
                <h1>{mood == "happy" ? "True" : "False"}</h1>
            </>
        )
    }
    export default ConditionalRendering

*/

/*
    // 3) SHORT-CIRCUIT WAY
    const ConditionalRendering = () => {
            let login = true

            return (
                <>
                    <h1>{login == true && "LoggedIn Successfully"}</h1>
                </>
            )
        }
        export default ConditionalRendering

*/